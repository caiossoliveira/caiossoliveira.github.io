function selectResume(){
  if(isFirstClick()){
  	document.getElementById("currilucumLanguages").style.display = "block";
  }
  else{
  	toClose();
  }
}

function toClose(){
	document.getElementById("currilucumLanguages").style.display = "none";
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

function toAlert(){
	alert("HELLO");
}

