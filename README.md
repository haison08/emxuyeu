# 🌸 emxuyeu - Sổ Phiếu Đánh Giá Học Sinh Dành Cho Gia Sư

Ứng dụng web dành riêng cho gia sư để tạo phiếu đánh giá học sinh, theo dõi nhật ký các buổi học và tổng kết học phí. Giao diện thiết kế theo phong cách **Pastel** nhẹ nhàng, tinh tế, thân thiện, không mang cảm giác "AI công nghiệp".

Phiếu có thể xuất nhanh thành **Ảnh (PNG)** độ phân giải cao gửi Zalo/Messenger cho phụ huynh hoặc file **PDF (khổ A4)** chuẩn để in ấn.

---

## ✨ Tính Năng Nổi Bật

1. **Thông tin học sinh & khóa học**:
   - Tên học sinh, lớp, môn học, kính gửi phụ huynh, gia sư phụ trách, số điện thoại liên hệ.
   - Khoảng thời gian kỳ học (từ ngày - đến ngày).
   - Tùy chọn tải lên ảnh đại diện / avatar hoặc logo gia sư.

2. **Nhật ký chi tiết các buổi học (Dynamic Table)**:
   - Thêm / Xóa / Nhân bản buổi học dễ dàng.
   - Ghi chú: Ngày học, giờ học, thời lượng (giờ), nội dung bài học, dặn dò & bài tập về nhà, học phí từng buổi.

3. **Tự động tính toán tài chính & học phí**:
   - Tự động cộng dồn: Tổng số buổi, tổng số giờ dạy, tổng học phí toàn kỳ.
   - Nhập tiền đã thanh toán ➔ Tự động tính số tiền còn lại.
   - Thêm ghi chú tài khoản ngân hàng / phương thức thanh toán.

4. **Đánh giá tổng hợp toàn kỳ (1 lần duy nhất)**:
   - Chấm điểm sao (1 - 5 sao ⭐) cho 4 tiêu chí cốt lõi:
     - Thái độ học tập (nghiêm túc, tập trung).
     - Tinh thần tự giác (làm bài về nhà, tích cực hỏi bài).
     - Tiếp thu kiến thức & Kết quả học tập.
     - Mức độ tiến bộ so với đầu kỳ.
   - Có ô nhận xét riêng cho từng tiêu chí.
   - Nhận xét tổng quan của gia sư và lời dặn dò, định hướng gửi phụ huynh.
   - Huy hiệu / danh hiệu động viên: *Ngôi sao chăm chỉ, Tiến bộ vượt bậc, Học tập xuất sắc, Nỗ lực đáng khen*.
   - Chữ ký gia sư viết tay nghệ thuật.

5. **5 Bảng màu Pastel ngọt ngào**:
   - 🌸 **Sakura**: Hồng đào dịu dàng
   - ☁️ **Sky**: Xanh mây trời thanh lịch
   - 🌿 **Mint**: Bạc hà mát mắt
   - 🍯 **Butter**: Bơ & Mật ong ấm áp
   - 💜 **Lavender**: Tím oải hương mộng mơ

6. **Xuất File chất lượng cao**:
   - **Tải ảnh PNG**: Chụp trực tiếp từ canvas với độ sắc nét gấp 2.5 lần, siêu nét trên màn hình Retina & gửi Zalo không bị vỡ hạt.
   - **Tải PDF A4**: Chuẩn tỷ lệ khổ giấy A4, hỗ trợ tự động ngắt trang nếu danh sách buổi học dài.
   - **Không bị lỗi font tiếng Việt**: Render mượt mà mọi dấu câu tiếng Việt.

7. **Lưu trữ tiện lợi**:
   - Tự động lưu mọi thay đổi vào `localStorage`. Khi mở lại trang web, toàn bộ dữ liệu gần nhất sẽ được khôi phục ngay lập tức.
   - Nút **"Dữ liệu mẫu"**: Nạp sẵn một phiếu hoàn chỉnh để xem trước chỉ với 1 cú click.

---

## 🚀 Hướng Dẫn Deploy Lên Vercel

Dự án là một **Static Web App** thuần (HTML5, CSS3, JavaScript ES6), không cần cài đặt Node modules hay build phức tạp, tốc độ tải tức thì.

### Cách 1: Deploy qua GitHub & Vercel Dashboard (Khuyên dùng)
1. Đẩy mã nguồn lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for emxuyeu tutor app"
   git branch -M main
   git remote add origin <URL_REPO_CUA_BAN>
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập.
3. Chọn **"Add New..."** ➔ **"Project"**.
4. Chọn repo GitHub `emxuyeu` vừa tạo.
5. Ở phần cấu hình: Giữ nguyên mặc định (Framework Preset: *Other*), nhấn **"Deploy"**.
6. Web sẽ online trong vòng 5 giây với tên miền miễn phí dạng `emxuyeu.vercel.app`!

### Cách 2: Deploy trực tiếp bằng Vercel CLI
Nếu bạn đã cài Vercel CLI trên máy:
```bash
npm install -g vercel
vercel
```
Làm theo các bước hỏi đáp nhanh trên terminal, Vercel sẽ cấp link deploy ngay lập tức.

---

## 💻 Chạy Thử Trên Máy (Local)
Bạn có thể mở trực tiếp file `index.html` bằng trình duyệt web, hoặc dùng Python để chạy server local:
```bash
python3 -m http.server 3000
```
Sau đó mở trình duyệt tại: `http://localhost:3000`.

---

© 2026 **emxuyeu** - Thiết kế dành riêng cho gia sư tận tâm.
