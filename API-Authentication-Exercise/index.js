import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "student";
const yourPassword = "practice123";
const yourAPIKey = "practice-api-key";
const yourBearerToken = "practice-bearer-token";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
     const response = await axios.get("http://localhost:4000/random");
     const data = JSON.stringify(response.data);
     res.render("index.ejs",{
      content : data
     });
     
  }catch(error){
    console.error(error.messsage);
    res.status(500).send("SOmething went wrong");
  }
 
});

app.get("/basicAuth", async(req, res) => {
  try{
    const response = await axios.get("http://localhost:4000/all?page=2",{
      auth:{
        username: yourUsername,
        password: yourPassword
      }
    })
    const data = JSON.stringify(response.data);
    res.render("index.ejs",{
      content:data
    });


  }catch(error){
    if(error.response?.status === 401){
      res.status(401).send("Invalid username or password");
    }else{
      res.status(500).send("SOmething went wrong");

    }

  }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const response = await axios.get(API_URL + "/filter",{
      params:{
        apiKey : yourAPIKey,
        score:5

      }
    })
    const data = JSON.stringify(response.data);
     res.render("index.ejs",{
      content:data
    });

  }catch(error){
     if(error.response?.status === 401){
      res.status(401).send("Invalid API Key");
    }else{
        res.status(500).send("SOmething went wrong");

    }    

  }
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 try{
  const response = await axios.get(API_URL + "/secrets/2",{
    headers:{
      Authorization:`Bearer practice-bearer-token`

    }
  });
   const data = JSON.stringify(response.data);
     res.render("index.ejs",{
      content:data
    });
 }catch(error){
   if(error.response?.status === 401){
      res.status(401).send("Invalid Token");
    }else{
        res.status(500).send("SOmething went wrong");

    }    

 }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
