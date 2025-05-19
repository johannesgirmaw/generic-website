import Modal from "~/components/common/Modal/Modal";
import VideoAdd from "~/components/Video/add";
import { createVideo, uploadVideo } from "~/data/video.server";

const add = () => {
  return (
    <Modal>
      <VideoAdd />
    </Modal>
  );
};
export default add;

import { redirect, type ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
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
  return redirect("..");
};
