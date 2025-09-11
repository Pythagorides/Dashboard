const data = [
  {
    id: "event1",
    title: "Dialogue with the Deans",
    link: "https://drive.google.com/file/d/1UblTY-HLhaF3H37z6tNMLekvdmFYfdXT/view",
    thumbnail: "https://drive.google.com/uc?export=view&id=1fkBWPC7HgsUZ1mP-VDQ49ORZldzyA4nz"
  },
  {
    id: "event2",
    title: "U.S. Law Enforcement Conversations",
    link: "https://drive.google.com/file/d/19Wsl3xnyvJfR3iiDayRbtYtBhKhvJcZc/view",
    thumbnail: "https://drive.google.com/uc?export=view&id=1cS3g-JnmclVOeWVNfz2od1HET6NSpFGa"
  },
  {
    id: "event3",
    title: "U.S. Supreme Court Conversations",
    link: "https://drive.google.com/file/d/1FMQnUd5nG86Ybm3gL1zdB7fkjO12isHr/view",
    thumbnail: "https://drive.google.com/uc?export=view&id=1pJQXj5F2mSffewnM8rKPeMd07PNRwH3x"
  }
];

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
