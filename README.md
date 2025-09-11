# Mikey and the Liver Pirates — Dashboards

## 📂 Architecture

- **All PDFs** are hosted externally on **Google Drive** and linked directly from the dashboard.
- **All thumbnails** are also hosted on Google Drive in a dedicated `Images` folder.
- The GitHub repository now contains **only the HTML, CSS, and JavaScript** needed to render the dashboard.
- No `.pdf` or `.jpg` files are stored in this repository.

---

## 🔗 How It Works

1. **`entries.js`** contains the `data` array with:
   - The title of each testimony
   - A Google Drive `/view` link to the PDF
   - A Google Drive thumbnail link for the image
2. **`script.js`** reads `entries.js` and renders the dashboard.
3. **`style.css`** controls the layout and appearance.

---

## ➕ Adding a New Entry

1. Upload the PDF to Google Drive → set to **Anyone with the link can view** → copy the `/view` link.
2. Upload the thumbnail image to the Google Drive `Images` folder → set to **Anyone with the link can view** → convert to:
