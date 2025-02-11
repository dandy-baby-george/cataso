import express, { Request, Response } from 'express';
import { DiceController } from './controllers/DiceController';

const app = express();
const env = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const port = process.env.PORT;
const port = env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

app.get('/api/dice', (req, res) => {
    const diceController = new DiceController();

    return diceController.roll(req, res);
});

// エラーハンドリングミドルウェア
app.use((err: any, req: Request, res: Response) => {
    // 開発環境の場合、エラーメッセージとスタックトレースを表示
    if (env.NODE_ENV === 'development') {
        res.status(500).json({
            message: err.message,
            stack: err.stack,
        });
    } else {
        // 本番環境の場合、一般的なエラーメッセージを表示
        res.status(500).json({
            message: 'Something went wrong! Please try again later.',
        });
    }

    console.error(err.stack); // サーバーログにスタックトレースを記録
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
