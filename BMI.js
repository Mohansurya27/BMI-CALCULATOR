 

function calBMI()

 {
        var x=document.getElementById("a").value;
        var y=document.getElementById("b").value;
        var bmi=(x/y**2)*10**4;
        var m=bmi.toFixed(2);
        
        document.getElementById("S1").innerHTML = "YOUR BMI IS "+m;
        if(m<18.5)
        {
          document.getElementById("S2").innerHTML = "YOU ARE UNDER WEIGHT";
        }
        if(m>=18.5 && m<25)
        {
          document.getElementById("S2").innerHTML = "YOU ARE NORMAL WEIGHT";
        }
        if(m>=25 && m<30)
        {
          document.getElementById("S2").innerHTML = "YOU ARE OVER WEIGHT";
        }
        if(m>30)
        {
          document.getElementById("S2").innerHTML = "YOU ARE OBESE";
        }
      }
