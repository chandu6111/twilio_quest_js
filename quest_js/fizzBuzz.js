const a=Number(process.argv[2]);
if(a%3==0 && a%5==0){
	console.log('JavaScript');
}
else if(a%3==0){
	console.log('Java');
}
else if(a%5==0){
	console.log('Script');
}
else{
	console.log(a);
}