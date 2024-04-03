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
        const getOrderResponse = await whmcs.orders.GetOrders();
        const ordersArray = getOrderResponse.orders.order;

        ordersArray.forEach(order => {
            console.log(`Id: ${order.id}, UserId: ${order.userid}, Status: ${order.status}, Payment Method: ${order.paymentmethod}`);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

example();
