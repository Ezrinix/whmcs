module.exports = class System {
    constructor(ctx) {
        this.ctx = ctx;
    }

    AddBannedIp(params, callback) {
        return this.ctx.callAPI('AddBannedIp', params, callback);
    }

    GetActivityLog(params, callback) {
        return this.ctx.callAPI('GetActivityLog', params, callback);
    }

    GetAdminUsers(params, callback) {
        return this.ctx.callAPI('GetAdminUsers', params, callback);
    }

    GetAutomationLog(params, callback) {
        return this.ctx.callAPI('GetAutomationLog', params, callback);
    }

    GetConfigurationValue(params, callback) {
        return this.ctx.callAPI('GetConfigurationValue', params, callback);
    }

    GetCurrencies(params, callback) {
        return this.ctx.callAPI('GetCurrencies', params, callback);
    }

    GetEmailTemplates(params, callback) {
        return this.ctx.callAPI('GetEmailTemplates', params, callback);
    }

    GetPaymentMethods(params, callback) {
        return this.ctx.callAPI('GetPaymentMethods', params, callback);
    }

    GetStaffOnline(params, callback) {
        return this.ctx.callAPI('GetStaffOnline', params, callback);
    }

    GetStats(params, callback) {
        return this.ctx.callAPI('GetStats', params, callback);
    }

    GetToDoItems(params, callback) {
        return this.ctx.callAPI('GetToDoItems', params, callback);
    }

    UpdateToDoItem(params, callback) {
        return this.ctx.callAPI('UpdateToDoItem', params, callback);
    }

    GetToDoItemStatuses(params, callback) {
        return this.ctx.callAPI('GetToDoItemStatuses', params, callback);
    }

    LogActivity(params, callback) {
        return this.ctx.callAPI('LogActivity', params, callback);
    }

    SendAdminEmail(params, callback) {
        return this.ctx.callAPI('SendAdminEmail', params, callback);
    }

    SendEmail(params, callback) {
        return this.ctx.callAPI('SendEmail', params, callback);
    }

    UpdateAnnouncement(params, callback) {
        return this.ctx.callAPI('UpdateAnnouncement', params, callback);
    }
};
