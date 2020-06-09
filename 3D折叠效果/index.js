const receipt = document.querySelector('.receipt')
const button = document.querySelector('button')

const toggleReceipt = () => {
    receipt.classList.toggle('active')

    if (receipt.classList.contains('active')) {
        button.innerHTML = 'Less info'
    } else {
        button.innerHTML = 'More info'
    }
}

button.addEventListener('click', toggleReceipt)