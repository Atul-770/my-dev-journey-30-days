text = document.getElementById("counter_text");
pnum = document.getElementById("counter");
num = Number(pnum.innerHTML)

let x=1

animate = (y) =>{
    pnum.classList.remove("show");
    pnum.classList.add("fade");
    setTimeout(()=>{
        pnum.innerHTML = `${y}`;

        pnum.classList.remove("fade");
        pnum.classList.add("show");
    },300);
}

inc =(x) =>{
    num = num+x;
    text.innerHTML = "Positive";
    text.style.color = "green";
    // pnum.innerHTML = `${num}`;
    animate(num);
}

dec =(x) =>{
    if(num === 0 && (getComputedStyle(text).color === "rgb(255, 255, 255)" || text.style.color === "red") || num === 1 && x>1)
    {
        text.innerHTML = "-ve Attempt"
        text.style.color = "red"
        num = 0;
        // pnum.innerHTML = `${num}`
        animate(num);
    }
    else{
        num = num-x;
        // pnum.innerHTML = `${num}`
        animate(num);
        if(num ===0){
            reset()
        }
    }
}

reset =() =>{
    x=1;
    text.innerHTML = "Zero";
    text.style.color = "white";
    num = 0;
    // pnum.innerHTML = `${num}`
    animate(num);
}

double =(btn) =>{
    if(x===1)
    {
        x=2;
        btn.innerHTML = "Double";
    }
    else{
        btn.innerHTML= "Single"
        x=1;
    }
}