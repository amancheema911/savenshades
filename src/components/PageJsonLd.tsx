"use client";

import { usePathname } from "next/navigation";
import { getSchemaForPath, serializeJsonLd } from "@/lib/schema";

export default function PageJsonLd() {
  const pathname = usePathname();
  const schema = getSchemaForPath(pathname);

  return (
    <script
      id="page-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
