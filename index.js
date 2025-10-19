import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
 const today = new Date();

 const day = today.getDay();

 let type = "A weekday";
 let adv = "it is still a work day";

 if (day === 0 || day === 6){
    type = "It's the weekend man!";
    adv = "Let's go eat some tacos";
 }

res.render("solution.ejs", {
    dayType: type, 
    advice: adv,

});


});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});