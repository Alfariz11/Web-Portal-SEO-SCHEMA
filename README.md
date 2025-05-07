# News Portal 🌐

News Portal adalah sebuah aplikasi portal berita berbasis web yang dibangun menggunakan Next.js (versi terbaru) dengan TypeScript. Aplikasi ini memungkinkan pengguna untuk membaca berita dari berbagai sumber dan melakukan login menggunakan akun Google (OAuth2).

## 🚀 Fitur Utama
- 🔐 **Login dengan Google OAuth2:** Pengguna dapat login menggunakan akun Google.
- 📰 **Daftar Berita dari 3 Sumber API:**
  - NewsAPI
  - GNews API
  - Currents API
- 📑 **Detail Berita Lengkap:** Setiap berita menampilkan:
  - Judul, isi berita, gambar, sumber, penulis, dan waktu publikasi.
- 🔔 **Toast Notifikasi:** Notifikasi muncul ketika login berhasil.
- 📱 **Responsive Design:** Dapat diakses dengan baik melalui perangkat desktop maupun mobile.

---

## 📌 Teknologi yang Digunakan
- **Frontend:** Next.js (TypeScript) dengan App Directory (Next.js 13+)
- **Autentikasi:** NextAuth (OAuth2 Google)
- **API Berita:** Axios untuk mendapatkan berita dari:
  - NewsAPI
  - GNews API
  - Currents API
- **Styling:** Tailwind CSS
- **Notifikasi:** React-Toastify

---

## 📌 Prasyarat
Sebelum memulai, pastikan Anda memiliki:
- Node.js (v16.8 atau lebih baru)
- Akun Google Cloud untuk OAuth2
- API Key dari:
  - [NewsAPI](https://newsapi.org/)
  - [GNews API](https://gnews.io/)
  - [Currents API](https://currentsapi.services/)

---

## 📥 Cara Install dan Menjalankan Aplikasi
```bash
npm install
```
