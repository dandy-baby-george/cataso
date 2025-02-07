# Ubuntuベースのイメージを指定
FROM node:23.7.0-alpine

# 作業ディレクトリを作成
WORKDIR /usr/src/cataso/backend

# 必要なファイルをコピー
COPY backend/ .

# 依存関係をインストール
RUN npm install
RUN apk add --no-cache vim

# アプリを公開するポート
EXPOSE 3000

CMD npm start
