const AddProductOptions = {
    action: "",
    name: "",
    gid: 0,
    slug: "",
    type: "",
    stockcontrol: false,
    qty: 0,
    paytype: "",
    hidden: false,
    showdomainoptions: false,
    tax: false,
    isFeatured: false,
    proratabilling: false,
    description: "",
    shortdescription: "",
    tagline: "",
    color: "",
    welcomeemail: 0,
    proratadate: 0,
    proratachargenextmonth: 0,
    subdomain: "",
    autosetup: "",
    module: "",
    servergroupid: 0,
    configoption1,
    configoption2,
    configoption3,
    configoption4,
    configoption5,
    configoption6,
    order: 0,
    pricing: [],
    recommendations: [],
    ondemandrenewalconfigurationoverride: false,
    ondemandrenewalsenabled: false,
    ondemandrenewalperiodmonthly: false,
    ondemandrenewalperiodquarterly: 0,
    ondemandrenewalperiodsemiannually: 0,
    ondemandrenewalperiodannually: 0,
    ondemandrenewalperiodbiennially: 0,
    ondemandrenewalperiodtriennially: 0
};

const GetProductsOptions = {
    action: "",
    pid: 0,
    gid: 0,
    module: ""
};

const UpgradeProductOptions = {
    action: "",
    serviceid: 0,
    calconly: false,
    paymentmethod: "",
    type: "",
    newproductid: 0,
    newproductbillingcycle: "",
    promocode: "",
    configoptions: []
};


module.exports = class Products {
    #ctx;
    constructor(ctx) {
        this.#ctx = ctx;
    }

    AddProduct(params = AddProductOptions, callback) {
        return this.#ctx.callAPI('AddProduct', params, callback);
    }

    GetProducts(params = GetProductsOptions, callback) {
        return this.#ctx.callAPI('GetProducts', params, callback);
    }

    UpgradeProduct(params = UpgradeProductOptions, callback) {
        return this.#ctx.callAPI('UpgradeProduct', params, callback);
    }
};
