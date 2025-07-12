import PageContent from "@/Components/Common/pageContent";
import { client } from "@/sanity/lib/client";
export default async function Home() {
  const page = await client.fetch(`*[_type == "homepage"][0]`);

  const sections = page?.sections || [];
  //
  return (
    <PageContent
      // slug={homepage.slug}
      // header={header}
      sections={page?.sections}
      // footer={footer}
      // partialHeader={partialHeader}
      // partialFooter={partialFooter}
    />
  );
}
