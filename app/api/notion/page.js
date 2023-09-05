const { Client } = require("@notionhq/client");
const { NOTION_TOKEN, NOTION_DB } = process.env;
// Initializing a client
const notion = new Client({
  auth: NOTION_TOKEN,
});

export default async function handler() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB,
      filter: {
        property: "Status",
        select: {
          equals: "Live",
        },
      },
    });

    return JSON.stringify(response.results);
  } catch (e) {
    console.error(e);
    return e.toString();
  }
}
