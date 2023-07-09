import Image from 'next/image';
import Tooltip from '@components/ui/Tooltip';
import LinkButton from '@components/ui/LinkButton';
import Discord from '@lib/discord';
import Link from 'next/link';

export default async function Home() {
    const user = await Discord.fetchUser('916639727220846592');
    const stats = await Discord.fetchStats();

    return (
        <>
            {user?.avatarURL && <Image src={user?.avatarURL} width={100} height={100} alt="Avatar" className="mx-auto w-36 rounded-full border-2" />}

            <h1 className="pt-2 text-2xl">KAT</h1>

            <div className="pt-2 pb-4">
                <Tooltip content={`Currently serving ${stats?.guilds} servers with ${stats?.users} users.`} disabled={stats ? false : true}>
                    <span
                        className={`cursor-default rounded-lg my-2 mx-auto px-2 border-2 ${
                            stats ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'
                        }`}
                    >
                        ● {stats ? 'Online' : 'Offline'}
                    </span>
                </Tooltip>
            </div>

            <p className="rounded-lg p-4 bg-darkerslate text-md">
                ✨ KAT is a completely free, simple and minimalist{' '}
                <a href="https://discord.com" target="_blank" rel="norefferer noopener" className="underline hover:opacity-50">
                    Discord
                </a>{' '}
                bot that plays music and does other cool things.
                <br />
                🎵 KAT plays high quality music, including playlists and albums from YouTube and Spotify.
                <br />
                ✔️ Invite KAT and use the <code className="text-sm">.play</code> command to start streaming music within seconds.
                <br />❓ Have questions or suggestions? Join the the support server{' '}
                <Link href="/support" target="_blank" className="underline hover:opacity-50">
                    here
                </Link>
                .
            </p>

            <div className="mt-4">
                <a href="https://bmc.link/wook.ie" target="_blank" rel="norefferer noopener" className="hover:opacity-50">
                    <Image src="/assets/bmc_button.png" width={150} height={25} alt="Buy Me A Coffee" className="inline-block" priority />
                </a>
            </div>

            {stats && (
                <div className="mt-4 text-lg">
                    <LinkButton href="/invite?admin=true">Invite</LinkButton>
                </div>
            )}
        </>
    );
}
