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
      and: [
        {
          property: "Status",
          select: {
            equals: "Live",
          },
        },
        {
          property: "latest",
          checkbox: {
            equals: false,
          },
        },
        {
          property: "child",
          checkbox: {
            equals: false,
          },
        },
      ],
    },
  });

  return NextResponse.json({ response });
}
