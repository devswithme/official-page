"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // #region agent log
  React.useEffect(() => {
    const style = document.documentElement.getAttribute("style");
    const className = document.documentElement.className ?? "";
    fetch("http://127.0.0.1:7248/ingest/1be3383c-edda-4c27-953f-67dbc4c70846", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        location: "app/components/theme-provider.tsx:ThemeProvider",
        message: "After mount: html attributes",
        data: { style, classNameLen: className.length },
        timestamp: Date.now(),
        hypothesisId: "B",
      }),
    }).catch(() => {});
  }, []);
  // #endregion
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
