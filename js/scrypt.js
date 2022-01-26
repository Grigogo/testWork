let sum = 0
const buttons = document.querySelectorAll('.cards__item-button')
const price = document.querySelectorAll('.cards__item-price')

const text = document.querySelectorAll('.cards__item-price span')

let summa = document.querySelector('.footer__sum span')

const textAdd = document.querySelectorAll('.cards__item-button')


const changeClass = (indexClickedTabs) => {
    buttons.forEach((tab, index) => {
        if (index === indexClickedTabs) {
            tab.classList.add('clicked') 
            textAdd[index].textContent = `Добавлено`
        }
    })
}


const sumPrice = (index) => {
    let priceText = Number(text[index].textContent)
    sum = priceText + sum
}

const showSum = () => {
    summa.textContent = `ОБЩАЯ СУММА: ${sum} руб`
}



buttons.forEach((tap, index) => {
    tap.addEventListener('click', () => {
        changeClass(index)
        sumPrice(index)
        showSum()
    })
})
