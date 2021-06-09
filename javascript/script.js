//function buttonStart()

// document.getElementById("div1").style.backgroundColor = "yellow";

let colorArray = ["red", "green", "blue", "yellow", "purple","orange"]

let color1 = Math.floor(Math.random() * 5);
let color2 = Math.floor(Math.random() * 5);
let color3 = Math.floor(Math.random() * 5);

//document.getElementById("div1").style.backgroundColor = colorArray[color1];


let iconArray = ['<i class="fas fa-bell"></i>', '<i class="fas fa-anchor"></i>', '<i class="fas fa-crown"></i>', '<i class="fas fa-carrot"></i>', '<i class="fas fa-chess-knight"></i>']
let iconRandom;

    

var myInterval;
var myInterval2;
var myInterval3;




function buttonStart()
{
    myInterval = setInterval(startInterval, 500);
    myInterval2 = setInterval(startInterval2, 500);
    myInterval3 = setInterval(startInterval3, 500);


    iconRandom = Math.floor(Math.random() * 5);
    document.getElementById("div14").innerHTML = iconArray[iconRandom];

    document.getElementById("div14").style.transition = "0s";

    document.getElementById("div14").style.top = "-100px";
    document.getElementById("div13").style.top = "300px";
    document.getElementById("div12").style.top = "200px";
    document.getElementById("div11").style.top = "100px";
    document.getElementById("div1").style.top = "0px";

    if (document.getElementById("div1").style.top == "0px")
    {
        document.getElementById("div1").style.transition = "100ms linear";
    }


    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div13").innerHTML = iconArray[iconRandom];

        document.getElementById("div13").style.transition = "0s";

        document.getElementById("div13").style.top = "-100px";
        document.getElementById("div12").style.top = "300px";
        document.getElementById("div11").style.top = "200px";
        document.getElementById("div1").style.top = "100px";
        document.getElementById("div14").style.top = "0px";

        if (document.getElementById("div14").style.top == "0px")
        {
            document.getElementById("div14").style.transition = "100ms linear";
        }
    }, 100);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div12").innerHTML = iconArray[iconRandom];

        document.getElementById("div12").style.transition = "0s";

        document.getElementById("div12").style.top = "-100px";
        document.getElementById("div11").style.top = "300px";
        document.getElementById("div1").style.top = "200px";
        document.getElementById("div14").style.top = "100px";
        document.getElementById("div13").style.top = "0px";

        if (document.getElementById("div13").style.top == "0px")
        {
            document.getElementById("div13").style.transition = "100ms linear";
        }
    }, 200);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div11").innerHTML = iconArray[iconRandom];

        document.getElementById("div11").style.transition = "0s";

        document.getElementById("div11").style.top = "-100px";
        document.getElementById("div1").style.top = "300px";
        document.getElementById("div14").style.top = "200px";
        document.getElementById("div13").style.top = "100px";
        document.getElementById("div12").style.top = "0px";

        if (document.getElementById("div12").style.top == "0px")
        {
            document.getElementById("div12").style.transition = "100ms linear";
        }
    }, 300);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div1").innerHTML = iconArray[iconRandom];

        document.getElementById("div1").style.transition = "0s";

        document.getElementById("div1").style.top = "-100px";
        document.getElementById("div14").style.top = "300px";
        document.getElementById("div13").style.top = "200px";
        document.getElementById("div12").style.top = "100px";
        document.getElementById("div11").style.top = "0px";

        if (document.getElementById("div11").style.top == "0px")
        {
            document.getElementById("div11").style.transition = "100ms linear";
        }
    }, 400);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div14").innerHTML = iconArray[iconRandom];

        document.getElementById("div14").style.transition = "0s";

        document.getElementById("div14").style.top = "-100px";
        document.getElementById("div13").style.top = "300px";
        document.getElementById("div12").style.top = "200px";
        document.getElementById("div11").style.top = "100px";
        document.getElementById("div1").style.top = "0px";

        if (document.getElementById("div1").style.top == "0px")
        {
            document.getElementById("div1").style.transition = "100ms linear";
        }
    }, 500);



    // RIJ 2

    iconRandom = Math.floor(Math.random() * 5);
    document.getElementById("div24").innerHTML = iconArray[iconRandom];

    document.getElementById("div24").style.transition = "0s";

    document.getElementById("div24").style.top = "-100px";
    document.getElementById("div23").style.top = "300px";
    document.getElementById("div22").style.top = "200px";
    document.getElementById("div21").style.top = "100px";
    document.getElementById("div20").style.top = "0px";

    if (document.getElementById("div20").style.top == "0px")
    {
        document.getElementById("div20").style.transition = "100ms linear";
    }


    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div23").innerHTML = iconArray[iconRandom];

        document.getElementById("div23").style.transition = "0s";

        document.getElementById("div23").style.top = "-100px";
        document.getElementById("div22").style.top = "300px";
        document.getElementById("div21").style.top = "200px";
        document.getElementById("div20").style.top = "100px";
        document.getElementById("div24").style.top = "0px";

        if (document.getElementById("div24").style.top == "0px")
        {
            document.getElementById("div24").style.transition = "100ms linear";
        }
    }, 100);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div22").innerHTML = iconArray[iconRandom];

        document.getElementById("div22").style.transition = "0s";

        document.getElementById("div22").style.top = "-100px";
        document.getElementById("div21").style.top = "300px";
        document.getElementById("div20").style.top = "200px";
        document.getElementById("div24").style.top = "100px";
        document.getElementById("div23").style.top = "0px";

        if (document.getElementById("div23").style.top == "0px")
        {
            document.getElementById("div23").style.transition = "100ms linear";
        }
    }, 200);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div21").innerHTML = iconArray[iconRandom];

        document.getElementById("div21").style.transition = "0s";

        document.getElementById("div21").style.top = "-100px";
        document.getElementById("div20").style.top = "300px";
        document.getElementById("div24").style.top = "200px";
        document.getElementById("div23").style.top = "100px";
        document.getElementById("div22").style.top = "0px";

        if (document.getElementById("div22").style.top == "0px")
        {
            document.getElementById("div22").style.transition = "100ms linear";
        }
    }, 300);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div20").innerHTML = iconArray[iconRandom];

        document.getElementById("div20").style.transition = "0s";

        document.getElementById("div20").style.top = "-100px";
        document.getElementById("div24").style.top = "300px";
        document.getElementById("div23").style.top = "200px";
        document.getElementById("div22").style.top = "100px";
        document.getElementById("div21").style.top = "0px";

        if (document.getElementById("div21").style.top == "0px")
        {
            document.getElementById("div21").style.transition = "100ms linear";
        }
    }, 400);

    
    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div24").innerHTML = iconArray[iconRandom];

        document.getElementById("div24").style.transition = "0s";

        document.getElementById("div24").style.top = "-100px";
        document.getElementById("div23").style.top = "300px";
        document.getElementById("div22").style.top = "200px";
        document.getElementById("div21").style.top = "100px";
        document.getElementById("div20").style.top = "0px";

        if (document.getElementById("div20").style.top == "0px")
        {
            document.getElementById("div20").style.transition = "100ms linear";
        }
    }, 500);



    // RIJ 3

    iconRandom = Math.floor(Math.random() * 5);
    document.getElementById("div34").innerHTML = iconArray[iconRandom];

    document.getElementById("div34").style.transition = "0s";

    document.getElementById("div34").style.top = "-100px";
    document.getElementById("div33").style.top = "300px";
    document.getElementById("div32").style.top = "200px";
    document.getElementById("div31").style.top = "100px";
    document.getElementById("div30").style.top = "0px";

    if (document.getElementById("div30").style.top == "0px")
    {
        document.getElementById("div30").style.transition = "100ms linear";
    }


    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div33").innerHTML = iconArray[iconRandom];

        document.getElementById("div33").style.transition = "0s";

        document.getElementById("div33").style.top = "-100px";
        document.getElementById("div32").style.top = "300px";
        document.getElementById("div31").style.top = "200px";
        document.getElementById("div30").style.top = "100px";
        document.getElementById("div34").style.top = "0px";

        if (document.getElementById("div34").style.top == "0px")
        {
            document.getElementById("div34").style.transition = "100ms linear";
        }
    }, 100);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div32").innerHTML = iconArray[iconRandom];

        document.getElementById("div32").style.transition = "0s";

        document.getElementById("div32").style.top = "-100px";
        document.getElementById("div31").style.top = "300px";
        document.getElementById("div30").style.top = "200px";
        document.getElementById("div34").style.top = "100px";
        document.getElementById("div33").style.top = "0px";

        if (document.getElementById("div33").style.top == "0px")
        {
            document.getElementById("div33").style.transition = "100ms linear";
        }
    }, 200);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div31").innerHTML = iconArray[iconRandom];

        document.getElementById("div31").style.transition = "0s";

        document.getElementById("div31").style.top = "-100px";
        document.getElementById("div30").style.top = "300px";
        document.getElementById("div34").style.top = "200px";
        document.getElementById("div33").style.top = "100px";
        document.getElementById("div32").style.top = "0px";

        if (document.getElementById("div32").style.top == "0px")
        {
            document.getElementById("div32").style.transition = "100ms linear";
        }
    }, 300);

    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div30").innerHTML = iconArray[iconRandom];

        document.getElementById("div30").style.transition = "0s";

        document.getElementById("div30").style.top = "-100px";
        document.getElementById("div34").style.top = "300px";
        document.getElementById("div33").style.top = "200px";
        document.getElementById("div32").style.top = "100px";
        document.getElementById("div31").style.top = "0px";

        if (document.getElementById("div31").style.top == "0px")
        {
            document.getElementById("div31").style.transition = "100ms linear";
        }
    }, 400);

    
    setTimeout(function()
    {
        iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div34").innerHTML = iconArray[iconRandom];

        document.getElementById("div34").style.transition = "0s";

        document.getElementById("div34").style.top = "-100px";
        document.getElementById("div33").style.top = "300px";
        document.getElementById("div32").style.top = "200px";
        document.getElementById("div31").style.top = "100px";
        document.getElementById("div30").style.top = "0px";

        if (document.getElementById("div30").style.top == "0px")
        {
            document.getElementById("div30").style.transition = "100ms linear";
        }
    }, 500);
}


