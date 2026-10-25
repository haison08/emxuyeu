# 📚 Kế Hoạch & Tài Liệu Thiết Kế Web Gia Sư – emxuyeu

> **Tên ứng dụng:** `emxuyeu` (Sổ Phiếu Đánh Giá Học Sinh Dành Cho Gia Sư)  
> **Phong cách:** Pastel thẩm mỹ, tinh giản, thân thiện, dễ thương, sẵn sàng xuất ảnh/PDF gửi phụ huynh.

---

## 📌 LỊCH SỬ THAY ĐỔI & CẬP NHẬT GIAO DIỆN (CHANGELOG)

### 🔄 Cập nhật Version 2.0 (Theo yêu cầu người dùng)

1. **Loại bỏ các thông tin rườm rà (Tinh giản phiếu)**:
   - ❌ **Bỏ dòng thông tin phụ:** "Kính gửi phụ huynh", "Gia sư phụ trách", "Số điện thoại liên hệ" (cả trong Form nhập và trên Phiếu báo cáo). Chỉ giữ lại: **Họ tên học sinh**, **Lớp**, **Môn học**, **Kỳ học**, và Avatar/Logo tùy chọn.
   - ❌ **Bỏ ô "STK chuyển khoản / Ghi chú thanh toán"**: Không còn hiển thị ô thông tin tài khoản ngân hàng.
   - ❌ **Bỏ ô "Đã thanh toán" & "Còn lại"**: Phần tổng kết học phí bây giờ chỉ giữ đúng 3 số liệu trọng tâm: **Tổng số buổi**, **Tổng thời lượng (giờ)**, và **Tổng tiền học phí**.
   - ❌ **Bỏ phần chữ ký rườm rà ở Footer:** Bỏ chữ ký gia sư điện tử ("GIA SƯ PHỤ TRÁCH", chữ ký bút dạ, tên gia sư).
   - ❌ **Bỏ dòng chữ thương hiệu ở Footer:** Bỏ dòng "Ứng dụng tạo phiếu gia sư emxuyeu 🌸 / Chúc con luôn chăm ngoan...". Phần chân phiếu giờ chỉ còn **Ngày tháng lập phiếu** trang trọng, sạch sẽ.

2. **Cải tiến danh sách buổi học (Thay đổi cốt lõi)**:
   - ❌ **Bỏ cột "Nội dung buổi học" và "Dặn dò / Bài tập về nhà"**: Không còn cần gia sư phải ghi chép dài dòng từng buổi.
   - ⏱️ **Thay đổi giờ học thành Khung giờ (Bắt đầu – Kết thúc)**:
     - Thêm ô **Giờ bắt đầu** (VD: `18:00`) và ô **Giờ kết thúc** (VD: `20:00`).
     - Tự động tính số giờ học từ khoảng thời gian bắt đầu và kết thúc (cho phép chỉnh tay số giờ nếu cần).
     - Trên phiếu báo cáo, hiển thị cột **Khung Giờ Học** dạng huy hiệu sang trọng: `🕒 18:00 – 20:00`.
     - Bảng buổi học gồm 5 cột chuẩn:
       1. **STT** (1, 2, 3...)
       2. **Ngày học** (`DD/MM/YYYY`)
       3. **Khung giờ học** (`18:00 – 20:00`)
       4. **Thời lượng** (`2 giờ`)
       5. **Học phí** (`200.000 đ`)

3. **Giữ nguyên tính năng đánh giá tổng hợp 1 lần**:
   - Đánh giá sao ⭐ (1 - 5 sao) cho 4 tiêu chí: Thái độ học tập, Tinh thần tự giác, Tiếp thu kiến thức, Mức độ tiến bộ.
   - Nhận xét chung toàn kỳ.
   - Dặn dò & lời nhắn gửi phụ huynh.
   - Huy hiệu động viên: *Tiến bộ vượt bậc, Ngôi sao chăm chỉ, Học tập xuất sắc, Nỗ lực đáng khen*.

---

## 🎨 Bảng Màu Pastel

- **🌸 Sakura (Mặc định)**: Nền kem đào `#fff8fa`, màu chủ đạo `#f28baf`, viền pastel `#f5d5e2`.
- **☁️ Sky**: Xanh mây trời `#6ea8fe`, nền `#f4f8fd`, viền `#d2e4fc`.
- **🌿 Mint**: Bạc hà dịu êm `#51b88e`, nền `#f5fbf8`, viền `#c8edd9`.
- **🍯 Butter**: Bơ & Mật ong ấm áp `#e69d45`, nền `#fffbf5`, viền `#fae2c0`.
- **💜 Lavender**: Tím mộng mơ `#9d84e4`, nền `#f9f7fd`, viền `#e2d9fb`.

---

## 📁 Cấu Trúc Mã Nguồn

```
/
├── index.html          # Trang chính – Giao diện 2 cột (Nhập liệu & Xem trước)
├── style.css           # Toàn bộ CSS phong cách pastel tinh tế
├── app.js              # Quản lý State, tính toán giờ/tiền, xuất PNG & PDF
├── package.json        # Thông tin dự án
├── vercel.json         # Cấu hình tối ưu deploy Vercel
├── README.md           # Hướng dẫn sử dụng & triển khai
└── TUTOR_REPORT_PLAN.md # Kế hoạch & changelog
```

---

## 🖥️ Cấu Trúc Form Nhập Liệu & Preview

