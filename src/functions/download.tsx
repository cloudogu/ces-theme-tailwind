export function download(fileName: string, downloadLink: string){
    // used a tag instead of fetch to rename the file on download
    // https://stackoverflow.com/questions/7526849/how-do-i-change-a-filename-on-download-with-javascript
    const a = document.createElement('a');
    a.href = downloadLink;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export function downloadBlob(fileName: string, data: Blob){
    // used a tag instead of fetch to rename the file on download
    // https://stackoverflow.com/questions/7526849/how-do-i-change-a-filename-on-download-with-javascript
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}