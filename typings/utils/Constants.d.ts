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

/**
 * @param {Object} options - Options for generating OAuth URL.
 * @param {string} options.responseType - The response type.
 * @param {string[]} options.scope - The scope of authorization.
 * @param {string} options.prompt - The prompt type.
 * @param {number} [options.integrationType] - The installation context. Choose between "GuildInstall" or "UserInstall".
 */
export interface GenerateOauthUrlParams {
    scope: readonly Scopes[],
    prompt?: PromptTypes,
    responseCode?: ResponseCodeTypes,
    integrationType?: IntegrationTypes,
}

/**
 * @param {Object} options - Options for guild member information.
 * @param {string} options.accessToken - The access token.
 * @param {string} options.guildId - The guild ID.
 */
export interface GuildMemberParams {
    accessToken: string;
    guildId: string;
}

/**
 * @param {Object} options - Options for adding a guild member.
 * @param {string} options.accessToken - The access token.
 * @param {string} options.params.guildId - The guild ID.
 * @param {string} options.params.userId - The user ID.
 * @param {Object} [options.body] - Additional data for the guild member.
 * @param {string} [options.body.nick] - The nickname.
 * @param {string[]} [options.body.roles] - The roles.
 * @param {boolean} [options.body.mute] - Mute status.
 * @param {boolean} [options.body.deaf] - Deaf status.
 */
export interface AddGuildMemberParams {
    accessToken: string;
    params: { guildId: string; userId: string };
    body?: { nick: string; roles: string[]; mute: boolean; deaf: boolean };
}

/**
 * @param {Object} options - Options for adding a group member.
 * @param {string} options.accessToken - The access token.
 * @param {string} options.params.groupId - The group ID.
 * @param {string} options.params.userId - The user ID.
 * @param {Object} [options.body] - Additional data for the group member.
 * @param {string} [options.body.nick] - The nickname.
 */
export interface AddGroupMemberParams {
    accessToken: string;
    params: { groupId: string; userId: string };
    body?: { nick: string };
}

/**
 * @param {Object} options - Options for pushing user metadata.
 * @param {string} options.refreshToken - The refresh token.
 * @param {Object} options.body - Metadata to push.
 * @param {string} options.body.platformName - The platform name.
 * @param {object} options.body.metaData - The metadata.
 */
export interface PushUserMetaDataParams {
    refreshToken: string;
    body: { platformName: string, metaData: object };
}

/**
 * @param {Object} options - Options for registering user metadata.
 * @param {Object} options.body - Metadata to register.
 * @param {string} options.body.key - The key.
 * @param {string} options.body.name - The name.
 * @param {string} options.body.description - The description.
 * @param {number} options.body.type - The type.
 */
export interface RegisterUserMetaDataParams extends Array<{
    key: string;
    name: string;
    description: string;
    type: MetaDataTypes
}> {}