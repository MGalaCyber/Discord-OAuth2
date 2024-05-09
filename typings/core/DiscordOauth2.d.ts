import {
    GenerateOauthUrlParams,
    GuildMemberParams,
    AddGuildMemberParams,
    AddGroupMemberParams,
    PushUserMetaDataParams,
    RegisterUserMetaDataParams,
} from "../utils/Constants";
import {
    GenerateOauthUrl,
    AuthorizationToken,
    UserProfile,
    UserGuilds,
    UserConnections,
    UserGuildMember,
} from "../utils/Results";

export class DiscordOauth2 {
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
     * Generates OAuth URL based on provided options.
     * @param {GenerateOauthUrlParams} options - Options for generating OAuth URL.
     * @param {Object} options - Options for generating OAuth URL.
     * @param {string} options.responseType - The response type.
     * @param {string[]} options.scope - The scope of authorization.
     * @param {string} options.prompt - The prompt type.
     * @param {number} [options.integrationType] - The installation context. Choose between "GuildInstall" or "UserInstall".
     * @returns {Promise<GenerateOauthUrl>} - A promise that resolves with the generated OAuth URL.
     */
    public GenerateOauthUrl(options: GenerateOauthUrlParams): Promise<GenerateOauthUrl>;

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
        GetUserGuild(accessToken: string): Promise<UserGuilds>;

        /**
         * Retrieves user connections based on provided access token.
         * @param {string} accessToken - The access token.
         * @returns {Promise<UserConnections>} - A promise that resolves with the user connections.
         */
        GetUserConnection(accessToken: string): Promise<UserConnections>;

        /**
         * Retrieves user guild member based on provided access token and guild member parameters.
         * @param {GuildMemberParams} options - Options for retrieving user guild member.
         * @returns {Promise<UserGuildMember>} - A promise that resolves with the user guild member.
         */
        GetUserGuildMember(options: GuildMemberParams): Promise<UserGuildMember>;
    };

    public AddUserSchema: {
        /**
         * Adds a guild member based on provided options.
         * @param {AddGuildMemberParams} options - Options for adding a guild member.
         * @returns {Promise<any>} - A promise that resolves when the guild member is added.
         */
        AddGuildMember(options: AddGuildMemberParams): Promise<any>;

        /**
         * Adds a group member based on provided options.
         * @param {AddGroupMemberParams} options - Options for adding a group member.
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
         * @returns {Promise<any>} - A promise that resolves when the user metadata is pushed.
         */
        PushUserMetaData(options: PushUserMetaDataParams): Promise<any>;

        /**
         * Registers user metadata based on provided options.
         * @param {RegisterUserMetaDataParams} options - Options for registering user metadata.
         * @returns {Promise<any>} - A promise that resolves when the user metadata is registered.
         */
        RegisterUserMetaData(options: RegisterUserMetaDataParams): Promise<any>;
    };
}