function startInterval()
{
    iconRandom = Math.floor(Math.random() * 5);
    document.getElementById("div14").innerHTML = iconArray[iconRandom];

    document.getElementById("div14").style.transition = "0s";

    document.getElementById("div14").style.top = "-100px";
    document.getElementById("div13").style.top = "300px";
    document.getElementById("div12").style.top = "200px";
    document.getElementById("div11").style.top = "100px";
    document.getElementById("div1").style.top = "0px";

    if (document.getElementById("div1").style.top == "0px")
    {
        document.getElementById("div1").style.transition = "100ms linear";
    }


    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div13").innerHTML = iconArray[iconRandom];

        document.getElementById("div13").style.transition = "0s";

        document.getElementById("div13").style.top = "-100px";
        document.getElementById("div12").style.top = "300px";
        document.getElementById("div11").style.top = "200px";
        document.getElementById("div1").style.top = "100px";
        document.getElementById("div14").style.top = "0px";

        if (document.getElementById("div14").style.top == "0px")
        {
            document.getElementById("div14").style.transition = "100ms linear";
        }
    }, 100);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div12").innerHTML = iconArray[iconRandom];

        document.getElementById("div12").style.transition = "0s";

        document.getElementById("div12").style.top = "-100px";
        document.getElementById("div11").style.top = "300px";
        document.getElementById("div1").style.top = "200px";
        document.getElementById("div14").style.top = "100px";
        document.getElementById("div13").style.top = "0px";

        if (document.getElementById("div13").style.top == "0px")
        {
            document.getElementById("div13").style.transition = "100ms linear";
        }
    }, 200);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div11").innerHTML = iconArray[iconRandom];

        document.getElementById("div11").style.transition = "0s";

        document.getElementById("div11").style.top = "-100px";
        document.getElementById("div1").style.top = "300px";
        document.getElementById("div14").style.top = "200px";
        document.getElementById("div13").style.top = "100px";
        document.getElementById("div12").style.top = "0px";

        if (document.getElementById("div12").style.top == "0px")
        {
            document.getElementById("div12").style.transition = "100ms linear";
        }
    }, 300);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div1").innerHTML = iconArray[iconRandom];

        document.getElementById("div1").style.transition = "0s";

        document.getElementById("div1").style.top = "-100px";
        document.getElementById("div14").style.top = "300px";
        document.getElementById("div13").style.top = "200px";
        document.getElementById("div12").style.top = "100px";
        document.getElementById("div11").style.top = "0px";

        if (document.getElementById("div11").style.top == "0px")
        {
            document.getElementById("div11").style.transition = "100ms linear";
        }
    }, 400);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div14").innerHTML = iconArray[iconRandom];

        document.getElementById("div14").style.transition = "0s";

        document.getElementById("div14").style.top = "-100px";
        document.getElementById("div13").style.top = "300px";
        document.getElementById("div12").style.top = "200px";
        document.getElementById("div11").style.top = "100px";
        document.getElementById("div1").style.top = "0px";

        if (document.getElementById("div1").style.top == "0px")
        {
            document.getElementById("div1").style.transition = "100ms linear";
        }
    }, 500);
}

