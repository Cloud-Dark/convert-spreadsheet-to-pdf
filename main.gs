function convertSpreadsheetToPDF(spreadsheetId, sheetName, folderId) {
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  var url = "https://docs.google.com/spreadsheets/d/" + spreadsheetId + "/export?exportFormat=pdf";
  url += "&format=pdf";
  url += "&gid=" + sheet.getSheetId();
  url += "&size=A4";
  url += "&portrait=true";
  url += "&scale=4";
  url += "&sheetnames=false&printtitle=false&pagenumbers=false";
  url += "&gridlines=false";
  url += "&fzr=false";

  var pdfBlob = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken()
    }
  }).getBlob();

  var timestamp = new Date().getTime();
  var pdfFileName = sheetName + "_" + timestamp + ".pdf";

  var folder = DriveApp.getFolderById(folderId);
  var pdfFile = folder.createFile(pdfBlob).setName(pdfFileName);

  var downloadLink = pdfFile.getUrl();
  return downloadLink;
}

function main() {
  var spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  var sheetName = "sandbox";
  var folderId = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";//ubah dengan id folder gdrive anda

  var fullLink = convertSpreadsheetToPDF(spreadsheetId, sheetName, folderId);
  var fileId = fullLink.match(/[-\w]{25,}/); // Mengambil ID file dari tautan lengkap

  var directLink = "https://drive.google.com/uc?export=download&id=" + fileId;
  
  Logger.log("Full Link: " + fullLink);
  Logger.log("Direct Link: " + directLink);
}
