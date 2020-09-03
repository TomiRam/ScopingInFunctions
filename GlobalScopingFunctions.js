//Global Scope and functions
//Declare variables here
var myGlobal = 10;


function fun1() {
	//Assing 5 to oopsGlobal Here
	oopsGlobal = 5;
}



function fun2(){
	var output = "";
	if (typeof myGlobal != "undefined") {
		output+= "myGlobal:  "+myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output+= "oopsGlobal:  "+oopsGlobal;
	}
	console.log(output);
}
fun1();
fun2();