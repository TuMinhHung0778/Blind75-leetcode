Rồi 👍 mình sẽ hệ thống lại cho bạn, vì `a--` và `--a` thường gây nhầm lẫn:

---

## 1. `z = a--` (**postfix decrement**)

* Cách hoạt động:

  1. Lấy **giá trị hiện tại của `a`** gán cho `z`.
  2. Sau đó **giảm `a` đi 1**.

Ví dụ:

```js
let a = 5;
let z = a--;
console.log("z =", z); // 5  (giá trị cũ của a)
console.log("a =", a); // 4  (giảm sau)
```

👉 Tương đương:

```js
let z = a;
a = a - 1;
```

---

## 2. `z = --a` (**prefix decrement**)

* Cách hoạt động:

  1. **Giảm `a` đi 1 trước**.
  2. Trả về giá trị mới của `a` gán cho `z`.

Ví dụ:

```js
let a = 5;
let z = --a;
console.log("z =", z); // 4 (giá trị mới)
console.log("a =", a); // 4
```

👉 Tương đương:

```js
a = a - 1;
let z = a;
```

---

## 📌 So sánh tổng quát

| Biểu thức | Giá trị gán cho `z`     | Giá trị cuối của `a` | Tương đương code thủ công |
| --------- | ----------------------- | -------------------- | ------------------------- |
| `z = a--` | Giá trị **cũ** của `a`  | `a - 1`              | `let z = a; a = a - 1;`   |
| `z = --a` | Giá trị **mới** của `a` | `a - 1`              | `a = a - 1; let z = a;`   |

---

👉 Cách nhớ:

* **`--a` (prefix)**: giảm trước, dùng sau.
* **`a--` (postfix)**: dùng trước, giảm sau.

---
