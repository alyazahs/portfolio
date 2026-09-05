import {
  ShoppingBag,
  Store,
  Layout,
  Smartphone
} from 'lucide-react';
import ProjectLayout from '../components/project/ProjectLayout';
import ProjectHeader from '../components/project/ProjectHeader';
import ImageCarousel from '../components/ImageCarousel';
import ProjectOverview from '../components/project/ProjectOverview';
import TechStack from '../components/project/TechStack';
import TechnicalHighlights from '../components/project/TechnicalHighlights';

import shot1 from '../assets/project_ss/rumah-batik-madura/1.png';
import shot2 from '../assets/project_ss/rumah-batik-madura/2.png';
import shot3 from '../assets/project_ss/rumah-batik-madura/3.png';
import shot4 from '../assets/project_ss/rumah-batik-madura/4.png';

const RumahBatikMadura = () => {
  const images = [shot1, shot2, shot3, shot4];

  return (
    <ProjectLayout>
      <ProjectHeader
        title="Catalog Product Batik Madura"
        subtitle="Web platform for showcasing Madurese batik products and cultural identity"
        githubUrl={import.meta.env.VITE_GITHUB_PROJECT4_URL}
        features={[
          {
            icon: Store,
            title: "Product Showcase",
            description:
              "Presents batik products with organized information and visual content."
          },
          {
            icon: ShoppingBag,
            title: "Product Information",
            description:
              "Provides detailed information about available batik products."
          },
          {
            icon: Layout,
            title: "Responsive Interface",
            description:
              "Provides a clean and responsive browsing experience across devices."
          },
          {
            icon: Smartphone,
            title: "User Experience",
            description:
              "Designed to make exploring products and website content simple and accessible."
          }
        ]}
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <ProjectOverview
          paragraphs={[
            "Rumah Batik Madura is a web-based platform developed to introduce and showcase Madurese batik products and their cultural identity. The website provides an online space for users to explore batik products and learn more about the brand.",

            "The application presents product information in an organized and visually engaging way, making it easier for visitors to browse available products and discover the characteristics of Madurese batik.",

            "The project also focuses on creating a responsive and user-friendly interface that provides a consistent browsing experience across different screen sizes."
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <TechStack
          technologies={[
            "Laravel",
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript"
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
        <TechnicalHighlights
          highlights={[
            "Developed the website using Laravel and PHP.",
            "Implemented dynamic product content and database integration.",
            "Worked with MySQL to manage website and product-related data.",
            "Created responsive layouts for different screen sizes.",
            "Designed user-friendly interfaces for product browsing and information access.",
            "Integrated frontend components with backend functionality."
          ]}
        />
      </section>

      <ImageCarousel
        images={images}
        projectName="Rumah Batik Madura"
      />
    </ProjectLayout>
  );
};

export default RumahBatikMadura;