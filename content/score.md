---
title: "Score"
---

<script>
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "dark1",
	title:{
		text: "Plati engleski 200, plati psovku 100"
	},
	axisY: {
		title: "Dinara"
	},
	data: [{
		type: "column",
		showInLegend: false,
		legendMarkerColor: "white",
		legendText: "MMbbl = one million barrels",
		dataPoints: [
			{ y: 0, label: "Ivana" },
			{ y: 100,  label: "Igor" },
			{ y: 0,  label: "Vesna" },
			{ y: 0,  label: "Mita" },
			{ y: 200,  label: "Jovana" },
			{ y: 0, label: "Nino" },
			{ y: 0,  label: "Stefan" },
			{ y: 0,  label: "Nikola" }
		]
	}]
});
chart.render();

}
</script>

{{% section red %}}

# Team Score

<div id="chartContainer" style="height: 500px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

{{% /section %}}
