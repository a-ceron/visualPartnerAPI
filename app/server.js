const PartnerController= require("./controllers/PartnerController");

const express= require("express");
const app= express();
const port= 3000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("VisualThinking API");
});

app.get("/partners", (req, res)=>{
    const partners= PartnerController.all();
    res.send(partners);
}); 
app.get("/partners/certification", (req, res)=>{
    const partners= PartnerController.getCertificationPartners();
    res.send(partners);
});
app.get("/partners/credits/:credits", (req, res)=>{
    const credits= req.params.credits;
    const partners= PartnerController.getCreditsPartners(credits);
    res.send(partners);
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});