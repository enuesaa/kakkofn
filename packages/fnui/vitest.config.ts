import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {
    include: [
      'fncore/**/*.test.ts',
    ],
  },
})
