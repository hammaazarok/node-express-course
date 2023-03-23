fs = require('fs').promises;

const makeFile = async () => {
    try {
        await fs.writeFile('./content/practice2.txt', 'This is the first line\n');

        for (let i = 2; i <= 10; i++) {
            await fs.writeFile('./content/practice2.txt', `This is the line ${i}\n`, {
                flag: 'a',
            });
        }
    } catch (err) {
        console.log(err);
    }
};

makeFile();