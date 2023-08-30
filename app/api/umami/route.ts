/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from "next";
import { getAnalytics } from "@/utils/umami";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const resp = await getAnalytics();
        const analytics = await resp.json();

        res.setHeader(
            "Cache-Control",
            "public, s-maxage=60, stale-while-revalidate=30"
        );
        res.setHeader("Content-Type", "application/json");

        return res.status(200).json(analytics);
    } catch (err: any) {
        return new Response(err.message, { status: 500 });
    }
}
