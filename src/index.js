
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let y =[];
if(typeof matrix != "object"){
  return [];
}
for(let i= 0; i<matrix.length; i++){
  if(i%2 != 0){
    y = y.concat(matrix[i].reverse())
  }else{
    y = y.concat(matrix[i]);
  }
}
return y;
}
