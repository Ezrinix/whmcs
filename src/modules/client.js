module.exports = class Clients {
    constructor(ctx) {
        this.ctx = ctx;
    }

    AddClient(params, callback) {
        return this.ctx.callAPI('AddClient', params, callback);
    }

    AddContact(params, callback) {
        return this.ctx.callAPI('AddContact', params, callback);
    }

    CloseClient(params, callback) {
        return this.ctx.callAPI('CloseClient', params, callback);
    }

    DeleteClient(params, callback) {
        return this.ctx.callAPI('DeleteClient', params, callback);
    }

    DeleteContact(params, callback) {
        return this.ctx.callAPI('DeleteContact', params, callback);
    }

    GetCancelledPackages(params, callback) {
        return this.ctx.callAPI('GetCancelledPackages', params, callback);
    }

    GetClients(params, callback) {
        return this.ctx.callAPI('GetClients', params, callback);
    }

    GetClientGroups(params, callback) {
        return this.ctx.callAPI('GetClientGroups', params, callback);
    }

    GetClientsDetails(params, callback) {
        return this.ctx.callAPI('GetClientsDetails', params, callback);
    }

    GetClientsProducts(params, callback) {
        return this.ctx.callAPI('GetClientsProducts', params, callback);
    }

    CreateClientInvite(params, callback) {
        return this.ctx.callAPI('CreateClientInvite', params, callback);
    }

    GetClientsAddons(params, callback) {
        return this.ctx.callAPI('GetClientsAddons', params, callback);
    }

    GetClientsDomains(params, callback) {
        return this.ctx.callAPI('GetClientsDomains', params, callback);
    }

    GetContacts(params, callback) {
        return this.ctx.callAPI('GetContacts', params, callback);
    }

    GetEmails(params, callback) {
        return this.ctx.callAPI('GetEmails', params, callback);
    }

    UpdateClient(params, callback) {
        return this.ctx.callAPI('UpdateClient', params, callback);
    }

    UpdateContact(params, callback) {
        return this.ctx.callAPI('UpdateContact', params, callback);
    }
};
