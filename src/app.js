import express from "express";
import 'dotenv/config';

const port = Number(process.env.PORT ?? 3000);

import chalk from "chalk";

const app = express();

app.use(express.json());

// app.use('/api/accounts');
// app.use('/api/categories')
// app.use('/api/transactions');

app.get('/', (req, res) => {
    res.json({ message: "REST API для системы учёта личных финансов - Personal Finance Tracking" });
});

app.listen(port, () => {
    console.log(chalk.green(`Сервер запущен на порту:${port}`));
});