// Lưu tập hợp các giá trị không trùng lặp.

// Ví dụ:

let set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}

set.add(4);
console.log(set);

console.log(set.has(2)); // true

set.delete(1);
console.log(set);


// 👉 Ưu điểm:

// Loại bỏ trùng lặp dễ dàng.

// Tìm kiếm (has) nhanh.

// 👉 Nhược điểm:

// Chỉ lưu value, không có key như Map.