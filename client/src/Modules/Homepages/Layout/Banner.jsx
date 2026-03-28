import React, { memo } from "react";
import { motion } from "framer-motion";
import bannerVideo from "../../../assets/bm3.mp4";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const Banner = () => {
  const qrUrl = encodeURIComponent(window.location.origin + "/license");

  return (
    <section className="relative w-full min-h-screen flex items-center bg-black overflow-hidden">
      
      {/* ---------------- 1. BLENDED VIDEO BACKGROUND ---------------- */}
      {/* The video is positioned to the right, but fades out to the left */}
      <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0">
        <div className="absolute inset-0 w-full h-full">
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Mask: Fades the video into black on the left & bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
      </div>

      {/* ---------------- 2. CONTENT CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-10 pt-20">
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f2bc1c] animate-pulse" />
            <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">
              BM Foundation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-bold text-white leading-[1.1] mb-6">
            Together, we <br />
            create a <span className="text-[#f2bc1c]">future</span> <br />
            where everyone matters.
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-10 leading-relaxed border-l-2 border-[#f26522] pl-6 max-w-lg">
             Namma oorukkum, namma makkalukkum <span className="text-white font-semibold">nalladha seiyanum-na</span>, BM Foundation-oda serunga.
          </motion.p>

          {/* Buttons & Actions */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            
            {/* Main Button */}
            <Link to="/license">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f26522] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider shadow-lg shadow-[#f26522]/20 hover:bg-[#d9531e] transition-colors"
              >
                Become a Volunteer
              </motion.button>
            </Link>

            {/* QR Code Block
            <div className="flex items-center gap-4 group">
               <div className="p-1 bg-white rounded-lg opacity-90 group-hover:opacity-100 transition-opacity">
                 <Link to="/license">
                   <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${qrUrl}`}
                    alt="Scan"
                    className="w-14 h-14"
                   />
                 </Link>
               </div>
               <div>
                 <p className="text-white text-sm font-bold uppercase">Scan to Join</p>
                 <p className="text-gray-500 text-xs">Instant Access</p>
               </div>
            </div> */}

          </motion.div>

        </motion.div>
      </div>
      
    </section>
  );
};

export default memo(Banner);



// import React, { memo } from "react";
// import { motion } from "framer-motion";
// import image from "../../../assets/bm foundation.jpg.jpeg"; 
// import { Link } from "react-router-dom";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   },
// };

// const Banner = () => {
//   const qrUrl = encodeURIComponent(window.location.origin + "/license");

//   return (
//     <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      
//       {/* 1. FULL BACKGROUND IMAGE */}
//       {/* Changed w-[70%] to w-full so the image spans the whole screen */}
//       <div className="absolute inset-0 w-full h-full">
//         <div 
//           className="w-full h-full bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${image})` }}
//         />
        
//         {/* 2. GRADIENT OVERLAY (Crucial for text readability) */}
//         {/* Dark on the left (90% opacity) -> Fades to transparent on the right */}
//         {/* This allows you to see the people BEHIND the text, but keeps the text readable */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        
//         {/* Optional: Bottom fade to blend with footer/next section */}
//         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
//       </div>

//       {/* 3. CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-10 pt-10">
//         <motion.div 
//           className="max-w-xl md:max-w-2xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.2 }}
//         >
          
//           {/* Badge */}
//           <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#f2bc1c] animate-pulse" />
//             <span className="text-[#f2bc1c] text-xs font-bold uppercase tracking-widest">
//               BM Foundation
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
//             Together, we <br />
//             create a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2bc1c] to-[#f26522]">future</span> <br />
//             where everyone matters.
//           </motion.h1>

//           {/* Description */}
//           <motion.p variants={fadeInUp} className="text-gray-200 text-lg mb-10 leading-relaxed border-l-4 border-[#f26522] pl-6 drop-shadow-md font-medium">
//              Namma oorukkum, namma makkalukkum <span className="text-white font-bold underline decoration-[#f2bc1c]">nalladha seiyanum-na</span>, BM Foundation-oda serunga.
//           </motion.p>

//           {/* Buttons & Actions */}
//           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            
//             {/* Main Button */}
//             <Link to="/license">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#f26522] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider shadow-[0_0_20px_rgba(242,101,34,0.4)] hover:bg-[#d9531e] transition-all"
//               >
//                 Become a Volunteer
//               </motion.button>
//             </Link>

//             {/* QR Code Block */}
//             <div className="flex items-center gap-4 group bg-black/40 p-2 rounded-xl backdrop-blur-sm border border-white/10">
//                <div className="bg-white p-1 rounded-lg">
//                  <Link to="/license">
//                    <img
//                     src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${qrUrl}`}
//                     alt="Scan"
//                     className="w-12 h-12"
//                    />
//                  </Link>
//                </div>
//                <div className="pr-2">
//                  <p className="text-white text-xs font-bold uppercase">Scan to Join</p>
//                  <p className="text-[#f2bc1c] text-[10px] tracking-wide">Instant Access</p>
//                </div>
//             </div>

//           </motion.div>

//         </motion.div>
//       </div>
      
//     </section>
//   );
// };

// export default memo(Banner);