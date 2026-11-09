import { NextRequest, NextResponse } from "next/server";
import { getPaginatedVideos } from "@/lib/prismic-utils";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const rawType = searchParams.get("type") || "all";
    const type =
      rawType === "tiktok" || rawType === "instagram" ? rawType : "all";

    const data = await getPaginatedVideos({
      type,
      page,
      pageSize: limit,
    });

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error in /api/videos route:", error);
    return NextResponse.json(
      { error: "Erro ao buscar publicações em vídeo." },
      { status: 500 }
    );
  }
}

