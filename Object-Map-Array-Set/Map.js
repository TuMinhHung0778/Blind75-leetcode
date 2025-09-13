// Giống Object: lưu key → value.

// Nhưng key có thể là bất kỳ kiểu dữ liệu (string, number, object, array, function…).

// Duy trì thứ tự theo lúc được thêm vào.

let map = new Map();
map.set('name', 'Hung');
map.set(10, 'ten');
map.set([1, 2], 'array key');

console.log(map);
console.log(map.get('name'));
console.log(map.has(10));
console.log(map.size);

// 👉 Ưu điểm:

// Nhanh hơn khi cần thêm/xóa nhiều phần tử.

// Giữ nguyên thứ tự thêm vào.

// Key đa dạng (không giới hạn như Object).

// 👉 Nhược điểm:

// Cú pháp hơi dài hơn Object (set, get thay vì =).