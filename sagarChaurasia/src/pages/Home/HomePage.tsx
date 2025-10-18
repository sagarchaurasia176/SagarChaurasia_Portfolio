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
            <p className="text-md text-black mb-4">
              Fullstack👩‍💻Developer_@VolgaInfosys | Ex-Frontend Developer@A2IT
            </p>
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
