// Render static entries from forensic-entries.js
document.addEventListener("DOMContentLoaded", () => {
  renderEntries(entries);
  loadUPMCDashboards(); // Load dynamic dashboards
});

// Global store for fetched UPMC files
let upmcFiles = [];

// Extract date from filename (e.g. "2025-11-07 UPMC Medical Records Dashboard")
function extractDateFromFilename(filename) {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1].trim() : null;
}

// Load UPMC dashboards dynamically from Drive folder
function loadUPMCDashboards() {
  const folderId = "1eYE1E0g7SfsZKJi6y902khyxoCNzkLWT";
  const apiKey = "AIzaSyDVBIgaqUzJu4Z8DjZhEK2eKMWzTIWw0fY";
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,createdTime,thumbnailLink,webViewLink)&key=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      upmcFiles = data.files
        .map(file => {
          const parsedDate = extractDateFromFilename(file.name);
          return parsedDate ? { ...file, parsedDate } : null;
        })
        .filter(Boolean)
        .sort((a, b) => a.parsedDate.localeCompare(b.parsedDate)); // Oldest to newest

      renderDefaultPreview(upmcFiles); // Show latest dashboard on page load
      attachDateSliderListener();      // Enable date-based filtering
    })
    .catch(err => {
      console.error("Failed to load UPMC dashboards:", err);
    });
}

// Render the most recent dashboard preview on page load
function renderDefaultPreview(files) {
  const preview = document.getElementById("dashboard-preview");
  if (!preview || files.length === 0) return;

  const latest = files[files.length - 1]; // Most recent dashboard

  preview.innerHTML = `
    <h3>${latest.name}</h3>
    <a href="${latest.webViewLink}" target="_blank">
      <img src="${latest.thumbnailLink}" alt="${latest.name}" />
    </a>
    <p>Latest dashboard from ${latest.parsedDate}</p>
  `;
}

// Listen for slider input and update preview accordingly
function attachDateSliderListener() {
  const dateInput = document.getElementById("dashboard-date");
  const preview = document.getElementById("dashboard-preview");

  if (!dateInput || !preview) return;

  dateInput.addEventListener("change", (e) => {
    const selectedDate = e.target.value.trim();

    const match = upmcFiles
      .filter(file => file.parsedDate <= selectedDate)
      .sort((a, b) => b.parsedDate.localeCompare(a.parsedDate))[0]; // Most recent before selected

    if (match) {
      preview.innerHTML = `
        <h3>${match.name}</h3>
        <a href="${match.webViewLink}" target="_blank">
          <img src="${match.thumbnailLink}" alt="${match.name}" />
        </a>
        <p>Dashboard from ${match.parsedDate}</p>
      `;
    } else {
      preview.innerHTML = `<p>No dashboard available for that date.</p>`;
    }
  });
}
