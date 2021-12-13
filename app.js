const app = require('express')()
import express from 'express'
import routePlaces from ('./routes/places')
const port = process.env.PORT || 3000


app.use??(express.json())
app.use('api/places', routePlaces)

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})