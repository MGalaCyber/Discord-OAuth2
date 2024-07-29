const DiscordApis = require("./discord");

const Scopes = {
    Identify: "identify",
    Email: "email",
    Guilds: "guilds",
    GdmJoin: "gdm.join",
    GuildsJoin: "guilds.join",
    GuildsMembersRead: "guilds.members.read",
    RoleConnectionsWrite: "role_connections.write",
    Connections: "connections",
};

const StateTypes = {
    UserAuth: "user_auth",
    LinkedRoles: "linked_roles",
};

const ResponseCodeTypes = {
    Code: "code",
    Token: "token",
};

const PromptTypes = {
    Consent: "consent",
    None: "none",
};

const IntegrationTypes = {
    GuildInstall: 0,
    UserInstall: 1,
};

const MetaDataTypes = {
    IntegerLessThanOrEqual: 1,
    IntegerGreaterThanOrEqual: 2,
    IntegerEqual: 3,
    IntegerNotEqual: 4,
    DatetimeLessThanOrEqual: 5,
    DatetimeGreaterThanOrEqual: 6,
    BooleanEqual: 7,
    BooleanNotEqual: 8,
};

class DiscordOAuth2 {
    constructor({ clientId, clientSecret, clientToken, redirectUri }) {
        if (!clientId) throw new Error("Missing required parameters: clientId");
        if (!clientSecret) throw new Error("Missing required parameters: clientSecret");
        if (!redirectUri) throw new Error("Missing required parameters: redirectUri");
        if (typeof clientId !== "string") throw new Error("Invalid parameter types: clientId must be string");
        if (typeof clientSecret !== "string") throw new Error("Invalid parameter types: clientSecret must be string");
        if (typeof redirectUri !== "string") throw new Error("Invalid parameter types: redirectUri must be string");
        if (clientToken !== undefined && typeof clientToken !== "string") throw new Error("Invalid parameter types: clientToken must be string");

        this.clientId = clientId ? clientId : "";
        this.clientSecret = clientSecret ? clientSecret : "";
        this.clientToken = clientToken ? clientToken : "";
        this.redirectUri = redirectUri ? redirectUri : "";
    };

    GenerateOAuth2Url({ state, scope, prompt, responseCode, integrationType }) {
        if (!state) throw new Error("Missing required parameters: state");
        if (!scope) throw new Error("Missing required parameters: scope");
        if (!Array.isArray(scope)) throw new Error("Invalid parameter type: scope must be an array");
        if (typeof state !== "string") throw new Error("Invalid parameter type: state must be a string");
        if (prompt !== undefined && typeof prompt !== "string") throw new Error("Invalid parameter type: prompt must be a string");
        if (responseCode !== undefined && typeof responseCode !== "string") throw new Error("Invalid parameter responseCode must be string");
        if (integrationType !== undefined && typeof integrationType !== "number") throw new Error("Invalid parameter type: integrationType must be a number");

        return DiscordApis.OAuth2Url(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { state, scope, prompt, responseCode, integrationType });
    };

    GetAccessToken(callbackCode) {
        if (!callbackCode) throw new Error("Missing required parameter: callbackCode");
        if (typeof callbackCode !== "string") throw new Error("Invalid parameter type: callbackCode must be a string");

        return DiscordApis.AccessToken(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { callbackCode });
    };

    GetRefreshToken(refreshToken) {
        if (!refreshToken) throw new Error("Missing required parameter: refreshToken");
        if (typeof refreshToken !== "string") throw new Error("Invalid parameter type: refreshToken must be a string");

        return DiscordApis.RefreshToken(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { refreshToken });
    };

    get UserDataSchema() {
        return {
            GetUserProfile(accessToken) {
                if (!accessToken) throw new Error("Missing required parameter: accessToken");
                if (typeof accessToken !== "string") throw new Error("Invalid parameter type: accessToken must be a string");

                return DiscordApis.UserProfile(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { accessToken });
            },
            GetUserGuilds(accessToken) {
                if (!accessToken) throw new Error("Missing required parameter: accessToken");
                if (typeof accessToken !== "string") throw new Error("Invalid parameter type: accessToken must be a string");

                return DiscordApis.UserGuilds(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { accessToken });
            },
            GetUserConnections(accessToken) {
                if (!accessToken) throw new Error("Missing required parameter: accessToken");
                if (typeof accessToken !== "string") throw new Error("Invalid parameter type: accessToken must be a string");

                return DiscordApis.UserConnections(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { accessToken });
            },
            GetUserGuildMember({ accessToken, guildId }) {
                if (!accessToken) throw new Error("Missing required parameter: accessToken");
                if (!guildId) throw new Error("Missing required parameter: guildId");
                if (typeof accessToken !== "string") throw new Error("Invalid parameter types: accessToken must be string");
                if (typeof guildId !== "string") throw new Error("Invalid parameter types: guildId must be string");

                return DiscordApis.UserGuildMember(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { accessToken, guildId });
            },
        };
    };

