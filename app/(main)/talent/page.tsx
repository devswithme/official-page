import { Posts } from "app/components/posts";
import { TalentPosts } from "app/components/talent";
import { getTalentPosts } from "app/lib/fs";

export const metadata = {
  title: "Event",
  description: "Read my event.",
};

export default function Page() {
  const talents = getTalentPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Talents</h1>
      <TalentPosts posts={talents} path="talent" />
    </section>
  );
}
