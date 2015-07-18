<!--
var mode;
var x = document.getElementById("demo");
function searchYelp(query){
document.getElementById('locationButton').style.backgroundImage = "url('loader.gif')";
	alert("Looking up Yelp for: "+ query);
document.getElementById("mapArea").innerHTML =" <div class ='block'><iframe id='map'  frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDeOWcG4pK1fCPtkEszTPnzPyQ9n40eMX4&q="+query+", Chicago' allowfullscreen></iframe></div>";
	
	getLocation();
	alert(""+httpGet("http://words.bighugelabs.com/api/2/19236b29ac7a0a928ce9c5a6e8868252/light/"));
	
	document.getElementById('locationButton').style.backgroundImage = "url('location.png')";
	
}

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

mode =newMode;
if(mode=='vision'){
var oldlink = document.getElementsByTagName("link").item(0);
 
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "bwstyle.css");
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        }
}


-->