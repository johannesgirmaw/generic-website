import Modal from "~/components/common/Modal/Modal";
import VideoAdd from "~/components/Video/add";
import { createVideo, updateVideo, uploadVideo } from "~/data/video.server";
import { redirect, type ActionFunction } from "@remix-run/node";
import { useMatches, useSearchParams } from "@remix-run/react";
import { VideoAddAction } from "~/utils/enums";

const Add = () => {
  const [searchParams] = useSearchParams();

  const paramValue = searchParams.get("video_id"); // Access the query parameter

  const matches = useMatches();

  // Find the videos data from the parent route (adjust the id as needed)
  const videosData = matches.find((m) => m.id === "routes/videos")?.data;
  // Filter for the current video by id

  const video = Array.isArray(videosData)
    ? videosData.find((v: any) => v.id === parseInt(paramValue || "0", 10))
    : null;

  return (
    <Modal>
      <VideoAdd
        video={video}
        action={paramValue ? VideoAddAction.EDIT : VideoAddAction.ADD}
      />
    </Modal>
  );
};
export default Add;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (request.method === "POST") {
    const videoFile = formData.get("video") as File;
    if (!videoFile || typeof videoFile === "string") {
      throw new Error("Invalid file upload");
    }
    const videoUrl = await uploadVideo(videoFile);
    data.url = videoUrl;
    const thumbnailFile = formData.get("thumbnail") as File;
    if (!thumbnailFile || typeof thumbnailFile === "string") {
      throw new Error("Invalid file upload");
    }
    const thumbnailUrl = await uploadVideo(thumbnailFile);
    data.thumbnail = thumbnailUrl;
    await createVideo({
      name: data.name,
      description: data.description,
      url: videoUrl,
      thumbnail: thumbnailUrl,
    });
  } else if (request.method === "PATCH") {
    await updateVideo(parseInt(data.id), data);
  }
  return redirect("..");
};
