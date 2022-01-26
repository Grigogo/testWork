let sum = 0
const buttons = document.querySelectorAll('.cards__item-button')
const price = document.querySelectorAll('.cards__item-price')

const text = document.querySelectorAll('.cards__item-price span')

console.log(text[0].textContent)
const changeClass = (indexClickedTabs) => {
    buttons.forEach((tab, index) => {
        if (index === indexClickedTabs) {
            tab.classList.add('clicked')
        }
    })
}

const sumPrice = (index) => {
    let price = Number(text[index].textContent)
    sum +=price
}

const showSum = () => {
    text.textContent = sum
    console.log(text.textContent)
}

buttons.forEach((tap, index) => {
    tap.addEventListener('click', () => {
        changeClass(index)
        sumPrice(index)
        console.log(text)
        text.textContent = String(sum)
        console.log(text.textContent)
        console.log(sumPrice(index))
    })
})
