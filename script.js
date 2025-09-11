// script.js
const timeline = document.getElementById('timeline');

data.forEach(entry => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <h2>${entry.title}</h2>
    <a href="${entry.link}" target="_blank">
      <img src="${entry.thumbnail}" alt="Thumbnail of ${entry.title}" />
    </a>
  `;
  timeline.appendChild(item);
});
