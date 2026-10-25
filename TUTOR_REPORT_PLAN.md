# 📚 Kế Hoạch Xây Dựng Web Gia Sư – Phiếu Đánh Giá Học Sinh

## Tổng Quan Dự Án

Xây dựng một ứng dụng web đơn trang (Single Page Application) dành cho gia sư, cho phép tạo phiếu đánh giá học sinh chi tiết với thông tin buổi học, tài chính và nhận xét tổng hợp. Phiếu đánh giá có thể xuất ra **PDF** hoặc **ảnh (PNG/JPG)** để gửi cho phụ huynh.

---

## 🎨 Thiết Kế & Phong Cách

### Bảng Màu Pastel
- **Primary**: `#A8D8EA` (xanh dương pastel nhạt)
- **Secondary**: `#FFD6E0` (hồng pastel)
- **Accent**: `#B5EAD7` (xanh lá pastel)
- **Warm**: `#FFDAC1` (cam pastel)
- **Purple**: `#C7CEEA` (tím pastel)
- **Background**: `#FAFAFA` (trắng ngà)
- **Text Dark**: `#4A4A6A` (tím đậm nhẹ)
- **Text Light**: `#8888AA`

### Typography
- Font chính: **Quicksand** hoặc **Nunito** (Google Fonts) – tròn, thân thiện
- Font phụ: **Playfair Display** cho tiêu đề trang trọng trong phiếu
- Kích thước: responsive, dễ đọc

### Phong Cách UI
- **Glassmorphism nhẹ**: card có `backdrop-filter: blur`, viền mờ
- **Soft shadows**: `box-shadow` pastel thay vì đen
- **Rounded corners**: `border-radius: 16px–24px`
- **Micro-animations**: hover, focus, transition mượt mà
- **Hand-drawn feel**: dùng border dashed/dotted tinh tế ở một số phần

---

## 📁 Cấu Trúc File

```
/
├── index.html          # Trang chính – Form nhập liệu + Preview
├── style.css           # Toàn bộ CSS
└── app.js              # Logic chính (thêm/xóa buổi, tính tiền, xuất file)
```

> **Thư viện dùng CDN** (không cần cài đặt):
> - `html2canvas` – Chụp HTML thành ảnh
> - `jsPDF` – Tạo PDF từ canvas
> - `Google Fonts` – Quicksand, Nunito, Playfair Display
> - `Font Awesome` – Icons

---

## 🖥️ Các Phần Giao Diện

### 1. Header
- Tên app: **"PhiếuGiaSư"** với icon sách
- Subtitle: "Tạo phiếu đánh giá học sinh chuyên nghiệp"
- Màu gradient pastel (xanh → tím nhạt)

### 2. Layout Chính
- **Desktop**: 2 cột – Form bên trái (55%), Preview bên phải (45%)
- **Mobile**: 1 cột – Form trên, Preview bên dưới (toggle hiện/ẩn)

---

## 📝 Form Nhập Liệu

### Section 1 – Thông Tin Học Sinh
| Trường | Kiểu | Bắt buộc |
|--------|------|----------|
| Tên học sinh | Text | ✅ |
| Lớp | Text | ✅ |
| Môn học | Text | ✅ |
| Tên phụ huynh | Text | |
| Gia sư phụ trách | Text | ✅ |
| Từ ngày (kỳ báo cáo) | Date | ✅ |
| Đến ngày (kỳ báo cáo) | Date | ✅ |

### Section 2 – Bảng Buổi Học (Bảng động)
Mỗi dòng = 1 buổi học. Các cột:

| Cột | Kiểu | Ghi chú |
|-----|------|---------|
| STT | Auto | Tự tăng |
| Ngày học | Date picker | |
| Giờ bắt đầu | Time picker | HH:MM |
| Số giờ | Number (0.5 bước) | VD: 1.5, 2 |
| Nội dung buổi học | Textarea | Tóm tắt kiến thức |
| Dặn dò / BTVN | Textarea | Bài tập về nhà |
| Học phí (VNĐ) | Number | VD: 150000 |

**Nút hành động:**
- ➕ **"Thêm buổi học"** – Thêm dòng mới
- 🗑️ Icon xóa ở mỗi dòng – Xóa dòng đó

### Section 3 – Tổng Kết Tài Chính
Tự động tính từ bảng buổi học:
- Tổng số buổi học
- Tổng số giờ dạy
- Tổng học phí (format: 1.500.000 đ)
- Tiền đã thanh toán (input thủ công)
- Tiền còn lại = Tổng - Đã TT (tự tính, highlight đỏ nếu > 0)

### Section 4 – Đánh Giá Tổng Hợp (1 lần cho cả kỳ)
Mỗi tiêu chí gồm: **Star rating (1–5 sao)** + **Ô nhận xét text**

| Tiêu chí |
|----------|
| 1. Thái độ học tập |
| 2. Tinh thần tự giác |
| 3. Kết quả học tập |
| 4. Sự tiến bộ |

