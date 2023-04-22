// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { data } = await axios.get("https://discord.com/api/guilds/858675408140369920/widget.json");
        res.redirect(301, data.instant_invite);
    } catch (err) {
        console.error("[Discord] Error Fetching Invite");
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}
