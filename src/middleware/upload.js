const multer = require("multer");
const path=require("path");
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,"../Mystore"))
    },
    filename: function (req, file, callback) {
      const uniqueprefix = Date.now() 
      callback(null, uniqueprefix + '-' + file.originalname )
    },
  });

  function fileFilter (req, file, callback) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        callback(null, true)
    }
    else{

    // You can always pass an error if something goes wrong:
    callback(new Error('Please choose right format!'),false);
    }
  
  
  }




const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*5
    },
});

module.exports=upload;



