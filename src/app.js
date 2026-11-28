// src/app.js
import express from "express";

import transactionRoutes from "./routes/transactionRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import chalk from "chalk";
import 'dotenv/config';

const port = Number(process.env.PORT ?? 3000);

const app = express();

app.use(express.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/categories', categoryRoutes)
app.use('/api/accounts', accountRoutes);
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes);

// Обработка неизвестных маршрутов
app.use((req, res) => {
    res.status(404).json({
        message: "Route не найден"
    });
});

// app.get('/', (req, res) => {
//     res.json({ message: "REST API для системы учёта личных финансов - Personal Finance Tracking" });
// });

app.listen(port, () => {
    console.log(chalk.green(`Сервер запущен на порту:${port}`));
});