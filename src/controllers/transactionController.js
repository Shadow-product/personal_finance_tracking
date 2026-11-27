// src/controllers/transactionController.js
import * as service from "../services/transactionServices.js";

// GET /api/transactions
export async function getAllTransactions(req, res) {
    const transactions =
        await service.getAllTransactions();

    res.json(transactions);
}

// GET /api/transactions/:id
export async function getTransactionById(req, res) {
    const transaction =
        await service.getTransactionById(
            Number(req.params.id)
        );

    if (!transaction) {
        return res.status(404).json({
            message: "Транзакция не найдена"
        });
    }

    res.json(transaction);
}

// POST /api/transactions
export async function createTransaction(req, res) {
    const transaction =
        await service.createTransaction(req.body);

    res.status(201).json(transaction);
}

// PUT /api/transactions/:id
export async function updateTransactionById(req, res) {
    const transaction =
        await service.updateTransactionById(
            Number(req.params.id),
            req.body
        );

    res.json(transaction);
}

// DELETE /api/transactions/:id
export async function deleteTransactionById(req, res) {
    const transaction =
        await service.deleteTransactionById(
            Number(req.params.id)
        );

    res.json(transaction);
}