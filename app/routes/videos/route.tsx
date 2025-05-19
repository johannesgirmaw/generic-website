// routes/videos/_layout.tsx
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getVideos } from "~/data/video.server";

export default function VideosLayout() {
  const videos = useLoaderData();
  console.log(videos);
  return (
 
     <main className="w-full  px-6 py-8">
       <header className="flex items-center justify-between mb-8 border-b l pb-4">
  <h1 className="text-3xl font-bold text-gray-800">Videos</h1>
  <Link
    to="add"
    className="px-5 py-2 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  >
    + Add Video
  </Link>
</header>
      {Array.isArray(videos) && videos.length > 0 && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
    {videos.map((video: any) => (
      <Link to={`${video.id}`} key={video.id} className="relative bg-white rounded-lg shadow p-4 flex flex-col items-center">
        <img
          src={video.thumbnail}
          alt={video.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{video.name}</h2>
        {/* Dropdown */}
        <div className="absolute top-4 right-4 group">
          <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </button>
          <div className="hidden group-hover:block absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
            <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Delete</button>
          </div>
        </div>
      </Link>
    ))}
  </div>
)}
     
  <Outlet />
    </main>
    
  
  );
}
export async function loader() {
    const videosData = await getVideos();
  return videosData
}
export function action() {
  return null
}