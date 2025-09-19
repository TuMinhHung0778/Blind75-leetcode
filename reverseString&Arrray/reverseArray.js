// 1. mảng đảo ngược

let k = 'minh hung tran huyen 9135';
let c = [];

for (let i = k.length - 1; i >= 0; i--) {
    c.push(k[i]);
}

console.log(c);
// Output: ['5','3','1','9',' ','n','e','u','y', ...]

// 2. array số thì làm tương tự

let arr = [1, 2, 3, 4, 5];
let res = [];

for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
}

console.log(res);
// Output: [5, 4, 3, 2, 1]



