# BookStore - Aplikasi Pemesanan Buku Online

## 1. Deskripsi Project

BookStore merupakan aplikasi website sederhana yang digunakan untuk melakukan pemesanan buku secara online. Aplikasi ini dibuat menggunakan HTML, CSS, dan JavaScript.

Website ini memiliki beberapa halaman, yaitu Login, Dashboard, Katalog Buku, Checkout, dan Tracking Pengiriman.

## 2. Halaman Login

<img width="950" height="469" alt="Screenshot 2026-11-04 101452" src="https://github.com/user-attachments/assets/7afafee0-0b10-4c46-91a8-4d7ed73d0e94" />


**Penjelasan:**

Halaman login merupakan halaman pertama yang muncul ketika pengguna membuka aplikasi BookStore. Pada halaman ini terdapat form email dan password yang harus diisi untuk masuk ke dalam aplikasi.

JavaScript digunakan untuk memeriksa apakah email dan password yang dimasukkan sesuai dengan akun demo. Jika data salah, sistem akan menampilkan pesan peringatan. Jika benar, pengguna akan diarahkan ke halaman Dashboard.

Fitur yang tersedia:
- Input email.
- Input password.
- Tombol login.
- Forgot Password.
- Register.

## 3. Halaman Dashboard

<img width="947" height="463" alt="Screenshot 2026-11-04 101514" src="https://github.com/user-attachments/assets/8eb8e23b-c019-4951-a550-44fe9e8e6257" />


**Penjelasan:**

Dashboard merupakan halaman utama setelah pengguna berhasil login. Halaman ini menampilkan sapaan berdasarkan waktu, menu navigasi, dan informasi singkat mengenai aktivitas pemesanan buku.

Pada halaman ini pengguna dapat memilih menu untuk membuka katalog buku, checkout, tracking pengiriman, dan riwayat transaksi.

JavaScript digunakan untuk menampilkan sapaan sesuai waktu lokal serta mengolah informasi jumlah pesanan dan transaksi.

Fitur yang tersedia:
- Sapaan berdasarkan waktu.
- Menu navigasi.
- Ringkasan informasi pesanan.
- Riwayat transaksi.

## 4. Halaman Katalog Buku

<img width="953" height="468" alt="Screenshot 2026-11-04 102515" src="https://github.com/user-attachments/assets/319e88ca-f5df-413a-a22f-43b9993a7104" />


**Penjelasan:**

Halaman katalog buku digunakan untuk menampilkan daftar buku yang tersedia di BookStore. Setiap buku memiliki informasi berupa judul, penulis, kategori, harga, dan jumlah stok.

Data buku disimpan di dalam file `data.js`, kemudian ditampilkan menggunakan JavaScript dengan bantuan DOM. Pengguna juga dapat menambahkan data buku baru melalui form yang tersedia.

Fitur yang tersedia:
- Menampilkan daftar buku.
- Menampilkan harga dan stok buku.
- Menambahkan buku baru.
- Memperbarui tampilan katalog secara langsung menggunakan JavaScript.

## 5. Halaman Checkout

<img width="953" height="475" alt="Screenshot 2026-11-04 103031" src="https://github.com/user-attachments/assets/edaae1e9-57ac-4167-be6d-2d7e4c86ceab" />


**Penjelasan:**

Halaman checkout digunakan untuk melakukan pemesanan buku. Pengguna dapat mengisi informasi pembeli, memilih buku yang ingin dibeli, menentukan jumlah buku, dan memilih metode pembayaran.

Setelah buku dipilih dan jumlah pembelian dimasukkan, sistem akan menghitung total pembayaran secara otomatis berdasarkan harga dan jumlah buku.

JavaScript juga digunakan untuk melakukan validasi agar jumlah pembelian tidak melebihi stok yang tersedia.

Fitur yang tersedia:
- Mengisi data pembeli.
- Memilih buku.
- Menentukan jumlah pembelian.
- Menghitung total pembayaran otomatis.
- Menyimpan data pesanan sementara.

## 6. Halaman Tracking Pengiriman

<img width="945" height="468" alt="Screenshot 2026-11-04 102741" src="https://github.com/user-attachments/assets/aa2c9cce-6a3c-4c9e-b598-568be22fa200" />


**Penjelasan:**

Halaman tracking digunakan untuk melihat informasi dan perkembangan pengiriman pesanan. Pengguna harus memasukkan nomor Delivery Order (DO) untuk mencari data pesanan.

Setelah nomor DO dimasukkan, sistem akan menampilkan informasi seperti nama pembeli, status pengiriman, nama ekspedisi, tanggal pengiriman, jenis paket, dan total pembayaran.

JavaScript digunakan untuk mencari nomor DO yang sesuai dengan data pesanan yang tersimpan di dalam `data.js`, kemudian menampilkan status dan perkembangan pengiriman.

Fitur yang tersedia:
- Input nomor DO.
- Mencari data pesanan.
- Menampilkan identitas pembeli.
- Menampilkan status pengiriman.
- Menampilkan informasi ekspedisi dan pembayaran.
- Menampilkan progress pengiriman.

## 7. Teknologi yang Digunakan

- **HTML:** Digunakan untuk membuat struktur halaman website.
- **CSS:** Digunakan untuk mengatur warna, ukuran, tata letak, dan tampilan website.
- **JavaScript:** Digunakan untuk membuat fitur interaktif dan mengolah data.
- **DOM (Document Object Model):** Digunakan untuk mengubah dan menampilkan elemen HTML melalui JavaScript.

## 8. Struktur Folder

```text
BookStore/
│
├── login.html
├── dashboard.html
├── stok.html
├── checkout.html
├── tracking.html
│
├── style.css
├── data.js
├── app.js
├── README.md
│
└── screenshots/
    ├── login.png
    ├── dashboard.png
    ├── katalog.png
    ├── checkout.png
    └── tracking.png
```

## 9. Cara Menjalankan Project

1. Buka folder BookStore menggunakan Visual Studio Code.
2. Pastikan ekstensi Live Server sudah terpasang.
3. Klik kanan pada file `login.html`.
4. Pilih Open with Live Server.
5. Website akan terbuka di browser.

## 10. Akun Demo

Untuk mencoba aplikasi, gunakan akun berikut:

- **Email:** `admin@bookstore.com`
- **Password:** `123456`

Contoh nomor DO untuk mencoba fitur tracking:

- `DO202611001`
- `DO202611002`

## 11. Penjelasan File JavaScript

- **data.js:** Berisi data dummy seperti katalog buku, akun pengguna, dan data pesanan.
- **app.js:** Berisi fungsi JavaScript untuk mengatur login, dashboard, katalog, checkout, dan tracking.

## 12. Catatan

Project BookStore merupakan aplikasi front-end yang menggunakan data dummy JavaScript dan belum terhubung dengan database. Data yang ditambahkan hanya tersimpan sementara selama halaman belum dimuat ulang.

## 13. Kesimpulan

Aplikasi BookStore dibuat untuk menerapkan penggunaan HTML, CSS, dan JavaScript dalam membangun website pemesanan buku sederhana. Melalui project ini, dapat dipahami cara membuat halaman website, mengelola data menggunakan JavaScript, menggunakan DOM, melakukan validasi form, dan menampilkan informasi pesanan serta pengiriman.
