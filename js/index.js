//curinga functions

function toAlert(){
	alert("HELLO");
}

//nav functions
function selectResume(){
  if(isFirstClick()){
  	document.getElementById("currilucumLanguages").style.display = "block";
  }
  else{
  	toCloseSR();
  }
}

function toCloseSR(){
	document.getElementById("currilucumLanguages").style.display = "none";
}

function toClose(){
	document.getElementById("currilucumLanguages").style.display = "none";
	isFirstClick.isFirstClick = !isFirstClick.isFirstClick;
}

function isFirstClick(){
	if(typeof isFirstClick.isFirstClick == 'undefined'){
		isFirstClick.isFirstClick = true;
	}
	else{
		isFirstClick.isFirstClick = !isFirstClick.isFirstClick;
	}

	return isFirstClick.isFirstClick;
}

