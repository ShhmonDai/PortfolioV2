import React from 'react'
import CV from '../../assets/cv.pdf'
import CV2 from '../../assets/cv2.pdf'
import { useState, useEffect } from 'react'


const CTA = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsModalOpen(false)
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden" // prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])


  return (
    <div className="cta">

      {/* Download CV Button */}
      <a
        onClick={() => setIsModalOpen(true)}
        className='btn'
      >
        View Resumes
      </a>


      <a href="#portfolioNav" className='btn btn-primary'>See My Work</a>

      {/* ================= PORTFOLIO MODAL ================= */}
      <div
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center
              bg-gray-400/40 cta-blur
              transition-opacity duration-300
              ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsModalOpen(false)}
      >
        {/* Modal / Bottom Sheet */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
      relative w-full sm:w-[92%] max-w-lg
      rounded-t-2xl sm:rounded-xl
    bg-[#10212a]/80 sm:bg-[#10212a]/70 backdrop-blur-2xl
      cta-border
      shadow-[0_10px_40px_rgba(0,0,0,0.45)]
      p-8 text-white
      transform transition-all duration-300
      ${isModalOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-10 sm:translate-y-4 opacity-0"}
    `}
        >
          {/* Drag handle (mobile) */}
          <div className="sm:hidden mx-auto mb-5 h-1.5 w-12 rounded-full bg-white/30" />

          {/* Close button */}
          <a
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-5 text-white/60 hover:text-white text-2xl transition hover:cursor-pointer"
          >
            ✕
          </a>

          <h2 className="text-2xl font-medium text-center text-[rgb(245,187,150)]">
            View My Resumes
          </h2>

          <p className="text-center text-white/70 mt-2 mb-7 text-sm">
            Select a CV to view
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="
          w-full py-3 rounded-md text-center
          bg-[rgb(245,187,150)] text-[#033333] font-medium
          border border-[rgb(245,187,150)]
          transition duration-300
          hover:bg-white hover:text-[#033333] hover:border-transparent
        "
            >
              Software Engineer CV
            </a>

            <a
              href={CV2}
              target="_blank"
              rel="noopener noreferrer"
              className="
          btn !w-full py-3 rounded-md text-center
          text-[rgb(245,187,150)]
          border border-[rgb(245,187,150)]
          transition duration-300
          hover:bg-white hover:text-[#033333] hover:border-transparent
        "
            >
              Project Manager CV
            </a>
          </div>

          <p className="text-center text-xs text-white/50 mt-6">
            PDFs will open in a new tab
          </p>
        </div>
      </div>
      {/* ==================================================== */}

    </div>
  )
}

export default CTA