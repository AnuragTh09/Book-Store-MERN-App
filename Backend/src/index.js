import config from "./config/config.js";
import app from "./app.js";
import connectDB from "./db/index.db.js";

connectDB()
.then( () => {
    app.listen(config.PORT || 5000 , () => {
        console.log(`server listening on ${config.PORT}`)
    })
})
.catch( (err) => {
    console.log("connection failed", err)
})