
var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];


var calc = function(inputArray){
	var newSal = "";
	var indSTI = 0;
	var bonusRound = 0;
	var adjustedArray = [];
	switch(inputArray[3]){
	case 3:
		indSTI = (.04 * inputArray[2]);
		break;
	case 4:
		indSTI = (.06 * inputArray[2]);
		break;
	case 5:
		indSTI = (.1 * inputArray[2]);
		break;
	default: 
		indSTI = 0;
		break;
	}
	console.log(indSTI);
	if(inputArray[1].length <= 4){
		indSTI += (.05 * parseInt(inputArray[2]));
	}
	console.log(indSTI);
	if(parseInt(inputArray[2]) > 65000){
		indSTI -= (.01 * indSTI);
	}
	console.log(indSTI);
	if (indSTI > (inputArray[2] * .13)) {
		indSTI = (inputArray[2] * .13);
	}
	console.log(indSTI);
	newSal = (parseInt(inputArray[2]) + indSTI);
	bonusRound = Math.round(indSTI);
	adjustedArray.push(inputArray[0], " " + indSTI, " " + newSal, " " + bonusRound);
	return adjustedArray;
}

var a2 = "<br />" + calc(arrayAtticus) + "<br />" + calc(arrayScout) + "<br />" + calc(arrayBoo) + "<br />" + calc(arrayJem);
// var a3 = calc(arrayScout);
//var a4 = calc(arrayBoo);
//var a5 = calc(arrayJem);

document.getElementById("toKillAnArray").innerHTML = "The adjusted arrays are " + a2;






