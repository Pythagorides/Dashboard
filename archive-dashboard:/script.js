// Load the data.json file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const timeline = document.getElementById('timeline');

    data.forEach(entry => {
      // Create a container for each event
      const item = document.createElement('div');
      item.className = 'timeline-item';

      // Build the HTML content
      item.innerHTML = `
        <h2>${entry.title}</h2>
        <p><strong>Date:</strong> ${entry.date}</p>
        <p><strong>Domain:</strong> ${entry.domain}</p>
        <p>${entry.description}</p>
        <a href="${entry.link}" target="_blank">View Document</a>
      `;

      // Add it to the timeline
      timeline.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error loading data:', error);
    document.getElementById('timeline').innerText = 'Failed to load archive data.';
  });
