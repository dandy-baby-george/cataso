# API 仕様

## エンドポイント一覧

### 1. サイコロを指定した数振る

**GET** `/api/dice`

#### パラメータ

- quantity（必須）
  - 振るサイコロの数

#### リクエスト例

`/api/dice?quantity=2`

#### レスポンス例

```json
{
  "numbers": [5, 3],
  "sum": 8
}
```
