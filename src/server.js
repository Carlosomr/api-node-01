const express = require("express");

const app = express();
app.use(express.json());
   
app.get("/message/:id", (request, response) =>{
    const { id } = request.params; 
    response.send(`id:${id}`)
})
app.post("/user", (request, response)=> {
    const {name, email, password} = request.body;
    response.send(`Usuario: ${name}. E-mail: ${email}. E a senha é ${password}`)
}) 
const PORT = 3333;
app.listen(PORT, () => console.log(`Server está na porta ${PORT}`));