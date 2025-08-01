let dice = document.querySelector(".dice");
let dice1 = document.querySelector(".dice1");

let num, num1;
let dice_numbers = () => {
    num = Math.floor(Math.random() * 6)+1;
    
    if (num == 1) {
        dice.src = 'dice-six-faces-one.png';
        dice1.src = 'dice-six-faces-one.png';
    }
    else if (num == 2) {
        dice.src = 'dice-six-faces-two.png';
    }
    else if (num == 3) {
        dice.src = 'dice-six-faces-three.png';
    }
    else if (num == 4) {
        dice.src = 'dice-six-faces-four.png';
    }
    else if (num == 5) {
        dice.src = 'dice-six-faces-five.png';
    }
    else if (num == 6) {
        dice.src = 'dice-six-faces-six.png';
    }

    num1 = Math.floor(Math.random()*6)+1;
    
    if (num1 == 1) {
        dice1.src = 'dice-six-faces-one.png';
    }
    else if (num1 == 2) {
        dice1.src = 'dice-six-faces-two.png';
    }
    else if (num1 == 3) {
        dice1.src = 'dice-six-faces-three.png';
    }
    else if (num1 == 4) {
        dice1.src = 'dice-six-faces-four.png';
    }
    else if (num1 == 5) {
        dice1.src = 'dice-six-faces-five.png';
    }
    else if (num1 == 6) {
        dice1.src = 'dice-six-faces-six.png';
    }

    dice.style.animation = "shake 0.4s";
    dice1.style.animation = "shake1 0.4s";
    setInterval(()=>{
        dice.style.animation = ""
        dice1.style.animation = ""
    },500)
}
