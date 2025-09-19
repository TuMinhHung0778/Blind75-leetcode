// chuỗi → đảo ngược thành chuỗi mới
let k = 'minh hung tran huyen 9135';
let c = '';

for (let i = k.length - 1; i >= 0; i--) {
    c += k[i];  // lấy ký tự chứ không phải index
}

console.log(k);
console.log(c);
