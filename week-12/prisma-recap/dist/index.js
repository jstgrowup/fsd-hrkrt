"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.user.create({
                data: {
                    username,
                    password,
                    firstName,
                    lastName,
                },
            });
            console.log("response:", response);
        }
        catch (error) {
            console.log("error:", error);
        }
    });
}
// insertUser("test", "test", "test", "test");
function getTodoViaUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.todo.findMany({
                where: {
                    userId: userId,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    user: true,
                },
            });
            console.log("response:", response);
        }
        catch (error) {
            console.log("error:", error);
        }
    });
}
getTodoViaUser(3);
function createTodo(title, description, completed, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.todo.create({
                data: {
                    title,
                    description,
                    completed,
                    userId,
                },
            });
            console.log("response:", response);
        }
        catch (error) {
            console.log("error:", error);
        }
    });
}
// createTodo("hehe", "huhu", false, 3);
