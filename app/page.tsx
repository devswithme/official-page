import { Posts } from "app/components/posts";
import { getEventPosts } from "app/lib/fs";
import Link from "./components/link";
import { MessageCircleIcon, Sparkle, Users } from "lucide-react";

export default function Page() {
  const event = getEventPosts({ latest: true });

  return (
    <section>
      <h1 className="mb-4 max-w-xs sm:max-w-auto text-3xl font-bold tracking-tighter">
        The Free & Open Academy
      </h1>
      <p className="mb-8 max-w-lg">
        We're community-based Software Engineering learning platform. Mainly
        using{" "}
        <Link
          href="https://discord.gg/7FBpTEXqVj"
          className="underline font-semibold"
        >
          Discord
        </Link>
        . So, join now!
      </p>
      <ul className="grid sm:grid-cols-2 gap-4">
        <li>
          <MessageCircleIcon className="size-4 fill-purple-400 mb-2" />
          <h1 className="font-semibold mb-1">English-first environment</h1>
          <p>Chats and meetings are mainly using English</p>
        </li>
        <li>
          <Sparkle className="size-4 fill-yellow-400 mb-2" />
          <h1 className="font-semibold mb-1">Many opportunities inside</h1>
          <p>We actively conduct paid and unpaid events and projects</p>
        </li>
        <li>
          <Users className="size-4 fill-blue-400 mb-2" />
          <h1 className="font-semibold mb-1">Community-based learning</h1>
          <p>Every role and members are open and equal with each other</p>
        </li>
      </ul>
      <div className="my-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tight">
          Latest event
        </h1>
        <Posts posts={event} path="event" />
      </div>
    </section>
  );
}
