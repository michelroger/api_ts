"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Helper {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
        this.validateCPF = (cpf) => {
            let sum, rest;
            if (cpf == undefined || cpf.trim().length === 0 || cpf === "00000000000") {
                return false;
            }
            cpf = cpf.replace('.', '').replace('.', '').replace('-', '');
            sum = 0;
            for (let i = 1; i <= 9; i++) {
                sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }
            rest = (sum * 10) % 11;
            if ((rest === 10) || (rest === 11)) {
                rest = 0;
            }
            if (rest !== parseInt(cpf.substring(9, 10))) {
                return false;
            }
            sum = 0;
            for (let i = 1; i <= 10; i++) {
                sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            rest = (sum * 10) % 11;
            if ((rest === 10) || (rest === 11)) {
                rest = 0;
            }
            if (rest !== parseInt(cpf.substring(10, 11))) {
                return false;
            }
            return true;
        };
        this.validateEmail = (email) => {
            if (email == undefined || email.trim().length === 0 || email === "") {
                return false;
            }
            let usuario = email.substring(0, email.indexOf("@"));
            let dominio = email.substring(email.indexOf("@") + 1, email.length);
            if ((usuario.length >= 1) &&
                (dominio.length >= 3) &&
                (usuario.search("@") == -1) &&
                (dominio.search("@") == -1) &&
                (usuario.search(" ") == -1) &&
                (dominio.search(" ") == -1) &&
                (dominio.search(".") != -1) &&
                (dominio.indexOf(".") >= 1) &&
                (dominio.lastIndexOf(".") < dominio.length - 1)) {
                return true;
            }
            return false;
        };
        this.validateBirthDate = (birthDate) => {
            if (birthDate == undefined || birthDate.trim().length === 0 || birthDate === "") {
                return false;
            }
            const dataNascimento = moment(birthDate, "YYYY-MM-DD", true);
            if (dataNascimento.isValid()) {
                return true;
            }
            return false;
        };
        this.validateIdade = (birthDate) => {
            if (birthDate == undefined || birthDate.trim().length === 0 || birthDate === "") {
                return false;
            }
            const dataNascimento = moment(birthDate, "YYYY-MM-DD", true);
            const dataNow = moment(new Date, "YYYY-MM-DD", true);
            if (dataNascimento.isValid()) {
                let dif = dataNow.diff(dataNascimento, "years");
                if (dif >= 18 && dif <= 65) {
                    return true;
                }
            }
            return false;
        };
        this.validatePhone = (phone) => {
            var regExp = /^\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g;
            return regExp.test(phone);
        };
    }
}
exports.default = new Helper();
