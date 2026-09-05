import {
  Wallet,
  Receipt,
  Users,
  BarChart3
} from 'lucide-react';
import ProjectLayout from '../components/project/ProjectLayout';
import ProjectHeader from '../components/project/ProjectHeader';
import ImageCarousel from '../components/ImageCarousel';
import ProjectOverview from '../components/project/ProjectOverview';
import TechStack from '../components/project/TechStack';
import TechnicalHighlights from '../components/project/TechnicalHighlights';

import shot1 from '../assets/project_ss/class-fund/1.png';
import shot2 from '../assets/project_ss/class-fund/2.png';
import shot3 from '../assets/project_ss/class-fund/3.png';

const ClassFund = () => {
  const images = [shot1, shot2, shot3];

  return (
    <ProjectLayout>
      <ProjectHeader
        title="Class Fund Management"
        subtitle="Web application for managing and monitoring class funds"
        githubUrl={import.meta.env.VITE_GITHUB_PROJECT5_URL}
        features={[
          {
            icon: Wallet,
            title: "Fund Management",
            description:
              "Helps users record and monitor class fund transactions and balances."
          },
          {
            icon: Receipt,
            title: "Payment Tracking",
            description:
              "Tracks member payments and keeps payment records organized."
          },
          {
            icon: Users,
            title: "Member Management",
            description:
              "Manages class members and their payment status."
          },
          {
            icon: BarChart3,
            title: "Financial Overview",
            description:
              "Provides an overview of income, expenses, and the current class fund balance."
          }
        ]}
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <ProjectOverview
          paragraphs={[
            "Class Fund Management is a web application developed to help students manage and monitor class funds in a simple and organized way. The application provides a centralized place to record payments and track class financial activities.",

            "Users can manage class members, record payments, track payment status, view transaction history, and monitor the current class fund balance. The system also provides an overview of income and expenses to make financial records easier to understand.",

            "The application was designed with a simple and responsive interface to make daily class fund management more convenient and transparent."
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <TechStack
          technologies={[
            "React",
            "JavaScript",
            "Supabase",
            "LocalStorage"
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
        <TechnicalHighlights
          highlights={[
            "Built the application using React and JavaScript.",
            "Implemented member and payment management features.",
            "Integrated Supabase for data storage and management.",
            "Implemented transaction and payment status tracking.",
            "Used LocalStorage to manage client-side application data where needed.",
            "Created a responsive interface for easier access across different devices."
          ]}
        />
      </section>

      <ImageCarousel
        images={images}
        projectName="Class Fund Management"
      />
    </ProjectLayout>
  );
};

export default ClassFund;