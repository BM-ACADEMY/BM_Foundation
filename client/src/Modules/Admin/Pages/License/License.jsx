import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../utils/axiosInstance";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Trash2, Download, Clock, Search,
  User, MapPin, Phone, Mail, Calendar, ShieldCheck,
  ChevronRight, ExternalLink
} from "lucide-react";

export default function LicenseAdminSplit() {
  const API_URL = "/license/license/";
  const navigate = useNavigate();

  const [licenses, setLicenses] = useState([]);
  const [filteredLicenses, setFilteredLicenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Selection State for Master-Detail View
  const [selectedId, setSelectedId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Derived Selected Item
  const selectedItem = licenses.find(l => l._id === selectedId) || null;

  /* ----------------------------------------------------
      FETCH DATA
  ---------------------------------------------------- */
  const fetchLicenses = async () => {
    try {
      setLoading(true);
      const res = await api.get(API_URL);
      const data = Array.isArray(res.data) ? res.data : [];
      const sorted = data.reverse();
      setLicenses(sorted);
      setFilteredLicenses(sorted);

      // Auto-select first item if none selected
      if (sorted.length > 0 && !selectedId) {
        setSelectedId(sorted[0]._id);
      }
    } catch (err) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLicenses();
  }, []);

  /* ----------------------------------------------------
      SEARCH LOGIC
  ---------------------------------------------------- */
  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const filtered = licenses.filter(
      (item) =>
        (item.full_name && item.full_name.toLowerCase().includes(lowerTerm)) ||
        (item.phone && item.phone.includes(lowerTerm)) ||
        (item.ward_number && item.ward_number.toLowerCase().includes(lowerTerm))
    );
    setFilteredLicenses(filtered);

    // If search hides the selected item, select the first visible one
    if (filtered.length > 0 && !filtered.find(i => i._id === selectedId)) {
        setSelectedId(filtered[0]._id);
    }
  }, [searchTerm, licenses]);

  /* ----------------------------------------------------
      ACTIONS
  ---------------------------------------------------- */
  const handleApprove = (license) => {
    if (!license?._id) return;
    navigate(`/admin/license/pdf/${license._id}`);
  };

  const handleDelete = async () => {
    if (!deleteTarget?._id) return;
    try {
      await api.delete(`${API_URL}${deleteTarget._id}/`);
      toast.success("Record deleted");

      // Remove from local state to avoid refetch lag
      const updated = licenses.filter(l => l._id !== deleteTarget._id);
      setLicenses(updated);
      setFilteredLicenses(updated.filter(l =>
        l.full_name.toLowerCase().includes(searchTerm.toLowerCase())
      ));

      // Select next available item
      if (updated.length > 0) setSelectedId(updated[0]._id);
      else setSelectedId(null);

      setDeleteTarget(null);
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  /* ----------------------------------------------------
      RENDER
  ---------------------------------------------------- */
  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl font-sans m-4">
      <ToastContainer position="top-right" autoClose={2000} transition={Slide} />

      {/* TOP BAR: Stats & Search */}
      <div className="h-16 bg-[#002d4b] text-white flex items-center justify-between px-6 shrink-0 z-20">
         <div className="flex items-center gap-6">
            <h1 className="font-black uppercase tracking-wider text-lg">Admin Console</h1>
            <div className="flex items-center gap-3 text-xs font-bold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-[#f2bc1c]">PENDING: {licenses.filter(l => !l.is_approved).length}</span>
                <span className="w-px h-3 bg-white/20"></span>
                <span className="text-green-400">ACTIVE: {licenses.filter(l => l.is_approved).length}</span>
            </div>
         </div>

         <div className="relative w-64">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-[#001f35] border border-[#00406b] rounded-md text-sm text-white focus:border-[#f2bc1c] outline-none placeholder-gray-500 transition-colors"
            />
         </div>
      </div>

      {/* MAIN CONTENT SPLIT */}
      <div className="flex flex-1 overflow-hidden">

         {/* --- LEFT COLUMN: LIST --- */}
         <div className="w-1/3 min-w-[320px] border-r border-gray-200 bg-gray-50 flex flex-col">
            <div className="p-3 border-b border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-100/50">
               Member Directory ({filteredLicenses.length})
            </div>

            <div className="flex-1 overflow-y-auto">
               {loading ? (
                   <div className="p-10 text-center text-gray-400">Loading...</div>
               ) : filteredLicenses.length === 0 ? (
                   <div className="p-10 text-center text-gray-400">No members found</div>
               ) : (
                   <div className="divide-y divide-gray-100">
                      {filteredLicenses.map(item => (
                          <div
                             key={item._id}
                             onClick={() => setSelectedId(item._id)}
                             className={`p-4 cursor-pointer hover:bg-white transition-all duration-200 group border-l-4 ${
                                 selectedId === item._id
                                 ? "bg-white border-l-[#002d4b] shadow-sm"
                                 : "bg-transparent border-l-transparent hover:border-l-gray-300"
                             }`}
                          >
                             <div className="flex justify-between items-start mb-1">
                                <span className={`text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${
                                    item.is_approved ? "bg-green-100 text-green-700" : "bg-[#fefce8] text-[#854d0e]"
                                }`}>
                                    {item.is_approved ? <CheckCircle size={10}/> : <Clock size={10}/>}
                                    {item.is_approved ? "Active" : "Pending"}
                                </span>
                                <span className="text-[10px] text-gray-400">{item._id.slice(-4)}</span>
                             </div>

                             <div className="flex items-center gap-3">
                                 {item.photo ? (
                                     <img src={item.photo} className="w-10 h-10 rounded-full object-cover bg-gray-200" alt="" />
                                 ) : (
                                     <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400"><User size={16}/></div>
                                 )}
                                 <div>
                                     <h4 className={`font-bold text-sm ${selectedId === item._id ? "text-[#002d4b]" : "text-gray-700"}`}>{item.full_name}</h4>
                                     <p className="text-xs text-gray-500">{item.phone}</p>
                                 </div>
                             </div>
                          </div>
                      ))}
                   </div>
               )}
            </div>
         </div>

         {/* --- RIGHT COLUMN: DETAILS --- */}
         <div className="w-2/3 bg-white overflow-y-auto relative">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

            {selectedItem ? (
               <div className="p-8 md:p-12 relative z-10 max-w-3xl mx-auto">

                  {/* DETAIL HEADER */}
                  <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-100">
                     <div className="flex gap-6">
                        <div className="w-24 h-24 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-gray-100">
                            {selectedItem.photo ? (
                                <img src={selectedItem.photo} className="w-full h-full object-cover" alt="Profile" />
                            ) : (
                                <User className="w-full h-full p-6 text-gray-300" />
                            )}
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-[#002d4b] mb-1">{selectedItem.full_name}</h2>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1"><MapPin size={14} className="text-[#f26522]"/> Ward: {selectedItem.ward_number}</span>
                                <span className="flex items-center gap-1"><Phone size={14} className="text-[#f26522]"/> {selectedItem.phone}</span>
                            </div>
                            <div className="mt-3 flex gap-2">
                               {selectedItem.areas_of_interest && JSON.parse(selectedItem.areas_of_interest.replace(/'/g, '"')).map((tag, i) => (
                                   <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded">{tag}</span>
                               ))}
                            </div>
                        </div>
                     </div>
                     <div className="text-right">
                         <div className={`text-sm font-bold mb-2 flex items-center justify-end gap-1 ${selectedItem.is_approved ? "text-green-600" : "text-[#f2bc1c]"}`}>
                             {selectedItem.is_approved ? "Verified Member" : "Awaiting Approval"}
                             <ShieldCheck size={16} />
                         </div>
                         <p className="text-xs text-gray-400">ID: {selectedItem._id}</p>
                     </div>
                  </div>

                  {/* DATA GRID */}
                  <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-10 text-sm">
                      <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                          <p className="font-medium text-gray-800">{selectedItem.email || "N/A"}</p>
                      </div>
                      <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Full Address</p>
                          <p className="font-medium text-gray-800">{selectedItem.address}</p>
                      </div>
                      <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Gender / Age</p>
                          <p className="font-medium text-gray-800 capitalize">{selectedItem.gender} / {selectedItem.age} Years</p>
                      </div>
                      <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Emergency Contact</p>
                          <p className="font-medium text-gray-800">{selectedItem.emergency_contact_name} ({selectedItem.emergency_contact_phone})</p>
                      </div>
                      <div className="col-span-2">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Experience / Notes</p>
                          <p className="font-medium text-gray-600 italic">"{selectedItem.previous_experience || "No prior experience listed."}"</p>
                      </div>
                  </div>

                  {/* ACTION BAR */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex items-center justify-between">
                      <div className="flex gap-3">
                          {!selectedItem.is_approved ? (
                             <button
                                onClick={() => handleApprove(selectedItem)}
                                className="px-6 py-3 bg-[#002d4b] hover:bg-[#00406b] text-white font-bold rounded-lg shadow-lg flex items-center gap-2 transition-all active:scale-95"
                             >
                                <CheckCircle size={18} /> Approve Membership
                             </button>
                          ) : (
                             <div className="flex gap-3">
                                <a
                                  href={selectedItem.license_pdf}
                                  target="_blank" rel="noreferrer"
                                  className="px-4 py-2 bg-white border border-gray-300 hover:border-[#002d4b] text-[#002d4b] font-bold rounded-lg flex items-center gap-2 transition-all"
                                >
                                    <Download size={16} /> Certificate
                                </a>
                                <a
                                  href={`https://wa.me/91${selectedItem.phone}`}
                                  target="_blank" rel="noreferrer"
                                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center gap-2 transition-all"
                                >
                                    <ExternalLink size={16} /> WhatsApp
                                </a>
                             </div>
                          )}
                      </div>

                      <button
                         onClick={() => setDeleteTarget(selectedItem)}
                         className="px-4 py-2 text-red-500 hover:bg-red-50 font-bold rounded-lg flex items-center gap-2 transition-colors"
                      >
                         <Trash2 size={16} /> Delete Record
                      </button>
                  </div>

               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-gray-300">
                   <User size={64} className="mb-4 opacity-20" />
                   <p className="text-lg font-medium">Select a member to view details</p>
               </div>
            )}
         </div>
      </div>

      {/* DELETE MODAL */}
      <AnimatePresence>
        {deleteTarget && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#002d4b]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
               initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
               className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm text-center"
            >
              <h3 className="text-lg font-bold text-[#002d4b] mb-1">Confirm Deletion</h3>
              <p className="text-sm text-gray-500 mb-6">Permanently remove this member?</p>
              <div className="flex gap-3">
                 <button onClick={() => setDeleteTarget(null)} className="flex-1 py-2 bg-gray-100 font-bold rounded-lg text-sm text-gray-600">Cancel</button>
                 <button onClick={handleDelete} className="flex-1 py-2 bg-red-500 font-bold rounded-lg text-sm text-white">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
