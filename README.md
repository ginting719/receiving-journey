# Goods Receiving Training Hub

Sebuah dasbor web interaktif yang menyediakan tutorial untuk proses penerimaan barang melalui video, slide, presentasi, dan bagian Tanya Jawab.

## Deployment ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk di-deploy secara otomatis ke GitHub Pages menggunakan GitHub Actions. Ikuti langkah-langkah berikut untuk meng-hosting aplikasi Anda:

1.  **Push Kode ke Repository GitHub:**
    Buat repository baru di GitHub dan push semua file proyek ini ke dalamnya.

2.  **Aktifkan GitHub Pages:**
    *   Buka repository Anda di GitHub.
    *   Klik tab **Settings** di bagian atas.
    *   Di menu sebelah kiri, klik **Pages**.
    *   Di bawah bagian "Build and deployment", pada menu dropdown "Source", pilih **GitHub Actions**.

3.  **Deployment Otomatis:**
    *   Itu saja! Sekarang, setiap kali Anda melakukan `push` ke branch `main`, GitHub Actions akan secara otomatis menjalankan proses build dan deploy.
    *   Anda dapat memantau prosesnya di tab **Actions** pada repository Anda.
    *   Setelah proses deploy selesai (biasanya memakan waktu beberapa menit), situs Anda akan tersedia di:
        ```
        https://<NAMA_PENGGUNA_ANDA>.github.io/<NAMA_REPOSITORY_ANDA>/
        ```
    *   Misalnya, jika nama pengguna Anda `ginting719` dan nama repository `receiving-journey`, URL-nya akan menjadi `https://ginting719.github.io/receiving-journey/`.

Aplikasi akan secara otomatis menggunakan nama repository Anda untuk path URL, jadi Anda tidak perlu mengubah konfigurasi apa pun di dalam kode.
