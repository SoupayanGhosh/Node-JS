const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('.content/note.txt', 'utf8');
const second = readFileSync('.content/Second.txt', 'utf8');

writeFileSync(
    '.content/note.txt',
    `siuuuuu: ${first}, ${second}`,
    { flag: 'a' }
);
