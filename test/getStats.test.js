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
        const getGetStatsResponse = await whmcs.system.GetStats();
        const stats = getGetStatsResponse;

        console.log('Total Income Today:', stats.income_today, 'Total Income Month (Current):', stats.income_thismonth, 'Total Income (All Time):', stats.income_alltime);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

example();
