import { getProjectPosts, getEventPosts, getTalentPosts } from "app/lib/fs";

export const baseUrl = process.env.BASE_URL!;

export default async function sitemap() {
  let projects = getProjectPosts()!.map((post) => ({
    url: `${baseUrl}/project/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let events = getEventPosts()!.map((post) => ({
    url: `${baseUrl}/event/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let talents = getTalentPosts()!.map((post) => ({
    url: `${baseUrl}/talent/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/project", "/event", "/talent"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...projects, ...events];
}
