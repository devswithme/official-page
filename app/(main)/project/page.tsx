import { Projects } from "app/components/projects";
import { getProjectPosts } from "app/lib/fs";

export const metadata = {
  title: "Project",
  description: "Showcase of projects.",
};

export default function Page() {
  const projects = getProjectPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">Projects</h1>
      <Projects projects={projects} path="project" />
    </section>
  );
}
