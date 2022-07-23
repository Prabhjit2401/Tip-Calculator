// var bill=document.getElementById('bill_cost').value;
document.getElementById("sml").style.visibility = "hidden";
var per=0,bill,totalTip,numOfPeople;

for(var i=0;i<5;i++)
{
    document.querySelectorAll(".btn-left")[i].addEventListener("click",respondToClick);
}
document.querySelector(".btn-left-custom").addEventListener("input",respondToClick2);
document.querySelector(".btn-left-custom").addEventListener("click",respondToClick2);
document.querySelector(".btn-right").addEventListener("click",resetFunc);
// document.querySelector(".form-control").addEventListener("input",update);

function respondToClick()
{
    for(var i=0;i<5;i++)
    {
        document.querySelectorAll(".btn-left")[i].style.backgroundColor="rgba(0,71,75,255)";
        document.querySelectorAll(".btn-left")[i].style.color= "white" ;
    }
    // if(document.querySelector(".btn-left-custom").value!="")
    // {
    //     console.log("yes");
    //     document.querySelector(".btn-left-custom").value = "";
    // }

    document.getElementById("sml").style.visibility = "visible";
    var buttonText=this.textContent;
    var l=buttonText.length;
    // console.log(l);
    // console.log(buttonText.substring(0,l-1));
    per=buttonText.substring(0,l-1);

    bill=document.getElementById('bill_cost').value;

    // console.log(bill);
    // console.log(Number(bill)+Number(((per*bill)/100)));
    totalTip = Number((per*bill)/100);
    totalBill = (Number(bill)+Number(((per*bill)/100)));

    numOfPeople = Number(document.querySelector(".num_people").value);
    console.log(numOfPeople);
    if(numOfPeople!=0)
    {
        this.style.backgroundColor = "rgba(38,194,173,255)";
        document.getElementById("sml").style.visibility = "hidden";
        document.querySelector(".tip_per_person").innerHTML = round(totalTip/numOfPeople);
        document.querySelector(".total_per_person").innerHTML = round(totalBill/numOfPeople);
    }
}

function respondToClick2()
{
    for(var i=0;i<5;i++)
    {
        document.querySelectorAll(".btn-left")[i].style.backgroundColor="rgba(0,71,75,255)";
        document.querySelectorAll(".btn-left")[i].style.color= "white" ;
    }
    // if(document.querySelector(".btn-left-custom").value!="")
    //     document.querySelector(".btn-left-custom").value = "";

    document.getElementById("sml").style.visibility = "visible";
    var per=(this.value);

    bill=document.getElementById('bill_cost').value;
    // console.log(bill);
    totalTip = Number((per*bill)/100);
    totalBill = (Number(bill)+Number(((per*bill)/100)));

    numOfPeople = Number(document.querySelector(".num_people").value);
    console.log(numOfPeople);
    if(numOfPeople!=0)
    {   
        document.getElementById("sml").style.visibility = "hidden";
        document.querySelector(".tip_per_person").innerHTML = round(totalTip/numOfPeople);
        document.querySelector(".total_per_person").innerHTML = round(totalBill/numOfPeople);
    }
}

function resetFunc()
{   
    for(var i=0;i<5;i++)
    {
        document.querySelectorAll(".btn-left")[i].style.backgroundColor="rgba(0,71,75,255)";
        document.querySelectorAll(".btn-left")[i].style.color= "white" ;
    }
    document.querySelector(".btn-left-custom").value = "";
    document.querySelector("#bill_cost").value = "";
    document.querySelector(".num_people").value = "";
    
    document.getElementById("sml").style.visibility = "hidden";
    document.querySelector(".tip_per_person").innerHTML = "0.00";
    document.querySelector(".total_per_person").innerHTML = "0.00";

}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
