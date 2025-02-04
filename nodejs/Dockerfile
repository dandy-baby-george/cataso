# Ubuntuベースのイメージを指定
FROM node:23.7.0-alpine

# 作業ディレクトリを作成
WORKDIR /usr/src/cataso

# 必要なファイルをコピー
COPY nodejs/package*.json ./
COPY nodejs/server.js .

# 依存関係をインストール
RUN npm install

# アプリを公開するポート
EXPOSE 3000

# コンテナ起動時のコマンド
CMD ["npm", "start"]
