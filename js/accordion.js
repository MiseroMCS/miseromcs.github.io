document.querySelectorAll(".accordion").forEach((element) => {
    element.onclick = function(){
        label = this.querySelector("label").innerHTML;
        contents = this.querySelector("p");
        contents.className = (contents.className == "") ? "invisible" : "";
    }
});