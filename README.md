<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="BMI.css">
</head>
  
  
<body>
	<script>
		function calBMI() {
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
	</script>
	
	
	
	
	
	
	
	
	
	
	
	
	
	<h1>BMI CALCULATOR</h1>

	<div class="container">
        <h2>ENTER YOUR AGE:</h2>
	<input type="text" id="age" value=""><br><br>

	<h2>ENTER YOUR WEIGHT:</h2>
	<input type="text" id="a" placeholder="IN KG" value=""><br><br>

	<h2>ENTER YOUR HEIGHT:</h2>
	<input type="text" id ="b" placeholder="IN CM" value=""><br><br>

	<button type="button"  onclick="calBMI()" id="c">Calculate your BMI</button>
	<h3 id="S1"></h3>
	<h3 id="S2"></h3>

	</div>

</body>
</html>
