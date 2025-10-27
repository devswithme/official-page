"use client";

import Link from "next/link";
import Image from "next/image";
import { logEvent } from "app/lib/utils";
import { ArrowIcon } from "./footer";

export function TalentPosts({ posts, path }) {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {posts.map((post) => (
        <div key={post.slug}>
          <Link
            className="flex flex-col sm:flex-row gap-4"
            onClick={() => logEvent("post", { title: post.title })}
            href={`/${path}/${post.slug}`}
          >
            <div className="relative w-full sm:w-64 aspect-square overflow-hidden">
              <Image
                src={post.metadata.image}
                alt={post.metadata.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {post.metadata.role}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold">
                {post.metadata.name}
              </p>
              <p> {post.metadata.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
