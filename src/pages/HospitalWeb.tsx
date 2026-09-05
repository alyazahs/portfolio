import { Users, Stethoscope, Database, ClipboardList } from 'lucide-react';
import ProjectLayout from '../components/project/ProjectLayout';
import ProjectHeader from '../components/project/ProjectHeader';
import ImageCarousel from '../components/ImageCarousel';
import ProjectOverview from '../components/project/ProjectOverview';
import TechStack from '../components/project/TechStack';
import TechnicalHighlights from '../components/project/TechnicalHighlights';

import shot1 from '../assets/project_ss/hospital-web/1.png';
import shot2 from '../assets/project_ss/hospital-web/2.png';
import shot3 from '../assets/project_ss/hospital-web/3.png';
import shot4 from '../assets/project_ss/hospital-web/4.png';

const HospitalWeb = () => {
  const images = [shot1, shot2, shot3, shot4];

  return (
    <ProjectLayout>
      <ProjectHeader
        title="Hospital Management System — Web"
        subtitle="Web-based hospital management system developed to support hospital operations and administrative workflows"
        githubUrl={import.meta.env.VITE_GITHUB_PROJECT2_URL}
        features={[
          {
            icon: Users,
            title: "Patient Management",
            description:
              "Manages patient information and supports organized patient data management."
          },
          {
            icon: Stethoscope,
            title: "Doctor & Clinic Management",
            description:
              "Provides features for managing doctors, clinics, schedules, and related information."
          },
          {
            icon: Database,
            title: "Data Management",
            description:
              "Stores and manages hospital-related data through an integrated database."
          },
          {
            icon: ClipboardList,
            title: "Hospital Operations",
            description:
              "Supports various administrative processes through a centralized web application."
          }
        ]}
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <ProjectOverview
          paragraphs={[
            "This project is a web-based Hospital Management System developed as a team project during my internship. The system was designed to support hospital operations and provide a centralized platform for managing hospital-related information and administrative processes.",

            "The application includes features for managing patients, doctors, clinics, schedules, and other hospital data. It provides different interfaces and workflows to help users access and manage the information they need.",

            "I contributed to the development of web application features, frontend and backend integration, API implementation, database-related tasks, testing, and bug fixing throughout the development process."
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <TechStack
          technologies={[
            "Next.js",
            "Express.js",
            "MySQL",
            "REST API",
            "JavaScript"
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
        <TechnicalHighlights
          highlights={[
            "Developed web application features using Next.js.",
            "Integrated frontend components with backend services using REST APIs.",
            "Worked with Express.js for backend development and API handling.",
            "Worked with MySQL for storing and managing hospital-related data.",
            "Collaborated with other developers using Git and GitHub.",
            "Tested application features and fixed bugs during development."
          ]}
        />
      </section>

      <ImageCarousel
        images={images}
        projectName="Hospital Management System — Web"
      />
    </ProjectLayout>
  );
};

export default HospitalWeb;