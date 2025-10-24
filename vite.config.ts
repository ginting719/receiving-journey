import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Secara dinamis mengatur 'base' path untuk deployment GitHub Pages.
  // GITHUB_REPOSITORY diatur secara otomatis oleh GitHub Actions.
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];

  return {
    plugins: [react()],
    // PENTING: Path dasar ini diatur secara otomatis untuk GitHub Pages.
    // Untuk pengembangan lokal, path dasarnya adalah '/'.
    // Saat build di GitHub Actions, path akan menjadi '/<nama-repo>/'.
    // Anda tidak perlu mengubah ini secara manual.
    base: command === 'build' && repoName ? `/${repoName}/` : '/'
  }
})