### 1. Thông Tin Học Sinh
| Trường | Kiểu | Bắt buộc | Ghi chú |
|---|---|---|---|
| Họ tên học sinh | Text | ✅ | Hiển thị nổi bật trên phiếu |
| Lớp / Khối học | Text | ✅ | VD: Lớp 9A2 |
| Môn học | Text | ✅ | VD: Toán Học |
| Kỳ học (Từ ngày - Đến ngày) | Date | ✅ | Khoảng thời gian theo dõi |
| Avatar / Logo | File | Tùy chọn | Upload ảnh đại diện học sinh hoặc logo |

### 2. Danh Sách Các Buổi Học (Động)
| Cột | Kiểu | Tự động tính | Ghi chú |
|---|---|---|---|
| STT | Tự tăng | Có | Đánh số thứ tự buổi |
| Ngày học | Date picker | Không | Ngày diễn ra buổi học |
| Giờ bắt đầu | Time (HH:MM) | Không | VD: 18:00 |
| Giờ kết thúc | Time (HH:MM) | Không | VD: 20:00 |
| Thời lượng | Number | Có (tính từ Bắt đầu & Kết thúc) | Số giờ (VD: 2 giờ) |
| Học phí | Number | Không | Học phí của buổi đó |

### 3. Tổng Kết Học Phí (Tự Động)
- **Tổng số buổi học**: Tự đếm số dòng buổi học.
- **Tổng thời lượng**: Tự cộng dồn số giờ dạy.
- **Tổng tiền học phí**: Tự cộng dồn học phí các buổi (format định dạng VNĐ: `1.600.000 đ`).

### 4. Đánh Giá Tổng Hợp Toàn Kỳ (1 lần)
- **Thái độ học tập**: 1–5 sao ⭐ + ô nhận xét ngắn
- **Tinh thần tự giác**: 1–5 sao ⭐ + ô nhận xét ngắn
- **Tiếp thu kiến thức**: 1–5 sao ⭐ + ô nhận xét ngắn
- **Mức độ tiến bộ**: 1–5 sao ⭐ + ô nhận xét ngắn
- **Nhận xét chung toàn kỳ**: Textarea
- **Dặn dò & Lời nhắn phụ huynh**: Textarea
- **Huy hiệu động viên**: Dropdown chọn danh hiệu
- **Ngày lập phiếu**: Date picker

---

## 📄 Template Phiếu Báo Cáo Gửi Phụ Huynh (Layout A4)

```
┌────────────────────────────────────────────────────────┐
│  🌸 PHIẾU ĐÁNH GIÁ HỌC TẬP & TỔNG KẾT HỌC PHÍ 🌸       │
│                                                        │
│  [AVATAR]  PHIẾU ĐÁNH GIÁ HỌC SINH   [🚀 TIẾN BỘ...]   │
│            Kỳ học: 01/10/2026 - 25/10/2026             │
├────────────────────────────────────────────────────────┤
│  👤 Họ tên: Nguyễn Bảo Châu   Lớp: 9A2   Môn: Toán Học │
├────────────────────────────────────────────────────────┤
│  📅 DANH SÁCH CÁC BUỔI HỌC (8 Buổi)                    │
│  ┌───┬────────────┬────────────────┬──────────┬───────┐│
│  │STT│ Ngày Học   │ Khung Giờ Học  │Thời Lượng│Học Phí││
│  ├───┼────────────┼────────────────┼──────────┼───────┤│
│  │ 1 │ 02/10/2026 │ 🕒 18:00–20:00 │  2 giờ   │200.000││
│  │ 2 │ 05/10/2026 │ 🕒 18:00–20:00 │  2 giờ   │200.000││
│  │...│ ...        │ ...            │  ...     │...    ││
│  └───┴────────────┴────────────────┴──────────┴───────┘│
├────────────────────────────────────────────────────────┤
│  💰 TỔNG KẾT HỌC PHÍ                                   │
│  ┌────────────────┬────────────────┬─────────────────┐ │
│  │  Tổng buổi: 8  │ Tổng giờ: 16h  │Tổng tiền: 1.6tr │ │
│  └────────────────┴────────────────┴─────────────────┘ │
├────────────────────────────────────────────────────────┤
│  ⭐ ĐÁNH GIÁ TỔNG HỢP TOÀN KỲ                          │
│  - Thái độ học tập:   ⭐⭐⭐⭐⭐  (Nghiêm túc, lễ phép)   │
│  - Tinh thần tự giác: ⭐⭐⭐⭐⭐  (Chủ động hỏi bài)      │
│  - Tiếp thu kiến thức:⭐⭐⭐⭐☆  (Nắm vững công thức)    │
│  - Mức độ tiến bộ:    ⭐⭐⭐⭐⭐  (Tiến bộ vượt trội)     │
│                                                        │
│  💬 Nhận xét chung:                                    │
│  Em Châu có tư duy tốt, khắc phục được việc vội vàng...│
│                                                        │
│  💌 Dặn dò & Lời nhắn phụ huynh:                       │
│  Nhờ gia đình tiếp tục đồng hành và động viên con...   │
├────────────────────────────────────────────────────────┤
│       📅 Ngày 25 tháng 10 năm 2026                     │
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Xuất File & Deploy Vercel

1. **Xuất ảnh PNG chất lượng cao**:
   - Dùng `html2canvas` với `scale: 2.5`, nét gấp 2.5 lần màn hình thường, gửi Zalo không vỡ hình.
2. **Xuất PDF khổ A4**:
   - Dùng `jsPDF` chuẩn kích thước A4 (210mm x 297mm), hỗ trợ nhiều trang nếu số lượng buổi học dài.
3. **Deploy Vercel**:
   - Dự án là Static Web thuần 100%, có sẵn `vercel.json`. Deploy bằng GitHub hoặc `npx vercel` chỉ mất 5 giây.
