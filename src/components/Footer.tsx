export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] border-t border-white/10 px-10 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-medium uppercase tracking-widest gap-4">
      <span>&copy; {new Date().getFullYear()} Deadline Masters. Elite Corporate Execution.</span>
      <div className="flex space-x-6">
        <span>Strictly Confidential</span>
      </div>
    </footer>
  );
}
