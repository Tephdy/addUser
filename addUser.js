let userInfo = [];

const addUser = (e) => {
    e.preventDefault();
    let user = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        MiddleName: document.getElementById("mname").value,
        Age: document.getElementById("age").value,
        Gender: document.getElementById("gender").value,
        Address: document.getElementById("address").value,
        Address1: document.getElementById("address1").value,
        City: document.getElementById("city").value,
        Province: document.getElementById("province").value,
        Nationality: document.getElementById("nationality").value
    }

    userInfo.push(user);
    // document.forms[0].reset();

    console.warn("added", { userInfo });

    var userinfoFName = JSON.stringify(user["firstName"]).replace(/['"]+/g, '');
    var userinfoLName = JSON.stringify(user["lastName"]).replace(/['"]+/g, '');
    var userinfoMName = JSON.stringify(user["MiddleName"]).replace(/['"]+/g, '');
    var userinfoAge = JSON.stringify(user["Age"]).replace(/['"]+/g, '');
    var userinfoGender = JSON.stringify(user["Gender"]).replace(/['"]+/g, '');
    var userinfoAddress = JSON.stringify(user["Address"]).replace(/['"]+/g, '');
    var userinfoAddress1 = JSON.stringify(user["Address1"]).replace(/['"]+/g, '');
    var userinfoCity = JSON.stringify(user["City"]).replace(/['"]+/g, '');
    var userinfoProvince = JSON.stringify(user["Province"]).replace(/['"]+/g, '');
    var userinfoNationality = JSON.stringify(user["Nationality"]).replace(/['"]+/g, '');

    if (user["firstName"] != "" && user["lastName"] != "" && user["MiddleName"] != "" && user["Age"] != "" && user["Gender"] != "" && user["Address"] != "" && user["Address1"] != "" && user["City"] != "" && user["Province"] != "" && user["Nationality"] != "") {

        alert("User Added");

        document.getElementById("show").style.display = "block";
        var userinfoName = userinfoFName + " " + userinfoMName + " " + userinfoLName;
        document.getElementById("fullName").innerHTML = userinfoName;
        document.getElementById("Uage").innerHTML = userinfoAge;
        document.getElementById("Ugender").innerHTML = userinfoGender;
        document.getElementById("Uaddress").innerHTML = userinfoAddress;
        document.getElementById("Uaddress1").innerHTML = userinfoAddress1;
        document.getElementById("Ucity").innerHTML = userinfoCity;
        document.getElementById("Uprovince").innerHTML = userinfoProvince;
        document.getElementById("Unationality").innerHTML = userinfoNationality;
    } else {
        alert("Process Terminated! No Data Received")
    }

    document.getElementById("reset").addEventListener("click", () => {
        document.getElementById("show").style.display = "none";
    })


    console.log(userinfoName)
};
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit").addEventListener('click', addUser);

})