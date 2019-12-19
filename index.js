let web3 = require("./config/web3Config");
let smartContract = require('./config/smart-contracts');


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const pageForm = document.querySelector('.page-form');

if (pageForm){
  pageForm.addEventListener('click', async (evt)=>{
    evt.preventDefault();
    const parameters = evt.toElement.value;

    window.location.replace("./form"+parameters+".html");
  })
}

const inputForm3 = document.querySelector('.optimization-3');
if (inputForm3) {
  inputForm3.addEventListener('submit', async (evt) => {
    evt.preventDefault()
    const name = inputForm3.querySelector('#name-input').value
    const email = inputForm3.querySelector('#email-input').value
    const title = inputForm3.querySelector('#title-input').value
    const comment = inputForm3.querySelector('#comment-input').value
    console.log(name, email, title, comment);
    // calculating gas here.
    let bytes32Name = web3.utils.fromAscii(name).padEnd(66,'0');
    let bytes32Email = web3.utils.fromAscii(email).padEnd(66,'0');
    let bytes32Title = web3.utils.fromAscii(title).padEnd(66,'0');
    let bytes32Comment = web3.utils.fromAscii(comment).padEnd(66,'0');

    let optimizedContract = new web3.eth.Contract(smartContract.optimized3.ABI, smartContract.optimized3.address);
    let notOptimizedContract = new web3.eth.Contract(smartContract.notOptimized3.ABI, smartContract.notOptimized3.address);

    let beforePromise = notOptimizedContract.methods.record(bytes32Name, bytes32Email, bytes32Title, bytes32Comment, 10)
    .send({from:"0xFAC4316F68389f1B1Ec40CB39113Ea8f8bfB84c9"})
    let afterPromise =  optimizedContract.methods.record(bytes32Name, bytes32Email, bytes32Title, bytes32Comment, 10)
    .send({from:"0xFAC4316F68389f1B1Ec40CB39113Ea8f8bfB84c9"})

    // TODO: put loading screen or smth
    let [gasBefore, gasAfter] = await Promise.all([beforePromise, afterPromise]);
    gasBefore = parseInt(gasBefore.gasUsed);
    gasAfter = parseInt(gasAfter.gasUsed);
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
    window.location.replace("./result.html");
  })
}

// form 4
const inputForm4 = document.querySelector('.optimization-4');
if (inputForm4) {
  inputForm4.addEventListener('submit', async (evt) => {
    evt.preventDefault()
    const name = inputForm4.querySelector('#name-input').value
    const email = inputForm4.querySelector('#email-input').value
    const title = inputForm4.querySelector('#title-input').value
    const address = inputForm4.querySelector('#address-input').value
    const comment = inputForm4.querySelector('#comment-input').value
    // calculating gas here.
    let bytes32Name = web3.utils.fromAscii(name).padEnd(66,'0');
    let bytes32Email = web3.utils.fromAscii(email).padEnd(66,'0');
    let bytes32Title = web3.utils.fromAscii(title).padEnd(66,'0');
    let bytes32Comment = web3.utils.fromAscii(comment).padEnd(66,'0');
    let bytes32Address = web3.utils.fromAscii(address).padEnd(66,'0');

    let optimizedContract = new web3.eth.Contract(smartContract.optimized4.ABI, smartContract.optimized4.address);
    let notOptimizedContract = new web3.eth.Contract(smartContract.notOptimized4.ABI, smartContract.notOptimized4.address);

    let beforePromise = notOptimizedContract.methods.record(bytes32Name, bytes32Email, bytes32Address, bytes32Title, bytes32Comment, 10)
    .send({from:"0xFAC4316F68389f1B1Ec40CB39113Ea8f8bfB84c9"})
    let afterPromise =  optimizedContract.methods.record(bytes32Name, bytes32Email, bytes32Address, bytes32Title, bytes32Comment, 10)
    .send({from:"0xFAC4316F68389f1B1Ec40CB39113Ea8f8bfB84c9"})

    // TODO: put loading screen or smth
    let [gasBefore, gasAfter] = await Promise.all([beforePromise, afterPromise]);
    gasBefore = parseInt(gasBefore.gasUsed);
    gasAfter = parseInt(gasAfter.gasUsed);
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
    window.location.replace("./result.html");
  })
}
// form 5
const inputForm5 = document.querySelector('.optimization-5');
if (inputForm5) {
  inputForm5.addEventListener('submit', async (evt) => {
    evt.preventDefault()
    const name = inputForm5.querySelector('#name-input').value
    const email = inputForm5.querySelector('#email-input').value
    const title = inputForm5.querySelector('#title-input').value
    const address = inputForm5.querySelector('#address-input').value
    const phone = inputForm5.querySelector('#phone-input').value
    const comment = inputForm5.querySelector('#comment-input').value
    // calculating gas here.
    let bytes32Name = web3.utils.fromAscii(name).padEnd(66,'0');
    let bytes32Email = web3.utils.fromAscii(email).padEnd(66,'0');
    let bytes32Title = web3.utils.fromAscii(title).padEnd(66,'0');
    let bytes32Comment = web3.utils.fromAscii(comment).padEnd(66,'0');
    let bytes32Address = web3.utils.fromAscii(address).padEnd(66,'0');
    let bytes32Phone = web3.utils.fromAscii(phone).padEnd(66,'0');

    let optimizedContract = new web3.eth.Contract(smartContract.optimized5.ABI, smartContract.optimized5.address);
    let notOptimizedContract = new web3.eth.Contract(smartContract.notOptimized5.ABI, smartContract.notOptimized5.address);

    let beforePromise = notOptimizedContract.methods.record(bytes32Name, bytes32Email, bytes32Address, bytes32Phone, bytes32Title, bytes32Comment, 10)
    .send({from:"0xFAC4316F68389f1B1Ec40CB39113Ea8f8bfB84c9"})
    let afterPromise =  optimizedContract.methods.record(bytes32Name, bytes32Email, bytes32Address, bytes32Phone, bytes32Title, bytes32Comment, 10)
    .send({from:"0xFAC4316F68389f1B1Ec40CB39113Ea8f8bfB84c9"})

    // TODO: put loading screen or smth
    let [gasBefore, gasAfter] = await Promise.all([beforePromise, afterPromise]);
    gasBefore = parseInt(gasBefore.gasUsed);
    gasAfter = parseInt(gasAfter.gasUsed);
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
    window.location.replace("./result.html");
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