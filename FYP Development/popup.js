document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("btn").addEventListener("click", function(){
        alert("The button was clicked")
        var body = document.getElementsByTagName("body")[0].style.backgroundColor = "green";
        var h1 = document.getElementsByTagName("h1")[0].style.color = "white";
        var p = document.getElementsByTagName("p")[0].style.color = "white";
    });
});