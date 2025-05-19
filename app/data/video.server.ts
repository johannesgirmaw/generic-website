
import { Video } from "@prisma/client";
import { prisma } from "./db.server";
import { writeFile } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
export const getVideos = async () => {
 try {
      return await prisma.video.findMany()
 } catch (error) {
    throw new Error(`Error fetching video: ${error}`);
 }
}

export const createVideo = async (video: any) => {
  console.log(video);
  try {
    return await prisma.video.create({
      data: video
    });
  } catch (error) {
    throw new Error(`Error creating video: ${error}`);
  }
}


export async function uploadVideo(file: File): Promise<string> {

  const buffer = Buffer.from(await file.arrayBuffer());
 const uploadsDir = path.join(process.cwd(), "public", "uploads");

    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }


  const fileName = `${uuidv4()}-${file.name}`;
  const filePath = path.join('public/uploads', fileName);

  await writeFile(filePath, buffer);
  return `/uploads/${fileName}`;
}