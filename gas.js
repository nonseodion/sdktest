// in nodeJs
const axios = require('axios')

async function getCurrentGasPrices() {
    let response = await axios.get('https://bscgas.info/gas')
    let prices = {
        slow: response.data.slow,
        standard: response.data.standard,
        fast: response.data.fast,
        instant: response.data.instant
    }
    console.log(`Current ETH Gas Prices (in GWEI):`)
    console.log(`Slow: ${prices.slow} (transaction completes in < 30 minutes)`)
    console.log(`Standard: ${prices.standard} (transaction completes in < 1 minute)`)
    console.log(`Fast: ${prices.fast} (transaction completes in < 15 seconds)`)
    console.log(`Instant: ${prices.instant} (transaction is accepted in next block, usually an overpayment)`)
    return prices;
}

getCurrentGasPrices();