import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#284bff]">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full">
        <svg
          width={80}
          height={80}
          fill="none"
          viewBox="0 0 80 80"
          className="mb-4"
        >
          <rect width="80" height="80" rx="20" fill="#284bff" />
          <text
            x="40"
            y="48"
            textAnchor="middle"
            fill="#fff"
            fontSize="40"
            fontWeight="bold"
          >
            404
          </text>
        </svg>
        <h1 className="text-3xl font-bold text-[#284bff] mb-2">Page Not Found</h1>
        <p className="text-gray-700 mb-6 text-center">
          Oops! The page you’re looking for doesn’t exist.<br />
          Let’s get you back <a href="/" className="text-[#284bff] underline font-medium">home</a>.
        </p>
        <a
          href="/"
          className="bg-[#284bff] hover:bg-blue-700 text-white rounded-xl px-6 py-3 text-lg font-semibold transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
