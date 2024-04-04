const AddUserOptions = {
    aciton: "",
    firstName: "",
    lastName: "",
    email: "",
    password2: "",
    language: ""
};

const DeleteUserClientOptions = {
    aciton: "",
    user_id: 0,
    client_id: 0
};

const GetPermissionsListOptions = {
    action: ""
};

const UpdateUserPermissionsOptions = {
    action: "",
    user_id: "",
    client_id: 0,
    Permissions: ""
};

const GetUsersOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    sorting: "",
    search: ""
};

const UpdateUserOptions = {
    action: "",
    user_id: 0,
    firstname: "",
    lastname: "",
    email: "",
    language: ""
};

class Users {
    #ctx;
    constructor(ctx) {
        this.#ctx = ctx;
    }

    AddUser(params = AddUserOptions, callback) {
        return this.#ctx.callAPI('AddUser', params, callback);
    }

    DeleteUserClient(params = DeleteUserClientOptions, callback) {
        return this.#ctx.callAPI('DeleteUserClient', params, callback);
    }

    GetPermissionsList(params = GetPermissionsListOptions, callback) {
        return this.#ctx.callAPI('GetPermissionsList', params, callback);
    }

    GetUserPermissions(params = GetPermissionsListOptions, callback) {
        return this.#ctx.callAPI('GetUserPermissions', params, callback);
    }

    UpdateUserPermissions(params = UpdateUserPermissionsOptions, callback) {
        return this.#ctx.callAPI('UpdateUserPermissions', params, callback);
    }

    GetUsers(params = GetUsersOptions, callback) {
        return this.#ctx.callAPI('GetUsers', params, callback);
    }

    UpdateUser(params = UpdateUserOptions, callback) {
        return this.#ctx.callAPI('UpdateUser', params, callback);
    }
};

module.exports = {
    Users, 
    AddUserOptions,
    DeleteUserClientOptions,
    GetPermissionsListOptions,
    UpdateUserPermissionsOptions,
    GetUsersOptions,
    UpdateUserOptions
};