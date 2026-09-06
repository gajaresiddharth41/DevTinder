const express = require("express");

const app = express();


app.use("/home", (req, res) => {
  res.send("hello from home page");
});

app.use("/contact", (req, res) => {
  res.send("hello from contact page");
});

app.use("/log",(req,res)=>{
  res.send("login page");
})

app.use("/about", (req, res) => {
  res.send("hello from about page");
});

app.use((req, res) => {
  res.send("Hello from the server");
});


app.listen(3000, () => {
  console.log("server is listening om port 3000...");
});


