<!--
var modes = [0, 0, 0]

var x = document.getElementById("demo");


//---------------------------------------------------------------------------
function searchYelp(query){
document.getElementById('locationButton').style.backgroundImage = "url('loader.gif')";
	alert("Looking up Yelp for: "+ query);
document.getElementById("mapArea").innerHTML =" <div class ='block'><iframe id='map'  frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDeOWcG4pK1fCPtkEszTPnzPyQ9n40eMX4&q="+query+", Chicago' allowfullscreen></iframe></div>";
	



    $.ajax(
    
    {
        url: "/yelp",
        type: "POST",
        data: { term: query, location: "Chicago"},
        headers: { "Content-Type": "application/json"},
        dataType: "json",
        success: function (result) {
           var obj = JSON.parse(result);
           parseObj(obj);
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    }
    
    
    );



	
	document.getElementById('locationButton').style.backgroundImage = "url('location.png')";
	
}

//---------------------------------------------------------------------------
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;	
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest(theUrl);
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function setMode(newMode){
if(newMode == 'wheelchair'){
	if(modes[0]==0){
		modes[0]=1;
		document.getElementById("option1").style.backgroundColor="rgb(0,0,0)";
		document.getElementById("option1").style.color="#ffffff";
		document.getElementById("option1pic").src = "wheelchairb.png";
		document.getElementById("selected1").innerHTML="<img src ='check.png'id='check'></img>";
	}else{
		modes[0]=0;
		document.getElementById("option1").style.backgroundColor="rgb(255,255,255)";
		document.getElementById("option1").style.color="#000000";
		document.getElementById("option1pic").src = "wheelchair.png";
		document.getElementById("selected1").innerHTML="";
	}
}
if(newMode=='vision'){
if(modes[1]==0){
	modes[1]=1;
	document.getElementById("option2").style.backgroundColor="rgb(0,0,0)";
	document.getElementById("option2").style.color="#ffffff";
	document.getElementById("option2pic").src = "eyeb.png";
	document.getElementById("selected2").innerHTML="<img src ='check.png'id='check'></img>";
}else{
	modes[1]=0;
	document.getElementById("option2").style.backgroundColor="rgb(255,255,255)";
	document.getElementById("option2").style.color="#000000";
	document.getElementById("option2pic").src = "eye.png";
	document.getElementById("selected2").innerHTML="";
	
}

//var oldlink = document.getElementsByTagName("link").item(0);
// 
//        var newlink = document.createElement("link");
//        newlink.setAttribute("rel", "stylesheet");
//        newlink.setAttribute("type", "text/css");
//        newlink.setAttribute("href", "bwstyle.css");
//        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
//        

}
if(newMode=='hearing'){
if(modes[2]==0){
	modes[2]=1;
	document.getElementById("option3").style.backgroundColor="rgb(0,0,0)";
	document.getElementById("option3").style.color="#ffffff";
	document.getElementById("option3pic").src = "earb.png";
	document.getElementById("selected3").innerHTML="<img src ='check.png'id='check'></img>";
}else{
	modes[2]=0;
	document.getElementById("option3").style.backgroundColor="rgb(255,255,255)";
	document.getElementById("option3").style.color="#000000";
	document.getElementById("option3pic").src = "ear.png";
	document.getElementById("selected3").innerHTML="";
}

}
}


function expand(id){
	document.getElementById(id+"more").innerHTML="<form action='geo:0,0?q=1600+Amphitheatre+Parkway%2C+CA'><input type='submit' value='Directions'></form><div id='textReview'>This is a review</div><input type ='textfield' value='Submit a review'></input><img src='thumbsup.png' class='thumbPic'></img><img src='thumbsdown.png' class='thumbPic'></img>";
	document.getElementById(id+"arrow").style.backgroundImage="url('expanded.png')";

}

-->