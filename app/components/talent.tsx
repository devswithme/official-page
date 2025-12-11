"use client";

import Link from "next/link";
import Image from "next/image";
import { logEvent } from "app/lib/utils";

export function TalentPosts({ posts, path }) {
  return (
    <div className="grid sm:grid-cols-2 gap-10">
      {posts.map((post) => (
        <div key={post.slug}>
          <Link
            className="flex flex-col sm:flex-row gap-4"
            onClick={() => logEvent("talent", { title: post.title })}
            href={`/${path}/${post.slug}`}
          >
            <Image
              src={post.metadata.image}
              alt={post.metadata.name}
              width={40}
              height={40}
              className="aspect-square size-14 object-cover"
            />
            <div className="w-full">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold">
                {post.metadata.name}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {post.metadata.role}
              </p>
              <p>{post.metadata.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
