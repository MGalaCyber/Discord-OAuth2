export enum Scopes {
    Identify,
    Email,
    Guilds,
    GdmJoin,
    GuildsJoin,
    GuildsMembersRead,
    RoleConnectionsWrite,
    Connections,
}

export enum StateTypes {
    UserAuth,
    LinkedRoles,
}

export enum ResponseCodeTypes {
    Code,
    Token,
}

export enum PromptTypes {
    Consent,
    None,
}

export enum IntegrationTypes {
    GuildInstall,
    UserInstall,
}

export enum MetaDataTypes {
    IntegerLessThanOrEqual,
    IntegerGreaterThanOrEqual,
    IntegerEqual,
    IntegerNotEqual,
    DatetimeLessThanOrEqual,
    DatetimeGreaterThanOrEqual,
    BooleanEqual,
    BooleanNotEqual,
}

export interface GenerateOAuth2UrlParams {
    state: StateTypes,
    scope: readonly Scopes[],
    prompt?: PromptTypes,
    responseCode?: ResponseCodeTypes,
    integrationType?: IntegrationTypes,
}

export interface GuildMemberParams {
    accessToken: string;
    guildId: string;
}

export interface AddGuildMemberParams {
    accessToken: string;
    params: { guildId: string; userId: string };
    body?: { nick: string; roles: string[]; mute: boolean; deaf: boolean };
}

export interface AddGroupMemberParams {
    accessToken: string;
    params: { groupId: string; userId: string };
    body?: { nick: string };
}

export interface PushUserMetaDataParams {
    refreshToken: string;
    body: { platformName: string, metaData: object };
}

export interface RegisterMetaDataParams extends Array<{
    key: string;
    name: string;
    nameLocalizations?: string;
    description: string;
    descriptionLocalizations?: string;
    type: MetaDataTypes
}> {}