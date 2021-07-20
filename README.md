<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI CALCULATOR</title>
    <link rel="stylesheet" type="text/css" href="BMI.css">
    <script type="text/javascript" src="BMI.js"></script>
  </head>

<body>
	<h1>BMI CALCULATOR</h1>

	<div class="container">
        <h2>ENTER YOUR AGE:</h2>
	<input type="text" id="age"><br><br>

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
