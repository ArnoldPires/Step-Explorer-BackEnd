import { Router } from "express";
import Trail from "../models/trailModel.js";
const router = Router();

// TrailIndex
router.get("/trailIndex", async (req, res) => {
  try {
    const trails = await Trail.find();
    res.render("trails/TrailIndex", { trails });
  } catch (error) {
    console.log(error);
  } 
});

// CreateTrail
router.get("/CreateTrail", (req, res) => {
  res.render("trails/CreateTrail");
});

// CreateTrail
router.post("/HomePage", async (req, res) => {
  try {
    const result = await uploader.upload(req.filter.path);
    const trail = new Trail({
      name: req.body.name,
      picture: result.secure_url,
      difficulty: req.body.difficulty,
      location: req.body.location,
      miles: req.body.miles,
      routeType: req.body.routeType,
      description: req.body.description,
      suitability: req.body.suitability,
      attractions: req.body.attractions,
      gMaps: req.body.gMaps,
      user: req.user._id,
    })
    await trail.save();
    res.redirect("/trails/HomePage");
  } catch (error) {
    console.log(error);
  }
});

// EditTrail
router.get("/:id/editTrail", async (req, res) => {
  try {
    const trail = await Trail.findById(req.params.id);
    res.render("trails/EditTrail", { trail });
  } catch (error) {
    console.log(error);
  }
});

// UpdateTrail
router.put("/:id", async (req, res) => {
  try {
    await Trail.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      picture: result.secure_url,
      difficulty: req.body.difficulty,
      location: req.body.location,
      length: req.body.length,
      routeType: req.body.routeType,
      description: req.body.description,
      suitability: req.body.suitability,
      attractions: req.body.attractions,
      gMaps: req.body.gMaps,
    });
    res.redirect(`/trails/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Trail.findByIdAndRemove(req.params.id);
    res.redirect("/trails/HomePage");
    } catch (error) {
      console.log(error);
    }
});

// Show
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const trail = await Trail.findById(req.params.id);
    res.render("Trails/ViewTrails", { trail: trail });
  } catch (error) {
    console.log(error);
  }
});

export default router;