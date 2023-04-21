const foods = require("../database/foods")
const recepes = require("../database/recepes")



//Enviar todas as comidas
function getFood(req, res){
    res.send(foods)
}

//Enviar todas as receitas
function getRecepes(req, res){
    res.send(recepes)
}
  
module.exports = { 
    getFood,
    getRecepes,
};
  