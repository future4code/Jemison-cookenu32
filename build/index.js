"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const userRouter_1 = require("./controller/routes/userRouter");
app_1.app.use('/user', userRouter_1.userRouter);
