// Fungsi umum modal
function openModal(id) { document.getElementById(id).classList.add("show"); }
function closeModal(id) { document.getElementById(id).classList.remove("show"); }
function rupiah(angka) { return "Rp" + Number(angka).toLocaleString("id-ID"); }

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    if (email === dataAkun.email && password === dataAkun.password) {
      alert("Login berhasil!");
      window.location.href = "dashboard.html";
    } else {
      alert("email/password yang anda masukkan salah");
    }
  });
}
const forgotForm = document.getElementById("forgotForm");
if (forgotForm) forgotForm.addEventListener("submit", e => {
  e.preventDefault(); alert("Jika email terdaftar, petunjuk reset akan dikirim."); closeModal("forgotModal");
});
const registerForm = document.getElementById("registerForm");
if (registerForm) registerForm.addEventListener("submit", e => {
  e.preventDefault(); alert("Pendaftaran berhasil disimulasikan. Silakan login menggunakan akun demo."); closeModal("registerModal");
});

// DASHBOARD
const greeting = document.getElementById("greeting");
if (greeting) {
  const jam = new Date().getHours();
  greeting.textContent = jam < 11 ? "Selamat pagi!" : jam < 15 ? "Selamat siang!" : jam < 18 ? "Selamat sore!" : "Selamat malam!";
  document.getElementById("jumlahPesanan").textContent = dataPesanan.length;
  document.getElementById("totalPenjualan").textContent = rupiah(dataPesanan.reduce((sum, p) => sum + p.total, 0));
  document.getElementById("historyBody").innerHTML = dataPesanan.map(p =>
    `<tr><td>${p.do}</td><td>${p.nama}</td><td>${p.buku}</td><td>${rupiah(p.total)}</td><td>${p.status}</td></tr>`
  ).join("");
}

// KATALOG
const katalogBody = document.getElementById("katalogBody");
function renderKatalog() {
  if (!katalogBody) return;
  katalogBody.innerHTML = dataKatalogBuku.map(b =>
    `<tr><td>${b.id}</td><td>${b.judul}</td><td>${b.penulis}</td><td>${b.kategori}</td><td>${rupiah(b.harga)}</td><td>${b.stok}</td></tr>`
  ).join("");
}
if (katalogBody) {
  renderKatalog();
  document.getElementById("stokForm").addEventListener("submit", e => {
    e.preventDefault();
    const buku = {
      id: dataKatalogBuku.length ? Math.max(...dataKatalogBuku.map(b => b.id)) + 1 : 1,
      judul: document.getElementById("judulBuku").value.trim(),
      penulis: document.getElementById("penulisBuku").value.trim(),
      kategori: document.getElementById("kategoriBuku").value.trim(),
      harga: Number(document.getElementById("hargaBuku").value),
      stok: Number(document.getElementById("stokBuku").value)
    };
    if (buku.harga <= 0 || buku.stok < 0) return alert("Harga dan stok tidak valid.");
    dataKatalogBuku.push(buku);
    renderKatalog(); e.target.reset(); alert("Buku berhasil ditambahkan.");
  });
}

