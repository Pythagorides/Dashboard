const data = [
  {
    "id": "event1",
    "title": "Dialogue with the Deans",
    "date": "2021-03-15",
    "domain": "Academic",
    "description": "Initial philosophical resistance documented through correspondence with university leadership.",
    "link": "pdfs/dialogue-with-deans.pdf"
  },
  {
    "id": "event2",
    "title": "Law Enforcement Conversations",
    "date": "2021-06-10",
    "domain": "Federal",
    "description": "Forensic documentation of federal engagement and procedural irregularities.",
    "link": "pdfs/law-enforcement-conversations.pdf"
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
    <a href="${entry.link}" target="_blank">View Document</a>
  `;
  timeline.appendChild(item);
});
