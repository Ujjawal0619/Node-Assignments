const fs = require('node:fs/promises');

let wordCount = 0;

(async () => {
    const fd = await fs.open('./test.txt', 'r')
    const readStream = fd.createReadStream();
    
    const flag = readStream.on('data', (chunk) => {
        const string = chunk.toString();

        if(wordCount === 0 && string.length > 0)
            wordCount = 1;
        
        for(let i = 0; i < string.length; i++) {
            if(string[i] === ' ' || string[i] === '\n') {
                wordCount++;
            }
        }
    })

    readStream.on('end', () => {
        console.log('Number of words:', wordCount);
        fd.close();
    })

})();
