import { X, Mail, Download, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetInTouchModal = ({ isOpen, onClose }: GetInTouchModalProps) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/real_resume.pdf';
    link.download = 'Swetha_Kannan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    window.location.href = 'mailto:priyakannan0899@gmail.com?subject=Hello Swetha!&body=Hi Swetha, I came across your portfolio and would love to connect.';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/swetha-kannan-1b6977376/', '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[var(--bg-color)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 rounded-3xl blur-2xl -z-10"></div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-muted hover:text-main hover:bg-purple-500/20 transition-all"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-main mb-3">
                Let's <span className="gradient-text italic">Connect!</span>
              </h2>
              <p className="text-muted text-sm">
                Choose how you'd like to get in touch
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleEmail}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Mail size={22} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-main font-medium">Contact via Gmail</p>
                  <p className="text-muted text-xs">priyakannan0899@gmail.com</p>
                </div>
              </button>

              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group shadow-lg shadow-purple-500/25"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Download size={22} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-white font-semibold">Download Resume</p>
                  <p className="text-white/80 text-xs">PDF · Latest version</p>
                </div>
              </button>

              <button
                onClick={handleLinkedIn}
                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Linkedin size={22} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-main font-medium">Connect on LinkedIn</p>
                  <p className="text-muted text-xs">Swetha Kannan</p>
                </div>
              </button>
            </div>

            <p className="text-center text-muted text-xs mt-8">
              Looking forward to hearing from you! 💜
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetInTouchModal;
