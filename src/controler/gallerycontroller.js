const express = require("express");
const gallerymodel = require("../model/gallerymodel");
const router = express.Router();

//get----------------------------------------->

router.get("", async (req, res) => {
    try {
        const gallery = await gallerymodel.find().lean().exec();
        return res.status(202).send({ Gallery: gallery });
    }
    catch (err) {
        return res.status(404).send(err.message);
    }
});

//post------------------------------------------>

router.post("", async (req, res) => {
    try {
        const gallery = await gallerymodel.create(req.body);
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