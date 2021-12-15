/* NAVBAR */
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
	navbar.classList.add("show");
	menuBtn.classList.add("hide");
	body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/* BARBERS */
var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function() {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
        previousTextOverImage = this;
        classes.add("show");
    }
  }
}
/* SERVICES */
let serviceTxt=["Kids cut","Regular haircut","Fade","Beard Trim","Shave","Hot Towel Shave","Facial Cleanse","Eyebrows","Head Shaving"]
let servicePrice=["8$","10$","12$","7$","5$","7$","10$","4$","6$"];
let separatorPrices=[" ------------------------------------- "];
let serviceDiv=document.createElement("div")
serviceDiv.setAttribute("class","price");
for(var i=0;i<serviceTxt.length;i++){
    var newDiv= document.createElement("div")
    newDiv.setAttribute("class","service")
    let serviceMain = document.createTextNode(serviceTxt[i])
    let priceMain = document.createTextNode(servicePrice[i])
    let separatorMain = document.createTextNode(separatorPrices)
    newDiv.appendChild(serviceMain);
    newDiv.appendChild(separatorMain);
    newDiv.appendChild(priceMain);
    serviceDiv.appendChild(newDiv)
}
for(let i=0;i<serviceTxt.length;i++){
let servis = document.getElementById("services");
servis.appendChild(serviceDiv);
}	
/* GALLERY */
const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.dot');
    let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}
function slidefun(n) {
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
/* APPOINTMENT */

let ourServices = ["-Choose our service-","Kids cut","Regular haircut","Fade","Beard Trim","Shave","Hot Towel Shave","Facial Cleanse","Eyebrows","Head Shaving"]
let timeList=["-Choose your time-","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30"];
let barberList=["-Choose your barber-","Michael Jones","Alex Miller","Chris Wilson"];
let serviceList=document.getElementById("list")
	for(var i=0;i<ourServices.length;i++){
		var optionList= document.createElement("option")
		let serviceMain = document.createTextNode(ourServices[i])
		optionList.appendChild(serviceMain);
		serviceList.appendChild(optionList)
	}
let timeListElement=document.getElementById("time")
	for(var i=0;i<timeList.length;i++){
		var optionList= document.createElement("option")
		let serviceMain = document.createTextNode(timeList[i])
		optionList.appendChild(serviceMain);
		timeListElement.appendChild(optionList)
	}
let barberListElement=document.getElementById("barberOption")
	for(var i=0;i<barberList.length;i++){
		var optionList= document.createElement("option")
		let serviceMain = document.createTextNode(barberList[i])
		optionList.appendChild(serviceMain);
		barberListElement.appendChild(optionList)
	}

$(document).ready(function (){
	$(".service").animatext({
		effect:'tada',
		speed: 50
	});
});
$(document).ready(function (){
	$(".font1").animatext({
		effect:'tada',
		speed: 50
	});
});
$(document).ready(function (){
	$(".firstTitle").animatext({
		effect:'tada',
		speed: 50
	});
});
let formSubmit = document.getElementById("form");
formSubmit.addEventListener("submit",(e)=>{
	e.preventDefault();
	var username = document.getElementById('username').value
	var email = document.getElementById('mail').value
	var phoneNumber = document.getElementById('phone').value
	var list = document.getElementById("list").value
	var time = document.getElementById("time").value
	var barber = document.getElementById("barberOption").value
	var date=document.getElementById("calendar")
	var currentDate=Date.now()
	var choosenDate=0
	var nameCheck = /^[a-zA-Z]+$/
	var mailCheck = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/
	var phoneNumerCheck = /^[0-9]{10}$/
	var usernameBool = false;
	var emailBool = false;
	var phoneNumberBool = false;
	var listBool = false;
	var timeBool = false;
	var barberBool = false;
	var dateBool= false;
	
	if(nameCheck.test(username)){
	document.getElementById('name-error').innerHTML = "";
	usernameBool = true;
	}
	else{
	document.getElementById('name-error').innerHTML = "*Invalid name*";
	usernameBool= false;
	}
	if(mailCheck.test(email)){
		document.getElementById('mail-error').innerHTML = "";
		emailBool = true;
	}
	else{
		document.getElementById('mail-error').innerHTML = "*Invalid E-Mail*";
		emailBool = false;
	}
	if(phoneNumerCheck.test(phoneNumber)){
		document.getElementById('phone-error').innerHTML = "";
		phoneNumberBool = true
	}
	else{
		document.getElementById('phone-error').innerHTML = "*Invalid phone number*";
		phoneNumberBool = false
	}
	if(date.value==""){
		document.getElementById('date-error').innerHTML = "*Choose a date*";
		dateBool = false
	}
	else{
	choosenDate=Date.parse(date.value)
	dateBool = true
	}
	if(choosenDate<=currentDate){
		document.getElementById('date-error').innerHTML = "*Choose date in the future*";
		dateBool= false
	}
	else{
		document.getElementById('date-error').innerHTML = "";
		dateBool = true
	}
	if (list == "-Choose our service-")
	{
		document.getElementById('list-error').innerHTML = "*Choose a service*";
		listBool = false
	}
	else{
		document.getElementById('list-error').innerHTML = "";
		listBool = true
	}
	if (time != "-Choose your time-")
	{
		document.getElementById('time-error').innerHTML = "";
		timeBool = true
	}
	else{
		document.getElementById('time-error').innerHTML = "*Choose your time*";
		timeBool = false
	}
	if (barber == "-Choose your barber-")
	{
		document.getElementById('barber-error').innerHTML = "*Choose a barber*";
		barberBool = false
	}
	else{
		document.getElementById('barber-error').innerHTML = "";
		barberBool = true
	}
	if(usernameBool&&emailBool&&phoneNumberBool&&dateBool&&listBool&&timeBool&&barberBool)
	{
		alert("You have succesfuly made an appointment");
		setTimeout("location.reload(true);",0)
	}
});	
