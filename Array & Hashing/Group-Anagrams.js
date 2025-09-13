// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]


//cach 1

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            let key = str.split('').sort().join('');
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }
        return Array.from(map.values());

    }
}


// cach 2:

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            let count = new Array(26).fill(0);
            let m = new Set

            for (let char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            // Tạo key từ mảng đếm, dùng dấu '#' để phân biệt số
            let key = count.join('#');

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
