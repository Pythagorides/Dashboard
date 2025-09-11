const data = [
  {
    "id": "event1",
    "title": "Dialogue with the Deans",
    "date": "2021-03-15",
    "domain": "Academic",
    "description": "Initial philosophical resistance documented through correspondence with university leadership.",
    "link": "https://drive.google.com/uc?export=download&id=1UblTY-HLhaF3H37z6tNMLekvdmFYfdXT",
    "thumbnail": "pdfs/thumbnails/dialogue-with-the-deans.jpg"
  },
  {
    "id": "event2",
    "title": "Law Enforcement Conversations",
    "date": "2021-06-10",
    "domain": "Federal",
    "description": "Forensic documentation of federal engagement and procedural irregularities.",
    "link": "https://drive.google.com/uc?export=download&id=1UblTY-HLhaF3H37z6tNMLekvdmFYfdXT",
    "thumbnail": "pdfs/thumbnails/law-enforcement-conversations.jpg"
  },
  {
    "id": "event3",
    "title": "Supreme Court Conversations",
    "date": "2022-01-05",
    "domain": "Judicial",
    "description": "Petitions and philosophical testimony submitted to the U.S. Supreme Court.",
    "link": "https://drive.google.com/uc?export=download&id=1FMQnUd5nG86Ybm3gL1zdB7fkjO12isHr
",
    "thumbnail": "pdfs/thumbnails/supreme-court-conversations.jpg"
  }
];

const timeline = document.getElementById('timeline');

data.forEach(entry => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <h2>${entry.title}</h2>
    <a href="${entry.link}" target="_blank">
      <img src="${entry.thumbnail}" alt="Thumbnail of ${entry.title}" style="width:150px; border:1px solid #ccc; margin-top:8px;" />
    </a>
  `;
  timeline.appendChild(item);
});
