import { Users, Volume2, CreditCard, Monitor } from 'lucide-react';
import ProjectLayout from '../components/project/ProjectLayout';
import ProjectHeader from '../components/project/ProjectHeader';
import ImageCarousel from '../components/ImageCarousel';
import ProjectOverview from '../components/project/ProjectOverview';
import TechStack from '../components/project/TechStack';
import TechnicalHighlights from '../components/project/TechnicalHighlights';

import shot1 from '../assets/project_ss/digital-queue/1.png';
import shot2 from '../assets/project_ss/digital-queue/2.png';
import shot3 from '../assets/project_ss/digital-queue/3.png';
import shot4 from '../assets/project_ss/digital-queue/4.png';

const DigitalQueue = () => {
  const images = [shot1, shot2, shot3, shot4];

  return (
    <ProjectLayout>
      <ProjectHeader
        title="Digital Queue Management System"
        subtitle="RFID E-KTP and Text-to-Speech based queue system for public administrative services"
        githubUrl={import.meta.env.VITE_GITHUB_PROJECT1_URL}
        features={[
          {
            icon: CreditCard,
            title: "RFID E-KTP Registration",
            description:
              "Reads E-KTP UID using RFID to simplify visitor registration."
          },
          {
            icon: Users,
            title: "Queue Management",
            description:
              "Manages queue numbers, service types, and customer waiting lists."
          },
          {
            icon: Volume2,
            title: "Voice Announcements",
            description:
              "Uses Text-to-Speech to automatically announce the current queue number."
          },
          {
            icon: Monitor,
            title: "Real-time Queue Display",
            description:
              "Displays current queue information and service updates in real time."
          }
        ]}
      />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <ProjectOverview
          paragraphs={[
            "This project is a digital queue management system developed to support administrative services at Kecamatan Jiwan. The system was designed to make the registration and queue process more organized and efficient.",
            
            "Visitors can register using their E-KTP through an RFID reader, search their existing data using NIK, or enter their information manually. After selecting the required service, the system generates a queue number and prints a physical queue ticket.",
            
            "The system also provides queue management for service officers, a real-time public display, and automatic Text-to-Speech announcements when a queue number is called. The application runs locally using a Raspberry Pi as the web server."
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <TechStack
          technologies={[
            "React",
            "Vite",
            "Python",
            "Flask",
            "SQLite",
            "Raspberry Pi",
            "RFID RC522",
            "Text-to-Speech",
            "Server-Sent Events"
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Highlights</h2>
        <TechnicalHighlights
          highlights={[
            "Integrated an RC522 RFID reader to read E-KTP UID for visitor registration.",
            "Built a complete queue flow from visitor registration and service selection to ticket printing and queue calling.",
            "Implemented real-time queue display updates using Server-Sent Events (SSE).",
            "Integrated Text-to-Speech to automatically announce queue numbers and service counters.",
            "Connected a USB thermal printer to automatically print queue tickets.",
            "Deployed the system locally on a Raspberry Pi with Flask and SQLite."
          ]}
        />
      </section>

      <ImageCarousel
        images={images}
        projectName="Digital Queue Management System"
      />
    </ProjectLayout>
  );
};

export default DigitalQueue;