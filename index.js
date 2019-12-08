let web3 = require("./config/web3Config");
let smartContract = require('./config/smart-contracts');


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const inputForm = document.querySelector('.input-form')
if (inputForm) {
  inputForm.addEventListener('submit', async (evt) => {
    // alert("wtf");
    // evt.preventDefault()
    const name = document.querySelector('#name-input').value
    const age = document.querySelector('#age-input').value
    const address = document.querySelector('#address-input').value
    const phone = document.querySelector('#phone-input').value
    // calculating gas here.
    let bytes32Name = web3.utils.fromAscii(name).padEnd(66,'0');
    let bytes32Age = web3.utils.fromAscii(age).padEnd(66,'0');
    let bytes32Address = address.padEnd(42,'0');
    let bytes32Phone = web3.utils.fromAscii(phone).padEnd(66,'0');
    let optimizedContract = new web3.eth.Contract(smartContract.optimized.ABI, smartContract.optimized.address);
    let notOptimizedContract = new web3.eth.Contract(smartContract.notOptimized.ABI, smartContract.notOptimized.address);
    let gasBefore = await notOptimizedContract.methods.attest(bytes32Name, bytes32Address, bytes32Age, bytes32Phone, 10).estimateGas();
    let gasAfter = await optimizedContract.methods.attest(bytes32Name,bytes32Address , bytes32Age, bytes32Phone, 10).estimateGas();
    gasReduced = gasBefore - gasAfter;
    console.log("gas before ", gasBefore);
    console.log("gas after ", gasAfter);
    console.log("gas reduced ", gasReduced);
    let gasReducedPercentage = gasReduced/gasBefore * 100; // get percentage
    gasReducedPercentage = Math.floor(gasReducedPercentage * 100); //get two decimals
    gasReducedPercentage = gasReducedPercentage / 100;
    console.log("gas percentage ", gasReducedPercentage ," %")
    
    // store data after calculating
    localStorage.setItem('gasReduced', gasReduced)
    localStorage.setItem('gasBefore', gasBefore)
    localStorage.setItem('gasAfter', gasAfter)
    localStorage.setItem('gasReducedPercentage',gasReducedPercentage )
  })
}

const result = document.querySelector('.result')
if (result) {
  const gasReduced = localStorage.getItem('gasReduced')
  const gasBefore = localStorage.getItem('gasBefore')
  const gasAfter = localStorage.getItem('gasAfter')
  const gasReducedPercentage = localStorage.getItem('gasReducedPercentage')

  // Here's how you can change the value of the gas reduced title in result page
  document.querySelector('.result__title-number').innerHTML = gasReduced // this should be string!

  // Here's how you can change the before and after number
  document.querySelector('.result__optimize-number-left').innerHTML = gasBefore
  document.querySelector('.result__optimize-number-right').innerHTML = gasAfter
  document.querySelector('.result__title-percentage').innerHTML = gasReducedPercentage
}