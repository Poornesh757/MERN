let val;

val = String(10+10);

val=String(true);

val=String(new Date());

val=String([1,2,3,4]);

val=(5).toString();
val=true.toString();

val=Number("5");

val=Number(true);
val=Number(false);
val=Number(null);

val=parseInt("5");
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

const val1=5;
const val2=6;
const sum=val1+val2;
console.log(sum);
console.log(typeof sum);