Thêm 2 textarea lớn:
- **Nhận xét chung**: Tổng quan về học sinh
- **Dặn dò phụ huynh**: Nhắn gửi đến ba/mẹ

### Section 5 – Tùy Chỉnh Phiếu
- Upload ảnh/logo (tùy chọn, preview ảnh trước)
- Chọn theme màu phiếu:
  - 🩵 Xanh dương (mặc định)
  - 🩷 Hồng
  - 💚 Xanh lá
  - 💜 Tím
- Nút **"Cập nhật xem trước"** (hoặc realtime update)

### Nút Xuất File
- 📄 **Xuất PDF** (nút primary)
- 🖼️ **Xuất Ảnh PNG** (nút secondary)
- 💾 **Lưu tạm** (lưu vào LocalStorage)
- 🗑️ **Tạo mới** (xóa form, hỏi xác nhận)

---

## 📄 Template Phiếu Đánh Giá

### Layout A4 (794px × 1123px)

```
┌──────────────────────────────────────────────┐
│  [LOGO]    PHIẾU ĐÁNH GIÁ HỌC SINH          │
│            Kỳ: DD/MM/YYYY – DD/MM/YYYY       │
├──────────────────────────────────────────────┤
│  📋 THÔNG TIN HỌC SINH                       │
│  ┌──────────────────────────────────────┐    │
│  │ Họ tên: ___    Lớp: ___  Môn: ___   │    │
│  │ Phụ huynh: ___  Gia sư: ___         │    │
│  └──────────────────────────────────────┘    │
├──────────────────────────────────────────────┤
│  📅 LỊCH HỌC CHI TIẾT                        │
│  ┌───┬──────────┬──────┬───────┬──────────┐  │
│  │STT│ Ngày     │ Giờ  │ Số giờ│ Nội dung │  │
│  │   │          │      │       │ + Dặn dò │  │
│  └───┴──────────┴──────┴───────┴──────────┘  │
├──────────────────────────────────────────────┤
│  💰 TỔNG KẾT HỌC PHÍ                         │
│  Tổng buổi: __  │  Tổng giờ: __             │
│  Tổng tiền: ____________ đ                   │
│  Đã thanh toán: ________ đ                  │
│  Còn lại:       ________ đ                  │
├──────────────────────────────────────────────┤
│  ⭐ ĐÁNH GIÁ TỔNG HỢP                        │
│  Thái độ:   ⭐⭐⭐⭐☆  [nhận xét]            │
│  Tự giác:   ⭐⭐⭐⭐⭐  [nhận xét]            │
│  Kết quả:   ⭐⭐⭐⭐☆  [nhận xét]            │
│  Tiến bộ:   ⭐⭐⭐⭐☆  [nhận xét]            │
│                                              │
│  Nhận xét chung:                             │
│  [text area content]                         │
│                                              │
│  Dặn dò phụ huynh:                          │
│  [text area content]                         │
├──────────────────────────────────────────────┤
│  Ngày lập: __/__/____      [Chữ ký gia sư]  │
└──────────────────────────────────────────────┘
```

### Chi Tiết Style Phiếu
- **Header phiếu**: gradient pastel theo theme, tên phiếu font Playfair Display
- **Sections**: chia bởi border nhẹ màu pastel, có icon emoji/SVG
- **Bảng lịch học**: zebra striping, màu dòng xen kẽ pastel nhạt
- **Stars**: SVG sao đặc/rỗng, màu vàng cam `#FFB347`
- **Tài chính**: layout grid 2 cột, số tiền in đậm
- **Footer**: thông tin gia sư, ngày, placeholder chữ ký đường kẻ

---

## ⚙️ Logic JavaScript

### Quản Lý Dữ Liệu
```javascript
const state = {
  studentInfo: { name, grade, subject, parent, tutor, fromDate, toDate },
  sessions: [{ id, date, time, hours, content, homework, fee }],
  evaluation: {
    attitude: { stars, comment },
    selfStudy: { stars, comment },
    result: { stars, comment },
    progress: { stars, comment },
    generalComment: '',
    parentNote: ''
  },
  settings: { theme, logoUrl, amountPaid }
}
```

### Tính Toán Tự Động
```javascript
// Gọi mỗi khi session thay đổi
function recalculate() {
  totalSessions = state.sessions.length
  totalHours = sessions.reduce((s, x) => s + x.hours, 0)
  totalFee = sessions.reduce((s, x) => s + x.fee, 0)
  remaining = totalFee - state.settings.amountPaid
}
```

