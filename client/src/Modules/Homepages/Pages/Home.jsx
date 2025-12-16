import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/banner/BannerN2.png";
import BlogBg from "../../../assets/banner/blog_bg_1.jpg";
import { Play, ArrowRight } from "lucide-react";
import { Handshake, Scale } from "lucide-react";

const Home = () => {
  const Bannerimage =
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop";

  return (
    <main className="font-sans bg-gradient-to-br from-[#0033A0]/5 via-white to-[#D62828]/5 text-gray-900">

      {/* ---------------- HERO / HIGHLIGHTS SECTION ---------------- */}
      <section
        className="text-center py-16 relative bg-cover bg-center bg-no-repeat shadow-sm overflow-hidden"
        style={{ backgroundImage: `url(${BlogBg})` }}
      >
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002855]">
            Support Humanity & Country
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#D89F00] mt-1">
            Campaign Highlights
          </h3>

          <p className="text-gray-700 mt-4 text-md max-w-3xl mx-auto">
            A people-driven movement focused on service, justice, and unity.
            Join us in shaping a better future.
          </p>

          <div className="text-center mt-16">
            <Link
              to="/license"
              className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 font-bold text-white bg-[#C81E1E] border-2 border-[#C81E1E] shadow-md hover:text-[#C81E1E] rounded-md"
            >
              <span className="absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10">Join Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- GET TO KNOW US ---------------- */}
      <section className="w-full py-20 bg-[#0033A0] relative overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative group mx-auto">
            <div className="relative overflow-hidden shadow-2xl bg-gray-900 aspect-video">
              <img
                // src={HeroImage}
                alt="Event"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-700"
              />


                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <Play className="w-8 h-8 text-[#D62828] ml-1" />
                </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="text-white">
            <p className="text-sm tracking-widest font-bold text-[#FFD700] mb-4">
              Get to know us
            </p>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Get involved <br />
              <span className="text-[#FFD700]">Make a Difference</span>
            </h2>

            <p className="text-blue-100 leading-relaxed max-w-lg mb-8">
              We stand for integrity, inclusion, and action.
              Be a part of a movement that empowers people.
            </p>

            <Link
              to="/license"
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold bg-[#D62828] text-white hover:bg-white hover:text-[#D62828] transition"
            >
              Join Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- MISSION & VISION ---------------- */}
      <section
        className="relative w-full py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${Bannerimage})` }}
      >
        <div className="absolute inset-0 bg-[#002855]/90"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Our Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="p-8 rounded-xl bg-white/5">
              <Handshake className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
              <h3 className="text-2xl font-bold mb-3">Fostering Solidarity</h3>
              <p className="text-blue-100">
                Building unity, equality, and brotherhood across society.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white/5">
              <Scale className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
              <h3 className="text-2xl font-bold mb-3">Power to the People</h3>
              <p className="text-blue-100">
                Transparency, accountability, and inclusive governance.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
