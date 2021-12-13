import {Router} from 'express'
const router = Router()

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
router.get('/:placeId',(req,res)=>{
if (!place) {
  throw new HttpError("Could not find a place for the provided id.", 404);
}
    const{placeId}=req.params
    const place = DUMMY_PLACES.find(place =>{
        return place.id ===placeId
    })
    res.json({place})
})
router.get('/user/:userId',(req,res)=>{
   if (!place) {
     return next(
       new HttpError("Could not find a place for the provided user id.", 404)
     );
   }
    const {userId}=req.params
    const place =DUMMY_PLACES.find(place=>{
        return place.creator === userId
    })
})

modules.exports = router