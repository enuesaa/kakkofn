# kakkofn
My personal toolbox to speed up development.

## Stack
- sveltekit
- vite

## Commands
### Install deps
```bash
pnpm install
```

### Start Dev Server
```bash
pnpm dev
```

### Visual Regression Testing
```bash
# Install headless browsers
pnpm pw:init

# Run Visual Regression Testing
# 1. Playwright captures screenshots of `kakkofn.dev` and `localhost:3000`.
# 2. Playwright compares them.
pnpm pw:test

# Open test report
pnpm exec playwright show-report e2e/pw-report
```

## モチベーション
- もともとこういうツールボックスを作りたいと思っていた
- ちょっと困った時に解決できれば嬉しい
