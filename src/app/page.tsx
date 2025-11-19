import ContactSection from "@/components/contact-section";
import HereSection from "@/components/here-section";
import ProjectsSection from "@/components/project-section";
import TechStack from "@/components/tech-stack";
import WorkExperience from "@/components/work-experience";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HereSection />
        <WorkExperience />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
