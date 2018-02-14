const recipes = {
  eggs: "2 pieces",
  flour: "2 cups",
  milk: "1 cup"
  
};


function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value});
}

updateObjectWithKeyAndValue(recipes, "vanilla", "1 tsp");
console.log(updateObjectWithKeyAndValue(recipes, "vanilla", "1 tsp"));


function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign(recipes, {[key]: value});
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "vanilla", "1 tsp");
console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, "vanilla", "1 tsp"));


function deleteFromObjectByKey(recipes, key){
  const newRecipes = Object.assign({}, recipes);
  delete newRecipes[key];
  return newRecipes;
}

deleteFromObjectByKey(recipes, "vanilla");
console.log(deleteFromObjectByKey());

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}

destructivelyDeleteFromObjectByKey(recipes, "vanilla");
console.log(destructivelyDeleteFromObjectByKey());
