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
