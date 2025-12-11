import { Posts } from "app/components/posts";
import { getEventPosts } from "app/lib/fs";

export const metadata = {
  title: "Event",
  description: "See our exciting events that we have been doing.",
};

export default function Page() {
  const event = getEventPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">Events</h1>
      <Posts posts={event} path="event" />
    </section>
  );
}
