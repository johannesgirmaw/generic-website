import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/24/solid";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e);
    const selected = e.target.files?.[0] || null;
    setFile(selected);

    // For image preview
    if (selected && selected.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selected);
    } else {
      setPreview(null);
    }
  };

  if (props.type === "file") {
    return (
      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-blue-400 transition w-full max-w-md mx-auto mb-5">
        {!file && <PaperClipIcon className="h-12 w-12 text-gray-400 mb-2" />}
        {!preview && (
          <span className="text-gray-600 font-medium mb-2">
            {file ? file.name : props.name || "Click to upload a file"}
          </span>
        )}
        <input className="hidden" {...props} onChange={handleChange} />
        {preview && (
          <img src={preview} alt="Preview" className="mt-2 max-h-40 rounded" />
        )}
        <span className="text-xs text-gray-400">Max file size: 10MB</span>
      </label>
    );
  }
  if (props.type === "textarea") {
    return (
      <label className="flex flex-col mb-4">
        {props.name && <span className="text-gray-700 mb-2">{props.name}</span>}
        <textarea
          className="border-2 border-gray-300 rounded-md p-2 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 outline-none"
          name={props.name}
          rows={4}
          cols={50}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue} // Add this line
        />
      </label>
    );
  }

  return (
    <label className="flex flex-col mb-4">
      {props.name && <span className="text-gray-700 mb-2">{props.name}</span>}
      <input
        className="border-2 border-gray-300 rounded-md p-2 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-blue-400 outline-none"
        {...props}
        defaultValue={props.defaultValue}
      />
    </label>
  );
}
