module.exports = class Users {
    constructor(ctx) {
        this.ctx = ctx;
    }

    AddUser(params, callback) {
        return this.ctx.callAPI('AddUser', params, callback);
    }

    DeleteUserClient(params, callback) {
        return this.ctx.callAPI('DeleteUserClient', params, callback);
    }

    GetPermissionsList(params, callback) {
        return this.ctx.callAPI('GetPermissionsList', params, callback);
    }

    GetUserPermissions(params, callback) {
        return this.ctx.callAPI('GetUserPermissions', params, callback);
    }

    UpdateUserPermissions(params, callback) {
        return this.ctx.callAPI('UpdateUserPermissions', params, callback);
    }

    GetUsers(params, callback) {
        return this.ctx.callAPI('GetUsers', params, callback);
    }

    UpdateUser(params, callback) {
        return this.ctx.callAPI('UpdateUser', params, callback);
    }
};
