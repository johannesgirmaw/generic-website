// import { prisma } from "../../utils/db.server";

// export async function getAllFields() {
//   return prisma.fields.findMany();
// }

// export async function createField(data: {
//   label: string;
//   name: string;
//   type: string;
//   options?: string;
//   required?: boolean;
// }) {
//   const count = await prisma.fields.count();
//   return prisma.fields.create({
//     data: {
//       ...data,
//       position: count + 1,
//     },
//   });
// }
