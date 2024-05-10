import {
    GenerateOAuth2UrlParams,
    GuildMemberParams,
    AddGuildMemberParams,
    AddGroupMemberParams,
    PushUserMetaDataParams,
    RegisterMetaDataParams,
} from "../utils/Constants";
import {
    GenerateOAuth2Url,
    AuthorizationToken,
    UserProfile,
    UserGuilds,
    UserConnections,
    UserGuildMember,
} from "../utils/Results";

export class DiscordOAuth2 {
    public constructor({ clientId, clientSecret, clientToken, redirectUri }: {
        clientId: string;
        clientSecret: string;
        clientToken?: string;
        redirectUri: string;
    });

    private clientId: string;
    private clientSecret: string;
    private clientToken: string;
    private redirectUri: string;

    /**
     * Generate a oauth2 URL.
     * @param {GenerateOAuth2Url} options - Options for generating OAuth URL.
     * @param {Object} options - Options for generating OAuth URL.
     * @param {string} options.state - The state type.
     * @param {string[]} options.scope - The scope of authorization.
     * @param {string} options.prompt - The prompt type.
     * @param {string} options.responseType - The response type.
     * @param {number} options.integrationType - The installation context. Choose between "GuildInstall" or "UserInstall".
     * @returns {Promise<GenerateOAuth2Url>} - A promise that resolves with the generated OAuth URL.
     */
    public GenerateOAuth2Url(options: GenerateOAuth2UrlParams): Promise<GenerateOAuth2Url>;

    /**
     * Retrieves access token based on provided callback code.
     * @param {string} callbackCode - The callback code.
     * @returns {Promise<AuthorizationToken>} - A promise that resolves with the access token.
     */
    public GetAccessToken(callbackCode: string): Promise<AuthorizationToken>;

    /**
     * Retrieves a new access token based on provided refresh token.
     * @param {string} refreshToken - The refresh token.
     * @returns {Promise<AuthorizationToken>} - A promise that resolves with the new access token.
     */
    public GetRefreshToken(refreshToken: string): Promise<AuthorizationToken>;

    public UserDataSchema: {
        /**
         * Retrieves user profile based on provided access token.
         * @param {string} accessToken - The access token.
         * @returns {Promise<UserProfile>} - A promise that resolves with the user profile.
         */
        GetUserProfile(accessToken: string): Promise<UserProfile>;

        /**
         * Retrieves user guilds based on provided access token.
         * @param {string} accessToken - The access token.
         * @returns {Promise<UserGuilds>} - A promise that resolves with the user guilds.
         */
        GetUserGuilds(accessToken: string): Promise<UserGuilds>;

        /**
         * Retrieves user connections based on provided access token.
         * @param {string} accessToken - The access token.
         * @returns {Promise<UserConnections>} - A promise that resolves with the user connections.
         */
        GetUserConnections(accessToken: string): Promise<UserConnections>;

        /**
         * Retrieves user guild member based on provided access token and guild member parameters.
         * @param {GuildMemberParams} options - Options for retrieving user guild member.
         * @param {Object} options - Options for retrieving user guild member.
         * @param {string} options.accessToken - The access token.
         * @param {string} options.guildId - The guild ID.
         * @returns {Promise<UserGuildMember>} - A promise that resolves with the user guild member.
         */
        GetUserGuildMember(options: GuildMemberParams): Promise<UserGuildMember>;
    };

    public AddUserSchema: {
        /**
         * Adds a guild member based on provided options.
         * @param {AddGuildMemberParams} options - Options for adding a guild member.
         * @param {Object} options - Options for adding a guild member.
         * @param {string} options.accessToken - The access token.
         * @param {string} options.params.guildId - The guild ID.
         * @param {string} options.params.userId - The user ID.
         * @param {Object} [options.body] - Additional data for the guild member.
         * @param {string} [options.body.nick] - The nickname.
         * @param {string[]} [options.body.roles] - The roles.
         * @param {boolean} [options.body.mute] - Mute status.
         * @param {boolean} [options.body.deaf] - Deaf status.
         * @returns {Promise<any>} - A promise that resolves when the guild member is added.
         */
        AddGuildMember(options: AddGuildMemberParams): Promise<any>;

        /**
         * Adds a group member based on provided options.
         * @param {AddGroupMemberParams} options - Options for adding a group member.
         * @param {Object} options - Options for adding a group member.
         * @param {string} options.accessToken - The access token.
         * @param {string} options.params.groupId - The group ID.
         * @param {string} options.params.userId - The user ID.
         * @param {Object} [options.body] - Additional data for the group member.
         * @param {string} [options.body.nick] - The nickname.
         * @returns {Promise<any>} - A promise that resolves when the group member is added.
         */
        AddGroupMember(options: AddGroupMemberParams): Promise<any>;
    };

    public LinkedRolesSchema: {
        /**
         * Retrieves user metadata based on provided refresh token.
         * @param {string} refreshToken - The refresh token.
         * @returns {Promise<any>} - A promise that resolves with the user metadata.
         */
        GetUserMetaData(refreshToken: string): Promise<any>;

        /**
         * Pushes user metadata based on provided options.
         * @param {PushUserMetaDataParams} options - Options for pushing user metadata.
         * @param {Object} options - Options for pushing user metadata.
         * @param {string} options.refreshToken - The refresh token.
         * @param {Object} options.body - Metadata to push.
         * @param {string} options.body.platformName - The platform name.
         * @param {object} options.body.metaData - The metadata.
         * @returns {Promise<any>} - A promise that resolves when the user metadata is pushed.
         */
        PushUserMetaData(options: PushUserMetaDataParams): Promise<any>;

        /**
         * Registers user metadata based on provided options.
         * @param {RegisterMetaDataParams} options - Options for registering user metadata.
         * @param {string[]} options - Options for registering user metadata.
         * @param {Object} options.body - Metadata to register.
         * @param {string} options.body.key - The key.
         * @param {string} options.body.name - The name.
         * @param {string} options.body.description - The description.
         * @param {number} options.body.type - The type.
         * @returns {Promise<any>} - A promise that resolves when the user metadata is registered.
         */
        RegisterMetaData(options: RegisterMetaDataParams): Promise<any>;
    };
}