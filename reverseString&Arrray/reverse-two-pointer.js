// 1. Code đảo ngược mảng số

let arrN = [1, 2, 3, 4, 5];

let left = 0;
let right = arrN.length - 1;

while (left < right) {
    // swap
    let temp = arrN[left];
    arrN[left] = arrN[right];
    arrN[right] = temp;

    left++;
    right--;
}

console.log(arrN); // Output: [5, 4, 3, 2, 1]

// 2. Code đảo ngược chuỗi

// Chuỗi trong JavaScript là immutable (không thay đổi trực tiếp được), 
// nên ta cần chuyển thành mảng ký tự, đảo ngược, rồi ghép lại:

let str = "minh hung tran huyen 9135";
let arrS = str.split(""); // tách thành mảng ký tự
console.log(arrS);

let l = 0;
let r = arrS.length - 1;

while (l < r) {
    let temp2 = arrS[l];
    arrS[l] = arrS[r];
    arrS[r] = temp2;
    l++;
    r--;
}
let reversed2 = arrS.join(""); // ghép lại thành chuỗi
console.log(reversed2);
// Output: 5319 neuyh nart gnuh hnim