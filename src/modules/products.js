module.exports = class Products {
    constructor(ctx) {
        this.ctx = ctx;
    }

    AddProduct(params, callback) {
        return this.ctx.callAPI('AddProduct', params, callback);
    }

    GetProducts(params, callback) {
        return this.ctx.callAPI('GetProducts', params, callback);
    }

    UpgradeProduct(params, callback) {
        return this.ctx.callAPI('UpgradeProduct', params, callback);
    }
};
