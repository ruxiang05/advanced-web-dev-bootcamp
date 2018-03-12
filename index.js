const express = require('express'),
      todoRoutes = require("./routes/todos"),
      bodyParser = require("body-parser"),
      app = express(),
      port = process.env.PORT || 3000;

//allow access to request body 
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req,res) => {
   res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);
      
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});

