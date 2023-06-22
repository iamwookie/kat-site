import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const { bitfield } = await fetch(process.env.DISCORD_ENDPOINT + '/permissions', { next: { revalidate: 300 }}).then((res) => res.json());
        if (!bitfield) return new NextResponse('Not Found', { status: 404 });

        const admin = new URL(req.url).searchParams.get('admin');
        const redirect = new URL('https://discord.com/api/oauth2/authorize');
        redirect.searchParams.set('client_id', process.env.DISCORD_CLIENT_ID!);
        redirect.searchParams.set('permissions', admin ? '8' : bitfield);
        redirect.searchParams.set('scope', 'bot applications.commands');

        return NextResponse.redirect(redirect.href);
    } catch (err) {
        console.error('[Discord] Error Fetching Invite');
        console.error(err);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
