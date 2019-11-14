const web3 = require('web3')

const inputForm = document.querySelector('.input-form')
if (inputForm) {
  inputForm.addEventListener('submit', evt => {
    // evt.preventDefault()
    const name = document.querySelector('#name-input').value
    const age = document.querySelector('#age-input').value
    const address = document.querySelector('#address-input').value
    const phone = document.querySelector('#phone-input').value

    // TODO: calculate here.
    // TODO: show animation when calculating

    // store data after calculating
    localStorage.setItem('gasReduced', 'some value')
    localStorage.setItem('gasBefore', 'some value')
    localStorage.setItem('gasAfter', 'some value')
  })
}

const result = document.querySelector('.result')
if (result) {
  // const gasReduced = localStorage.getItem('gasReduced')
  // const gasBefore = localStorage.getItem('gasBefore')
  // const gasAfter = localStorage.getItem('gasAfter')

  // Here's how you can change the value of the gas reduced title in result page
  // document.querySelector('.result__title-number').innerHTML = gasReduced // this should be string!

  // Here's how you can change the before and after number
  // document.querySelector('.result__optimize-number-left').innerHTML = gasBefore
  // document.querySelector('.result__optimize-number-right').innerHTML = gasAfter

}