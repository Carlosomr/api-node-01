const express = require("express");

const app = express();
   
app.get("/message/:id", (request, response) =>{
    const { id } = request.params; 
    response.send(`id:${id}`)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server está na porta ${PORT}`));