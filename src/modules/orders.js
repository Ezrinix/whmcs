const AddOrderOptions = {
    action: "",
    clientid: 0,
    paymentmethod: "",
    pid: [],
    domain: [],
    billingcylce: [],
    domaintype: [],
    regperiod: [],
    idnlanguage: [],
    eppcode: [],
    nameserver1: "",
    nameserver2: "",
    nameserver3: "",
    nameserver4: "",
    nameserver5: "",
    customfields: [],
    configoptions: [],
    priceoverride: [],
    promocode: "",
    promooverride: false,
    affid: 0,
    noinvoice: false,
    noinvoiceemail: false,
    noemail: false,
    addons: [],
    hostname: [],
    ns1prefix: [],
    ns2prefix: [],
    rootpw: [],
    contactid: 0,
    dnsmanagement: [],
    domainfields: [],
    emailforwarding: [],
    idprotection: [],
    domainpriceoverride: [],
    domainrenewoverride: [],
    domainrenewals: [],
    clientip: "",
    addonid: 0,
    serviceid: 0,
    addonids: [],
    serviceids: [],
    servicerenewals: [],
    addonrenewals: []
};

const AcceptOrderOptions = {
    action: "",
    orderid: 0,
    serverid: 0,
    serviceusername: "",
    servicepassword: "",
    registrar: "",
    sendregistrar: false,
    autosetup: false,
    sendemail: false
};

const CancelOrderOptions = {
    action: "",
    orderid: 0,
    cancelsub: false,
    noemail: false
};

const DeleteOrderOptions = {
    action: "",
    orderid: 0
};

const GetOrdersOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    id: 0,
    userid: 0,
    requestor_id: 0,
    status: ""
};

const GetOrderStatusesOptions = {
    action: ""
};

class Orders {
    #ctx;
    constructor(ctx) {
        this.#ctx = ctx;
    }

    AddOrder(params = AddOrderOptions, callback) {
        return this.#ctx.callAPI('AddOrder', params, callback);
    }

    AcceptOrder(params = AcceptOrderOptions, callback) {
        return this.#ctx.callAPI('AcceptOrder', params, callback);
    }

    CancelOrder(params = CancelOrderOptions, callback) {
        return this.#ctx.callAPI('CancelOrder', params, callback);
    }

    DeleteOrder(params = DeleteOrderOptions, callback) {
        return this.#ctx.callAPI('DeleteOrder', params, callback);
    }

    GetOrders(params = GetOrdersOptions, callback) {
        return this.#ctx.callAPI('GetOrders', params, callback);
    }

    GetOrderStatuses(params= GetOrderStatusesOptions, callback) {
        return this.#ctx.callAPI('GetOrderStatuses', params, callback);
    }
};


module.exports = {
    Orders,
    AddOrderOptions,
    AcceptOrderOptions,
    CancelOrderOptions,
    DeleteOrderOptions,
    GetOrdersOptions,
    GetOrderStatusesOptions
};