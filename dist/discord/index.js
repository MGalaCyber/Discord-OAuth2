module.exports = {
    OAuth2Url: require("./genOAuth2Url"),
    AccessToken: require("./genAccessToken"),
    RefreshToken: require("./genRefreshToken"),

    UserProfile: require("./userProfile"),
    UserGuilds: require("./userGuilds"),
    UserConnections: require("./userConnections"),
    UserGuildMember: require("./userGuildMember"),

    AddGuildMember: require("./addGuildMember"),
    AddGroupMember: require("./addGroupMember"),

    UserMetaData: require("./userMetaData"),
    PushMetaData: require("./pushMetaData"),
    RegisterMetaData: require("./registerMetaData"),
};