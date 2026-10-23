# Jadikan SPJ Aplikasi Sendiri (tanpa URL panjang)

Folder ini ialah **aplikasi pembalut (PWA)**. Ia membuka SPJ skrin penuh, dengan ikon logo SPJ pada skrin utama telefon. URL `script.google.com/macros/s/...` tidak lagi kelihatan.

| Fail | Kegunaan |
|---|---|
| `index.html` | Halaman aplikasi: skrin pembuka, membuka SPJ skrin penuh, butang "Pasang SPJ" |
| `manifest.webmanifest` | Maklumat aplikasi: nama SPJ, ikon, mod skrin penuh |
| `sw.js` | Membolehkan aplikasi dipasang & memaparkan mesej jika tiada internet |
| `ikon-192.png`, `ikon-512.png`, `ikon-maskable-512.png`, `apple-touch-icon.png`, `favicon.png` | Ikon logo SPJ |

---

## Langkah 1: Kemas kini Code.gs (wajib)
Gantikan **Code.gs** dalam projek Apps Script dengan versi baharu. Baris baharunya ialah `setXFrameOptionsMode(ALLOWALL)`, yang membenarkan SPJ dibuka di dalam aplikasi ini.
Kemudian: **Terapkan › Urus penerapan › ✏️ › Versi: Baharu › Terapkan**.

Pastikan **Siapa boleh akses = "Sesiapa sahaja"** (tanpa log masuk). Halaman log masuk Google tidak boleh dipaparkan di dalam aplikasi pembalut.

## Langkah 2: Masukkan URL SPJ
Buka `index.html` dan cari baris ini:
```js
const URL_SPJ = 'TAMPAL_URL_EXEC_DI_SINI';
```
Gantikan dengan URL aplikasi web SPJ anda (berakhir dengan `/exec`), contoh:
```js
const URL_SPJ = 'https://script.google.com/macros/s/AKfycb.../exec';
```

## Langkah 3: Terbitkan secara percuma di GitHub Pages
1. Daftar akaun percuma di **github.com**.
2. Klik **＋ › New repository** dan namakan `spj`. Pilih **Public**, kemudian klik **Create repository**.
3. Klik **uploading an existing file**, seret **semua fail** dalam folder ini, kemudian klik **Commit changes**.
   *(Langkah 2 juga boleh dibuat terus di GitHub: klik `index.html` › ✏️, ubah baris `URL_SPJ`, kemudian klik **Commit changes**.)*
4. Pergi ke **Settings › Pages**, pilih **Source: Deploy from a branch**, kemudian **Branch: main / (root)**, dan klik **Save**.
5. Tunggu 1–2 minit. Alamat aplikasi anda ialah:
   **`https://NAMA-AKAUN.github.io/spj/`**

> Alternatif tanpa GitHub: **app.netlify.com/drop**. Seret folder ini ke sana (daftar akaun percuma supaya ia kekal).
> Domain sendiri (cth. `spj.com.my`) boleh disambung kemudian di **Settings › Pages › Custom domain**.

## Langkah 4: Pasang pada telefon / Android player
- **Android (Chrome):** buka alamat di atas. Banner **"Pasang SPJ"** akan muncul; tekan **Pasang**. Atau pilih menu **⋮ › Pasang aplikasi**.
- **iPhone (Safari):** tekan **Kongsi ⬆️ › Tambah ke Skrin Utama**.
- **Android player kereta (Chrome):** sama seperti Android.

Ikon logo SPJ akan muncul pada skrin utama. Apabila dibuka, SPJ dipaparkan **skrin penuh, tanpa bar alamat dan tanpa URL**.

## Kongsi dengan pengguna lain
Kongsi alamat pendek `https://NAMA-AKAUN.github.io/spj/` sahaja. Contohnya, buat **kod QR** daripada alamat ini untuk ditampal di sekolah.

## Selepas kemas kini SPJ
Kemas kini kod SPJ di Apps Script seperti biasa (Versi Baharu). Aplikasi pembalut **tidak perlu diubah**, kerana URL `/exec` kekal sama.

## Nota
- Pada kali pertama, telefon akan meminta kebenaran **Lokasi** (dan **Kamera/Mikrofon** untuk rakaman). Benarkan semuanya.
- Panel Pentadbir (`?page=admin`) juga boleh dibuka melalui alamat pendek: `https://NAMA-AKAUN.github.io/spj/?page=admin`
- Jika skrin kekal di "Memuatkan…", butang **Buka terus** akan muncul selepas 20 saat. Semak Langkah 1 (ALLOWALL & "Sesiapa sahaja").
- Jika ada sekatan Google Workspace (akaun sekolah) yang menghalang perkongsian "Sesiapa sahaja", terbitkan projek Apps Script menggunakan akaun Gmail peribadi.
- **Pilihan lanjutan:** untuk fail APK / Play Store, masukkan alamat GitHub Pages anda di **pwabuilder.com**. Ia menjana pakej Android (TWA) daripada aplikasi ini.
