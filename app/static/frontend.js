<!--
var modes = [0, 0, 0]

var x = document.getElementById("demo");
var obj;


function parseObj(obj){
obj = obj.yelp_response.businesses
for(i = 0; i<10;i++){
document.getElementById('cards').innerHTML=document.getElementById('cards').innerHTML+"<div class ='block' id='rating"+i+"' onClick='expand(this.id,"+i+")'> <div id='ratingContainer'><div id='entry'><div id='entryText'>"+obj[i].name+"</div><div id='aRating'>Wheelchair Rating:  "+obj[i].hylp_wheelchair+" </div><div id='aRating'>Vision Rating:  "+obj[i].hylp_vision+" </div><div id='aRating'>Hearing Rating:  "+obj[i].hylp_hearing+" </div><div id='yRating'>Yelp: "+obj[i].rating+" </div><div id='rating"+i+"more'></div><div class='arrow' id='rating"+i+"arrow'></div></div></div></div>";
}


}

//---------------------------------------------------------------------------
function searchYelp(query){
document.getElementById('locationButton').style.backgroundImage = "url('loader.gif')";
	alert("Looking up Yelp for: "+ query);
document.getElementById("mapArea").innerHTML =" <div class ='block'><iframe id='map'  frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDeOWcG4pK1fCPtkEszTPnzPyQ9n40eMX4&q="+query+", Chicago' allowfullscreen></iframe></div>";
	



    $.ajax(
    
    {
        url: "/yelp",
        type: "POST",
        data: JSON.stringify({term: query, location: "Chicago"}),
        headers: { "Content-Type": "application/json"},
        dataType: "json",
        success: function (result) {
           obj = result;
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
document.getElementById("full").style.backgroundColor="#000000";
}else{
modes[1]=0;
document.getElementById("option2").style.backgroundColor="rgb(255,255,255)";
document.getElementById("option2").style.color="#000000";
document.getElementById("option2pic").src = "eye.png";
document.getElementById("selected2").innerHTML="";
document.getElementById("full").style.backgroundColor="rgb(245,245,241)";

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


function expand(id,i){
	document.getElementById(id+"more").innerHTML="<form action='geo:0,0?q=1600+Amphitheatre+Parkway%2C+CA'><input type='submit' value='Directions'></form><div id='textReview'>This is a review</div><input type ='textfield' value='Submit a review'></input><img src='thumbsup.png' class='thumbPic'></img><img src='thumbsdown.png' class='thumbPic'></img><input type='button' value='Submit' onClick='submit("+i+")'>";
	document.getElementById(id+"arrow").style.backgroundImage="url('expanded.png')";

}

function submit(i){
console.log(i);
$.ajax(

    {
        url: "/yelp/"+obj.yelp_response.businesses[i].id+"/review",
        type: "POST",
        data: JSON.stringify({disabilities: modes, note: "", rating: "4"}),
        headers: { "Content-Type": "application/json"},
        dataType: "json",
        success: function (result) {
           var obj = result;
           parseObj(obj);
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    }


    );

}

-->