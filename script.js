const data = [
  {
    id: "event1",
    title: "Dialogue with the Deans",
    link: "https://drive.google.com/uc?export=download&id=1UblTY-HLhaF3H37z6tNMLekvdmFYfdXT",
    thumbnail: "pdfs/thumbnails/dialogue-with-the-deans.jpg"
  },
  {
    id: "event2",
    title: "Law Enforcement Conversations",
    link: "https://drive.google.com/uc?export=download&id=19Wsl3xnyvJfR3iiDayRbtYtBhKhvJcZc",
    thumbnail: "pdfs/thumbnails/law-enforcement-conversations.jpg"
  },
  {
    id: "event3",
    title: "Supreme Court Conversations",
    link: "https://drive.google.com/uc?export=download&id=1FMQnUd5nG86Ybm3gL1zdB7fkjO12isHr",
    thumbnail: "pdfs/thumbnails/supreme-court-conversations.jpg"
  }
];

const timeline = document.getElementById('timeline');

data.forEach(entry => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <h2>${entry.title}</h2>
    <a href="${entry.link}" target="_blank">
      <img src="${entry.thumbnail}" alt="Thumbnail of ${entry.title}" style="width:150px; border:1px solid #ccc; margin-top:8px; display:block; margin-left:auto; margin-right:auto;" />
    </a>
  `;
  timeline.appendChild(item);
});
