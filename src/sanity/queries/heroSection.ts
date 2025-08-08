export const heroSectionQuery = `
  *[_type == "homepage"][0]{
    "hero": sections[_type == "heroSection"][0]{
      eyebrow,
      heading,
      highlight,
      subtext,
      primaryCtaText,
      primaryCtaUrl,
      secondaryCtaText,
      secondaryCtaUrl,
      showChevron,
      backgroundImage
    }
  }.hero
`;


