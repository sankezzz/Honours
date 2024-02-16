import { readFile } from 'fs/promises';


readFile('poem.txt', 'utf8')
  .then(data => {
    console.log('Contents of the poem:');
    console.log(data);
  })
  .catch(err => {
    console.error('Error reading the file:', err);
  });