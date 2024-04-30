import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { parse } from "url";

const service = google.youtube({
  version: "v3",
  auth: ``, // Remove unnecessary backticks
});

// Export the API route handler (uppercase GET)
export const GET = async (req: Request, res: Response) => {
  try {
    const { query } = parse(req.url, true);
    const code = query.code;
    const Catcode = query.Catcode;

    if (code) {
      console.log("req.query", code);

      const { data } = await service.videos.list({
        part: ["snippet, contentDetails, statistics"],
        chart: "mostPopular",
        maxResults: 10,
        regionCode: code.toString(),
      });
      return NextResponse.json(
        { data: data.items },
        {
          status: 200,
        }
      );
    }
    else if (Catcode) {
      console.log("here in category");
      const { data } = await service.videos.list({
        part: ["snippet, contentDetails, statistics"],
        chart: "mostPopular",
        maxResults: 10,
        regionCode: "IN",
        videoCategoryId: Catcode.toString(),
      });
      return NextResponse.json(
        { data: data.items },
        {
          status: 200,
        }
      );
    } else {
      const { data } = await service.videos.list({
        part: ["snippet, contentDetails, statistics"],
        chart: "mostPopular",
        maxResults: 10,
        regionCode: "IN",
      });
      return NextResponse.json(
        { data: data.items },
        {
          status: 200,
        }
      );
    }
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      { data: e.message || "Unknown error" },
      {
        status: 400,
      }
    );
  }
};
