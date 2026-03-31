import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div className="text-6xl font-bold text-orange-500 mb-4">404</div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Page not found
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors"
      >
        Back to docs
      </Link>
    </div>
  );
}
