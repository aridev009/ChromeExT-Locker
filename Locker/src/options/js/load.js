var dt = new Date();
		var res = window.location.href.split("#");
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		if(hex_sha512(time) == res[1]){
			console.log("Allowed!");
		}else{
			window.location = "index.html";
			console.log("Not allowed to be here!!!!");
			close();
		}