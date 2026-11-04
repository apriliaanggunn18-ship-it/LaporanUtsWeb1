// Data dummy aplikasi BookStore
const dataKatalogBuku = [
  { id: 1, judul: "Laskar Pelangi", penulis: "Andrea Hirata", kategori: "Novel", harga: 85000, stok: 12 },
  { id: 2, judul: "Bumi", penulis: "Tere Liye", kategori: "Fantasi", harga: 92000, stok: 8 },
  { id: 3, judul: "Filosofi Teras", penulis: "Henry Manampiring", kategori: "Pengembangan Diri", harga: 78000, stok: 15 },
  { id: 4, judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi", kategori: "Novel", harga: 88000, stok: 6 },
  { id: 5, judul: "Atomic Habits", penulis: "James Clear", kategori: "Pengembangan Diri", harga: 110000, stok: 10 }
];

const dataAkun = {
  email: "admin@bookstore.com",
  password: "123456"
};

const dataPesanan = [
  {
    do: "DO202611001", nama: "Aprilia Anggun", email: "aprilia@gmail.com",
    alamat: "Bekasi, Jawa Barat", buku: "Laskar Pelangi", jumlah: 2,
    total: 170000, ekspedisi: "JNE", paket: "Reguler",
    tanggal: "03 November 2026", status: "Pesanan diterima"
  },
  {
    do: "DO202611002", nama: "Dina Putri", email: "dina@gmail.com",
    alamat: "Jakarta Timur", buku: "Atomic Habits", jumlah: 1,
    total: 110000, ekspedisi: "SiCepat", paket: "Express",
    tanggal: "03 November 2026", status: "Dalam perjalanan"
  }
];
