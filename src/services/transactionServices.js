// src/services/transactionServices.js
import { prisma } from "../config/prisma.js";

export async function getAllTransactions() {
  return prisma.transaction.findMany({
    include: {
      user: true,
      account: true,
      category: true
    }
  });
}

export async function getTransactionById(id) {
  return prisma.transaction.findUnique({
    where: { id },
    include: {
      user: true,
      account: true,
      category: true
    }
  });
}

export async function createTransaction(data) {
  return prisma.transaction.create({
    data: {
      amount: data.amount,
      description: data.description,
      type: data.type,
      userId: data.userId,
      accountId: data.accountId,
      categoryId: data.categoryId
    }
  });
}

export async function updateTransactionById(id) {
  return prisma.transaction.update({
    where: { id },
    data: {
      amount: data.amount,
      description: data.description,
      type: data.type,
      accountId: data.accountId,
      categoryId: data.categoryId
    }
  });
}

export async function deleteTransactionById(id) {
  return prisma.transaction.delete({
    where: { id }
  });
}