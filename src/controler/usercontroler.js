const express = require("express");
const upload=require("../middleware/upload");
const usermodel = require("../model/usermodel");
const router = express.Router()

//get------------------------------------->

router.get("", async (req, res) => {
    try {
        const user = await usermodel.find().lean().exec();
        return res.send({ User: user });
    }
    catch (err) {
        console.error(err.message)
    }
});

//post------------------------------------->

router.post("",upload.single('profile'),async (req, res) => {
    try {
        // const user = await usermodel.create(req.body);
        const user = await usermodel.create({
            first_name:req.body.first_name,
            profile:req.file.path,
        });
        return res.status(202).send({ User: user });
    }
    catch (err) {
        console.error(err.message);
    }
});


router.post("/multiple",upload.any('profile',5),async (req, res) => {
    try {
          const filepath= req.file.map((file)=>{
              return file.path;
          });
           // const user = await usermodel.create(req.body);
            const user = await usermodel.create({
            first_name:req.body.first_name,
            profile:filepath,
        });
        return res.status(202).send({ User: user });
    }
    catch (err) {
        console.error(err.message);
    }
});

//patch------------------------------>

router.patch("/:id", async (req, res) => {
    try {
        const user = await usermodel.findByIdAndUpdate(req.params.id, req.body);
        return res.status(202).send({ User: user });
    }
    catch (err) {
        res.status(404).send(err);
    }
    const user = await usermodel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(202).send({ User: user });
});

//delete-------------------------------->

router.delete("/:id", async (req, res) => {
    try {
        const user = await usermodel.findByIdAndDelete(req.params.id);
        return res.status(202).send({ User: user });

    }
    catch (err) {
        return res.status(404).send(err);
    }
});


module.exports = router;