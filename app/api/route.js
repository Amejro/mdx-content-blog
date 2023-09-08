import { NextResponse } from "next/server";
const { Client } = require("@notionhq/client");
const { NOTION_TOKEN, NOTION_DB } = process.env;
// Initializing a client
const notion = new Client({
  auth: NOTION_TOKEN,
});

export async function GET(req, res) {
  NextResponse;
  const response = await notion.databases.query({
    database_id: NOTION_DB,
    filter: {
      property: "Status",
      select: {
        equals: "Live",
      },
    },
  });

  return NextResponse.json({ response });
}
