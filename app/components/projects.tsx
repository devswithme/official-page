"use client";

import Link from "next/link";
import Image from "next/image";
import { logEvent } from "app/lib/utils";

export function Projects({ projects, path }) {
  return (
    <div className="grid sm:grid-cols-2 gap-10">
      {projects.map((project) => {
        return (
          <div key={project.slug}>
            <Link
              className="flex flex-col sm:flex-row gap-4"
              onClick={() => logEvent("project", { title: project.title })}
              href={`/${path}/${project.slug}`}
            >
              <Image
                src={project.metadata.logo}
                alt={project.metadata.title}
                width={40}
                height={40}
              />
              <div className="w-full">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold">
                  {project.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {project.metadata.person}
                </p>
                <p>{project.metadata.description}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
