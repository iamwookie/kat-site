import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const { instant_invite } = await fetch(process.env.DISCORD_WIDGET!).then((res) => res.json());
        if (!instant_invite) return new NextResponse('Not Found', { status: 404 });
        return NextResponse.redirect(instant_invite);
    } catch (err) {
        console.error('[Discord] Error Fetching Invite');
        console.error(err);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
