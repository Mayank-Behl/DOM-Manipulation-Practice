function getOptions(){
    const itemCount = document.querySelector("#mySelect");
    let text = "Number of items: ";
    const len = document.querySelector("#mySelect").length;
    text = text + len;
    for (let i = 0; i<itemCount.length; i++){
        text = text + "\n" + itemCount.options[i].text;
    }
    alert(text);
}