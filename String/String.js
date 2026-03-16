
function getText(){
    return document.getElementById("text").value;
}

function showResult(result){
    document.getElementById("output").innerText = result;
}

/* 1 Count Vowels */

function countVowels(){
    let str = getText().toLowerCase();
    let count = 0;

    for(let i=0;i<str.length;i++){
        if("aeiou".includes(str[i])){
            count++;
        }
    }

    showResult("Vowels : " + count);
}


/* 2 Palindrome */

function checkPalindrome(){
    let str = getText();
    let rev = str.split("").reverse().join("");

    if(str === rev)
        showResult("It is Palindrome");
    else
        showResult("Not Palindrome");
}


/* 3 Extract First Word */

function extractFirstWord(){
    let str = getText();
    let first = str.split(" ")[0];

    showResult("First Word : " + first);
}


/* 4 Replace spaces */

function replaceSpaces(){
    let str = getText();
    let result = str.replaceAll(" ","-");

    showResult(result);
}


/* 5 Split Words */

function splitWords(){
    let str = getText();
    let arr = str.split(" ");

    showResult(arr.join(", "));
}


/* 6 Capitalize */

function capitalizeWords(){
    let str = getText();
    let words = str.split(" ");

    for(let i=0;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    showResult(words.join(" "));
}


/* 7 Reverse String */

function reverseString(){
    let str = getText();
    let rev = "";

    for(let i=str.length-1;i>=0;i--){
        rev += str[i];
    }

    showResult(rev);
}


/* 8 Count Specific Character */

function countCharacter(){
    let str = getText();
    let char = prompt("Enter character to count");

    let count = 0;

    for(let i=0;i<str.length;i++){
        if(str[i] === char){
            count++;
        }
    }

    showResult("Occurrences : " + count);
}


/* 9 Remove non alphanumeric */

function removeSpecial(){
    let str = getText();
    let clean = str.replace(/[^a-zA-Z0-9 ]/g,"");

    showResult(clean);
}


/* 10 Start and End same */

function checkStartEnd(){
    let str = getText();

    if(str[0] === str[str.length-1])
        showResult("Start and End characters are same");
    else
        showResult("Start and End characters are different");
}