export default async function sitemap() {
  // const res = await fetch('https://.../posts');
  // const allPosts = await res.json();

  const res = await fetch("http://localhost:3000/api", {
    next: { cache: "no-store" },
  });
  const data = await res.json();
  const allPosts = await data.response.results;

  const posts = allPosts.map((post) => ({
    url: `http://localhost:3000/blog/${post.properties.slug.rich_text[0].plain_text}`,
    lastModified: post.publishedAt,
  }));

  const routes = [
    "",
    "/about",
    "/blog",
    "/terms-of-service",
    "/privacy_policy",
  ].map((route) => ({
    url: `http://localhost:3000/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
