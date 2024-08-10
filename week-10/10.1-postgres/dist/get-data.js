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
const utils_1 = require("./utils");
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectedUsersText = "SELECT * FROM users";
        const usersRes = yield client.query(selectedUsersText);
        for (let user of usersRes.rows) {
            console.log(`ID : ${user.id} EMail ${user.email}`);
        }
    });
}
getUsers();
function getUserFromEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectedUsersText = "SELECT * FROM users WHERE email = $1";
        const usersRes = yield client.query(selectedUsersText, [email]);
        for (let user of usersRes.rows) {
            console.log(` single : ${user.id} EMail ${user.email}`);
        }
    });
}
getUserFromEmail("subham@byldd.com");
function getTodosForUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const selectedTodosText = "SELECT * FROM todos WHERE user_id = $1";
        const todosRes = yield client.query(selectedTodosText, [userId]);
        console.log(todosRes.rows);
    });
}
getTodosForUser(2);
