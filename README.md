# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy
### serverlessを使用してデプロイ (lambda)

1. setting aws credentials

~/.aws/credentialsに認証情報を設定

```sh
vi ~/.aws/credentials`
```

```vi
[default]
aws_access_key_id=XXXXXXX
aws_secret_access_key=XXXXXXXX
region=ap-northeast-1
```

2. ビルド

```sh
yarn build
```
を実行

3. デプロイ

```sh
yarn deploy:serverless
```

を実行

4. ページへアクセス

2が完了後にコンソールに表示されるURLにアクセス (AWS上のコンソールにも記載されている)
https://xxxxxxxxxxxxx.lambda-url.ap-northeast-1.on.aws/

