export type DiscordUser = {
    id: string;
    tag: string;
    username: string;
    discriminator: string;
    avatarURL?: string;
    bannerURL?: string;
    accentHex?: string;
}

export type DiscordStats = {
    uptime: string;
    ram_usage: string;
    ws_ping: number;
    guilds: number;
    users: number;
};