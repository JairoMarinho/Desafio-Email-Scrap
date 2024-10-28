const scrapeData = require('./scraper');
const sendEmail = require('./emailer');

async function main() {
    const data = await scrapeData();
    if (data) {
        await sendEmail(data);
    }
}

main();
