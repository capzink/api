import HttpError from "../models/error.js";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const { placeId } = req.params; 

  const place = DUMMY_PLACES.find((place) => {
    return place.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place }); 
};

const getPlaceByUserId = (req, res, next) => {
  const { userId } = req.params;

  const place = DUMMY_PLACES.find((place) => {
    return place.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided user id.", 404)
    );
  }

  res.json({ place });
};

export { getPlaceById, getPlaceByUserId };
