import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Filter } from "lucide-react";

// Importing local images
import image1 from "../../../assets/Foundation/bmf1 (1).jpg";
import image2 from "../../../assets/Foundation/bmf12 (1).jpg";
import image3 from "../../../assets/Foundation/bmf2 (1).jpg";
import image4 from "../../../assets/Foundation/bmf3_11zon.jpg"

// ----------------------------------------------------------------------
// 1. GALLERY DATA (Using imported images)
// ----------------------------------------------------------------------
const galleryData = [
  {
    id: 1,
    category: "Events",
    src: image1,
    title: "Annual Charity Gala",
  },
  {
    id: 2,
    category: "Education",
    src: image2,
    title: "School Supplies Distribution",
  },
  {
    id: 3,
    category: "Medical",
    src: image3,
    title: "Free Health Checkup Camp",
  },
  {
    id: 4,
    category: "Community",
    src: image4,
    title: "Food Donation Drive",
  },
  {
    id: 5,
    category: "Events",
    // src: image2,
    title: "Volunteer Meetup",
  },
  {
    id: 6,
    category: "Education",
    // src: image3,
    title: "Computer Literacy Workshop",
  },
  {
    id: 7,
    category: "Medical",
    // src: image1,
    title: "Blood Donation Camp",
  },
  {
    id: 8,
    category: "Community",
    // src: image2,
    title: "Village Development Project",
  },
];

const categories = ["All", "Education", "Medical", "Community", "Events"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter Logic
  const filteredImages =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* 2. PAGE HEADER */}
      <div className="bg-[#1a1a1a] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000] to-transparent opacity-30" />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
        >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
              Our <span className="text-[#f26522]">Impact</span> Gallery
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Moments captured from our journey of serving the community.
              Witness the change we bring together.
            </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">

        {/* 3. FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-400 mr-4 font-bold uppercase tracking-widest text-sm">
                <Filter size={18} /> Filters:
            </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 border-2
                ${
                  selectedCategory === cat
                    ? "bg-[#f26522] border-[#f26522] text-white shadow-lg scale-105"
                    : "bg-white border-gray-200 text-gray-500 hover:border-[#f26522] hover:text-[#f26522]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4. IMAGE GRID (MASONRY STYLE) */}
        <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl shadow-xl bg-white cursor-pointer h-72"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <ZoomIn size={32} className="mb-2 text-[#f2bc1c]" />
                  <h3 className="text-xl font-bold uppercase">{image.title}</h3>
                  <span className="text-xs tracking-widest bg-[#f26522] px-2 py-1 rounded mt-2 uppercase">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                <p>No images found in this category.</p>
            </div>
        )}
      </div>

      {/* 5. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)} // Close on background click
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-[#f26522] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[85vh] mx-auto rounded-lg"
              />
              <div className="bg-white p-4 mt-[-4px] text-center">
                <h3 className="text-xl font-bold text-gray-800 uppercase">
                    {selectedImage.title}
                </h3>
                <p className="text-[#f26522] text-sm font-semibold tracking-wide">
                    {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
