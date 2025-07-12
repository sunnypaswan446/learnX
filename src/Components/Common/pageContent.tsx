import React from "react";
import Header from "@/Components/Sections/Header";
import FeaturesSection from "@/Components/Sections/Feature";
import HeroSection from "@/Components/Sections/HeroSection";
import Testimonial from "@/Components/Sections/Testimonial";

// Map of section types to their corresponding components
const SECTION_COMPONENTS: Record<string, React.ComponentType<any>> = {
  header: Header,
  heroSection: HeroSection,
  featureSection: FeaturesSection,
  testimonial: Testimonial,
};

// Define section prop interface (generic catch-all for unknown fields)
interface SectionProps {
  _type: string;
  _id?: string;
  _key?: string;
  [key: string]: any;
}

interface PageContentProps {
  sections?: SectionProps[];
}

export default function PageContent({ sections = [] }: PageContentProps) {
  return (
    <main>
      {sections.map((section) => {
        const Component = SECTION_COMPONENTS[section._type];
        console.log('section._type', section._type)
        console.log('Component', Component)
        if (!Component) {
          console.warn(`No component found for section type: ${section._type}`);
          return null;
        }
        return <Component key={section._key || section._id} {...section} />;
      })}
    </main>
  );
}