function startInterval2()
{
    let iconRandom = Math.floor(Math.random() * 5);
    document.getElementById("div24").innerHTML = iconArray[iconRandom];

    document.getElementById("div24").style.transition = "0s";

    document.getElementById("div24").style.top = "-100px";
    document.getElementById("div23").style.top = "300px";
    document.getElementById("div22").style.top = "200px";
    document.getElementById("div21").style.top = "100px";
    document.getElementById("div20").style.top = "0px";

    if (document.getElementById("div20").style.top == "0px")
    {
        document.getElementById("div20").style.transition = "100ms linear";
    }


    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div23").innerHTML = iconArray[iconRandom];

        document.getElementById("div23").style.transition = "0s";

        document.getElementById("div23").style.top = "-100px";
        document.getElementById("div22").style.top = "300px";
        document.getElementById("div21").style.top = "200px";
        document.getElementById("div20").style.top = "100px";
        document.getElementById("div24").style.top = "0px";

        if (document.getElementById("div24").style.top == "0px")
        {
            document.getElementById("div24").style.transition = "100ms linear";
        }
    }, 100);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div22").innerHTML = iconArray[iconRandom];

        document.getElementById("div22").style.transition = "0s";

        document.getElementById("div22").style.top = "-100px";
        document.getElementById("div21").style.top = "300px";
        document.getElementById("div20").style.top = "200px";
        document.getElementById("div24").style.top = "100px";
        document.getElementById("div23").style.top = "0px";

        if (document.getElementById("div23").style.top == "0px")
        {
            document.getElementById("div23").style.transition = "100ms linear";
        }
    }, 200);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div21").innerHTML = iconArray[iconRandom];

        document.getElementById("div21").style.transition = "0s";

        document.getElementById("div21").style.top = "-100px";
        document.getElementById("div20").style.top = "300px";
        document.getElementById("div24").style.top = "200px";
        document.getElementById("div23").style.top = "100px";
        document.getElementById("div22").style.top = "0px";

        if (document.getElementById("div22").style.top == "0px")
        {
            document.getElementById("div22").style.transition = "100ms linear";
        }
    }, 300);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div20").innerHTML = iconArray[iconRandom];

        document.getElementById("div20").style.transition = "0s";

        document.getElementById("div20").style.top = "-100px";
        document.getElementById("div24").style.top = "300px";
        document.getElementById("div23").style.top = "200px";
        document.getElementById("div22").style.top = "100px";
        document.getElementById("div21").style.top = "0px";

        if (document.getElementById("div21").style.top == "0px")
        {
            document.getElementById("div21").style.transition = "100ms linear";
        }
    }, 400);

    
    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div24").innerHTML = iconArray[iconRandom];

        document.getElementById("div24").style.transition = "0s";

        document.getElementById("div24").style.top = "-100px";
        document.getElementById("div23").style.top = "300px";
        document.getElementById("div22").style.top = "200px";
        document.getElementById("div21").style.top = "100px";
        document.getElementById("div20").style.top = "0px";

        if (document.getElementById("div20").style.top == "0px")
        {
            document.getElementById("div20").style.transition = "100ms linear";
        }
    }, 500);
}

