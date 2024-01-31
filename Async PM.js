const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const start = async () => {
    try {
        const first = await getText('/home/jonty/Desktop/Source Codes/NODE js/note.txt');
                const second = await getText('/home/jonty/Desktop/Source Codes/NODE js/Second.txt');

        console.log(first,second); // Corrected variable name to 'first'
    } catch (error) {
        console.log(error);
    }
};

start(); // Corrected invocation of 'start' function
