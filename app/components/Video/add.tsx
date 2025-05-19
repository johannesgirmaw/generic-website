import { Form, useNavigate } from "@remix-run/react";
import Input from "~/components/common/Inputs/input";
import { VideoType } from "~/routes/videos/route";
import { VideoAddAction } from "~/utils/enums";

type VideoAddProps = {
  video?: VideoType;
  action: string;
};
const VideoAdd = (props: VideoAddProps) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("..");
  };

  return (
    <div className="container  mx-auto px-4 py-8 mt-4">
      <header className="mb-7 flex items-center justify-center w-full border-b-2 border-gray-300 mt-10">
        <h1 className="text-2xl font-bold">Add Video</h1>
      </header>

      <Form
        method={props.action == VideoAddAction.ADD ? `post` : "PATCH"}
        action="/videos/add"
        encType="multipart/form-data"
      >
        <div className="hidden">
          <Input name="id" defaultValue={props.video?.id} />
        </div>

        <div
          className={`flex flex-row gap-4 mb-4 ${
            props.action == VideoAddAction.EDIT ? "hidden" : ""
          }`}
        >
          <Input
            type="file"
            name="video"
            accept="video/*"
            required={props.action == VideoAddAction.ADD}
          />

          <Input
            type="file"
            name="thumbnail"
            accept="image/*"
            required={props.action == VideoAddAction.ADD}
          />
        </div>

        <Input
          type="text"
          name="name"
          defaultValue={props.video?.name}
          placeholder="Enter video name"
          required
        />
        <Input
          type="textarea"
          name="description"
          defaultValue={props.video?.description}
          placeholder="Enter video description"
          required
        />
        <footer className="flex justify-end mt-4 border-t-2 border-gray-300 pt-4">
          <footer className="flex justify-end mt-4 border-t-2 border-gray-300 pt-4">
            <button
              type="button"
              className="mr-4 px-6 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              {props.action == VideoAddAction.EDIT
                ? "Update Video"
                : "Add Video"}
            </button>
          </footer>
        </footer>
      </Form>
    </div>
  );
};
export default VideoAdd;

export async function loader() {
  return null;
}