function startInterval3()
{
    let color1 = Math.floor(Math.random() * 5);
    document.getElementById("div34").innerHTML = iconArray[iconRandom];

    document.getElementById("div34").style.transition = "0s";

    document.getElementById("div34").style.top = "-100px";
    document.getElementById("div33").style.top = "300px";
    document.getElementById("div32").style.top = "200px";
    document.getElementById("div31").style.top = "100px";
    document.getElementById("div30").style.top = "0px";

    if (document.getElementById("div30").style.top == "0px")
    {
        document.getElementById("div30").style.transition = "100ms linear";
    }


    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div33").innerHTML = iconArray[iconRandom];

        document.getElementById("div33").style.transition = "0s";

        document.getElementById("div33").style.top = "-100px";
        document.getElementById("div32").style.top = "300px";
        document.getElementById("div31").style.top = "200px";
        document.getElementById("div30").style.top = "100px";
        document.getElementById("div34").style.top = "0px";

        if (document.getElementById("div34").style.top == "0px")
        {
            document.getElementById("div34").style.transition = "100ms linear";
        }
    }, 100);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div32").innerHTML = iconArray[iconRandom];

        document.getElementById("div32").style.transition = "0s";

        document.getElementById("div32").style.top = "-100px";
        document.getElementById("div31").style.top = "300px";
        document.getElementById("div30").style.top = "200px";
        document.getElementById("div34").style.top = "100px";
        document.getElementById("div33").style.top = "0px";

        if (document.getElementById("div33").style.top == "0px")
        {
            document.getElementById("div33").style.transition = "100ms linear";
        }
    }, 200);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div31").innerHTML = iconArray[iconRandom];

        document.getElementById("div31").style.transition = "0s";

        document.getElementById("div31").style.top = "-100px";
        document.getElementById("div30").style.top = "300px";
        document.getElementById("div34").style.top = "200px";
        document.getElementById("div33").style.top = "100px";
        document.getElementById("div32").style.top = "0px";

        if (document.getElementById("div32").style.top == "0px")
        {
            document.getElementById("div32").style.transition = "100ms linear";
        }
    }, 300);

    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div30").innerHTML = iconArray[iconRandom];

        document.getElementById("div30").style.transition = "0s";

        document.getElementById("div30").style.top = "-100px";
        document.getElementById("div34").style.top = "300px";
        document.getElementById("div33").style.top = "200px";
        document.getElementById("div32").style.top = "100px";
        document.getElementById("div31").style.top = "0px";

        if (document.getElementById("div31").style.top == "0px")
        {
            document.getElementById("div31").style.transition = "100ms linear";
        }
    }, 400);

    
    setTimeout(function()
    {
        let iconRandom = Math.floor(Math.random() * 5);
        document.getElementById("div34").innerHTML = iconArray[iconRandom];

        document.getElementById("div34").style.transition = "0s";

        document.getElementById("div34").style.top = "-100px";
        document.getElementById("div33").style.top = "300px";
        document.getElementById("div32").style.top = "200px";
        document.getElementById("div31").style.top = "100px";
        document.getElementById("div30").style.top = "0px";

        if (document.getElementById("div30").style.top == "0px")
        {
            document.getElementById("div30").style.transition = "100ms linear";
        }
    }, 500);
}





