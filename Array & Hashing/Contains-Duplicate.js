// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false


class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // Cách 1: Brute Force
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    // Cách 2: Dùng Set
    hasDuplicate(nums) {
        let seen = new Set(); // lưu các số đã gặp
        for (let num in nums) {
            if (seen.has(num)) {
                return true; // đã thấy các num trước đó
            }
            seen.add(num) // thêm num vào Set
        }
        return false; // không có số trùng
    }

    // TÓM GỌN VỀ Ý TƯỞNG THUẬT TOÁN - Cách tối ưu (HashSet – dùng cấu trúc dữ liệu Set) :
    /**
     * 1. Duyệt từng số, đưa vào Set.
     * 2. Nếu số đó đã có trong Set → true.
     * 3. Duyệt hết mảng mà không trùng → false.
     * 4. Độ phức tạp: O(n) trung bình.
     */
}
