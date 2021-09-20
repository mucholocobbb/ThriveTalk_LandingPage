let formBlockBtn = document.querySelector('.formBlock__main_closeBtnBlock')
let formBlock = document.querySelector('.formBlock')
let mainFormBlock = document.querySelector('.formBlock__main_center')
let sucBlock = document.querySelector('.succefulBlock')
let addForm = document.querySelectorAll('.contactForm')
let sendBtn = document.querySelector('.formBlock__main_centreBtn')



addForm.forEach(el => {
    el.addEventListener('click', (el) => {
        el.preventDefault()
        formBlock.classList.remove('hidden')
    })
})
formBlockBtn.addEventListener('click', () => {
    formBlock.classList.add('hidden')

})

sendBtn.addEventListener('click', () => {
    let nameInput = document.querySelector('.nameInput')
    let phoneInput = document.querySelector('.phoneInput')
    let emailInput = document.querySelector('.emailInput')
    if (nameInput !== '' && phoneInput !== '' && emailInput !== '') {
        let template = `<p class="sucText">Succeful! ${nameInput.value} we call you soon.<br> You phone: ${phoneInput.value})<br> and text on you mail: ${emailInput.value}</p>
        `
        mainFormBlock.classList.add('hidden')
        sucBlock.insertAdjacentHTML('beforeend', template)
        sucBlock.classList.remove('hidden')

    }
    let timer = setTimeout(() => {
        let text = document.querySelector('.sucText')
        text.parentNode.removeChild(text)
        mainFormBlock.classList.remove('hidden')
        sucBlock.classList.add('hidden')
        formBlock.classList.add('hidden')
    }, 3000);

    nameInput.value = ''
    phoneInput.value = ''
    emailInput.value = ''

})