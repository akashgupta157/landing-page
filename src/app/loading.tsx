"use client";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-screen">
      <div className="flex space-x-2">
        <div
          className="bg-blue-500 rounded-full w-3 h-3 animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="bg-blue-500 rounded-full w-3 h-3 animate-bounce"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="bg-blue-500 rounded-full w-3 h-3 animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
      <p className="text-gray-600 text-lg">Loading...</p>
    </div>
  );
}
