
colourGenrator =()=>{
    randomNumber=Math.floor(Math.random()*16777215);
    console.log("randomNumber",randomNumber);
    randomColor="#"+randomNumber.toString(16);
    console.log("randomColor",randomColor);
    document.body.style.backgroundColor=randomColor;
    document.getElementById("color-code").innerHTML=randomColor;
    navigator.clipboard.writeText(randomColor).then(() => {
        console.log("Color code copied to clipboard:", randomColor);
    }).catch(err => {
        console.error("Failed to copy color code:", err);
    });
}

document.getElementById("btn").addEventListener("click",()=>{
    colourGenrator();
});

colourGenrator();