// CHECKOUT
const pilihBuku = document.getElementById("pilihBuku");
let pesananSedangDiubah = false;
function isiPilihanBuku() {
  if (!pilihBuku) return;
  pilihBuku.innerHTML = dataKatalogBuku.map(b => `<option value="${b.id}">${b.judul} - ${rupiah(b.harga)}</option>`).join("");
}
function hitungTotal() {
  if (!pilihBuku) return 0;
  const buku = dataKatalogBuku.find(b => b.id === Number(pilihBuku.value));
  const jumlah = Number(document.getElementById("jumlahBeli").value || 0);
  const total = buku ? buku.harga * jumlah : 0;
  document.getElementById("hargaCheckout").textContent = "Total: " + rupiah(total);
  return total;
}
function renderPesanan() {
  const body = document.getElementById("pesananBody");
  if (!body) return;
  body.innerHTML = dataPesanan.map(p => `<tr><td>${p.do}</td><td>${p.nama}</td><td>${p.buku}</td><td>${p.jumlah}</td><td>${rupiah(p.total)}</td><td>${p.ekspedisi}</td></tr>`).join("");
}
if (pilihBuku) {
  isiPilihanBuku(); renderPesanan(); hitungTotal();
  pilihBuku.addEventListener("change", hitungTotal);
  document.getElementById("jumlahBeli").addEventListener("input", hitungTotal);
  document.getElementById("checkoutForm").addEventListener("submit", e => {
    e.preventDefault();
    const buku = dataKatalogBuku.find(b => b.id === Number(pilihBuku.value));
    const jumlah = Number(document.getElementById("jumlahBeli").value);
    if (!buku || jumlah < 1) return alert("Pilih buku dan jumlah dengan benar.");
    if (jumlah > buku.stok) return alert("Stok buku tidak mencukupi.");
    const nomor = "DO" + Date.now().toString().slice(-9);
    const pesanan = {
      do: nomor, nama: document.getElementById("namaPemesan").value.trim(),
      email: document.getElementById("emailPemesan").value.trim(),
      alamat: document.getElementById("alamatPemesan").value.trim(),
      buku: buku.judul, jumlah, total: buku.harga * jumlah,
      ekspedisi: document.getElementById("ekspedisi").value,
      paket: document.getElementById("jenisPaket").value,
      pembayaran: document.getElementById("pembayaran").value,
      tanggal: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }),
      status: "Pesanan diterima"
    };
    if (pesananSedangDiubah && dataPesanan.length) {
      dataPesanan[dataPesanan.length - 1] = pesanan;
      pesananSedangDiubah = false;
      alert("Pesanan terakhir berhasil diubah. Nomor DO baru: " + nomor);
    } else {
      dataPesanan.push(pesanan);
      buku.stok -= jumlah;
      alert("Pesanan berhasil disimpan. Nomor DO: " + nomor);
    }
    renderPesanan(); e.target.reset(); hitungTotal();
  });
  document.getElementById("ubahPesanan").addEventListener("click", () => {
    if (!dataPesanan.length) return alert("Belum ada pesanan untuk diubah.");
    const p = dataPesanan[dataPesanan.length - 1];
    document.getElementById("namaPemesan").value = p.nama;
    document.getElementById("emailPemesan").value = p.email;
    document.getElementById("alamatPemesan").value = p.alamat;
    document.getElementById("jumlahBeli").value = p.jumlah;
    const buku = dataKatalogBuku.find(b => b.judul === p.buku);
    if (buku) pilihBuku.value = buku.id;
    document.getElementById("ekspedisi").value = p.ekspedisi;
    document.getElementById("jenisPaket").value = p.paket;
    if (p.pembayaran) document.getElementById("pembayaran").value = p.pembayaran;
    pesananSedangDiubah = true; hitungTotal();
    alert("Data pesanan terakhir dimuat. Ubah datanya lalu klik Simpan Pesanan.");
  });
}

// TRACKING
const trackingForm = document.getElementById("trackingForm");
if (trackingForm) trackingForm.addEventListener("submit", e => {
  e.preventDefault();
  const nomor = document.getElementById("nomorDO").value.trim().toUpperCase();
  const p = dataPesanan.find(item => item.do.toUpperCase() === nomor);
  const hasil = document.getElementById("hasilTracking");
  hasil.style.display = "block";
  if (!p) {
    hasil.innerHTML = "<h3>Pesanan tidak ditemukan</h3><p>Periksa kembali nomor Delivery Order yang dimasukkan.</p>";
    return;
  }
  const tahap = p.status === "Dalam perjalanan" ? 70 : p.status === "Pesanan diterima" ? 25 : 100;
  hasil.innerHTML = `
    <h2>Detail Pengiriman</h2>
    <p><b>Nomor DO:</b> ${p.do}</p><p><b>Nama Pemesan:</b> ${p.nama}</p>
    <p><b>Status:</b> <span class="status">${p.status}</span></p>
    <div class="progress"><span style="width:${tahap}%"></span></div>
    <p><b>Ekspedisi:</b> ${p.ekspedisi}</p><p><b>Tanggal Kirim:</b> ${p.tanggal}</p>
    <p><b>Jenis Paket:</b> ${p.paket}</p><p><b>Total Pembayaran:</b> ${rupiah(p.total)}</p>
    <p><b>Alamat:</b> ${p.alamat}</p>`;
});
