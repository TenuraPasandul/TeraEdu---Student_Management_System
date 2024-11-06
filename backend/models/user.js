const express = require('express');
const multer = require('multer');
const Posts = require('../models/user');

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  },
});

const upload = multer({ storage });


// Save post 
router.post('/users/save', upload.fields([{ name: 'profilepic', maxCount: 1 }]), async (req, res) => {
  try {
    const { fname, lname, gender, email, pass, role, qualifications } = req.body;
    const profilepic = req.files['profilepic'] ? `/uploads/${req.files['profilepic'][0].filename}` : null;

    const newPost = new Posts({
      fname,
      lname,
      gender,
      email,
      pass,
      role,
      qualifications,
      profilepic: profilepic,
    });

    await newPost.save();
    return res.status(200).json({
      success: "Post saved successfully"
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

router.get('/users', async (req, res) => {
    try {
      const posts = await Posts.find().exec();
      return res.status(200).json({
        success: true,
        existingPosts: posts
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  });


router.delete('/users/delete/:id', async (req, res) => {
  try {
    const deletedPost = await Posts.findByIdAndDelete(req.params.id).exec();

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    return res.json({
      message: "Delete successful",
      deletedPost
    });
  } catch (err) {
    return res.status(400).json({
      message: "Delete unsuccessful",
      error: err.message
    });
  }
});

router.use('/uploads', express.static('uploads'));

module.exports = router;