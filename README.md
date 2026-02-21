# Booster Sosmed

Website SMM Panel modern dengan tema akar 3D.

## Stack
- Next.js 14 (App Router)
- Pure CSS (no UI libraries)
- Font: Syne + DM Sans

## Cara Deploy ke Vercel

### 1. Upload ke GitHub
```bash
git init
git add .
git commit -m "init: booster sosmed website"
git remote add origin https://github.com/USERNAME/booster-sosmed.git
git push -u origin main
```

### 2. Deploy di Vercel
1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New Project"**
3. Import repository GitHub yang baru dibuat
4. Di bagian **"Environment Variables"**, tambahkan:
   - `SMM_API_KEY` = `6e7b4b8b0deeae662fc71f87903237a1a4e1d35a09e05491f56714c214c383fd`
   - `NEXT_PUBLIC_SMM_API_KEY` = `6e7b4b8b0deeae662fc71f87903237a1a4e1d35a09e05491f56714c214c383fd`
5. Klik **"Deploy"**

### 3. Konfigurasi API
Edit file `app/api/smm/route.js` dan ganti URL API:
```js
const SMM_API_URL = 'https://ordersosmed.id/api/v2'
```

## Struktur File
```
app/
├── page.js          # Halaman utama (landing page)
├── layout.js        # Root layout + fonts
├── globals.css      # Semua styling
└── api/
    └── smm/
        └── route.js # API proxy untuk SMM panel
```

## Kustomisasi
- Ganti stats (pengguna, pesanan, layanan) di `app/page.js` → state `stats`
- Tambah/hapus layanan di array `services`
- Ubah warna utama di `globals.css` → variabel `--accent`
