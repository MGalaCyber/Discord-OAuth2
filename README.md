<div align="center">

[![https://nodei.co/npm/@mgalacyber/discord-oauth2.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@mgalacyber/discord-oauth2.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@mgalacyber/discord-oauth2)
</div>

# DISCORD OAUTH2

**Discord OAuth2** is a comprehensive utility designed for Discord integration, offering robust functionalities for user authentication and profile management.

## Features
- 🚀 Streamlined OAuth2 workflow for seamless user authentication and authorization.
- 📦 Retrieve comprehensive user profiles, including details like username, avatar, and other.
- 🔄 Access user connections and guild memberships for enhanced community interaction.

## Installation
npm:
```bash
$ npm install @mgalacyber/discord-oauth2
```
yarn:
```bash
$ yarn add @mgalacyber/discord-oauth2
```

## Simple to Use
### CommonJs (CJS) syntax
```js
const { DiscordOAuth2 } = require("@mgalacyber/discord-oauth2");
```
### ECMAScript Modules (ESM) syntax
```ts
import { DiscordOAuth2 } from "@mgalacyber/discord-oauth2";
```

## Example
### Create Client
```js
const { DiscordOAuth2 } = require("@mgalacyber/discord-oauth2");

const oauth2 = new DiscordOAuth2({
    clientId: "123456789012345678", // Required
    clientSecret: "E-1234567890ABCDEFGHIJ1234567890", // Required
    clientToken: "1234567890ABCDEFGHIJ1234.123ABC.1234567890ABCDEFGHIJ1234-123ABC_123ABC", // Optional | LinkedRolesSchema & AddUserSchema only
    redirectUri: "https://example.com/callback" // Required
});
```
### Generate OAuth2 URL
```js
const { Scopes, IntegrationTypes, PromptTypes, ResponseCodeTypes } = require("@mgalacyber/discord-oauth2");

oauth2.GenerateOAuthUrl({
    scope: [ // Required
        Scopes.Identify,
        Scopes.Email,
        Scopes.Guilds,
        Scopes.Connections,
        Scopes.GuildsMembersRead,
    ],
    responseCode: ResponseCodeTypes.Code, // Optional
    prompt: PromptTypes.None, // Optional
    integrationType: IntegrationTypes.UserInstall // Optional

}).then((result) => {
    console.log(result);
    // Response {
    //     state: string,
    //     url: string,
    // }
});
```
### Get Access Token
```js
oauth2.GetAccessToken(callbackCode).then((result) => {
    console.log(result);
    // Response {
    //     accessToken: string,
    //     tokenType: string,
    //     expiresIn: number,
    //     refreshToken: string,
    //     scope: string,
    // }
});
```
### Get Refresh Token
```js
oauth2.GetRefreshToken(refreshToken).then((result) => {
    console.log(result);
    // Response {
    //     accessToken: string,
    //     tokenType: string,
    //     expiresIn: number,
    //     refreshToken: string,
    //     scope: string,
    // }
});
```
### Get User Profile
> [!TIP]
> Require scope for this function:
> Use the `identify` scope to retrieve the user profile without including `email` and `verified` status.
> Use the `email` scope to retrieve the user's `email` and `verified` status.
```js
oauth2.UserDataSchema.GetUserProfile(accessToken).then((result) => {
    console.log(result);
    // Response {
    //     id: string,
    //     username: string,
    //     avatar: string,
    //     discriminator: string,
    //     publicFlags: number,
    //     flags: number,
    //     banner: string,
    //     accentColor: number,
    //     globalName: string,
    //     avatarDecorationData: {
    //     asset: string,
    //     skuId: string,
    //     },
    //     bannerColor: string,
    //     clan: string,
    //     mfaEnabled: boolean,
    //     locale: string,
    //     premiumType: number,
    //     email: string,
    //     verified: boolean,
    // }
});
```
### Get User Guilds
> [!TIP]
> Require scope for this function:
> Use the `guilds` scope to retrieve a list of guilds that the user has joined.
```js
oauth2.UserDataSchema.GetUserGuilds(accessToken).then((result) => {
    console.log(result);
    // Response [
    //     {
    //         id: string,
    //         name: string,
    //         icon: string,
    //         owner: boolean,
    //         permissions: number,
    //         permissionsNew: string,
    //         features: array,
    //     }
    // ]
});
```
### Get User Connections
> [!TIP]
> Require scope for this function:
> Use the `connections` scope to retrieve a list of connections associated with the user account.
```js
oauth2.UserDataSchema.GetUserConnections(accessToken).then((result) => {
    console.log(result);
    // Response [
    //     {
    //         id: string,
    //         name: string,
    //         type: string,
    //         friendSync: boolean,
    //         metadataVisibility: number,
    //         showActivity: boolean,
    //         twoWayLink: boolean,
    //         verified: boolean,
    //         visibility: number,
    //     }
    // ]
});
```
### Get User Guild Member
```js
oauth2.UserDataSchema.GetUserGuildMember({
    accessToken: "1234567890ABCDEFGHIJ1234567890", // Required
    guildId: "123456789012345678", // Required

}).then((result) => {
    console.log(result);
    // Response {
    //     avatar: string,
    //     communicationDisabledUntil: string,
    //     flags: number,
    //     joinedAt: string,
    //     nick: string,
    //     pending: boolean,
    //     premiumSince: string,
    //     roles: array,
    //     unusualDMActivityUntil: string,
    //     user: {
    //         id: string,
    //         username: string,
    //         avatar: string,
    //         discriminator: string,
    //         publicFlags: number,
    //         flags: number,
    //         banner: string,
    //         accentColor: number,
    //         globalName: string,
    //         avatarDecorationData: {
    //             asset: string,
    //             skuId: string,
    //         },
    //         bannerColor: string,
    //         clan: string,
    //     },
    //     mute: boolean,
    //     deaf: boolean,
    //     bio: string,
    //     banner: string,
    // }
});
```
### Add User to Guild
> [!TIP]
> Scope requirements for this function:
> Use the `guilds.join` scope to add a member to a Guild (also the bot needs the `CREATE_INSTANT_INVITE` permission).
> Grant the bot the `MANAGE_NICKNAMES` permission to customize user nicknames in the guild.
> Grant the bot the `MANAGE_ROLES` permission to add roles to user profiles in the guild.
> Grant the bot the `MUTE_MEMBERS` permission to mute users in the guild.
> Grant the bot the `DEAFEN_MEMBERS` permission to deafen users in the guild.
```js
oauth2.AddUserSchema.AddGuildMember({
    accessToken: "1234567890ABCDEFGHIJ1234567890", // Required
    params: { // Required
        guildId: "123456789012345678",
        userId: "123456789012345678",
    },
    body: { // Optional
        nick: "Example Name",
        roles: ["123456789012345678"],
        mute: false,
        deaf: false,
    },
});
```
### Add User to Group
> [!TIP]
> Scope requirements for this function:
> Use the `gdm.join` scope to add a member to a DM Group.
```js
oauth2.AddUserSchema.AddGroupMember({
    accessToken: "1234567890ABCDEFGHIJ1234567890", // Required
    params: { // Required
        groupId: "123456789012345678",
        userId: "123456789012345678",
    },
    body: { // Optional
        nick: "Example Name"
    },
});
```

## How It Works
**Package Notifier** simplifies user authentication and profile management for Discord-integrated applications. It offers a straightforward OAuth2 workflow, enabling developers to seamlessly integrate Discord features into their projects.