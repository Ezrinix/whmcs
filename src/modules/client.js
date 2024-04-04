const AddClientOptions = {
    action: "",
    owner_user_id: 0,
    firstname: "",
    lastname: "",
    companyname: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    phonenumber: "",
    tax_id: "",
    password2: "",
    securityqid: "",
    securityqans: "",
    currency: 0,
    groupid: 0,
    customfields: "",
    language: "",
    clientip: "",
    notes: "",
    marketingoptin: false,
    noemail: false,
    skipvalidation: false
};

const AddContactOptions = {
    action: "",
    clientid: 0,
    firstname: "",
    lastname: "",
    companyname: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    phonenumber: "",
    tax_id: "",
    email_preferences: {
        general: false,
        invoice: false,
        support: false,
        affiliate: false
    }
};

const CloseClientOptions = {
    action: "",
    clientid: 0
};

const DeleteClientOptions = {
    action: "",
    clientid: 0,
    deleteusers: false,
    deletetransactions: false
};

const DeleteContactOptions = {
    action: "",
    contactid: 0
};

const GetCancelledPackagesOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0
};

const GetClientsOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    sorting: "",
    search: "",
    orderby: ""
};

const GetClientsGroupsOptions = {
    action: ""
};

const GetClientDetailsOptions = {
    action: "",
    clientid: 0,
    email: "",
    stats: false
};

const GetClientProductsOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    clientid: 0,
    serviceid: 0,
    pid: 0,
    domain: "",
    username2: ""
};

const CreateClientInviteOptions = {
    action: "",
    client_id: "",
    email: 0,
    permissions: ""
};

const GetClientAddonsOptions = {
    action: "",
    serviceid: 0,
    clientid: 0,
    addonid: 0
};

const GetClientDomainsOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    clientid: 0,
    domainid: 0,
    domain: ""
};

const GetContactsOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    userid: 0,
    firstname: "",
    lastname: "",
    companyname: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    phonenumber: "",
};

const GetEmailsOptions = {
    action: "",
    clientid: 0,
    limitstart: 0,
    limitnum: 0,
    date: "",
    subject: ""
};

const UpdateClientOptions = {
    action: "",
    clientid: 0,
    firstname: "",
    lastname: "",
    companyname: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    phonenumber: "",
    tax_id: "",
};

const UpdateContactOptions = {
    action: "",
    clientid: 0,
    firstname: "",
    lastname: "",
    companyname: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    phonenumber: "",
    tax_id: "",
    email_preferences: {
        general: false,
        invoice: false,
        support: false,
        affiliate: false
    }
}


class Clients {
    #ctx;
    constructor(ctx) {
        this.#ctx = ctx;
    }

    AddClient(params = AddClientOptions, callback) {
        return this.#ctx.callAPI('AddClient', params, callback);
    }

    AddContact(params = AddContactOptions, callback) {
        return this.#ctx.callAPI('AddContact', params, callback);
    }

    CloseClient(params = CloseClientOptions, callback) {
        return this.#ctx.callAPI('CloseClient', params, callback);
    }

    DeleteClient(params = DeleteClientOptions, callback) {
        return this.#ctx.callAPI('DeleteClient', params, callback);
    }

    DeleteContact(params = DeleteContactOptions, callback) {
        return this.#ctx.callAPI('DeleteContact', params, callback);
    }

    GetCancelledPackages(params = GetCancelledPackagesOptions, callback) {
        return this.#ctx.callAPI('GetCancelledPackages', params, callback);
    }

    GetClients(params = GetClientsOptions, callback) {
        return this.#ctx.callAPI('GetClients', params, callback);
    }

    GetClientGroups(params = GetClientsGroupsOptions, callback) {
        return this.#ctx.callAPI('GetClientGroups', params, callback);
    }

    GetClientsDetails(params = GetClientDetailsOptions, callback) {
        return this.#ctx.callAPI('GetClientsDetails', params, callback);
    }

    GetClientsProducts(params = GetClientProductsOptions, callback) {
        return this.#ctx.callAPI('GetClientsProducts', params, callback);
    }

    CreateClientInvite(params = CreateClientInviteOptions, callback) {
        return this.#ctx.callAPI('CreateClientInvite', params, callback);
    }

    GetClientsAddons(params = GetClientAddonsOptions, callback) {
        return this.#ctx.callAPI('GetClientsAddons', params, callback);
    }

    GetClientsDomains(params = GetClientDomainsOptions, callback) {
        return this.#ctx.callAPI('GetClientsDomains', params, callback);
    }

    GetContacts(params = GetContactsOptions, callback) {
        return this.#ctx.callAPI('GetContacts', params, callback);
    }

    GetEmails(params = GetEmailsOptions, callback) {
        return this.#ctx.callAPI('GetEmails', params, callback);
    }

    UpdateClient(params = UpdateClientOptions, callback) {
        return this.#ctx.callAPI('UpdateClient', params, callback);
    }

    UpdateContact(params = UpdateContactOptions, callback) {
        return this.#ctx.callAPI('UpdateContact', params, callback);
    }
}


module.exports = {
    Clients,
    AddClientOptions,
    AddContactOptions,
    CloseClientOptions,
    DeleteClientOptions,
    DeleteContactOptions,
    GetCancelledPackagesOptions,
    GetClientsOptions,
    GetClientsGroupsOptions,
    GetClientProductsOptions,
    CreateClientInviteOptions,
    GetClientAddonsOptions,
    GetClientDomainsOptions,
    GetContactsOptions,
    GetEmailsOptions,
    UpdateClientOptions,
    UpdateContactOptions
}