textChange = () =>{
    document.getElementById("btn_target").innerHTML = "Welcome to Monkey Kingdom!"
}

consoleText = (text) =>{
    console.log(`you clicked on: ${text}`)
}

addCard = () =>{
    document.querySelector(".card-cont").
    insertAdjacentHTML("beforeend", `
    <div class="c1">
                    <img src="https://cdn.pixabay.com/photo/2023/01/17/03/07/wolves-7723674_1280.jpg"
                        alt="just random man">
                    <div class="c-content">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, voluptates!</p>
                        <button>Learn more</button>
                    </div>`);
}

let flag = 0;

mode = (id) =>{
    let bdy = document.body;
    let navLinks = document.querySelectorAll("nav a");
    if(flag === 0)
    {
        bdy.style.backgroundColor = 'black';
        bdy.style.color = "white";
        
        navLinks.forEach(link =>{
            link.style.color = "white";
        })

        id.innerHTML = "Dark"
        flag = 1
    }
    else{
        bdy.style.backgroundColor = 'white';
        bdy.style.color = "black";
        
        navLinks.forEach(link =>{
            link.style.color = "black";
        })
        id.innerHTML = "Light";
        flag = 0
    }
    
}

imgChanger = () =>{
    let imgSrc = document.querySelector(".right img");
    imgSrc.src = "https://cdn.pixabay.com/photo/2021/01/18/16/02/avocado-5928508_1280.png"
}

document.querySelectorAll(".c1").forEach(card =>{
    card.classList.add("hov");
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll(".c1 .c-content h3").forEach(head => {
        head.style.color="blue"
    });
})


