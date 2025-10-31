import HomePage from "./Home/HomePage";
import ExperiencePage from "./Experience/ExperiencePage";
import ProjectPage from "./Projects/ProjectPage";
import EducationPage from "./Education/EducationPage";
import Navbar from "./Navbar/Navbar";
import CertificatePage from "./Certificates/Certificate";
import Footer from "./footer/Footer";
import SkillsPage from "./Skills/SkillPage,";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Container */}
      <div className=" sm:max-w-7xl lg:max-w-5xl xl:5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-br from-gray-100 to-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:bg-gradient-to-t transition-all duration-500 ease-in-out">
          {/* Hero / Intro Section */}
          <HomePage />

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <ExperiencePage />
                <ProjectPage />
                <CertificatePage />
              </div>

              {/* Sidebar */}
              <div className="space-y-6 sm:space-y-8">
                <SkillsPage />
                <EducationPage />
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
