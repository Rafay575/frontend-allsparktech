import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-9xl font-extrabold text-[#384BFF] mb-4 animate-pulse">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">Oops! Page not found.</p>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We can’t seem to find the page you’re looking for.
      </p>
      <Link href="/" className="inline-block px-6 py-3 bg-[#384BFF] text-white rounded-lg hover:bg-blue-600 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
