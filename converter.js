var i=0;
		var o=0;

		function Convert()
		{
			var temp1=document.getElementById("scale").value;
			console.log(temp1);
			switch(temp1)
			{
				case 'F':
							i=document.getElementById("input").value
							if(i=='')
							{
								alert("Enter value to be converted");
								break;
							}
							o=(((i*9)/5)+32);

							document.getElementById("output").value=o;
							document.getElementById("a").style.display = "block";
							break;
				case 'C':
							i=document.getElementById("input").value
							if(i=='')
							{
								alert("Enter value to be converted");
								break;
							}
							o=(((i-32)*5)/9);
							document.getElementById("output").value=o;
							document.getElementById("a").style.display = "block";
							break;

				case 'N':
						    alert("Select the conversion scale.");
						    break;
			}
		}