import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { 
      data: result,
      error : null
     });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
      data : null
    });
  }
});

app.post("/", async (req, res) => {
  
  const type_input = req.body.type;
  const participants_input = req.body.participants;

  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  try{
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type_input}&participants=${participants_input}`)
    const result = response.data;
    const randomIndex = Math.floor(Math.random() * result.length);
    const randomActivity = result[randomIndex];
    res.render("index.ejs",{
      data : randomActivity,
      error : null

    });


  }catch(error){
    if(error.response?.status === 404){
      res.render("index.ejs",{
        error:"No activities that match your criteria",
        data : null
      })
    }else{
      res.render("index.ejs",{
        error:"Something went wrong,Please try again",
        data:null
      })
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
