const  ip= document.querySelector('#epoch');
const button = document.querySelector('#button');
const output = document.querySelector('#output');
button.addEventListener('click', () => {
    output.innerHTML =  new Date(ip.value*1000);
});
