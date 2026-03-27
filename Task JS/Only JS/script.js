// 1. Function to count number of words in a sentence
function countWords(sentence) {
    if (!sentence) return 0;
    return sentence.trim().split(/\s+/).length;
}

console.log("Word Count:", countWords("Hello world this is JavaScript"));


// 2. Find the longest word in a string
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log("Longest Word:", findLongestWord("I love programming in JavaScript"));


// 3. Remove falsy values from an array
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

console.log("Filtered Array:", removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN]));


// 4. Find the second largest number in an array
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; // remove duplicates
    uniqueArr.sort((a, b) => b - a);   // sort descending
    return uniqueArr[1];
}

console.log("Second Largest:", secondLargest([10, 5, 8, 20, 20, 15]));


// 5. Sort an array without using built-in sort() (Bubble Sort)
function customSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Sorted Array:", customSort([5, 3, 8, 4, 2]));