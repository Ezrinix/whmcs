const AddBannedIpOptions = {
    action: "",
    ip: "",
    reason: "",
    days: 0,
    expires: ""
};

const GetActivityLogOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    clientid: 0,
    date: "",
    user: "",
    description: "",
    ipaddress: ""
};

const GetAdminUsersOptions = {
    action: "",
    roleid: 0,
    email: "",
    include_disabled: false
};

const GetAutomationLogOptions = {
    action: "",
    startdate: "",
    enddate: "",
    namespace: ""
};

const GetConfigurationValueOptions = {
    action: "",
    setting: ""
};

const GetCurrenciesOptions = {
    action: ""
};

const GetEmailTemplatesOptions = {
    action: "",
    type: "",
    language: ""
};

const GetPaymentMethodsOptions = {
    action: "",
    clientid: 0,
    paymethodid: 0,
    type: ""
};

const GetStaffOnlineOptions = {
    action: ""
};

const GetStatsOptions = {
    action: "",
    timeline_days: 0
};

const GetToDoItemsOptions = {
    action: "",
    limitstart: 0,
    limitnum: 0,
    status: 0
};

const UpdateToDoItemOptions = {
    action: "",
    itemid: 0,
    adminid: 0,
    status: "",
    date: 0,
    title: "",
    description: "",
    duedate: 0
};

const GetToDoItemStatusesOptions = {
    action: ""
};

const LogActivityOptions = {
    action: "",
    clientid: 0,
    description: ""
};

const SendAdminEmailOptions = {
    action: "",
    messagename: "",
    custommessage: "",
    customsubject: "",
    type: "",
    deptid: 0,
    mergefields: []
};

const SendEmailOptions = {
    action: "",
    messagename: "",
    id: 0,
    customtype: "",
    custommessage: "",
    customsubject: "",
    customvars: []
};

const UpdateAnnouncementOptions = {
    action: "",
    announcementid: "",
    title: "",
    announcement: "",
    date: "",
    published: false,
}
module.exports = class System {
    #ctx;
    constructor(ctx) {
        this.#ctx = ctx;
    }

    AddBannedIp(params = AddBannedIpOptions, callback) {
        return this.#ctx.callAPI('AddBannedIp', params, callback);
    }

    GetActivityLog(params = GetActivityLogOptions, callback) {
        return this.#ctx.callAPI('GetActivityLog', params, callback);
    }

    GetAdminUsers(params = GetAdminUsersOptions, callback) {
        return this.#ctx.callAPI('GetAdminUsers', params, callback);
    }

    GetAutomationLog(params = GetAutomationLogOptions, callback) {
        return this.#ctx.callAPI('GetAutomationLog', params, callback);
    }

    GetConfigurationValue(params = GetConfigurationValueOptions, callback) {
        return this.#ctx.callAPI('GetConfigurationValue', params, callback);
    }

    GetCurrencies(params = GetCurrenciesOptions, callback) {
        return this.#ctx.callAPI('GetCurrencies', params, callback);
    }

    GetEmailTemplates(params = GetEmailTemplatesOptions, callback) {
        return this.#ctx.callAPI('GetEmailTemplates', params, callback);
    }

    GetPaymentMethods(params = GetPaymentMethodsOptions, callback) {
        return this.#ctx.callAPI('GetPaymentMethods', params, callback);
    }

    GetStaffOnline(params = GetStaffOnlineOptions, callback) {
        return this.#ctx.callAPI('GetStaffOnline', params, callback);
    }

    GetStats(params = GetStatsOptions, callback) {
        return this.#ctx.callAPI('GetStats', params, callback);
    }

    GetToDoItems(params = GetToDoItemsOptions, callback) {
        return this.#ctx.callAPI('GetToDoItems', params, callback);
    }

    UpdateToDoItem(params = UpdateToDoItemOptions, callback) {
        return this.#ctx.callAPI('UpdateToDoItem', params, callback);
    }

    GetToDoItemStatuses(params = GetToDoItemStatusesOptions, callback) {
        return this.#ctx.callAPI('GetToDoItemStatuses', params, callback);
    }

    LogActivity(params = LogActivityOptions, callback) {
        return this.#ctx.callAPI('LogActivity', params, callback);
    }

    SendAdminEmail(params = SendAdminEmailOptions, callback) {
        return this.#ctx.callAPI('SendAdminEmail', params, callback);
    }

    SendEmail(params = SendEmailOptions, callback) {
        return this.#ctx.callAPI('SendEmail', params, callback);
    }

    UpdateAnnouncement(params = UpdateAnnouncementOptions, callback) {
        return this.#ctx.callAPI('UpdateAnnouncement', params, callback);
    }
};
