import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center mx-auto border-2 border-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white uppercase tracking-wider">
          Hiba történt
        </h1>

        <p className="text-gray-400">
          Sajnáljuk, váratlan hiba történt az oldal betöltése közben.
        </p>

        {error?.statusText && (
          <p className="text-sm text-red-400 font-mono bg-red-900/20 p-2 rounded">
            {error.statusText}
          </p>
        )}

        <div className="pt-4">
          <Link
            to="/"
            className="px-8 py-3 bg-white text-black font-bold uppercase text-sm tracking-widest hover:bg-gray-200 transition-colors duration-300"
          >
            Főolda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
