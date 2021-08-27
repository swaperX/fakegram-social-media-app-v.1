const express = require("express");
const {
  imageFileUpload,
  uploadPost,
  getPosts,
  setComment,
  setLikeToPost,
} = require("../controllers/post");
const { upload } = require("../helpers/multerImageUpload/multerImageUpload");
const router = express.Router();

router.post("/image-file-upload", upload.single("image"), imageFileUpload);
router.post("/upload-post", uploadPost);
router.post("/get-posts", getPosts);
router.post("/set-comment", setComment);
router.post("/set-like", setLikeToPost);

module.exports = router;