### Xuất File
```javascript
// Xuất PDF
async function exportPDF() {
  showLoading()
  const canvas = await html2canvas(previewEl, { scale: 2, useCORS: true })
  const pdf = new jsPDF('p', 'mm', 'a4')
  // Xử lý multipage nếu canvas cao hơn A4
  pdf.addImage(canvas, 'PNG', 0, 0, 210, height)
  pdf.save(`PhieuDanhGia_${studentName}_${date}.pdf`)
  hideLoading()
}

// Xuất PNG
async function exportImage() {
  showLoading()
  const canvas = await html2canvas(previewEl, { scale: 3, useCORS: true })
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob)
    downloadLink(url, `PhieuDanhGia_${studentName}_${date}.png`)
  })
  hideLoading()
}
```

### LocalStorage
```javascript
// Tự động lưu (debounce 500ms)
const saveDebounced = debounce(() => {
  localStorage.setItem('tutorapp_v1', JSON.stringify(state))
}, 500)

// Khôi phục khi load trang
window.onload = () => {
  const saved = localStorage.getItem('tutorapp_v1')
  if (saved) {
    // Hiện toast: "Tìm thấy dữ liệu cũ. Khôi phục không?"
    showRestorePrompt(JSON.parse(saved))
  }
}
```

---

## 🎯 UX Chi Tiết

### Micro-Animations
- Input focus: `border-color` transition + subtle `box-shadow` pastel glow
- Star rating: sao chuyển màu mượt khi hover/click
- Thêm dòng bảng: slide-down animation
- Xóa dòng: fade-out + collapse animation
- Nút xuất file: loading spinner trong nút, disable trong lúc xử lý
- Toast notification: slide-in từ góc phải

### Trạng Thái Trống (Empty State)
- Khi chưa có buổi học nào: icon lịch + text "Nhấn + Thêm buổi học để bắt đầu"
- Preview khi chưa nhập tên: "Nhập thông tin để xem trước phiếu"

### Validation
- Highlight đỏ input bắt buộc khi bỏ trống và bấm xuất
- Toast lỗi: "Vui lòng điền đủ thông tin bắt buộc"
- Ngày kết thúc không được nhỏ hơn ngày bắt đầu

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| ≥ 1280px | Form 55% + Preview 45% cùng màn hình |
| 1024px – 1279px | Form 60% + Preview 40% |
| 768px – 1023px | 1 cột, Preview ẩn, toggle bằng nút |
| < 768px | 1 cột, bảng scroll ngang, bottom bar xuất file |

---

## 🔧 Thư Viện CDN

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

<!-- Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<!-- html2canvas (render HTML → canvas) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

<!-- jsPDF (canvas → PDF) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```

---

## ✅ Checklist Hoàn Thành

### Giao Diện
- [ ] Header gradient pastel đẹp
- [ ] Form layout 2 cột desktop, 1 cột mobile
- [ ] Tất cả section có icon và label rõ ràng
- [ ] Input styling pastel focus
- [ ] Bảng buổi học thêm/xóa dòng mượt mà
- [ ] Star rating interactive với animation
- [ ] Preview phiếu hiển thị đúng dữ liệu
- [ ] Responsive đủ 3 breakpoint

### Tính Năng
- [ ] Tính tổng tiền/buổi/giờ tự động
- [ ] Tính tiền còn lại
- [ ] Đánh giá sao + nhận xét
- [ ] LocalStorage save/restore
- [ ] Xuất PDF (multipage nếu cần)
- [ ] Xuất ảnh PNG
- [ ] Loading state khi xuất
- [ ] Validation + toast notification
- [ ] Nút tạo mới có confirm dialog

### Chất Lượng
- [ ] Font tiếng Việt hiển thị đúng trong file xuất
- [ ] Ảnh xuất ra sắc nét (scale 2x hoặc 3x)
- [ ] Phiếu PDF đúng tỷ lệ A4
- [ ] Không bị lỗi CORS khi xuất ảnh upload

---

## 📝 Ghi Chú Quan Trọng

1. **Multipage PDF**: Nếu bảng lịch học nhiều dòng, canvas sẽ cao hơn A4. Cần tính toán chia trang bằng cách slice canvas theo chiều cao trang.

2. **Font trong PDF**: html2canvas render toàn bộ DOM kể cả font, nên tiếng Việt không bị lỗi. Chỉ cần đảm bảo `useCORS: true` và font đã load xong.

3. **Ảnh upload (logo)**: Dùng `FileReader` để đọc file thành base64, lưu vào state và hiển thị inline. html2canvas không bị CORS với ảnh base64.

4. **Performance Preview**: Realtime update preview có thể lag nếu nhiều dữ liệu. Dùng `requestAnimationFrame` hoặc debounce 200ms.

5. **LocalStorage limit**: ~5MB, đủ cho dữ liệu text. Ảnh logo lưu dạng base64 có thể lớn, cần compress trước khi lưu.

6. **Naming file xuất**: `PhieuDanhGia_NguyenVanA_2024-10-25.pdf` – dùng tên học sinh + ngày hiện tại.

---

*Kế hoạch v1.0 – Tạo: 25/10/2026*
*Sẵn sàng để Gemini đọc và triển khai.*
