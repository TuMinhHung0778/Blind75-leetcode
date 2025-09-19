// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        // B1. Đếm số lần xuất hiện của từng số
        // dem freqMap = { 1:1, 2:2, 3:3 }
        for (let num of nums) {
            if (!map.has(num)) {
                map.set(num, 1);
            } else {
                map.set(num, map.get(num) + 1);
            }
        }

        // B2. Tạo bucket: mảng n+1 ngăn rỗng 
        let n = nums.length;
        let bucket = Array.from({ length: n + 1 }, () => { });

        // B3. Đưa từng số vào ngăn đúng với tần suất của nó
        for (let [num, freq] of map.entries()) {
            bucket[freq].push(num);
        }

        // B4. Duyệt từ ngăn nhiều nhất xuống ít nhất để lấy k phần tử
        let result = [];
        for (let i = n; i >= 0 && result.length < k; i--) {
            result.push(...bucket[i])
        }

        return result.slice(0, k); // chỉ lấy đúng k phần tử

    }
}


