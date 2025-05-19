import { useMatches, useParams } from "@remix-run/react";
import Modal from "~/components/common/Modal/Modal";

export default function Videodetail() {
    const { video_id } = useParams();
  const matches = useMatches();

  console.log(matches);
  // Find the videos data from the parent route (adjust the id as needed)
  const videosData = matches.find(m => m.id === "routes/videos")?.data;
  // Filter for the current video by id
  console.log(videosData);
  const video = Array.isArray(videosData)
    ? videosData.find((v: any) => v.id === parseInt(video_id||"1", 10))
    : null;
    console.log(video);
  return (
   <Modal>
        <div className="  max-w-4xl flex flex-col items-center justify-center ">
              <video className="" controls>
                <source src={video?.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div>
               <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full max-w-md text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{video?.name}</h3>
                    <p className="text-gray-600 text-base">{video?.description}</p>
                </div>
               

              </div>
              
        </div>
   </Modal>
  );
}
export async function loader() {
  return null
}