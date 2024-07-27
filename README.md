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
`pnpm pw:test` captures screenshots of `kakkofn.dev` and `localhost:3000`.
Then playwright compares them.

```bash
# install headless browsers
pnpm pw:init
# run Visual Regression Testing
pnpm pw:test
# open test report
pnpm exec playwright show-report e2e/pw-report
```

## モチベーション
- もともとこういうツールボックスを作りたいと思っていた
- ちょっと困った時に自分の作ったツールで解決できたら嬉しい、、プログラマとしてのロマンを追いたい
