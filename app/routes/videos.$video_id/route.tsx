import { XMarkIcon } from "@heroicons/react/24/solid";
import { useMatches, useNavigate, useParams } from "@remix-run/react";
import Modal from "~/components/common/Modal/Modal";

export default function Videodetail() {
  const { video_id } = useParams();
  const matches = useMatches();
  const navigate = useNavigate();

  // Find the videos data from the parent route (adjust the id as needed)
  const videosData = matches.find((m) => m.id === "routes/videos")?.data;
  // Filter for the current video by id

  const video = Array.isArray(videosData)
    ? videosData.find((v: any) => v.id === parseInt(video_id || "0", 10))
    : null;

  return (
    <Modal>
      <div className=" relative max-w-4xl flex flex-col items-center justify-center ">
        <div className="flex items-center justify-between w-full max-w-4xl bg-white rounded-lg shadow-md  ">
          <h1 className="text-2xl">Video Detail</h1>

          <XMarkIcon
            className="h-12 w-12 text-gray-500"
            onClick={() => navigate(-1)}
          />
        </div>
        <video className=" w-full" controls>
          <source src={video?.url} type="video/mp4" />
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full max-w-md text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {video?.name}
            </h3>
            <p className="text-gray-600 text-base">{video?.description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export async function loader() {
  return null;
}
