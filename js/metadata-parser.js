/**
 * Parses metadata from a dashboard entries array and logs it as a console table.
 * 
 * @param {Array} entries - The array of entry objects from a specific -entries.js file.
 * @param {string} sourceFile - Optional label for the source file (e.g. "inductive-entries.js").
 *                              If omitted, defaults to "UNKNOWN SOURCE".
 */
function parseEntriesToCSV(entries, sourceFile = "UNKNOWN SOURCE") {
  const rows = entries.map(entry => {
    const fileIdMatch = entry.link.match(/\/d\/([^/]+)\//);
    const thumbnailIdMatch = entry.thumbnail.match(/id=([^&]+)/);

    const fileId = fileIdMatch ? fileIdMatch[1] : "UNKNOWN";
    const thumbnailId = thumbnailIdMatch ? thumbnailIdMatch[1] : "UNKNOWN";

    return {
      entryId: entry.id,
      entryTitle: entry.title,
      driveFileId: fileId,
      thumbnailId: thumbnailId,
      usedInEntriesFile: sourceFile
    };
  });

  console.table(rows);
  return rows;
}