    get AddUserSchema() {
        return {
            AddGuildMember({ accessToken, params = { guildId, userId }, body = { nick: "", roles: [], mute: false, deaf: false } }) {
                if (!accessToken) throw new Error("Missing required parameters: accessToken");
                if (!params) throw new Error("Missing required parameters: params");
                if (!params.guildId) throw new Error("Missing required parameters: params.guildId");
                if (!params.userId) throw new Error("Missing required parameters: params.userId");
                if (typeof accessToken !== "string") throw new Error("Invalid parameter types: accessToken must be string");
                if (typeof params.guildId !== "string") throw new Error("Invalid parameter types: params.guildId must be string");
                if (typeof params.userId !== "string") throw new Error("Invalid parameter types: params.userId must be string");
                if (body !== undefined && typeof body !== "object") throw new Error("Invalid parameter type: body must be an objects");
                if (body.nick !== undefined && typeof body.nick !== "string") throw new Error("Invalid parameter type: body.nick must be a string");
                if (body.roles !== undefined && !Array.isArray(body.roles)) throw new Error("Invalid parameter type: body.roles must be an array");
                if (body.mute !== undefined && typeof body.mute !== "boolean") throw new Error("Invalid parameter types: body.mute must be boolean");
                if (body.deaf !== undefined && typeof body.deaf !== "boolean") throw new Error("Invalid parameter types: body.deaf must be boolean");

                return DiscordApis.AddGuildMember(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, {
                    accessToken,
                    body,
                    guildId: params.guildId,
                    userId: params.userId
                });
            },
            AddGroupMember({ accessToken, params = { groupId, userId }, body = { nick: "" } }) {
                if (!accessToken) throw new Error("Missing required parameters: accessToken");
                if (!params) throw new Error("Missing required parameters: params");
                if (!params.groupId) throw new Error("Missing required parameters: params.groupId");
                if (!params.userId) throw new Error("Missing required parameters: params.userId");
                if (typeof accessToken !== "string") throw new Error("Invalid parameter types: accessToken must be string");
                if (typeof params !== "object") throw new Error("Invalid parameter types: params must be objects");
                if (typeof params.groupId !== "string") throw new Error("Invalid parameter types: params.groupId must be string");
                if (typeof params.userId !== "string") throw new Error("Invalid parameter types: params.userId must be string");
                if (body !== undefined && typeof body !== "object") throw new Error("Invalid parameter type: body must be an object");
                if (body.nick !== undefined && typeof body.nick !== "string") throw new Error("Invalid parameter type: body.nick must be a string");

                return DiscordApis.AddGroupMember(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, {
                    accessToken,
                    body,
                    groupId: params.groupId,
                    userId: params.userId,
                });
            },
        };
    };

    get LinkedRolesSchema() {
        return {
            GetUserMetaData(refreshToken) {
                if (!refreshToken) throw new Error("Missing required parameter: refreshToken");
                if (typeof refreshToken !== "string") throw new Error("Invalid parameter type: refreshToken must be a string");

                return DiscordApis.UserMetaData(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { refreshToken });
            },
            PushUserMetaData({ refreshToken, body = { platformName, metaData: {} } }) {
                if (!refreshToken) throw new Error("Missing required parameters: refreshToken");
                if (!body) throw new Error("Missing required parameters: body");
                if (!body.platformName) throw new Error("Missing required parameters: body.platformName");
                if (!body.metaData) throw new Error("Missing required parameters: body.metaData");
                if (typeof refreshToken !== "string") throw new Error("Invalid parameter types: refreshToken must be string");
                if (typeof body !== "object") throw new Error("Invalid parameter types: body must be objects");
                if (typeof body.platformName !== "string") throw new Error("Invalid parameter types: body.platformName must be string");
                if (typeof body.metaData !== "object") throw new Error("Invalid parameter types: metaData must be objects");

                return DiscordApis.PushMetaData(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, {
                    refreshToken,
                    platformName: body.platformName,
                    metaData: body.metaData
                });
            },
            RegisterMetaData(metaDataArray) {
                if (!metaDataArray) throw new Error("Missing required parameter: metaDataArray");
                if (!Array.isArray(metaDataArray)) throw new Error("Invalid parameter type: metaDataArray must be an array");

                return DiscordApis.RegisterMetaData(this.clientId, this.clientSecret, this.clientToken, this.redirectUri, { metaDataArray });
            },
        };
    };
};

module.exports = { DiscordOAuth2, Scopes, StateTypes, ResponseCodeTypes, PromptTypes, IntegrationTypes, MetaDataTypes };