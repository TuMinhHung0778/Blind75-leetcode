let str = 'I am hung';

let s1 = str.split("").reverse().join('');
let s2 = str.split(" ").reverse();
let s3 = str.split("").reverse();

console.log(s1);
console.log(s2);
console.log(s3);


// forEach
let z = 'minh hung tran huyen';
let reversedZ = z.split(" ").reverse();
reversedZ.forEach((element) => {
    console.log(element);
});

reversedZ;

let k = 'minh hung tran huyen 9135'
let c = [];
for (let i = k.length -1 ; i >= 0; i--) {
    c.push(i);
}
console.log(c);