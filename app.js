
//1
function myvalue(){
        let array=[1,2,3,4,5]
    array.reverse()
    console.log(array)
}
myvalue();

//2
function filters(){
    let input=parseInt(prompt("enter five number"));
    let array=[];
    array.push(input);
    console.log(array);
    }
    filters();

//3
function thevowel(){
    let str ="i am a human"
    let thevowels=["a","e","i","o","u"];
    let count= 0;
    for (let i = 0; i < str.length; i++){
        if (thevowels.includes(str[i])){
            count ++;
        }
    }
    return count;  
}
console.log(thevowel());

//4


function Palindrome() {
    let input=prompt("enter a palindrome")
    let str="";
    for(let i= input.length -1; i>= 0; i--){
        str += input[i];
    }
    return str === input;
}
console.log(Palindrome());

//5
function checkrange(){
    let num1=prompt("Enter a number to check range")
    let num2=prompt("Enter another number to check range")
    if(num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99){
        return true;
    }
        else{
            return false;
        }
    }
    console.log(checkrange());


    //6

    function min(){
        let arr=[45,65,34,75];
        let min= arr[0];
        for (let i = 1; i < arr.length; i++){
            if (arr[i] <min){
                min = arr[i];
            }
        }  
        return min;
    }
    console.log(min());


    //7

    function copystring(){
        let str = prompt("Enter a string to copy");
        if (str.length < 3){
            return "string length must be 3 and above";

        }
        else{
            console.log(str.slice(-3));
            console.log(str.slice(-3));
            console.log(str.slice(-3));
        }
    }
    console.log(copystring());


//8
    function angle() {
        let angle = prompt('Enter an angle: ');
        if (angle >= 0 && angle <= 90) {
            return angle + ' is Acute angle: An angle between 0 and 90 degrees.';
        }
        else if (angle == 90) {
            return angle + ' is Right angle: An 90 degree angle.';
        }
        else if (angle >= 90 && angle <= 180) {
            return angle + ' is Obtuse angle: An angle between 90 and 180 degrees.';
        }
        else if (angle == 180) {
            return angle + ' is Straight angle: A 180 degree angle.';
        }
        else {
            return angle + ' is Invalid angle';
        }
    }
    console.log(angle());

//9
    function roundnumber(){
        let num = prompt("Enter a number to round");
        if (num % 10 == 0){
            return "The number is a round number already"
        }
        else{
            return Math.ceil(num);
        }
    }
    console.log(roundnumber());


    //10

    function index(){
        let heros = ["khan", 'bigman', "spiderman", "ironman"];
        let index = prompt("Enter a hero name to find index (khan, bigman, spiderman, ironman)");
        for (let i=0; i < heros.length; i++){
            if (heros[i] == index){
                return "the Index of the best hero is " + 1
            }
        }

    }
    console.log(index());

