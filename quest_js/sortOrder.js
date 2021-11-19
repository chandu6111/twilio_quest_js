var a=process.argv[2];
var b=process.argv[3];
a=a.toLowerCase();
b=b.toLowerCase();
var res=a.localeCompare(b);
console.log(res);