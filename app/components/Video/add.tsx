import { Form, redirect, useNavigate, useNavigation } from "@remix-run/react";
import Input from "~/components/common/Inputs/input";

const VideoAdd = () => {
  const navigate =useNavigate()
  const handleCancel = () => {
  
     navigate("..");
  }

  return (
    <div className="container  mx-auto px-4 py-8 mt-4">
      <header className="mb-7 flex items-center justify-center w-full border-b-2 border-gray-300 mt-10">
    <h1 className="text-2xl font-bold" >Add Video</h1>
      </header>
  
      <Form method="post" action="/videos/add" encType="multipart/form-data">
      <div className="flex flex-row gap-4 mb-4">
       <Input type="file" name="video" accept="video/*" required />
      
        
          <Input type="file" name="thumbnail" accept="image/*" required />
        
      </div>
      
         
       
      <Input
          type="text"
          name="name"
          placeholder="Enter video name"
          required
        />
        <Input
          type="textarea"
          name="description"
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
    Add Video
  </button>
</footer>
        </footer>
       
      </Form>
    </div>
  );
}
export default VideoAdd;