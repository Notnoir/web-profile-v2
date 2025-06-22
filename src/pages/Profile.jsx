import React, { useState, useEffect } from "react";
import { Star, Github, Mail, Instagram, Linkedin } from "lucide-react";

const Profile = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1, // bisa diatur sesuai kebutuhan
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll("[data-animate]");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  const projects = [
    {
      id: 1,
      title: "SIMS",
      description:
        "Student Information Management System (SIMS) is a web-based platform that helps schools organize and access student data in real-time. It reduces paper usage by storing data digitally, while also improving productivity and efficiency for school staff.",
      image: "/sims.jpg",
      techStack: ["Laravel", "Tailwind", "ExpressJS"],
      status: null,
    },
    {
      id: 2,
      title: "CSecurity Blog",
      description:
        "Csecurity is a web blog that provides information and articles regarding cyber security. This blog covers various topics, from tips on protecting personal data, types of cyber threats to analysis of the latest threats in the world of cyber security.",
      image: "/csecurity.jpg",
      techStack: ["Laravel", "Tailwind"],
      status: null,
    },
    {
      id: 3,
      title: "QUIZZARD",
      description:
        "Quizzard is a web-based online quiz platform designed to be fun, competitive, and user-friendly. It aims to provide an engaging and enjoyable experience, keeping users entertained and never bored.",
      image: "/quizzard.jpg",
      techStack: ["Laravel", "Tailwind", "ExpressJS"],
      status: "On Progress",
    },
    {
      id: 3,
      title: "Waste Management System",
      description:
        "Waste Management System is a web-based platform designed to streamline waste collection and disposal processes. It aims to provide an efficient and user-friendly experience for both waste collectors and residents.",
      image: "/wastemanagement.png",
      techStack: ["Laravel", "Tailwind"],
      status: null,
    },
    {
      id: 5,
      title: "KlinKlin Laundry",
      description:
        "KlinKlin Laundry is a web-based platform that offers laundry services with a focus on convenience and efficiency. Users can schedule pickups and track their laundry status in real-time.",
      image: "/klinklin.png",
      techStack: ["Spring Boot", "Tailwind"],
      status: null,
    },
    {
      id: 6,
      title: "AgriMarket",
      description:
        "AgriMarket is a web-based platform that connects farmers with buyers, streamlining the process of selling and purchasing agricultural products. It aims to promote local farming and provide a marketplace for fresh produce.",
      image: "/agrimarket.png",
      techStack: ["React", "Tailwind", "ExpressJS"],
      status: null,
    },
  ];

  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center bg-black/60 backdrop-blur-lg rounded-full py-2 px-6">
            {["profile", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => scrollToSection(e, section)}
                className={`text-sm sm:text-lg font-semibold px-7 py-2 mx-5 rounded-full transition-all duration-300 capitalize ${
                  activeSection === section
                    ? "bg-cyan-500 text-white scale-105"
                    : "text-cyan-300 hover:text-white hover:bg-cyan-500 hover:scale-105"
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <section
        id="profile"
        className="min-h-screen bg-black relative overflow-hidden pt-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom, rgba(53, 255, 255, 0.15), transparent 70%)",
        }}
      >
        {/* Falling Stars Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                left: `${Math.random() * 40}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${2 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen py-20 gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-white text-3xl sm:text-4xl mb-2 font-cursive">
                Helloo 👋,
              </h3>
              <h2 className="text-cyan-300 text-4xl sm:text-5xl lg:text-6xl font-bold font-cursive leading-tight">
                I'm Riza Maulana Tamsirin
              </h2>
              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-8 font-cursive leading-tight">
                Frontend Developer
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
                I am a student at ITENAS majoring in Informatics, a Frontend
                Engineer, and currently learning Fullstack Engineer skills to
                enhance my ability to develop web applications comprehensively.
              </p>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="inline-block text-cyan-300 font-bold border border-cyan-300 px-8 py-2 rounded-full transition-all duration-300 hover:text-white hover:bg-cyan-500 hover:scale-105 no-underline text-lg"
              >
                About Me
              </a>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-4xl blur-xl animate-pulse"></div>
                <img
                  src="https://i.pinimg.com/736x/b7/54/44/b754449bc9f9baf4a44a7c4d8d7c6207.jpg"
                  alt="Riza Profile"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-4xl object-cover border-2 border-cyan-300/80 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-black relative py-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(53, 255, 255, 0.15), transparent 70%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="flex items-center justify-center text-4xl sm:text-5xl font-bold mb-20">
            <div className="flex-1 border-b border-gray-700 mx-4"></div>
            <span className="text-cyan-300 px-6">About</span>
            <div className="flex-1 border-b border-gray-700 mx-4"></div>
          </div>

          <div
            className={`flex flex-col lg:flex-row justify-between items-center gap-16 transition-all duration-1000 ${
              isVisible("about-content")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            data-animate
            id="about-content"
          >
            <div className="flex-shrink-0">
              <div className="relative animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
                <img
                  src="/reactjs.png"
                  alt="React JS"
                  className="relative w-72 h-72 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <p className="text-white text-lg sm:text-lg leading-relaxed">
                  I am an Informatics student at ITENAS, focusing on software
                  development. As a Frontend Engineer, I am skilled in creating
                  attractive user interfaces using HTML, CSS, JavaScript, and
                  various CSS frameworks such as Bootstrap and TailwindCSS. I am
                  also learning Fullstack skills, including backend development
                  with PHP, Laravel, and Express.js. My goal is to combine
                  frontend and backend abilities to build scalable and
                  comprehensive web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="flex items-center justify-center text-4xl sm:text-5xl font-bold mb-20">
            <div className="flex-1 border-b border-gray-700 mx-4"></div>
            <span className="text-cyan-300 px-6">Projects</span>
            <div className="flex-1 border-b border-gray-700 mx-4"></div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible("projects-content")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            data-animate
            id="projects-content"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30 border border-gray-800 ${
                  index === 0
                    ? "animate-[fadeInUp_1s_ease-out]"
                    : index === 1
                    ? "animate-[fadeInUp_1s_ease-out_0.2s_both]"
                    : "animate-[fadeInUp_1s_ease-out_0.4s_both]"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      {project.status}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-cyan-300 group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-xs text-cyan-300 font-medium transition-colors hover:bg-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible("contact-content")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          data-animate
          id="contact-content"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="flex-1">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-800">
                <h1 className="text-cyan-300 text-4xl sm:text-5xl font-bold mb-4">
                  Contact Me
                </h1>
                <span className="text-white text-xl mb-6 block">
                  Let's go! Get in touch with me 👋
                </span>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Thank you for taking the time to visit my website! If you
                  would like to connect or have any questions, please feel free
                  to reach out using the contact information provided below. You
                  can also send a message directly to my Gmail at
                  riza80448@gmail.com. I look forward to hearing from you!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/rizamaulana04/"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-3 rounded-full text-white font-medium no-underline hover:scale-105 transition-transform duration-300 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/Notnoir"
                    className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 px-3 py-3 rounded-full text-white font-medium no-underline hover:scale-105 transition-transform duration-300 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <span className="bg-gradient-to-r from-blue-500 to-blue-700 px-3 py-3 rounded-full text-white font-medium shadow-lg">
                    <Linkedin className="w-6 h-6" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
                <img
                  src="https://media.giphy.com/media/Mq4Trcf2D6FM0fiMUE/giphy.gif"
                  alt="Contact Animation"
                  className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-cyan-300/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none p-4 rounded-full cursor-pointer text-xl leading-none hover:scale-110 transition-all duration-300 z-50 shadow-2xl"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@400;500;600;700&display=swap");

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .shooting-star {
          position: absolute;
          top: -5px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          border-radius: 999px;
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.6));
          animation: shooting 4s linear infinite;
        }

        .shooting-star::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1),
            rgba(0, 255, 255, 0.8)
          );
          border-radius: 50%;
          filter: blur(1px);
        }

        @keyframes shooting {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px))
              translateY(calc(100vh + 100px));
            opacity: 0;
          }
        }
      `}</style>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Riza Maulana Tamsirin. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
