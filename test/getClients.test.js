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
        const getClientsResponse = await whmcs.clients.GetClients();
        const clientsArray = getClientsResponse.clients.client;

        clientsArray.forEach(client => {
            console.log(`Id: ${client.id} Name: ${client.firstname}, Email: ${client.email}`);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

example();
