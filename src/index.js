const COINS = [50, 25, 10, 5, 1];
const COINS_CHAR = ['H', 'Q', 'D', 'N', 'P'];

module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    
    let i = 0;
    let money = {};
    let currentValue = currency;

    while (currentValue > 0 && i < COINS.length) {
        if (currentValue >= COINS[i]) {
            money[COINS_CHAR[i]] = Math.trunc(currentValue / COINS[i]);
            currentValue = currentValue % COINS[i];
        }
        i++;
    }

    return money;
}
