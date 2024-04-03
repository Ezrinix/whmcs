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
        const getProductsResponse = await whmcs.products.GetProducts();
        const productsArray = getProductsResponse.products.product;

        productsArray.forEach(product => {
            console.log(`Name: ${product.name}, Description: ${product.description.replace(/\r\n/g, ', ')}`);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

example();
