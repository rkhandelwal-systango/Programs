
function validateForm(){
  if(myForm.firstname.value.length==0)
  {
    document.getElementById('errfn').style.color = "#ff0000";
document.getElementById('errfn').innerHTML="  ** Field cannot be left black";
  }else if(myForm.firstname.value.length<5){
document.getElementById('errfn').style.color = "#ff0000";
document.getElementById('errfn').innerHTML="  ** FirstName should have atleast 5 characters";
}else{
document.getElementById('errfn').innerHTML=" ";
}

 if(myForm.lastname.value.length==0)
  {
    document.getElementById('errfn1').style.color = "#ff0000";
document.getElementById('errfn1').innerHTML="  ** Field cannot be left black";
  }
else{
document.getElementById('errfn1').innerHTML=" ";
}
 	
if(myForm.city.value.length==0)
  {
    document.getElementById('errfn2').style.color = "#ff0000";
document.getElementById('errfn2').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn2').innerHTML=" ";
}

 if(myForm.state.value.length==0)
  {
    document.getElementById('errfn3').style.color = "#ff0000";
document.getElementById('errfn3').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn3').innerHTML=" ";
}

if(myForm.country.value.length==0)
  {
    document.getElementById('errfn4').style.color = "#ff0000";
document.getElementById('errfn4').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn4').innerHTML=" ";
}

if(myForm.address.value.length==0)
  {
    document.getElementById('errfn5').style.color = "#ff0000";
document.getElementById('errfn5').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn5').innerHTML=" ";
}

 if(myForm.email.value.length==0)
  {
    document.getElementById('errfn6').style.color = "#ff0000";
document.getElementById('errfn6').innerHTML="  ** Field cannot be left black";
  }else{
    var g = document.getElementById("email").value;
    var atpos = g.indexOf("@");
    var dotpos = g.lastIndexOf(".");
    if (atpos.value>1 || atpos<1 || dotpos<atpos+2 || dotpos+2>=g.length) {
        document.getElementById('errfn6').style.color = "#ff0000";
document.getElementById('errfn6').innerHTML="  ** Please enter valid Email-ID";
    }
else{
document.getElementById('errfn6').innerHTML=" ";
}
    }


if ( ( myForm.gender[0].checked == false ) && ( myForm.gender[1].checked == false ) ) 
{
document.getElementById('errfn7').style.color = "#ff0000";
document.getElementById('errfn7').innerHTML=" **  Please select a Gender";
return false;
}else{

document.getElementById('errfn6').innerHTML="  ";
}

}



function ValidateFirstName() {
  if(myForm.firstname.value.length==0)
  {
    document.getElementById('errfn').style.color = "#ff0000";
document.getElementById('errfn').innerHTML="  ** Field cannot be left black";
  }else if(myForm.firstname.value.length<5){
document.getElementById('errfn').style.color = "#ff0000";
document.getElementById('errfn').innerHTML="  ** FirstName should have atleast 5 characters";
}else{
document.getElementById('errfn').innerHTML=" ";
}
 }


function onlyAlphabets(e, t) {
 try {
 if (window.event) {
 var charCode = window.event.keyCode;
  }
 else if (e) {
 var charCode = e.which;
  }
 else { 
return true; 
 }
 if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
 return true;
 else
 return false;
   }
 catch (err) {
  alert(err.Description);
   }
   }



function ValidateLastName() {
  if(myForm.lastname.value.length==0)
  {
    document.getElementById('errfn1').style.color = "#ff0000";
document.getElementById('errfn1').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn1').innerHTML=" ";
}
 }


function ValidateCity() {
  if(myForm.city.value.length==0)
  {
    document.getElementById('errfn2').style.color = "#ff0000";
document.getElementById('errfn2').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn2').innerHTML=" ";
}
}

function ValidateState() {
  if(myForm.state.value.length==0)
  {
    document.getElementById('errfn3').style.color = "#ff0000";
document.getElementById('errfn3').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn3').innerHTML=" ";
}
}

function ValidateCountry() {
  if(myForm.country.value.length==0)
  {
    document.getElementById('errfn4').style.color = "#ff0000";
document.getElementById('errfn4').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn4').innerHTML=" ";
}
}
function ValidateAddress() {
  if(myForm.address.value.length==0)
  {
    document.getElementById('errfn5').style.color = "#ff0000";
document.getElementById('errfn5').innerHTML="  ** Field cannot be left black";
  }else{
document.getElementById('errfn5').innerHTML=" ";
}
}

function ValidateEmail() {
  if(myForm.email.value.length==0)
  {
    document.getElementById('errfn6').style.color = "#ff0000";
document.getElementById('errfn6').innerHTML="  ** Field cannot be left black";
  }else{
    var g = document.getElementById("email").value; 
var h = document.getElementById("email").value; 
var count1 = (g.match(/@./gi) || []).length;
var count = (h.match(/[!+#$%^&*()]/g) || []).length;

    var atpos = g.indexOf("@");
    var dotpos = g.lastIndexOf(".");
    if (count >0 ||count1>1 ||atpos<1 || dotpos<atpos+2 || dotpos+2>=g.length) {
        document.getElementById('errfn6').style.color = "#ff0000";
document.getElementById('errfn6').innerHTML="  ** Please enter valid Email-ID";
    }
else{
document.getElementById('errfn6').innerHTML=" ";
}
}
}



/*function validateForm() {
    var a = document.forms["myForm"]["firstname"].value;
    if (a == null || a == "") {ValidateEmail
        alert("FirstName field cannot be empty");
        return false;
    }else if(a.length <6){
        alert("cannot be less than 5");
    }

    var b = document.forms["myForm"]["lastname"].value;
    if (b == null || b == "") {
        alert("Lastname field cannot be empty");
        return false;
    }


    var c = document.forms["myForm"]["city"].value;
    if (c == null || c == "") {
        alert("City field cannot be empty");
        return false;
    }


    var d = document.forms["myForm"]["state"].value;ValidateEmail
    if (d == null || d == "") {
        alert("State field cannot be empty");
        return false;
    }


    var e = document.forms["myForm"]["country"].value;
    if (e == null || e == "") {
        alert("Country field cannot be empty");
        return false;
    }



    var f = document.forms["myForm"]["address"].value;
    if (f == null || f == "") {
        alert("Address field cannot be empty");
        return false;
    }


    var g = document.forms["myForm"]["email"].value;
    if (g == null || g == "") {
        alert("Email field cannot be empty");
        }else{
    var atpos = g.indexOf("@");
    var dotpos = g.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=g.length) {
        alert("Please enter valid e-mail address");
        return false;
    }
    }
}

document.getElementById("firstname").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Enter Your First Name";
}
*/


