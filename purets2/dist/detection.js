"use strict";
// // Narrowing using typeof
const isAdminAccount = (account) => {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
};
