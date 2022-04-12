let inputValues = ['4311o','th3r3','w0r1d'];
let delay = 0;

for(let i = 0; i < inputValues.length; i++){
  setTimeout(()=>{
    console.log(inputValues[i])
  },delay = delay + 1000)
}
