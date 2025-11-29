import SocialPage from "../Socail-links/SocialPage";
import About from "../About/About";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Name Section */}
      <section id="Home" className="text-black p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-56">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-2">Sagar Chaurasia</h1>
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Ex-Fullstack Developer @VolgaInfosys | Ex- Former Frontend
              Developer @A2IT
            </p>
            {/* Button */}
<button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-2 px-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg border border-blue-600 relative overflow-hidden">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse mr-1"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100 mr-1"></div>
                <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
              </div>
            </button>
          </div>
          <SocialPage />
        </div>
      </section>

      {/* About Section */}
      <About />
    </div>
  );
};

export default HomePage;
