document.querySelectorAll(".accordion").forEach((element) => {
    element.onclick = function(){
        label = this.querySelector("label").innerHTML;
        contents = this.querySelector(".contents");
        contents.className = (contents.className == "contents") ? "contents invisible" : "contents";
    }
});