function buttonStop()
{
    clearInterval(myInterval);

    setTimeout(function()
    {
        clearInterval(myInterval2);


        setTimeout(function()
        {
            clearInterval(myInterval3);


            setTimeout(function()
            {

            
            result1 = document.getElementById("div11").innerHTML;
            result2 = document.getElementById("div21").innerHTML;
            result3 = document.getElementById("div31").innerHTML;

            //result1 = '<i class="fas fa-crown"></i>';
            //result2 = '<i class="fas fa-crown"></i>';

            // console.log(result1);
            // console.log(result2);
            // console.log(result3);


            let crown = '<i class="fas fa-crown" aria-hidden="true"></i>';
            let bell = '<i class="fas fa-bell" aria-hidden="true"></i>';
            let anchor = '<i class="fas fa-anchor" aria-hidden="true"></i>';
            let horse = '<i class="fas fa-chess-knight" aria-hidden="true"></i>';
            let carrot = '<i class="fas fa-carrot" aria-hidden="true"></i>';

            let award = document.getElementById("score").innerHTML;
            let newScore = parseInt(award);


            if (result1 == result2)
            {

                if ( result1 == result2 && result2 == result3)
                {
                    if (result1 == crown)
                    {
                        newScore = newScore + 1000;
                    }
                    else if (result1 == bell)
                    {
                        newScore = newScore + 500;
                    }
                    else if (result1 == anchor)
                    {
                        newScore = newScore + 200;
                    }
                    else if (result1 == horse)
                    {
                        newScore = newScore + 100;
                    }
                    else if (result1 == carrot)
                    {
                        newScore = newScore + 50;
                    }
                }


                else if (result1 == crown)
                {
                    newScore = newScore + 100;
                }
                else if (result1 == bell)
                {
                    newScore = newScore + 50;
                }
                else if (result1 == anchor)
                {
                    newScore = newScore + 25;
                }
                else if (result1 == horse)
                {
                    newScore = newScore + 15;
                }
                else if (result1 == carrot)
                {
                    newScore = newScore + 10;
                }
            }
            if (result1 == result3)
            {

                if ( result1 == result2 && result2 == result3)
                {
                    if (result1 == crown)
                    {
                        newScore = newScore + 1000;
                    }
                    else if (result1 == bell)
                    {
                        newScore = newScore + 500;
                    }
                    else if (result1 == anchor)
                    {
                        newScore = newScore + 200;
                    }
                    else if (result1 == horse)
                    {
                        newScore = newScore + 100;
                    }
                    else if (result1 == carrot)
                    {
                        newScore = newScore + 50;
                    }
                }


                else if (result1 == crown)
                {
                    newScore = newScore + 100;
                }
                else if (result1 == bell)
                {
                    newScore = newScore + 50;
                }
                else if (result1 == anchor)
                {
                    newScore = newScore + 250;
                }
                else if (result1 == horse)
                {
                    newScore = newScore + 15;
                }
                else if (result1 == carrot)
                {
                    newScore = newScore + 10;
                }
            }
            if (result2 == result3)
            {

                if ( result1 == result2 && result2 == result3)
                {
                    if (result1 == crown)
                    {
                        newScore = newScore + 1000;
                    }
                    else if (result1 == bell)
                    {
                        newScore = newScore + 500;
                    }
                    else if (result1 == anchor)
                    {
                        newScore = newScore + 200;
                    }
                    else if (result1 == horse)
                    {
                        newScore = newScore + 100;
                    }
                    else if (result1 == carrot)
                    {
                        newScore = newScore + 50;
                    }
                }


                else if (result2 == crown)
                {
                    newScore = newScore + 100;
                }
                else if (result2 == bell)
                {
                    newScore = newScore + 50;
                }
                else if (result2 == anchor)
                {
                    newScore = newScore + 25;
                }
                else if (result2 == horse)
                {
                    newScore = newScore + 15;
                }
                else if (result2 == carrot)
                {
                    newScore = newScore + 10;
                }
            }


            document.getElementById("score").innerHTML = newScore; 



            }, 500);
        }, 500);
    }, 500);
}












