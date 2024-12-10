
import axios from 'axios';

const getLatestCryptoListings = async () => {
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  const params = {
    start: '1',
    limit: '5000',
    convert: 'USD'
  };
  const cryptosToFilter = ['CRGPT', 'DEFI', 'DZOO', 'PATEX', 'CGPT', 'VV', 'TENET', 'ROOT', 'SOPH', 'IVPAY', '.COM', 'SEILOR'];
  try {
    const response = await axios.get(url, {
      headers: {
        'X-CMC_PRO_API_KEY': 'a308e787-9639-4868-8a9e-ecd7c33694a6',
      },
      params: params 
    });
    if(response.data){
      const filteredCryptos = response.data.data.filter(crypto => cryptosToFilter.includes(crypto.symbol));
    
      const cryptos = filteredCryptos.map(crypto => ({
        name: crypto.name,
        logo: crypto.logo,
        symbol: crypto.symbol,
        price: crypto.quote.USD.price,
        percent_change_1h: crypto.quote.USD.percent_change_1h
      }));
      return cryptos;
    }
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
    throw error;
  }
};

export default async function handler(req, res) {
  try {
    const data = await getLatestCryptoListings();
    res.status(200).json(data);
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
    res.status(500).json({ error: 'Ошибка при запросе данных' });
  }
}