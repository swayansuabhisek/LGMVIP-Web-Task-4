let screen = document.getElementById("screen");
		function display(num){
			screen.value += num; 
		}
		function equal(){
			
			try{
				screen.value = eval(screen.value);
			}
			catch{
				
				alert("Invalid Operation");

			}
		}
		function allclear(){
			screen.value = "";
		}
		function del(){
			screen.value = screen.value.slice(0,-1);
		}