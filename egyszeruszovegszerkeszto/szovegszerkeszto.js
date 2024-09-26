document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        document.getElementById('szoveg').innerHTML=content;
        console.log(content);
    };
    
    reader.onerror = function() {
        console.error('Error reading the file');
    };

    reader.readAsText(file);
});

async function Ment() {
    const fs = require('fs');

function writeToFile() {
    const text = document.getElementById('szoveg').value;
    fs.appendFile('szöveg.txt', text + '\n', (err) => {
        if (err) throw err;
        console.log('The text has been appended to the file!');
    });
}
writeToFile();
}
