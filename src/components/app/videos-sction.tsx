"use client";
import { useEffect, useState } from 'react';
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';



interface IVideo {
    type: "tiktok" | "instagram";
    url: string;
}

const videos: IVideo[] = [
    {
        type: "tiktok",
        url: "https://www.tiktok.com/@karensantosperfil/video/7403093541100064006",
    },
    {
        type: "tiktok",
        url: "https://www.tiktok.com/@_caviana/video/7402792245033766150",
    },
    {
        type: "tiktok",
        url: "https://www.tiktok.com/@questaodehistoria/video/7400929069849726214",
    },
    {
        type: "tiktok",
        url: "https://www.tiktok.com/@dougxmorais/video/7402725334812019974",
    },
    {
        type: "tiktok",
        url: "https://www.tiktok.com/@karensantosperfil/video/7406056755890818310",
    },
    {
        type: "instagram",
        url: "https://www.instagram.com/reel/DPkd193AByq/",
    },
    {
        type: "instagram",
        url: "https://www.instagram.com/reel/DPkkuY8jNhS/",
    },
];


export default function VideoSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    function EmbedWrapper({ filtersVideo }: { filtersVideo: IVideo[] }) {
        if (!isMounted) {
            return null;
        }

        return (
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8">
                {filtersVideo.map((video, index) => (
                    <div key={index} className="mb-8 max-w-80">
                        {video.type === "tiktok" && <TikTokEmbed url={video.url} width={325} />}
                        {video.type === "instagram" && <InstagramEmbed url={video.url} width={325} />}
                    </div>
                ))}
            </div>
        );
    }
    const videosGroupedByType = videos.reduce((acc, video) => {
        if (!acc[video.type]) {
            acc[video.type] = [];
        }
        acc[video.type].push(video);
        return acc;
    }, {} as Record<string, IVideo[]>);

    return (
        <section className="w-full py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8 bg-warm-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-deep-black mb-4 leading-tight">
                        Vozes na rede
                    </h2>

                </div>
                <div className="relative flex flex-col gap-8">
                    {/* Timeline Line */}
                    {Object.values(videosGroupedByType).map((videos: IVideo[], idx) => (
                            <EmbedWrapper key={idx} filtersVideo={videos} />
                    ))}
                </div>
            </div>
        </section>
    );
}
