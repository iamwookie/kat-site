import { GetStaticProps } from "next";
import type { Stats } from "types";
import Head from "next/head";
import Image from "next/image";
import TextButton from "@components/buttons/TextButton";
import Tippy from "@tippyjs/react";
import Discord from "@lib/discord";

type Props = {
    avatarURL?: any;
    stats?: Stats;
};

export default function KAT({ avatarURL, stats }: Props) {
    return (
        <>
            <Head>
                <title>KAT</title>
                <meta name="description" content="✨ A multi-purpose Discord bot providing solutions to most problems." />
                <meta property="og:title" content="KAT" />
                <meta property="og:description" content="✨ A multi-purpose Discord bot providing solutions to most problems." />
                <meta property="og:url" content="https://kat.bil.al" />
                <meta property="og:image" content={avatarURL} />
                <link rel="icon" href="/assets/favicon.png" />
            </Head>

            {avatarURL && <Image src={avatarURL} width={100} height={100} alt="Avatar" className="mx-auto w-36 rounded-full border-2" />}

            <h1 className="pt-2 text-2xl">KAT</h1>

            <div className="pt-2 pb-4">
                <Tippy content={`Currently serving ${stats?.guilds} servers with ${stats?.users} users.`} theme="blur" disabled={stats ? false : true}>
                    <span className={`cursor-default rounded-lg my-2 mx-auto px-2 border-2 ${stats ? "text-green-500 border-green-500" : "text-red-500 border-red-500"}`}>
                        ● {stats ? "Online" : "Offline"}
                    </span>
                </Tippy>
            </div>

            <p className="rounded-lg p-4 bg-darkerslate text-md">
                ✨ KAT is a completely free, simple and minimalist{" "}
                <a href="https://discord.com" target="_blank" rel="norefferer noopener" className="hover:opacity-50 underline">
                    Discord
                </a>{" "}
                bot that plays music and provides custom solutions.
                <br />
                🎵 KAT plays high quality music, including playlists and albums from YouTube and Spotify.
                <br />
                ✔️ Invite KAT and use the <code className="text-sm">.play</code> command to start streaming music within seconds.
            </p>

            <div className="pt-4 text-lg">
                <TextButton>
                    <a href="/invite" target="_blank">
                        Invite
                    </a>
                </TextButton>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const user = await Discord.fetchUser("916639727220846592");
    const stats = await Discord.fetchStats();

    return {
        props: { avatarURL: user?.avatarURL ?? null, stats: stats ?? null },
        revalidate: 600,
    };
};
