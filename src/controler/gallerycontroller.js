const express = require("express");
const upload=require("../middleware/upload");
const gallerymodel = require("../model/gallerymodel");
const router = express.Router();

//get----------------------------------------->

router.get("",async (req, res) => {
    try {
        const gallery = await gallerymodel.find().lean().exec();
        return res.status(202).send({ Gallery: gallery });
    }
    catch (err) {
        return res.status(404).send(err.message);
    }
});

//post------------------------------------------>

router.post("", upload.single("profile") , async (req, res) => {
    try {
        const gallery = await gallerymodel.create({
            first_name:req.body.firstname,
            profile:req.file,
        });
        return res.status(202).send({ Gallery: gallery });
    }
    catch (err) {
        return res.status(404).send(err);
    }
});

router.post("/multiplegallary", upload.any("profile,5") , async (req, res) => {
    try {
       const filepath=req.file.path.map((file)=>{
           return file.path;
       })

        const gallery = await gallerymodel.create({
            first_name:req.body.firstname,
            profile:filepath,
        });
        return res.status(202).send({ Gallery: gallery });
    }
    catch (err) {
        return res.status(404).send(err);
    }
});


//patch------------------------------------------>

router.patch("/:id", async (req, res) => {
    try {
        const gallery = await gallerymodel.findByIdAndUpdate(req.params.id, req.body)
        return res.status(202).send({ Gallery: gallery })
    }
    catch (err) {
        res.send(err);
    }
});

//delete------------------------------------------->

router.delete("/:id", async (req, res) => {
    try {
        const gallery = await gallerymodel.findByIdAndDelete(req.params.id)
        return res.status(202).send({ Gallery: gallery })
    }
    catch (err) {
        res.send(err);
    }
});

module.exports = router