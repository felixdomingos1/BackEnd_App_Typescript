import multer from "multer";
import path from "path";
import { v4 as uuidV4 } from "uuid";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");

const multerConfig = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, cb) => {
      const uuid = uuidV4();

      const fileName = `${uuid}.${file.originalname.split(".").pop()}`;

      return cb(null, fileName);
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "application/pdf",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Extensão de imagem inválida!"));
    }
  },
};

export { multerConfig };
