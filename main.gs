function convertSpreadsheetToPDF() {
  var spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId(); // Ganti dengan ID spreadsheet Anda
  var sheetName = "sandbox"; // Ganti dengan nama sheet Anda
  var folderId = "XXXXXXXXXXXXXXXXXXXX"; // Ganti dengan ID folder tujuan Anda

  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Membuat URL untuk menghasilkan file PDF dengan opsi yang ditentukan
  var url = "https://docs.google.com/spreadsheets/d/" + spreadsheetId + "/export?exportFormat=pdf";
  url += "&format=pdf";
  url += "&gid=" + sheet.getSheetId();
  url += "&size=A4";
  url += "&portrait=true";
  url += "&scale=4";
  url += "&sheetnames=false&printtitle=false&pagenumbers=false";
  url += "&gridlines=false";
  url += "&fzr=false";
  
  // Mengambil blob PDF dari URL
  var pdfBlob = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken()
    }
  }).getBlob();
  
  // Mengubah nama file PDF
  var timestamp = new Date().getTime();
  var pdfFileName = sheetName + "_" + timestamp + ".pdf";
  
  // Membuat file PDF dalam folder tujuan
  var folder = DriveApp.getFolderById(folderId);
  var pdfFile = folder.createFile(pdfBlob).setName(pdfFileName);
  
  Logger.log("File PDF berhasil dibuat: " + pdfFile.getUrl());
}

function convertSpreadsheetToPDF2() {
  var spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId(); // Ganti dengan ID spreadsheet Anda
  var sheetName = "sandbox"; // Ganti dengan nama sheet Anda
  var folderId = "XXXXXXXXXXXXXXXXXXXX"; // Ganti dengan ID folder tujuan Anda

  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Membuat URL untuk menghasilkan file PDF dengan opsi yang ditentukan
  var url = "https://docs.google.com/spreadsheets/d/" + spreadsheetId + "/export?exportFormat=pdf";
  url += "&format=pdf";
  url += "&gid=" + sheet.getSheetId();
  url += "&size=A4";
  url += "&portrait=true";
  url += "&scale=4";
  url += "&sheetnames=false&printtitle=false&pagenumbers=false";
  url += "&gridlines=false";
  url += "&fzr=false";
  
  // Mengambil blob PDF dari URL
  var pdfBlob = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken()
    }
  }).getBlob();
  
  // Mengubah nama file PDF
  var timestamp = new Date().getTime();
  var pdfFileName = sheetName + "_" + timestamp + ".pdf";
  
  // Membuat file PDF dalam folder tujuan
  var folder = DriveApp.getFolderById(folderId);
  var pdfFile = folder.createFile(pdfBlob).setName(pdfFileName);
  
  Logger.log("File PDF berhasil dibuat: " + pdfFile.getUrl());
}
