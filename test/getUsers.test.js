const WHMCSClient = require('../whmcs');
require('dotenv').config();

const whmcs = new WHMCSClient({
    appURL: process.env.WHMCS_API_URL,
    appIdentifier: process.env.WHMCS_API_IDENTIFIER,
    appSecret: process.env.WHMCS_API_SECRET,
    userAgent: process.env.USER_AGENT
});

async function example() {
    try {
        const getUserResponse = await whmcs.users.GetUsers({ limitstart: 25, limitnum: 25 });
        const usersArray = getUserResponse.users;

        usersArray.forEach(user => {
            console.log(`Id: ${user.id} Name: ${user.firstname}, Email: ${user.email}`);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

example();
