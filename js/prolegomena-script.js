const timeline = document.getElementById('timeline');

entries.forEach(entry => {
  const item = document.createElement('div');
  item.className = 'timeline-item';

  const title = document.createElement('h2');
  title.textContent = entry.title;

  const link = document.createElement('a');
  link.href = entry.link;
  link.target = "_blank";

  const img = document.createElement('img');
  img.src = entry.thumbnail;
  img.alt = `Thumbnail of ${entry.title}`;

  img.onerror = () => {
    img.src = "https://via.placeholder.com/200x280?text=Image+Not+Found";
    img.alt = `No thumbnail available for ${entry.title}`;
  };

  link.appendChild(img);
  item.appendChild(title);
  item.appendChild(link);
  timeline.appendChild(item);
});
