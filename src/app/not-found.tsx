import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold gradient-text font-outfit mb-4">404</div>
        <h1 className="text-3xl font-bold text-white font-outfit mb-3">Page Not Found</h1>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300"
        >
          Back to Home
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
