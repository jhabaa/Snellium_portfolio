
  //doxnload files
  function downloadFile(fileURL, fileName) {
    var lin = document.createElement('a');
    lin.href = fileURL;
    lin.target = '_blank';
    lin.download = fileName;
    document.body.appendChild(lin);
    lin.click();
    document.body.removeChild(lin);
  }


