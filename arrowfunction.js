// const fastFood = {
//   restaurantes: ['BK, MC'],
//   type: 'Fast Food',
//   foodSummary: function() {
//     return this.restaurantes.map(function(restaurantes){
//       return `${restaurantes} e um ${this.type} restaurante`
//     })
//   }
// }

const fastFood = {
  restaurantes: ['BK, MC'],
  type: 'Fast Food',
  foodSummary: function() {
    return this.restaurantes.map((restaurantes)  =>{
      return `${restaurantes} e um ${this.type} restaurante`
    })
  }
}

console.log(fastFood.foodSummary());