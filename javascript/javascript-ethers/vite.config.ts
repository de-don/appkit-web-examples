import { defineConfig } from 'vite'

const repoBase = process.env.GITHUB_ACTIONS === 'true'
  ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}/`
  : '/'

// https://vite.dev/config/
export default defineConfig({
  base: repoBase,
  resolve: {
    alias: {
      'valtio/react': 'valtio/vanilla' // beware: only safe if nobody expects React-specific APIs
    },
  }
})
