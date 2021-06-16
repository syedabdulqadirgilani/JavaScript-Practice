document.write(1);
document.getElementById('firstid').innerHTML='this is our new para';
// comment
/* multiline comment*/
var a1=4;
var a2="string"
document.write("<br>",a1);
document.write("<br>",a2);
document.write("<br>",5+5);
console.log('Console log');
alert("hello world");
var age=prompt("age");
alert('Age is'+' '+age);
document.write('<br',' ',2+1);
document.write('<br',' ',2-1);
document.write('<br',' ',3*1);
document.write('<br',' ',4/2);
document.write("<br",' ',10%2);
document.write("<br>",12/3);
document.write(1.000.toFixed(2));
alert(Math.pow(2,4));
document.write("<br>",Math.abs(-5));
document.write("<br>",Math.sqrt(81));
document.write("<br>",Math.ceil(81.54457));
var a='ali Great'
document.write("<br>",a.length)
document.write("<br>",a.indexOf('i'));
document.write("<br>",a.slice(0,3));
document.write("<br>",a.substr(0,3));
document.write("<br>",a.replace('Ali','MrAbdullah'));
document.write("<br>",a.toUpperCase());
document.write("<br>",a.toLowerCase());
var age=prompt('Enter Age ');
if (age<20)
{
    document.write("<br>","age is less than 20");
}
else if (age==20)
{
    document.write("<br>","age equal to 20");

}
else{
    document.write("<br>","age is greater")
}
var age = prompt("What is your age?");
switch(age)
{

	case "22":
		document.write("22 years old.. okay");
		break;

	case "21":
		document.write("21 years old.. okay");
		break;
		

	case "12":
		document.write("12 years old.. okay");
		break;
		

	default:
		document.write("default years old.. okay");
		break;			

}
var i=0;
while (i<=10)
{
alert(i);
i++;
}
for (var i = 0; i < 2; i++) {
	document.write(i,"<br>");
}



var books = ["Harry potter", "ncert", "ctci", 65];

document.write("<br>",books[3]);
function displayout(){
	document.write("We are calling function");
	console.log("We have executed the function");
}
displayout();