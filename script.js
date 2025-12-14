const nums =[1,2,5,7,8,4];
const fruits =["Apple","Banana","Orange","Melon"]

//foreach accept callback function; no return 
function display(element,index,array){
    console.log(array[index]);
}
console.log("this is the Foreach");
nums.forEach(display);

//map is funtion like the for each but can return new array with same size of the old one you give her;
function cube (element,index,array){
    return array[index] * element;
}
console.log("this is the map");
const CubeNums = nums.map(cube).forEach(display);

//filter is function return new array  when the condition you give = true;
function Small (element,index,array){
    return array[index] <4;
}
console.log("this is the filter");
const SmallNums = nums.filter(Small).forEach(display);

//reduce is fuction like has one more parrameter more than the other like map who is the accmulator
//your give him array return just one value
function max(accmulator,element,index,array){
    if(accmulator>element){
        return accmulator;
    }
    return element ;
}
console.log("this is the reduce function");
const maxNum = nums.reduce(max);console.log(maxNum);
// find is fucition can return the value of the first element matches the condition;
function BiggerThan5 (element,index,array){
    return array[index]>5;
}
console.log("this is the find function");

const BT5Num = nums.find(BiggerThan5);
console.log(BT5Num);
// PHASE 2 : Le Laboratoire
const produits = [
{ id: 1, nom: 'Ordinateur', prix: 999, catégorie: 'électronique', stock: 5 },
{ id: 2, nom: 'T-shirt', prix: 25, catégorie: 'vêtement', stock: 0 },
{ id: 3, nom: 'Livre JS', prix: 35, catégorie: 'livre', stock: 12 }
];
// 1. Trouve tous les produits en stock (stock > 0)
// 2. Calcule le prix total de tous les produits
// 3. Crée un tableau des noms de produits en majuscules
// 4. Vérifie si tous les produits coûtent plus de 20€
// 5. Trouve le produit avec l’id 2
// 6. Ajoute un nouveau produit à la fin
// 7. Enlève le premier produit
// 8. Trie les produits par prix (croissant)
//1. 
console.log('1.------------');
produits.filter(e=>e.stock>0).forEach(e => console.log(e));
//2. 
console.log('2.------------');
const Sum = produits.reduce((accum,e)=>{
   return accum+ e.prix;
},0);
console.log(Sum);
console.log('3.------------');
const upperProducts = produits.map(e=>e.nom.toUpperCase()).forEach(display);

console.log('4.------------');
console.log(produits.every(e=>e.prix>20));
console.log('5.------------');
console.log(produits.find(e=>e.id === 2));
console.log('6.------------');
produits.push({id:4,nom:"Livre Java",prix: 15,catégorie:"livre",stock:23});
produits.forEach(display);
console.log('7.------------');
console.log(produits[0]);
console.log('8.------------');
console.log(produits.sort((a,b)=>a.prix -b.prix))



