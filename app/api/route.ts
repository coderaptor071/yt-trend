import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { parse } from "url";

const service = google.youtube({
  version: "v3",
  auth: process.env.SECRET_YT_API_KEY, // Remove unnecessary backticks
});

function deleteKey(obj: any, key: string): any {
  delete obj[key];
  return obj;
}

// Export the API route handler (uppercase GET)
export const GET = async (req: Request, res: Response) => {
  try {
    const { query } = parse(req.url, true);
    const code = query.Countrycode;
    const Catcode = query.Catcode;

    if (code && Catcode) {
      const reqData = {
        part: ["snippet, contentDetails, statistics"],
        chart: "mostPopular",
        maxResults: 10,
        regionCode: code.toString(),
        videoCategoryId: Catcode.toString(),
      };
      const { data } = await service.videos.list(
        Catcode === "999" ? deleteKey(reqData, "videoCategoryId") : reqData
      );
      return NextResponse.json(
        { data: data.items },
        {
          status: 200,
        }
      );
    } else if (code) {
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
    } else if (Catcode) {
      const reqData = {
        part: ["snippet, contentDetails, statistics"],
        chart: "mostPopular",
        maxResults: 10,
        regionCode: "IN",
        videoCategoryId: Catcode.toString(),
      };

      const { data } = await service.videos.list(
        Catcode === "999" ? deleteKey(reqData, "videoCategoryId") : reqData
      );
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
