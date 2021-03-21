const router = require('express').Router();
const {
    createThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route("/").get(getAllThoughts);

// /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// /api/thoughts/<thoughtId>
router.route("/:thoughtId").get(getThoughtById).put(updateThought);

// /api/thoughts/<thoughtId>/<userId>
router.route("/:thoughtId/:userId").delete(deleteThought);

// /api/thoughts/<thoughtId>/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/<thoughtId>/reactions/<reactionID>
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;