const rubInput = document.querySelector('#rub')
const usdInput = document.querySelector('#usd')
const startBtn = document.querySelector('#start')
const usdValue = document.querySelector('#usd_value')
const eurValue = document.querySelector('#eur_value')
const cnyValue = document.querySelector('#cny_value')
const rubValue = document.querySelector('#rub_value')
const start2Btn = document.querySelector('#start2')

// ! полчать данные с сервера
const getData = async (url) => {

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error(`Ошибка по адресу :( ${url}`);
    } else {
        return await response.json();
    }
};

startBtn.addEventListener('click', () => {
    console.log('start');
    getData('https://www.cbr-xml-daily.ru/latest.js')
        .then((courses) => {
            usdValue.textContent = `USD: ${(rubInput.value * courses.rates.USD).toFixed(2)} $`
            eurValue.textContent = `EUR: ${(rubInput.value * courses.rates.EUR).toFixed(2)} €`          
            cnyValue.textContent = `CNY: ${(rubInput.value * courses.rates.CNY).toFixed(2)} ¥`           

    })
})        

start2Btn.addEventListener('click', () => {
    console.log('start2');
    getData('https://www.cbr-xml-daily.ru/latest.js')
        .then((courses) => {
            usdValue.textContent = `RUB: ${(usdInput.value / courses.rates.USD).toFixed(2)} ₽`
            eurValue.textContent = `EUR: ${(usdInput.value * 0.928052).toFixed(2)} €`          
            cnyValue.textContent = `CNY: ${(usdInput.value * 7.25).toFixed(2)} ¥`           

    })
})        
