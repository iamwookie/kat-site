import type { DiscordUser, DiscordStats } from 'types';

class Discord {
    static async fetchUser(id: string | number): Promise<DiscordUser | undefined> {
        try {
            const res = await fetch(process.env.DISCORD_ENDPOINT + `/users/${id}`, { next: { revalidate: 600 } });
            return await res.json();
        } catch (err) {
            console.error('[Discord] Error Fetching User');
            console.error(err);
        }
    }

    static async fetchStats(): Promise<DiscordStats | undefined> {
        try {
            const res = await fetch(process.env.DISCORD_ENDPOINT + '/stats', { next: { revalidate: 600 } });
            return await res.json();
        } catch (err) {
            console.error('[Discord] Error Fetching Stats');
            console.error(err);
        }
    }
}

export default Discord;
