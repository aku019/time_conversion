const mon=document.querySelector('#mm');//readLineSync.question(chalk.green.bold('Enter Month:example- 1 for January, 2 for February...12 for December\n'));
const date=document.querySelector('#dd');//readLineSync.question(chalk.green.bold('Enter date\n'));

const year=document.querySelector('#yy');//readLineSync.question(chalk.green.bold('Enter year. Format example: 2020\n'));

let hour=document.querySelector('#hh');//readLineSync.question(chalk.green.bold('Enter hour in 24 hours clock. Format example: 02 for 2AM,14 for 2PM\n'));
let min=document.querySelector('#mi');//readLineSync.question(chalk.green.bold('Enter minute\n'));
let sec=document.querySelector('#ss');//readLineSync.question(chalk.green.bold('Enter Second\n'));


const button = document.querySelector('#button');
const output = document.querySelector('#output');
button.addEventListener('click', () => {
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

if(hour.value.length===1)
hour.value="0"+hour.value;

if(min.value.length===1)
min.value="0"+min.value;

if(sec.value.length===1)
sec.value="0"+sec.value;

if(mon.value>12)  //270786600   268108200
{
  
  console.log("Wrong Month entered.Start Again\n");
  
}

const full_date=months[mon.value-1]+" "+date.value+", "+year.value+" "+hour.value+":"+min.value+":"+sec.value;
//"July 1, 1978 02:30:00"
const myDate = new Date(full_date); 
const myEpoch = myDate.getTime();///1000.0;
    output.value =  myEpoch;
    console.log(myEpoch);
});

