var btn=document.getElementById("btn");
btn.addEventListener('click',function () {
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;
    if(height=='' || weight=='')
    {
        alert("Please fill out the input fields");
        return;
    }



    //BMI =weight in KG/(height im m * height in m)
    height=height/100;
    let BMI=(weight/(height*height));
    BMI=BMI.toFixed(2);

    document.querySelector("#result").innerHTML=BMI;

    let status='';
    if(BMI<18.5)
    {
        status="Underweight";
    }
    if(BMI>=18.5 && BMI<25)
    {
        status="Healthy";
    }
    if(BMI>=25 && BMI<30)
    {
        status="Overweight";
    }
    if(BMI>=30)
    {
        status="Obese";
    }

    document.querySelector(".comment").innerHTML=`Comment:you are<span id="comment">${status}</span>`
    
})