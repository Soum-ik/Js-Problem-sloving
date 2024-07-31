// function reverse(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reverse('Im soumik sarkar ratul'));

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';
//     let length;
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//             length = longestWord.length;
//         }
//     }

//     return { longestWord, length };
// }
// console.log(findLongestWord('Im Soumik I love codeing and also Javascript'));


// function removeDuplicateValue(array) {
//     let newArray = [];
//     array.some()
// }

// console.log(removeDuplicateValue([1, 2, 2, 2, 2, 2, 23, 3, 4, 5]));

const binarySearch = (array, target) => {
    let leftSide = 0;
    let rightSide = array.length - 1;
    while (leftSide <= rightSide) {
        const mid = Math.floor((leftSide + rightSide) / 2);
        if (array[mid] === target) {
            return mid;
        }
        else if (target > mid) {
            leftSide = mid + 1;
            console.log(leftSide);
            return;
        } else {
            rightSide = mid - 1;
            console.log(rightSide);
            return;
        }
    }
    return -1;
};

console.log(binarySearch([1, 4, 4, 5, 5, 6, 63, 3], 3));