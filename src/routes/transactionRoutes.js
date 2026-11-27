// src/routes/transactionRoutes.js
import { Router } from "express";

import * as controller from "../controllers/transactionController.js"

const router = Router();

router.get(
    "/",
    controller.getAllTransactions
);

router.get(
    "id",
    controller.getTransactionById
);

router.post(
    "/",
    controller.createTransaction
);

router.patch(
    "/:id",
    controller.updateTransactionById
);

router.delete(
    "/:id",
    controller.deleteTransactionById
);

export default router;