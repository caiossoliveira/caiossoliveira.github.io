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

//portfolio
$(document).ready(function(){
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots:true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

src="https://code.jquery.com/jquery-1.11.0.min.js"
src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"
