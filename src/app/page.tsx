import PageContent from "@/Components/Common/pageContent";
import { client } from "@/sanity/lib/client";

const homepageQuery = `
  *[_type == "homepage"][0]{
    title,
    sections[]{
      _type,
      _key,
      // heroSection fields
      eyebrow,
      heading,
      highlight,
      subtext,
      primaryCtaText,
      primaryCtaUrl,
      secondaryCtaText,
      secondaryCtaUrl,
      showChevron,
      backgroundImage,

      // Other section types can spread their own fields as they are added
      ...
    }
  }
`;

export default async function Home() {
  const page = await client.fetch(homepageQuery);

  return (
    <PageContent
      sections={page?.sections}
    />
  );
}
