import Hero from "@/containers/Hero/Hero";
// highlight-start
// import { NhostProvider, NhostClient } from "@nhost/nextjs";
// highlight-end

// highlight-start
// const nhost = new NhostClient({
//   subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
//   region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
// });
// highlight-end

import Image from "next/image";

export default function Home() {
  return (
    // <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
    <main>
      <Hero />
    </main>
    // </NhostProvider>
  );
}
