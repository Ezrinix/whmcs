const axios = require('axios');
const modules = require('./src');

class WHMCSClient {
    #appURL;
    #appIdentifier;
    #appSecret;
    #userAgent;
    constructor({ appURL, appIdentifier, appSecret, userAgent = 'whmcsjs/1.0' }) {
        this.#appURL = appURL;
        this.#appIdentifier = appIdentifier;
        this.#appSecret = appSecret;
        this.#userAgent = userAgent;

        // Initialize each module and attach to the WHMCSClient instance
        Object.keys(modules).forEach(moduleName => {
            this[moduleName.toLowerCase()] = new modules[moduleName](this);
        });
    }

    // Updated callAPI method to support both promises and callbacks
    callAPI(action, params = {}, callback = null) {
        const promise = (async () => {
            const postData = new URLSearchParams({
                action: action,
                identifier: this.#appIdentifier,
                secret: this.#appSecret,
                responsetype: 'json',
                ...params,
            }).toString();

            try {
                const response = await axios.post(this.#appURL, postData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'User-Agent': this.#userAgent,
                    },
                });
                return response.data;
            } catch (error) {
                console.error('WHMCS API Request failed:', error.response ? error.response.data : error.message);
                throw error;
            }
        })();

        if (callback) {
            promise.then(result => callback(null, result)).catch(error => callback(error, null));
            // When using callbacks, we do not return the promise
            return;
        }

        // If no callback is provided, return the promise
        return promise;
    }
    get getAppUrl() {
        return this.#appURL
    }

    get getAppIdentifier() {
        return this.#appIdentifier;
    }

    get getAppSecret() {
        return this.#appSecret;
    }

    get getUserAgent() {
        return this.#userAgent;
    }
}

module.exports = WHMCSClient;
