const { END_POINT, HOST_URL } = process.env;
export default async function sitemap() {
  const res = await fetch(`${END_POINT}`, {
    next: { cache: "no-store" },
  });
  const data = await res.json();
  const allPosts = await data.response.results;

  const posts = allPosts.map((post) => ({
    url: `${HOST_URL}/blog/${post.properties.slug.rich_text[0].plain_text}`,
    lastModified: post.publishedAt,
  }));

  const routes = [
    "",
    "/about",
    "/blog",
    "/terms-of-service",
    "/privacy_policy",
  ].map((route) => ({
    url: `${HOST_URL}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
