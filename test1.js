//задание взято из моих домашек по курсу js:)
const matrix = [
[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25],
];
for (let i=0; i < matrix.length; i++){
	for (let j=i; j < matrix[i].length; j++){
  	console.log(matrix[i][j]);
  }
}

for (let i=0; i < matrix.length; i++){
	for (let j=0; j <= i; j++){
  	console.log(matrix[i][j]);
  }
}