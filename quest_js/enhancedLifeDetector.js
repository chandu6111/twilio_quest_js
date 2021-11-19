const a=process.argv[2];
if(a==0){
	console.log('alive');
}
else if(a==1){
	console.log('flowering');
}
else if(a==2){
	console.log('shedding');
}
else{
	console.log('other');
}