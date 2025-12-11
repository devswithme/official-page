import { TalentPosts } from "app/components/talent";
import { getTalentPosts } from "app/lib/fs";

export const metadata = {
  title: "Event",
  description: "See our exciting events that we have been doing.",
};

export default function Page() {
  const talents = getTalentPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">
        Active Talents
      </h1>
      <TalentPosts posts={talents} path="talent" />
    </section>
  );
}
