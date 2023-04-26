import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { data } = await axios.get(process.env.DISCORD_WIDGET!);
        res.redirect(302, data.instant_invite);
    } catch (err) {
        console.error("[Discord] Error Fetching Invite");
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}
