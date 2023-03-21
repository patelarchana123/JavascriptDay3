// Print today using switch case

function Weekday(Number){
    switch (Number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
           return "wrong number";
    }

}
const Day = Weekday(new Date().getDay());
console.log(Day);


//1
function Reverse(Number){
    console.log("Number is " +Number);
    let RevNumber = 0;
    while (Number != 0) {
        RevNumber = (RevNumber*10)+(Number%10);
        Number =parseInt(Number/10);
    }
    console.log( "Reverse Number is " +RevNumber);
}
Reverse(123);

// 2  Prime Number

function isPrime(Number) {
    let isPrimeNumber = true;
    for (index = 2; index < Number; index++) {
        if (Number % 2 === 0) {
            // isPrimeNumber = false
        }
    }
    if (isPrimeNumber === true) {
        console.log(`${Number} is a prime Number`);
    }
    else {
        cconsole.log(`${Number} is not a prime Number`);
    }
}
isPrime(2);

//3
function Returntype(argument){
   const type = typeof(argument);
   console.log(argument)
   console.log("typeof : " +type);
}
Returntype("Archana");

//4
function ReverseString(str) {
    if (!str || typeof str !== 'string') {
        console.log('input is not a string');
    }
    else {
        let revString = "";
        for (let index = str.length - 1; index >= 0; index--) {
            revString += str[index];
        }
        console.log("Reverse String is " + revString);
    }
}
ReverseString("Archana");