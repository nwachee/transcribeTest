import path from 'path';
import multer from 'multer';
import fs from 'fs'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create a directory with a unique name for each upload session
    const uploadDir = path.join('chunks-upload');
    fs.mkdirSync(uploadDir, { recursive: true }); // Create the directory if it doesn't exist
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Use the original file name as the uploaded file's name
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('File type not supported'), false);
    }
  };
  
  const upload = multer({ storage: storage, fileFilter: fileFilter });
  
  export { upload };
