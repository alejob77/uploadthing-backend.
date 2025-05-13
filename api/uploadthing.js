import { createUploadthing, expressUploadThingHandler } from "uploadthing/express";
import express from "express";
import cors from "cors";

// Configura tu uploader
const f = createUploadthing();

const uploadRouter = {
  foto15: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(({ file, metadata }) => {
      console.log("📸 Foto subida:", file.url);
    }),
};

// Express para Vercel
const app = express();
app.use(cors()); // Permitir frontend externo
app.use("/api/uploadthing", expressUploadThingHandler({ router: uploadRouter }));

export default app;
