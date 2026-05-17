// ============================================================
// ONC SPS — Google Apps Script Backend
// Paste this entire file into Google Apps Script
// (script.google.com) and deploy as a Web App
// ============================================================

const SHEET_NAME = 'SPS Reports';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp', 'Date', 'Shepherd', 'Member',
        'Contacted', 'How', 'Prayer', 'Bible Study', 'Notes'
      ]);
      // Style headers
      const header = sheet.getRange(1, 1, 1, 9);
      header.setBackground('#0f2044');
      header.setFontColor('#ffffff');
      header.setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Parse incoming data
    const data = JSON.parse(e.postData.contents);

    // Append the new report row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.date || new Date().toLocaleDateString('en-GB'),
      data.shepherd || '',
      data.member || '',
      data.contacted || '',
      data.contactType || '',
      data.prayer || '',
      data.bibleStudy || '',
      data.notes || ''
    ]);

    // Auto-resize columns
    sheet.autoResizeColumns(1, 9);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === 'get') {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const sheet = ss.getSheetByName(SHEET_NAME);

      if (!sheet || sheet.getLastRow() <= 1) {
        return ContentService
          .createTextOutput(JSON.stringify({ reports: [] }))
          .setMimeType(ContentService.MimeType.JSON);
      }

      const data = sheet.getDataRange().getValues();
      const headers = data[0];
      const rows = data.slice(1);

      const reports = rows.map(row => ({
        timestamp:   row[0],
        date:        row[1],
        shepherd:    row[2],
        member:      row[3],
        contacted:   row[4],
        contactType: row[5],
        prayer:      row[6],
        bibleStudy:  row[7],
        notes:       row[8]
      }));

      return ContentService
        .createTextOutput(JSON.stringify({ reports }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
