const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeData() {
    try {
        const { data } = await axios.get('https://www.institutoclaro.org.br/campus-mobile/noticias/estao-abertas-as-inscricoes-para-a-13a-edicao-do-campus-mobile/');
        const $ = cheerio.load(data);
        const scrapedData = [];

        // Exemplo de scraping de títulos de artigos
        $('h2.title').each((index, element) => {
            scrapedData.push($(element).text());
        });

        return scrapedData;
    } catch (error) {
        console.error('Erro ao fazer scraping:', error);
    }
}

module.exports = scrapeData;
