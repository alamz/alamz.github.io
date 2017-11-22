function openTab(evt, tabName)
{
	//Declare proper variables
	var i, tabcontent, tablinks;
	var eventClass, eventID;
	//hide all elements with class=tabcontent
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	//remove class=active on all elements with class=tablinks
	tablinks = document.getElementsByClassName('tablinks');
	for(i=0;i<tablinks.length;i++)
	{
		tablinks[i].className = tablinks[i].className.replace(" active","");
	}

	//add class=active to tab that was clicked on, and show it
	eventClass = evt.currentTarget.className;
	eventID = document.getElementById(tabName);
	if(eventID.style.display === 'none')
	{
		console.log("DISPLAY IS BLOCKED");
		eventID.style.display = "block";
		eventClass += " active";
		
	}
	else 
	{
		console.log(eventID.style.display +"DISPLAY IS NOT BLOCKED");
		eventID.style.display = "none";
		eventClass = eventClass.replace(" active","");
	}
	
}

function goToUrl(dest)
{
	location.href = dest;
}

function clickCounter()
{
	if(typeof(Storage) !== "undefined")
	{	console.log(localStorage.getItem("count"));
		if(localStorage.getItem("count") !== "undefined")
		{
			var addCount = localStorage.getItem("count") + 1; //get count
			localStorage.setItem("count", addCount);
		}
		else
			localStorage.setItem("count","1");
	}
	else
	{
		console.log("THIS BROWSER DOES NOT SUPPORT WEB STORAGE");
	}
}