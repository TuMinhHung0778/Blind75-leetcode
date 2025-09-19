Tuyệt vời, Hung! Hàm `.map()` là một trong những công cụ mạnh mẽ nhất khi làm việc với mảng trong JavaScript và đặc biệt hữu ích trong React để hiển thị danh sách. Dưới đây là phần giải thích dễ hiểu và chi tiết nhất dành cho bạn 👇

---

## 🧠 1. Cấu trúc hàm `.map()` trong JavaScript

```js
array.map((element, index, array) => {
  // xử lý và return giá trị mới
})
```

- `element`: phần tử hiện tại trong mảng
- `index`: vị trí của phần tử (tùy chọn)
- `array`: toàn bộ mảng gốc (tùy chọn)
- Hàm `.map()` sẽ **trả về một mảng mới** với số lượng phần tử giống mảng gốc, nhưng giá trị được xử lý qua hàm `return`.

### 📌 Ví dụ đơn giản:
```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

---

## ⚛️ 2. Cách dùng `.map()` trong ReactJS

Trong React, `.map()` thường dùng để **render danh sách component** từ một mảng dữ liệu.

### 🧩 Ví dụ: hiển thị danh sách người dùng

```jsx
const users = [
  { id: 1, name: "Minh Hùng" },
  { id: 2, name: "Tuấn Anh" },
  { id: 3, name: "Lan Phương" }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 🔑 Lưu ý:
- **Phải có `key` duy nhất** cho mỗi phần tử khi render danh sách để React tối ưu hiệu suất.
- `.map()` giúp viết code ngắn gọn, dễ đọc, thay vì dùng vòng lặp `for`.

---

## 🛠️ 3. Ứng dụng thực tế trong quiz app

Giả sử bạn có danh sách câu hỏi:

```js
const questions = [
  { id: 1, text: "React là gì?" },
  { id: 2, text: "JSX là gì?" }
];
```

Bạn có thể dùng `.map()` để render component `Quiz`:

```jsx
function QuizList() {
  return (
    <div>
      {questions.map(q => (
        <Quiz key={q.id} question={q.text} />
      ))}
    </div>
  );
}
```

---

Muốn mình giúp bạn viết component `Quiz.jsx` hoàn chỉnh không? Hay bạn muốn thêm tính năng như chọn đáp án, tính điểm, hoặc random câu hỏi? 😄
