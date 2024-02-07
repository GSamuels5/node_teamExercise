const fs = require('fs');

// declare file path
const filePath = './data.txt';

const firstContent = 'My team will win this challenge.';

// write content into file
fs.writeFile(filePath, firstContent, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }

    console.log('Content written to file successfully.');
});
