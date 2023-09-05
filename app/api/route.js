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
  // const data = await response.json();

  return NextResponse.json({ response });
  // res.status(200).json({ response });
  // return JSON.stringify(response.results);
}
