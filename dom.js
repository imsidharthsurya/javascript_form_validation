//name can't be blank
// pwd must be more than 6 char.
//pwd should be same
// age and contact number can't be string
//email should be valid
function validateForm(){
    var name=document.getElementById("name").value;
    var pwd1=document.getElementById("pwd1").value;
    var pwd2=document.getElementById("pwd2").value;
    var email=document.getElementById("email").value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");
    var numbeer=document.getElementById("numbeer").value;
    var age=document.getElementById("age").value;
    var cnt=document.querySelectorAll('input[type="checkbox"]:checked').length;
    var option=document.getElementsByName('gender');
    var addr=document.getElementById('addr').value;
    if(name==null || name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(age=="" || isNaN(age))
    {
        alert("Age is Invalid!");
        return false;
    }
    else if(!(option[0].checked || option[1].checked))
    {
        alert("Please Select Your Gender");
        return false;
    }
    else if(isNaN(numbeer) || numbeer.length<10)
    {
        alert("Contact Number is not a valid number")
        return false;
    }
    else if(addr==null || addr=="")
    {
        alert("Please Enter Your Address!");
        return false;
    }
    else if(cnt==0)
    {
        alert("Select Atleast 1 skill.");
        return false;
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        alert("Please enter a valid e-mail address");  
        return false;  
    }  
    else if(pwd1.length<=6)
    {
        alert("Password length should be greater than 6");
        return false;
    }
    else if(pwd1!=pwd2)
    {
        alert("Password is not same. Please Enter you password again!");
        return false;
    }
    else if(document.getElementById("uploadBox").value == ""){
        alert("Please Upload Your Resume!");
        return false;
    }
    else{
        alert("Congrats You have Successfully Submitted the form!");
        return true;
    }
}
