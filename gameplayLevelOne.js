window.onload = function () {
  begin = setTimeout (function(){
    alert("Hello my litle frind/ if you wanna know who are you,  you need to find 5 artifact and go to cave over the cry me a river with justin timberlake")},200);

    objects = [{ objectX: 500, objectXX: 760, objectY: 0, objectYY: 200 },
    { objectX: 100, objectXX: 230, objectY: 300, objectYY: 500 },
    { objectX: 0, objectXX: 520, objectY: 700, objectYY: 900 },
    { objectX: 1150, objectXX: 1400, objectY: 500, objectYY: 900 },
    { objectX: 680, objectXX: 870, objectY: 0, objectYY: 390 },
    { objectX: 850, objectXX: 1050, objectY: 300, objectYY: 400 },
    { objectX: 1130, objectXX: 1410, objectY: 300, objectYY: 400 },
    { objectX: 700, objectXX: 770, objectY: 180, objectYY: 430 },
    { objectX: 400, objectXX: 700, objectY: 500, objectYY: 600 },
    { objectX: 1300, objectXX: 1400, objectY: 100, objectYY: 300 },
    { objectX: 500, objectXX: 1400, objectY: 850, objectYY: 900 },
    { objectX: 0, objectXX: 40, objectY: 100, objectYY: 750 }
    ];

    hero = document.getElementById("man");
    hero.health = 100;
    hero.damage = 30;
    hero.armor = 20;
    hero.artifact = 0;
    hero.live = "live";

    hero.place = function () {
        hero.x = parseInt(document.getElementById('nam').style.left);
        hero.xx = hero.x + 30;
        hero.y = parseInt(document.getElementById('nam').style.top);
        hero.yy = hero.y + 50;
        // hero.placex = hero.x + 12;
        // hero.placey = hero.y +30;
    }
    hero.state = function () {
        document.getElementsByClassName("health")[0].innerHTML = "Уровень жизни:" + hero.health;
        document.getElementsByClassName("damage")[0].innerHTML = "Уровень урона:" + hero.damage;
        document.getElementsByClassName("armor")[0].innerHTML = "Уровень брони:" + hero.armor;
        document.getElementsByClassName("artifact")[0].innerHTML = "Найдено артефактов:" + hero.artifact;
    }

    hero.moveHorozontal = function () {
        if (hero.className == "left") {
            hero.src = "namLeft.png";
        } else if (hero.className == "right") {
            hero.src = "namRight.png";
        }
    }
    hero.moveVertical = function () {
        if (hero.className == "up") {
            hero.src = "namLeft.png";
        } else if (hero.className == "down") {
            hero.src = "namRight.png";
        }
    }

    hero.stopmoveleft = function () {
        if (xn < 0) { xn = 0 };
        for (var i = 0; i < objects.length; i++) {
            if (hero.x <= objects[i].objectXX && hero.x > objects[i].objectX && hero.y >= objects[i].objectY && hero.y <= objects[i].objectYY) {
                xn += 20;
            }
        }
    }
    hero.stopmoveright = function () {
        if (xn > 1350) { xn = 1350 }
        for (var i = 0; i < objects.length; i++) {
            if (hero.x >= objects[i].objectX && hero.x < objects[i].objectXX && hero.y >= objects[i].objectY && hero.y < objects[i].objectYY) {
                xn -= 20;
            }
        }
    }
    hero.stopmoveup = function () {
        if (xn < 0) { xn = 0 };
        for (var i = 0; i < objects.length; i++) {
            if (hero.y <= objects[i].objectYY && hero.y > objects[i].objectY && hero.x > objects[i].objectX && hero.x < objects[i].objectXX) {
                xn += 20;
            }
        }
    }
    hero.stopmovedown = function () {
        if (xn > 835) { xn = 835 };

        for (var i = 0; i < objects.length; i++) {
            if (hero.y >= objects[i].objectY && hero.y < objects[i].objectYY && hero.x > objects[i].objectX && hero.x < objects[i].objectXX) {
                xn -= 20;
            }
        }
    }
    hero.teleport = function () {
        if (hero.x > 1330 && hero.x < 1370 && hero.y > 19 && hero.y < 31 && hero.artifact == 5) {
            if (confirm("Are you wanna die?")) {
                location.href = "hugoBoss.html";
            }
        }
    }
    hero.activeSword = function () {
        if (hero.className == "left") {
            hero.src = "namArmor.png";
        }
        else if (hero.className == "right") {
            hero.src = "namArmorRight.png";
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

    hero.tick = setInterval(function () {
        hero.place();
        hero.state();
        console.log (hero.className);
        // console.log(hero.x, hero.y);
    }, 200);

     onkeydown = function (e) {
        if (hero.live !== "die"){
        
        hero.teleport();

        if (e.keyCode === 37) {
            x = document.getElementById("nam").offsetLeft;
            xn = x - 10;
            hero.stopmoveleft();
            document.getElementById("nam").style.left = xn + "px";
            hero.className = "left";
            hero.moveHorozontal();
        }
        else if (e.keyCode === 38) {
            x = document.getElementById("nam").offsetTop;
            xn = x - 10;
            hero.stopmoveup();
            document.getElementById("nam").style.top = xn + "px";
            hero.className = "left";
            hero.moveVertical();
        }
        else if (e.keyCode === 39) {
            x = document.getElementById("nam").offsetLeft;
            xn = x + 10;
            hero.stopmoveright();
            document.getElementById("nam").style.left = xn + "px";
            hero.className = "right";
            hero.moveHorozontal();
        }
        else if (e.keyCode === 40) {
            x = document.getElementById("nam").offsetTop;
            xn = x + 10;
            hero.stopmovedown();
            document.getElementById("nam").style.top = xn + "px";
            hero.className = "right";
            hero.moveVertical();
        }
        else if (e.keyCode === 32) {
            hero.activeSword();
            shot();

            // if (first.active === "active") {
            //     first.hp -= hero.armor;
            // console.log(first.hp);
            // if (first.hp < 0) {
            //     first.src = "monsters/dieAlian.png";
            //     first.active = "die";
            //     console.log(first.active);
            // }
            // }
        }
        
    }
        //     else if (twoMonster.active === "active") {
        //         twoMonster.hp -= hero.armor;
        //         if (twoMonster.hp < 0) {
        //             twoMonster.src = "monsters/dieAlian.png";
        //             twoMonster.active = "die";
        //         }
        //     }
        //     else if (threMonster.active === "active") {
        //         threMonster.hp -= hero.armor;
        //         if (threMonster.hp < 0) {
        //             threMonster.src = "monsters/dieAlian.png";
        //             threMonster.active = "die";
        //         }
        //     }
        //     else if (fourMonster.active === "active") {
        //         fourMonster.hp -= hero.armor;
        //         if (fourMonster.hp < 0) {
        //             fourMonster.src = "monsters/dieAlian.png";
        //             fourMonster.active = "die";
        //         }
        //     }
        //     else if (fiveMonster.active === "active") {
        //         fiveMonster.hp -= hero.armor;
        //         if (fiveMonster.hp < 0) {
        //             fiveMonster.src = "monsters/dieAlian.png";
        //             fiveMonster.active = "die";
        //         }
        //     }


        // }
    }





    // HP MONSTR

    function Monstr(name, step, stepstart, stepend, hp, moveline) {
        this.name = name;
        this.step = step;
        this.hp = hp;
        this.moveline = moveline;

        this.play = function () {
            setInterval(function () {

                this.name.x = parseInt(name.style.marginLeft);
                this.xx = name.x + 100;
                this.name.y = 100;
                this.yy = name.y + 100;

                if (hero.x > name.x && hero.x < xx && hero.y > name.y && hero.y < yy) {
                    if (name.active == "active" && moveline !== "die" && hero.live!=="die") {
                        hero.health -= 30 - hero.armor;
                    };
                    if (hero.health == 0) {
                        hero.src = "namDead.png";
                        alert("poymal masliny aaaa posony");
                        hero.live = "die";
                        // hero.src = "namDead.png";
                    }
                    name.active = "active";

                    shot = function () {
                        if (moveline !== "die") {
                            hp -= hero.damage;
                        }
                        if (hp < 0) {
                            moveline = "die";
                            hp = 0;
                            name.src = "monsters/dieAlian.png"
                            hero.health += 90;
                            hero.armor += 5;
                            hero.damage += 5;
                            hero.artifact++;
                            clearInterval(play);
                        }
                    }
                } else {
                    if (moveline === "horizontal") {
                        if (name.className === "left") {
                            step -= 10;
                            name.style.marginLeft = step + "px";
                            if (step == stepstart) {
                                name.className = "right";
                                name.src = "monsters/alian.png";
                            }
                        } else if (name.className === "right") {
                            step += 10;
                            name.style.marginLeft = step + "px";
                        }
                        if (step == stepend) {
                            name.className = "left";
                            name.src = "monsters/aliana.png";
                        }
                    }
                    if (moveline === "vertical") {
                        if (name.className === "left") {
                            step -= 5;
                            name.style.marginTop = step + "px";
                            if (step == stepstart) {
                                name.className = "right";
                                name.src = "monsters/alian.png";
                            }
                        } else if (name.className === "right") {
                            step += 5;
                            name.style.marginTop = step + "px";
                        }
                        if (step == stepend) {
                            name.className = "left";
                            name.src = "monsters/aliana.png";
                        }

                    }

                }
            }, 200);
        }
    }

    horizontal = "horizontal";
    vertical = "vertical";

    first = document.getElementById("firstMnstr");
    firstMnstr = new Monstr(first, 200, 0, 400, 100, horizontal);
    firstMnstr.play();

    two = document.getElementById("twoMnstr");
    twoMnstr = new Monstr(two, 1100, 1000, 1200, 100, horizontal)
    twoMnstr.play();

    three = document.getElementById("threMnstr");
    threeMnstr = new Monstr(three, 250, 0, 300, 100, horizontal)
    threeMnstr.play();

    four = document.getElementById("fourMnstr");
    fourMnstr = new Monstr(four, 800, 500, 1000, 100, horizontal)
    fourMnstr.play();

    five = document.getElementById("fiveMnstr");
    fiveMnstr = new Monstr(five, 0, -20, 20, 100, vertical)
    fiveMnstr.play();
    // lol = setInterval (function(){
    //     console.log (fiveMnstr.moveline, fiveMnstr.hp, fiveMnstr.play);
    // }, 200);


    //     pidr = document.getElementById("firstMnstr");

    // function lol (name){
    //     this.name = name;
    //     this.va = name; 
    //     console.log (this.va);

    // }
    // lil = new lol (pidr);


    // firstMonster = document.getElementById("firstMnstr");

    // firstMonster.hp = 90;
    // firstMonsterMarginPlace = 200;

    // firstMonsterGame = setInterval(function () {

    //     firstMonsterMargin = firstMonster.style.marginLeft;
    //     arrfirstMonster = firstMonsterMargin.split('', 3);
    //     arr2firstMonster = arrfirstMonster.join('');
    //     firstMonsterPlace = parseInt(arr2firstMonster) + 100 + "px";

    //     firstMonsterTop = firstMonster.style.marginTop + 100;

    //     arrfirstMonsterTop = firstMonsterTop.split('', 3);
    //     arr2firstMonsterTop = arrfirstMonsterTop.join('');
    //     firstMonsterTopPlace = parseInt(arr2firstMonsterTop) + "px";

    //     if (parseInt(heroDivPlace) > parseInt(firstMonsterMargin) && parseInt(heroDivPlace) < parseInt(firstMonsterPlace) && heroDivPlaceTop > 100 && heroDivPlaceTop < 190) {

    //         hero.health -= 30 - hero.armor;

    //         if (hero.health == 0) {
    //             alert("poymal masliny aaaa posony");
    //         }
    //         firstMonster.active = "active";

    //         if (firstMonster.hp < 0) {
    //             hero.health += 90;
    //             hero.armor += 5;
    //             hero.damage +=5;
    //             hero.artifact++;
    //             clearInterval(firstMonsterGame);
    //         }
    //     } else {
    //         if (firstMonster.className === "left") {
    //             firstMonsterMarginPlace -= 10;
    //             firstMonster.style.marginLeft = firstMonsterMarginPlace + "px";
    //             if (firstMonsterMarginPlace == 0) {
    //                 firstMonster.className = "right";
    //                 firstMonster.src = "monsters/alian.png";
    //             }
    //         } else if (firstMonster.className === "right") {
    //             firstMonsterMarginPlace += 10;
    //             firstMonster.style.marginLeft = firstMonsterMarginPlace + "px";
    //             firstMonster.className = "right";
    //         }
    //         if (firstMonsterMarginPlace == 400) {
    //             firstMonster.className = "left";
    //             firstMonster.src = "monsters/aliana.png";
    //         }

    //     }
    // }, 200);


    //twomonstr left 1100
    // twoMonster = document.getElementById("twoMnstr");
    // twoMonster.hp = 90;
    // twoMonsterMarginPlace = 1100;

    // twoMonsterGame = setInterval(function () {
    //     twoMonsterMargin = twoMonster.style.marginLeft;
    //     arrtwoMonster = twoMonsterMargin.split('', 4);
    //     arr2twoMonster = arrtwoMonster.join('');
    //     twoMonsterPlace = parseInt(arr2twoMonster) + 100 + "px";

    //     twoMonsterTop = twoMonster.style.marginTop + 100;

    //     arrtwoMonsterTop = twoMonsterTop.split('', 3);
    //     arr2twoMonsterTop = arrtwoMonsterTop.join('');
    //     twoMonsterTopPlace = parseInt(arr2twoMonsterTop) + "px";



    //     if (parseInt(heroDivPlace) > parseInt(twoMonsterMargin) && parseInt(heroDivPlace) < parseInt(twoMonsterPlace) && heroDivPlaceTop > 200 && heroDivPlaceTop < 290) {

    //         hero.health -= 30 - hero.armor;

    //         if (hero.health == 0) {
    //             alert("poymal masliny aaaa posony");
    //         }
    //         twoMonster.active = "active";

    //         if (twoMonster.hp < 0) {
    //             hero.health += 90;
    //             hero.armor += 5;
    //             hero.damage +=5;
    //             hero.artifact++;
    //             clearInterval(twoMonsterGame);
    //         }
    //     } else {

    //         if (twoMonster.className === "left") {
    //             twoMonsterMarginPlace -= 10;
    //             twoMonster.style.marginLeft = twoMonsterMarginPlace + "px";
    //             if (twoMonsterMarginPlace == 1000) {
    //                 twoMonster.className = "right";
    //                 twoMonster.src = "monsters/alian.png";
    //             }
    //         } else if (twoMonster.className === "right") {
    //             twoMonsterMarginPlace += 10;
    //             twoMonster.style.marginLeft = twoMonsterMarginPlace + "px";
    //             twoMonster.className = "right";
    //         }
    //         if (twoMonsterMarginPlace == 1200) {
    //             twoMonster.className = "left";
    //             twoMonster.src = "monsters/aliana.png";
    //         }
    //     }
    // }, 200);

    //thremonstr left 250

    // threMonster = document.getElementById("threMnstr");
    // threMonster.hp = 90;
    // threMonsterMarginPlace = 250;

    // threMonsterGame = setInterval(function () {

    //     threMonsterMargin = threMonster.style.marginLeft;
    //     arrthreMonster = threMonsterMargin.split('', 3);
    //     arr2threMonster = arrthreMonster.join('');
    //     threMonsterPlace = parseInt(arr2threMonster) + 100 + "px";

    //     threMonsterTop = threMonster.style.marginTop + 100;

    //     arrthreMonsterTop = threMonsterTop.split('', 3);
    //     arr2threMonsterTop = arrthreMonsterTop.join('');
    //     threMonsterTopPlace = parseInt(arr2threMonsterTop) + "px";


    //     if (parseInt(heroDivPlace) > parseInt(threMonsterMargin) && parseInt(heroDivPlace) < parseInt(threMonsterPlace) && heroDivPlaceTop > 470 && heroDivPlaceTop < 540) {

    //         hero.health -= 30 - hero.armor;

    //         if (hero.health == 0) {
    //             alert("poymal masliny aaaa posony");
    //         }
    //         threMonster.active = "active";

    //         if (threMonster.hp < 0) {
    //             hero.health += 90;
    //             hero.armor += 5;
    //             hero.damage +=5;
    //             hero.artifact++;
    //             clearInterval(threMonsterGame);
    //         }
    //     } else {

    //         if (threMonster.className === "left") {
    //             threMonsterMarginPlace -= 10;
    //             threMonster.style.marginLeft = threMonsterMarginPlace + "px";

    //             if (threMonsterMarginPlace == 50) {
    //                 threMonster.className = "right";
    //                 threMonster.src = "monsters/alian.png";
    //             }
    //         } else if (threMonster.className === "right") {
    //             threMonsterMarginPlace += 10;
    //             threMonster.style.marginLeft = threMonsterMarginPlace + "px";
    //             threMonster.className = "right";
    //         }
    //         if (threMonsterMarginPlace == 300) {
    //             threMonster.className = "left";
    //             threMonster.src = "monsters/aliana.png";
    //         }
    //     }
    // }, 200);

    //fourMnstr 800
    // fourMonster = document.getElementById("fourMnstr");
    // fourMonster.hp = 90;
    // fourMonsterMarginPlace = 800;

    // fourMonsterGame = setInterval(function () {

    //     fourMonsterMargin = fourMonster.style.marginLeft;
    //     arrfourMonster = fourMonsterMargin.split('', 4);
    //     arr2fourMonster = arrfourMonster.join('');
    //     fourMonsterPlace = parseInt(arr2fourMonster) + 100 + "px";

    //     fourMonsterTop = fourMonster.style.marginTop + 100;
    //     arrfourMonsterTop = fourMonsterTop.split('', 3);
    //     arr2fourMonsterTop = arrfourMonsterTop.join('');
    //     fourMonsterTopPlace = parseInt(arr2fourMonsterTop) + "px";


    //     if (parseInt(heroDivPlace) > parseInt(fourMonsterMargin) && parseInt(heroDivPlace) < parseInt(fourMonsterPlace) && heroDivPlaceTop > 620 && heroDivPlaceTop < 680) {

    //         hero.health -= 30 - hero.armor;
    //         // alert ("hello, mayby you have some sigaret?");
    //         if (hero.health == 0) {
    //             alert("poymal masliny aaaa posony");
    //         }
    //         fourMonster.active = "active";

    //         if (fourMonster.hp < 0) {
    //             hero.health += 90;
    //             hero.armor += 5;
    //             hero.damage +=5;
    //             hero.artifact++;
    //             clearInterval(fourMonsterGame);
    //         }
    //     } else {
    //         if (fourMonster.className === "left") {
    //             fourMonsterMarginPlace -= 10;
    //             fourMonster.style.marginLeft = fourMonsterMarginPlace + "px";

    //             if (fourMonsterMarginPlace == 500) {
    //                 fourMonster.className = "right";
    //                 fourMonster.src = "monsters/alian.png";
    //             }
    //         } else if (fourMonster.className === "right") {
    //             fourMonsterMarginPlace += 10;

    //             fourMonster.style.marginLeft = fourMonsterMarginPlace + "px";
    //             fourMonster.className = "right";
    //         }
    //         if (fourMonsterMarginPlace == 1000) {
    //             fourMonster.className = "left";
    //             fourMonster.src = "monsters/aliana.png";

    //         }
    //     }
    // }, 200);

    //fiveMnstr 0top
    // fiveMonster = document.getElementById("fiveMnstr");
    // fiveMonster.hp = 90;
    // fiveMonsterMarginTopPlace = 0;
    // fiveMonsterGame = setInterval(function () {
    //     fiveMonsterMargin = fiveMonster.style.marginLeft;
    //     arrfiveMonster = fiveMonsterMargin.split('', 4);
    //     arr2fiveMonster = arrfiveMonster.join('');
    //     fiveMonsterPlace = parseInt(arr2fiveMonster) + 100 + "px";

    //     fiveMonsterTop = fiveMonster.style.marginTop + 100;
    //     arrfiveMonsterTop = fiveMonsterTop.split('', 3);
    //     arr2fiveMonsterTop = arrfiveMonsterTop.join('');
    //     fiveMonsterTopPlace = parseInt(arr2fiveMonsterTop) + "px";


    //     if (parseInt(arr2H) >= 1170 && parseInt(arr2H) <= 1300 && heroDivPlaceTop > 0 && heroDivPlaceTop < 100) {

    //         hero.health -= 30 - hero.armor;
    //         // alert ("hello, mayby you have some sigaret?");
    //         if (hero.health == 0) {
    //             alert("poymal masliny aaaa posony");
    //         }
    //         fiveMonster.active = "active";

    //         if (fiveMonster.hp < 0) {
    //             hero.health += 90;
    //             hero.armor += 5;
    //             hero.damage +=5;
    //             hero.artifact++;
    //             clearInterval(fiveMonsterGame);
    //         }
    //     } else {

    //         if (fiveMonster.className === "left") {
    //             fiveMonsterMarginTopPlace -= 5;
    //             fiveMonster.style.marginTop = fiveMonsterMarginTopPlace + "px";

    //             if (fiveMonsterMarginTopPlace == -20) {
    //                 fiveMonster.className = "right";
    //                 fiveMonster.src = "monsters/alian.png";
    //             }
    //         } else if (fiveMonster.className === "right") {
    //             fiveMonsterMarginTopPlace += 5;

    //             fiveMonster.style.marginTop = fiveMonsterMarginTopPlace + "px";
    //             fiveMonster.className = "right";

    //         }
    //         if (fiveMonsterMarginTopPlace == 20) {
    //             fiveMonster.className = "left";
    //             fiveMonster.src = "monsters/aliana.png";

    //         }
    //     }
    // }, 200);



    // help i need somebody 
    // objects = document.getElementsByClassName("object");

    // for (var i = 0; i < objects.length; i++) {
    //     arr = [];
    //     this.lil = objects[i]
    //     arr2 = arr.push(this.lil);

    //     this.objectIndex = objects[i];
    //     this.object = getComputedStyle(this.objectIndex);
    //     this.object.marginleft = parseInt(this.object.marginLeft);
    //     this.object.marginright = parseInt(this.object.marginLeft) + 100;
    //     this.object.margintop = parseInt(this.object.marginTop);
    //     this.object.margindown = parseInt(this.object.marginTop) + 100;

    //     console.log(

    //         object.marginleft  + object.marginright  + object.margintop + object.margindown
    //         );

    // }



}