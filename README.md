# 🌸 emxuyeu - Sổ Phiếu Đánh Giá Học Sinh Dành Cho Gia Sư

Ứng dụng web dành riêng cho gia sư để tạo phiếu đánh giá học sinh, theo dõi danh sách các buổi học và tổng kết học phí. Giao diện thiết kế theo phong cách **Pastel** nhẹ nhàng, tinh giản, thân thiện, không mang cảm giác "AI công nghiệp".

Phiếu có thể xuất nhanh thành **Ảnh (PNG)** độ phân giải cao gửi Zalo/Messenger cho phụ huynh hoặc file **PDF (khổ A4)** chuẩn để in ấn.

---

## ✨ Tính Năng & Điểm Cải Tiến Mới Nhất

1. **Thông tin học sinh tinh giản**:
   - Tên học sinh, Lớp / Khối học, Môn học.
   - Khoảng thời gian kỳ học (từ ngày - đến ngày).
   - Tùy chọn tải lên ảnh đại diện / avatar hoặc logo gia sư.

2. **Danh sách các buổi học với Khung giờ học linh hoạt**:
   - Thêm / Xóa / Nhân bản buổi học dễ dàng.
   - Ghi nhận: **Ngày học**, **Giờ bắt đầu** và **Giờ kết thúc** (VD: `18:00 – 20:00`).
   - Tự động tính thời lượng buổi học theo số giờ.
   - Nhập học phí từng buổi.
   - *Đã loại bỏ phần nội dung và dặn dò bài tập về nhà theo từng buổi để phiếu gọn gàng, thanh thoát hơn.*

3. **Tự động tổng kết học phí**:
   - Tự động cộng dồn: **Tổng số buổi**, **Tổng thời lượng (giờ)**, **Tổng tiền học phí toàn kỳ**.

4. **Đánh giá tổng hợp toàn kỳ (1 lần duy nhất)**:
   - Chấm điểm sao (1 - 5 sao ⭐) cho 4 tiêu chí cốt lõi:
     - Thái độ học tập (nghiêm túc, tập trung).
     - Tinh thần tự giác (chủ động học tập và hỏi bài).
     - Tiếp thu kiến thức & Kết quả học tập.
     - Mức độ tiến bộ so với đầu kỳ.
   - Có ô nhận xét riêng cho từng tiêu chí.
   - Nhận xét tổng quan của gia sư và lời dặn dò, đồng hành gửi phụ huynh.
   - Huy hiệu / danh hiệu động viên: *Tiến bộ vượt bậc, Ngôi sao chăm chỉ, Học tập xuất sắc, Nỗ lực đáng khen*.
   - Hiển thị ngày tháng lập phiếu trang trọng.

5. **5 Bảng màu Pastel ngọt ngào**:
   - 🌸 **Sakura**: Hồng đào dịu dàng
   - ☁️ **Sky**: Xanh mây trời thanh lịch
   - 🌿 **Mint**: Bạc hà mát mắt
   - 🍯 **Butter**: Bơ & Mật ong ấm áp
   - 💜 **Lavender**: Tím oải hương mộng mơ

6. **Xuất File chất lượng cao**:
   - **Tải ảnh PNG**: Chụp trực tiếp từ canvas với độ sắc nét gấp 2.5 lần, gửi Zalo/Messenger sắc nét từng chữ.
   - **Tải PDF A4**: Chuẩn khổ giấy A4, hỗ trợ tự động ngắt trang nếu danh sách buổi học dài.
   - **Hiển thị tiếng Việt 100% chuẩn xác**: Render từ font Quicksand và Playfair Display.

7. **Lưu trữ tiện lợi**:
   - Tự động lưu mọi thay đổi vào `localStorage`. Khi mở lại trang web, dữ liệu gần nhất sẽ được khôi phục ngay lập tức.
   - Nút **"Dữ liệu mẫu"**: Nạp sẵn một phiếu hoàn chỉnh chỉ với 1 cú click.

---

## 🚀 Hướng Dẫn Deploy Lên Vercel

Dự án là một **Static Web App** thuần (HTML5, CSS3, JavaScript ES6), không cần cài đặt Node modules hay build phức tạp, tốc độ tải tức thì.

### Cách 1: Deploy qua GitHub & Vercel Dashboard (Khuyên dùng)
1. Đẩy mã nguồn lên GitHub:
   ```bash
   git add .
   git commit -m "refactor: simplify layout, add time range start-end, update changelog"
   git push origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập.
3. Chọn **"Add New..."** ➔ **"Project"**.
4. Chọn repo GitHub `emxuyeu` vừa tạo.
5. Ở phần cấu hình: Giữ nguyên mặc định (Framework Preset: *Other*), nhấn **"Deploy"**.
6. Web sẽ online trong vòng 5 giây với tên miền miễn phí dạng `emxuyeu.vercel.app`!

### Cách 2: Deploy trực tiếp bằng Vercel CLI
```bash
npx vercel
```
Làm theo các bước hỏi đáp nhanh trên terminal, Vercel sẽ cấp link deploy ngay lập tức.

---

## 💻 Chạy Thử Trên Máy (Local)
Mở trình duyệt tại đường link server local đang chạy:
👉 **`http://localhost:8085`**

---

© 2026 **emxuyeu** - Thiết kế dành riêng cho gia sư tận tâm.
