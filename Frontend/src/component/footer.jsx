const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            S
          </div>
          <span className="font-bold text-slate-200 tracking-wide text-xs sm:text-sm uppercase">
            Smart Learning Agent
          </span>
        </div>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Smart Learning Agent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
