module.exports = class Orders {
    constructor(ctx) {
        this.ctx = ctx;
    }

    AddOrder(params, callback) {
        return this.ctx.callAPI('AddOrder', params, callback);
    }

    AcceptOrder(params, callback) {
        return this.ctx.callAPI('AcceptOrder', params, callback);
    }

    CancelOrder(params, callback) {
        return this.ctx.callAPI('CancelOrder', params, callback);
    }

    DeleteOrder(params, callback) {
        return this.ctx.callAPI('DeleteOrder', params, callback);
    }

    GetOrders(params, callback) {
        return this.ctx.callAPI('GetOrders', params, callback);
    }

    GetOrderStatuses(params, callback) {
        return this.ctx.callAPI('GetOrderStatuses', params, callback);
    }
};
