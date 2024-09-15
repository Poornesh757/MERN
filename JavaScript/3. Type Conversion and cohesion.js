let val;

val = String(10+10);
console.log(val);
document.writeln('<br>' + val);

val=String(true);
console.log(val);
document.writeln('<br>' + val);

val=String(new Date());
console.log(val);
document.writeln('<br>' + val);

val=String([1,2,3,4]);
console.log(val);
document.writeln('<br>' + val);

val=(5).toString();
console.log(val);
document.writeln('<br>' + val);

val=true.toString();
console.log(val);
document.writeln('<br>' + val);

val=Number("5");
console.log(val);
document.writeln('<br>' + val);

val=Number(true);
console.log(val);
document.writeln('<br>' + val);

val=Number(false);
console.log(val);
document.writeln('<br>' + val);

val=Number(null);
console.log(val);
document.writeln('<br>' + val);

val=parseInt("5");
console.log(val);
document.writeln('<br>' + val);
console.log(val.toFixed(2));
document.writeln('<br>' + val.toFixed(1));


const val1=5;
const val2=6;
const sum=val1+val2;
console.log(sum);
document.writeln('<br>' + sum);
console.log(typeof sum);