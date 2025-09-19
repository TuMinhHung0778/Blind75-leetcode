// Array.from()! Đây là một công cụ mạnh mẽ để chuyển đổi các đối tượng giống mảng hoặc 
// các đối tượng có thể lặp (iterable) thành mảng thực sự.

// Cấu trúc cú pháp
// Array.from(arrayLikeOrIterable[, mapFunction[, thisArg]])
// - arrayLikeOrIterable: Đối tượng bạn muốn chuyển thành mảng. Có thể là chuỗi, Set, Map, hoặc một đối tượng có thuộc tính length và các chỉ số như mảng.
// - mapFunction (tùy chọn): Hàm được gọi trên mỗi phần tử trước khi thêm vào mảng mới.
// - thisArg (tùy chọn): Giá trị this dùng trong mapFunction.


// Cách dùng phổ biến

// 1. Chuyển chuỗi thành mảng
let s = Array.from('hello'); // chuyển string thành array
console.log(s);


// 2. Tạo mảng từ đối tượng giống mảng
const obj = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.from(obj));


// 3. Dùng mapFunction để xử lý phần tử
let t = Array.from([1, 2, 3], x => x * 2)
console.log(t);


// 4. Tạo mảng số từ 0 đến n-1
const range = n => Array.from({ length: n }, (_, i) => i);
console.log(range(5));; // ➜ [0, 1, 2, 3, 4]


// 5. Tạo mảng n phần tử giống nhau
let c = Array.from({ length: 3 }, () => 'x');
console.log(c);