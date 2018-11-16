window.onload = function () {
    setTimeout(function () {
        alert("hallo my litle frind? Luuuuuuuuuuuuuuck!!!!!!!!!!! I am your fatherrr!!!!!!!!");
    })

    hero = document.getElementById("man");
    hero.health = 5000;
    hero.damage = 55;
    hero.armor = 45;
    //heroGame
    heroGame = setInterval(function () {
        hero.x = parseInt(document.getElementById('nam').style.left);
        hero.xx = hero.x + 30;

        document.getElementsByClassName("health")[0].innerHTML = "Уровень жизни:" + hero.health;
        document.getElementsByClassName("damage")[0].innerHTML = "Уровень урона:" + hero.damage;
        document.getElementsByClassName("armor")[0].innerHTML = "Уровень брони:" + hero.armor;
    }, 100);

    var moveHorozontal = function () {
        if (hero.className == "left") {
            hero.src = "namLeft.png";

        } else if (hero.className == "right") {
            hero.src = "namRight.png";

        }
    }


    dead = document.getElementById("dead");
    dead.hp = 500;


    hpList = setInterval(function () {
        xps = document.getElementsByClassName("xp");
        // console.log (xps);
        // console.log(xps)         
        // var color = 10;
        for (var i = xps.length; i--;) {
            x = xps.length;
            console.log(x);
            // xps[x].style.backgroundColor = "red";
            // xps[9].remove();
            console.log(xps);
            if (dead.hp < 500 && dead.hp > 400) {
                xps[4].remove();
            }
            if (dead.hp < 400 && dead.hp > 300) {
                xps[3].remove();
            }
            if (dead.hp < 300 && dead.hp > 200) {
                xps[2].remove();
            }
            if (dead.hp < 200 && dead.hp > 100) {
                xps[1].remove();
            }
            if (dead.hp < 0) {
                xps[0].remove();
            }

            console.log(dead.hp)
            // xps[x].style.backgroundColor = "black";


            // if (dead.hp > 900 && dead.hp < 1000) {

            //     xps[color].addClass("clean");
            //     color =9;
            // }



            // for (var i = paragraphs.length; i--; ) {
            //     paragraphs[i].remove();
            //  }

        }

    }, 1000);

    deadmove = 600;
    deadGame = setInterval(function () {
        dead.x = parseInt(dead.style.marginLeft);
        dead.xx = dead.x + 700;
        if (hero.xx > dead.x + 320 && hero.xx < dead.xx) {
            hero.health -= 70 - hero.armor;
            if (hero.health <= 0) {
                hero.style.marginTop = 100 + "px";
                hero.className = "dead";
                hero.src = "namDead.png";
               
                clearInterval(deadGame);
                alert("poymal masliny aaaa posony");
            }
            dead.active = "active";
            if (dead.hp < 0) {
                
                    alert("nooooooooooooooooooooooo!!!!!!!!!!!!!!!!");
                    dead.style.marginTop = "550px";
                    dead.style.marginLeft = "1000px";
                    dead.src = "monsters/diedead.png";
                    dead.active = "die";
                    document.getElementsByClassName("result")[0].classList ="end";

                    // document.getElementsByClassName("underworld")[0].createElement("p");
                    // document.getElementsByTagName("p")[0].innerHTML = "You are new Boss";

                
                clearInterval(deadGame);

            }
        } else {
            if (dead.className === "left") {
                deadmove -= 10;
                dead.style.marginLeft = deadmove + "px";
                if (deadmove == 300) {
                    dead.className = "right";
                }
            }
            else if (dead.className === "right") {
                deadmove += 10;
                dead.style.marginLeft = deadmove + "px";
                dead.className = "right";
            }
            if (deadmove == 600) {
                dead.className = "left";

            }
        }
    }, 100);



    onkeydown = function (e) {
        if (hero.className !== "dead") {


            if (e.keyCode === 37) {
                x = document.getElementById("nam").offsetLeft;
                xn = x - 10;
                if (xn < 0) { xn = 0 };
                document.getElementById("nam").style.left = xn + "px";
                hero.className = "left";
                moveHorozontal();
            }
            else if (e.keyCode === 39) {
                x = document.getElementById("nam").offsetLeft;
                xn = x + 10;
                if (xn > 1350) { xn = 1350 }
                document.getElementById("nam").style.left = xn + "px";
                hero.className = "right";
                moveHorozontal();

            }

            else if (e.keyCode === 32) {

                if (hero.className == "left") {
                    hero.src = "namArmor.png"
                }
                else if (hero.className == "right") {
                    hero.src = "namArmorRight.png"
                }

                if (dead.active === "active") {
                    dead.hp -= hero.armor;
                    // if (dead.hp < 0) {
                    //     alert("nooooooooooooooooooooooo!!!!!!!!!!!!!!!!");
                    //     dead.style.marginTop = "550px";
                    //     dead.style.marginLeft = "1000px";
                    //     dead.src = "monsters/diedead.png";
                    //     dead.active = "die";

                    // }
                }

            }


        }
        setTimeout(function () {
            if (hero.className == "left") {
                hero.src = "namLeft.png"
            }
            else if (hero.className == "right") {
                hero.src = "namRight.png"
            }
        }, 200);
    }
}
