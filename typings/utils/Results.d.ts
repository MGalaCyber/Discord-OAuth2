export interface GenerateOAuth2Url {
    state: string;
    url: string;
}

export interface AuthorizationToken {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    refreshToken: string;
    scope: string;
}

export interface UserProfile {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    publicFlags: number;
    flags: number;
    banner: string;
    accentColor: number;
    globalName: string;
    avatarDecorationData: {
      asset: string;
      skuId: string;
    };
    bannerColor: string;
    clan: string;
    mfaEnabled: boolean;
    locale: string;
    premiumType: number;
    email: string;
    verified: boolean;
}

export interface UserGuilds extends Array<{
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: number;
    permissionsNew: string;
    features: string[];
}> {}

export interface UserConnections extends Array<{
    id: string;
    name: string;
    type: string;
    friendSync: boolean;
    metadataVisibility: number;
    showActivity: boolean;
    twoWayLink: boolean;
    verified: boolean;
    visibility: number;
}> {}

export interface UserGuildMember {
    avatar: string;
    communicationDisabledUntil: string;
    flags: number;
    joinedAt: string;
    nick: string;
    pending: boolean;
    premiumSince: string;
    roles: string[];
    unusualDMActivityUntil: string;
    user: {
        id: string;
        username: string;
        avatar: string;
        discriminator: string;
        publicFlags: number;
        flags: number;
        banner: string;
        accentColor: number;
        globalName: string;
        avatarDecorationData: {
            asset: string;
            skuId: string;
        };
        bannerColor: string;
        clan: string;
    };
    mute: boolean;
    deaf: boolean;
    bio: string;
    banner: string;
}