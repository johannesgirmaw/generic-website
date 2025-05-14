// import { json, useLoaderData } from "@remix-run/react";
// // import db from "../../utils/db.server";
// import { PrismaClient } from "@prisma/client";
// const db = new PrismaClient();
// export const loader = async () => {
//   console.log("Fetching fields----------", db.fields);
//   const fields = await db.fields.findMany();
//   console.log("Fetched fields", fields);
//   return json({
//     todos: [],
//   });
// };

// export default function Fields() {
//   const data = useLoaderData<typeof loader>();
//   return JSON.stringify(data);
// }
