// script.js
const timeline = document.getElementById('timeline');

data.forEach(entry => {
  const item = document.createElement('div');
  item.className = 'timeline-item';

  // Create title
  const title = document.createElement('h2');
  title.textContent = entry.title;

  // Create link
  const link = document.createElement('a');
  link.href = entry.link;
  link.target = "_blank";

  // Create image
  const img = document.createElement('img');
  img.src = entry.thumbnail;
  img.alt = `Thumbnail of ${entry.title}`;

  // Fallback if image fails to load
  img.onerror = () => {
    img.src = "https://via.placeholder.com/200x280?text=Image+Not+Found";
    img.alt = `No thumbnail available for ${entry.title}`;
  };

  // Assemble
  link.appendChild(img);
  item.appendChild(title);
  item.appendChild(link);
  timeline.appendChild(item);
});
