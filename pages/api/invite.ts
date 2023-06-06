import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {
            data: { bitfield },
        } = await axios.get(process.env.DISCORD_ENDPOINT + '/permissions');

        if (bitfield) {
            const { admin } = req.query;
            
            const redirect = axios.getUri({
                url: 'https://discord.com/api/oauth2/authorize',
                params: {
                    client_id: process.env.DISCORD_CLIENT_ID,
                    permissions: admin ? 8 : bitfield,
                    scope: 'bot applications.commands',
                },
            });

            res.redirect(redirect);
        } else {
            res.status(404).json('Not Found');
        }
    } catch (err) {
        console.error('[Discord] Error Fetching Invite');
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
}
