function saveCookie() {

    var inputs1 = document.getElementById("name1");
    var inputs2 = document.getElementById("email");
    var inputs3 = document.getElementById("pass2");

    var d = new Date();
    d.setMonth(d.getMonth() + 2);



    var cookies = document.cookie.split(";");
    var obj = {};

    for (var i = 0; i < cookies.length; i++) {
        var arr = cookies[i].split("=");
        console.log(arr[0]);
        obj[arr[0].trim()] = arr[1];
    }
    if (obj.email === inputs2.value) {
        document.getElementById("eremail").innerHTML = "<b><i>The Email Is Used.</i> </b>".fontcolor("#eb4800")
    } else {

        document.cookie = "userName=" + inputs1.value + ";expires=" + d;
        document.cookie = "email=" + inputs2.value + ";expires=" + d;
        document.cookie = "password=" + inputs3.value + ";expires=" + d;
        // window.open("./Home.html", "_self")

    }

    // regexption
    // var regName = /^[a-zA-z]{3,20}$/
    // var regEmail = /^[a-zA-z0-9]{3,20}(@)[a-zA-z](gmail|yahoo){3,8}(.com)$/
    // var regPassword = /^[a-zA-z]{5,20}$/
    // if ((regName.test(inputs1.value)) && (regEmail.test(inputs2.value)) && (regPassword.test(inputs3.value))) {
    // } else {
    //     // alert("error expre")
    // }
}


function getCookie() {

    var inputEmail = document.getElementById("email1");
    var inputpass = document.getElementById("pass");

    var cookies = document.cookie.split(";");
    var obj = {};

    for (var i = 0; i < cookies.length; i++) {
        var arr = cookies[i].split("=");
        console.log(arr[0]);
        obj[arr[0].trim()] = arr[1];
    }
    if (obj.email === inputEmail.value && obj.password === inputpass.value) {
        window.open("./Home.html", "_self")
        alert("welcome " + obj.userName)
        document.getElementsByTagName("span")[0].textContent = obj.userName + obj.password

    } else {
        // alert("please enter your user name or password correctly.")
        document.getElementById("error").innerHTML = "<b><i>please enter your user name or password correctly.</i> </b>".fontcolor("#eb4800")

    }



}

// function deleteCookie() {
//     document.cookie = "userName=;expires=";
//     document.cookie = "email=;expires="
//     document.cookie = "password=;expires="
//     window.location.replace("indexcooki.html")
// }