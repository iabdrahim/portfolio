import { getAnalytics } from "@/utils/umami";

export async function GET(req: Request) {
    try {
        const resp = await getAnalytics();
        const analytics = await resp.json();

        // res.setHeader(
        //     "Cache-Control",
        //     "public, s-maxage=60, stale-while-revalidate=30"
        // );
        // res.setHeader("Content-Type", "application/json");

        return new Response(JSON.stringify(analytics || ""), { status: 200 });
    } catch (err: any) {
        return new Response(err.message, { status: 500 });
    }
}
