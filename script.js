const data = [
  {
    "id": "event1",
    "title": "Dialogue with the Deans",
    "date": "2021-03-15",
    "domain": "Academic",
    "description": "Initial philosophical resistance documented through correspondence with university leadership.",
    "link": "pdfs/dialogue-with-deans.pdf",
    "thumbnail": "pdfs/thumbnails/dialogue-with-deans.jpg"
  },
  {
    "id": "event2",
    "title": "Law Enforcement Conversations",
    "date": "2021-06-10",
    "domain": "Federal",
    "description": "Forensic documentation of federal engagement and procedural irregularities.",
    "link": "pdfs/law-enforcement-conversations.pdf",
     "thumbnail": "pdfs/law-enforcement-conversations.pdf"
  },
  {
    "id": "event3",
    "title": "Supreme Court Conversations",
    "date": "2022-01-05",
    "domain": "Judicial",
    "description": "Petitions and philosophical testimony submitted to the U.S. Supreme Court.",
    "link": "pdfs/supreme-court-conversations.pdf",
    "thumbnail": "pdfs/supreme-court-conversations.pdf"
  }
];

const timeline = document.getElementById('timeline');

data.forEach(entry => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
  <h2>${entry.title}</h2>
  <p><strong>Date:</strong> ${entry.date}</p>
  <p><strong>Domain:</strong> ${entry.domain}</p>
  <p>${entry.description}</p>
  <a href="${entry.link}" target="_blank">
    <img src="${entry.thumbnail}" alt="Thumbnail of ${entry.title}" style="width:150px; border:1px solid #ccc; margin-top:8px;" />
  </a>
`;

  timeline.appendChild(item);
});
