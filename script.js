let inputDay = document.getElementById('DayInput');
let inputDayHeader = document.getElementById('DayInputHeader');
let DayInputInvalidMessage = document.getElementById('DayInputInvalidMessage');

let inputMonth = document.getElementById('MonthInput');
let inputMonthHeader = document.getElementById('MonthInputHeader');
let inputMonthInvalidMessage = document.getElementById('MonthInputInvalidMessage');

let inputYear = document.getElementById('YearInput');
let inputYearHeader = document.getElementById('YearInputHeader');
let inputYearInvalidMessage = document.getElementById('YearInputInvalidMessage');

let resultDay = document.getElementById('dayResult');
let resultMonth = document.getElementById('monthResult');
let resultYear = document.getElementById('yearResult');
let enterButton = document.getElementById('enterButton')
const currentDate = new Date().toDateString();

let currentYear = currentDate.split(' ').slice(-1);
let currentDay = currentDate.split(' ').slice(-2, -1);
let currentMonth = currentDate.split(' ').slice(-3, -2);

let userBirthdate = [inputDay + inputMonth + inputYear];
console.log(userBirthdate + "is your birthday")

// Enter Button 

enterButton.addEventListener('keydown', e => {
    if(event.key==='Enter'){
        enterButton.classList.add(':active');
        ValidateDates() 
        console.log("YOU PRESSED ENTER")
        enterButton.classList.add('active');
    }
  });

function ValidateDates() {
    let day = parseInt(inputDay.value);
    let month = parseInt(inputMonth.v
        alue);
    let year = parseInt(inputYear.value);
    let userBirthdate = [month, day, year].join('/');
    let BirthdateObject = new Date(userBirthdate);
    console.log("This is the current date " + currentDate);
    console.log(userBirthdate + " is your birthday");
    console.log(BirthdateObject + " is your birthday Object")
  
    let ageDiff =  currentDate - BirthdateObject.toDateString() ;
    console.log(ageDiff + " is the age difference")

    // Check if Valid Month

    if (month < 1 || month > 12){
        console.log("Invalid Month")
        inputMonth.classList.add('invalid');
        inputMonthHeader.classList.add('invalid');
        inputMonthInvalidMessage.classList.add('invalidMessageActive');
    } else if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
        console.log("31 days")
        inputMonth.classList.remove('invalid');
        inputMonthHeader.classList.remove('invalid');
        inputMonthInvalidMessage.classList.remove('invalidMessageActive');
    } else if (month === 4 || month === 6 || month === 8 || month === 11){
        console.log("30 days")
        inputMonth.classList.remove('invalid');
        inputMonthHeader.classList.remove('invalid');
        inputMonthInvalidMessage.classList.remove('invalidMessageActive');
    } else if(month === 2){
        console.log("28 days")
        inputMonth.classList.remove('invalid');
        inputMonthHeader.classList.remove('invalid');
        inputMonthInvalidMessage.classList.remove('invalidMessageActive');
    } 
    
    // Check Valid Days 

    if ((day >= 1 && day <= 31) && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) {
        console.log("Valid Day for months with 31 days")
        inputDay.classList.remove('invalid');
        inputDayHeader.classList.remove('invalid');
        DayInputInvalidMessage.classList.remove('invalidMessageActive');
        inputMonth.classList.remove('invalid');
        inputMonthHeader.classList.remove('invalid');
        inputMonthInvalidMessage.classList.remove('invalidMessageActive');
    } else if ((day >= 1 && day <= 30) && (month === 4 || month === 6 || month === 8 || month === 11)) {
        console.log("Valid Day for months with 30 days")
        inputDay.classList.remove('invalid');
        inputDayHeader.classList.remove('invalid');
        DayInputInvalidMessage.classList.remove('invalidMessageActive');
        inputMonth.classList.remove('invalid');
        inputMonthHeader.classList.remove('invalid');
        inputMonthInvalidMessage.classList.remove('invalidMessageActive');
    } else if ((day >= 1 && day <= 28) && (month === 2)) {
        console.log("Valid Day for months with 28 days")
        inputDay.classList.remove('invalid');
        inputDayHeader.classList.remove('invalid');
        DayInputInvalidMessage.classList.remove('invalidMessageActive');
        inputMonth.classList.remove('invalid');
        inputMonthHeader.classList.remove('invalid');
        inputMonthInvalidMessage.classList.remove('invalidMessageActive');
        console.log(day)
    } else {
        console.log("Invalid day");
        inputDay.classList.add('invalid');
        inputDayHeader.classList.add('invalid');
        DayInputInvalidMessage.classList.add('invalidMessageActive');
    }   

    // Check Valid Year 

    if (year > currentYear){
        console.log("this is an invalid year")
        inputYear.classList.add('invalid');
        inputYearHeader.classList.add('invalid');
        inputYearInvalidMessage.classList.add('invalidMessageActive');
    } else {
        console.log("This is a valid year")
        inputYear.classList.remove('invalid');
        inputYearHeader.classList.remove('invalid');
        inputYearInvalidMessage.classList.remove('invalidMessageActive');
    }
    console.log("Todays date is " +  currentYear + " " + currentMonth + " " + currentDay)
}
  

function getAge() {

}


