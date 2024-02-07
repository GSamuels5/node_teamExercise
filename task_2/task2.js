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
    appendTOFile() 
    console.log('Content written to file successfully.');
});
function appendTOFile(Content) {
    try {
        fs.appendFile(filePath,firstContent, callback=>
            {
             if (!callback) {
                console.log('data has been modified.');
             }   
            })
    } catch (error) {
        console.log('Issue when appending data to a file');
    }
   
}
appendTOFile() 