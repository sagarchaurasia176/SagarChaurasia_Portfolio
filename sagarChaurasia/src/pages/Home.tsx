import HomePage from "./Home/HomePage";
import ExperiencePage from "./Experience/ExperiencePage";
import ProjectPage from "./Projects/ProjectPage";
import EducationPage from "./Education/EducationPage";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import SkillsPage from "./Skills/SkillPage,";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 8 lg:py-1">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out">
          {/* Hero / Intro Section */}
          <div className="relative">
            <HomePage />
          </div>

          <div className="px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="xl:col-span-8 space-y-12 lg:space-y-16">
                <div className="transform hover:scale-[1.01] transition-transform duration-300">
                  <ExperiencePage />
                </div>
                <div className="transform hover:scale-[1.01] transition-transform duration-300">
                  <ProjectPage />
                </div>
                <div className="transform hover:scale-[1.01] transition-transform duration-300">
                  {/* <CertificatePage /> */}
                </div>
              </div>

              {/* Sidebar */}
              <div className="xl:col-span-4 space-y-8 lg:space-y-12">
                <div className="sticky top-8 space-y-8">
                  <div className="transform hover:scale-[1.02] transition-transform duration-300">
                    <SkillsPage />
                  </div>
                  <div className="transform hover:scale-[1.02] transition-transform duration-300">
                    <EducationPage />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
