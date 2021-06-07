var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");

		var grd = ctx.createRadialGradient(70, 70, 5, 50, 150, 150);
		grd.addColorStop(0, "yellow");
		grd.addColorStop(1, "orange");

		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, 250, 200);