// Valid Anagram

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s, t) {
//         let s1 = s.split('').sort().join('');
//         let t2 = t.split('').sort().join('');

//         if (s1 === s2) {
//             return true;
//         } else {
//             return false;
//         }
//         return s1 === t2
//     }
// }

// Cách tối ưu(HashMap / Frequency Count):

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        // Tạo ra một mảng có 26 ô, mỗi ô tượng trưng cho một chữ cái từ 'a' → 'z'.
        // Ban đầu tất cả đều bằng 0: [a=0, b=0, c=0, ..., z=0]
        let count = new Array(26).fill(0);

        // Duyệt qua từng ký tự trong chuỗi s
        for (let char of s) {
            // 'a'.charCodeAt(0) = 97
            count[char.charCodeAt(0) - 97]++;
        }

        // Duyệt qua từng ký tự trong chuỗi t
        for (let char of t) {
            count[char.charCodeAt(0) - 97]--;
            // Nếu bất kỳ số nào < 0 => ký tự này xuất hiện nhiều hơn trong t
            if (count[char.charCodeAt(0) - 97] < 0) return false;
        }

        // Nếu đi qua hết mà không sai -> là anagram
        return true;
    }
}
console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('c'.charCodeAt(0));
console.log('d'.charCodeAt(0));
console.log('e'.charCodeAt(0));
console.log('f'.charCodeAt(0));
console.log('g'.charCodeAt(0));
console.log('h'.charCodeAt(0));
console.log('i'.charCodeAt(0));
console.log('j'.charCodeAt(0));
console.log('k'.charCodeAt(0));
console.log('l'.charCodeAt(0));
console.log('m'.charCodeAt(0));
console.log('n'.charCodeAt(0));
console.log('o'.charCodeAt(0));
console.log('p'.charCodeAt(0));
console.log('q'.charCodeAt(0));
console.log('r'.charCodeAt(0));
console.log('s'.charCodeAt(0));
console.log('t'.charCodeAt(0));
console.log('u'.charCodeAt(0));
console.log('v'.charCodeAt(0));
console.log('w'.charCodeAt(0));
console.log('x'.charCodeAt(0));
console.log('y'.charCodeAt(0));
console.log('z'.charCodeAt(0));


// use Bubble Sort
// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Hoán đổi vị trí
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// use Bubble Sort
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }