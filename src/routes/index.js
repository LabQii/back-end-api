const express = require('express');

const router = express();

const eventRoute = require('./eventRoute');
const blogRoute = require('./blogRoute');
const userRoute = require('./userRoute');
const wasteRoute = require('./wasteRoute');
const wasteitemRoute = require('./wasteitemRoute');
const volunteerRoute = require('./volunteerRoute');
const galleryRoute = require('./galleryRoute');

router.use('/events', eventRoute);
router.use('/blogs', blogRoute);
router.use('/users', userRoute);
router.use('/wastes', wasteRoute);
router.use('/wasteItems', wasteitemRoute);
router.use('/volunteer', volunteerRoute);
router.use('/galleries', galleryRoute);

module.exports = router;
