function createCircleChart(
	percent,
	size,
	shape,
	backgroundColor,
	primaryColor,
	secondaryColor,
	primaryWidth,
	secondaryWidth
) {
	return `<div style="position: relative;width:${size}px;height:${size}px;margin:auto">
        <svg class="mkc_circle-chart" viewbox="0 0 36 36" width="${size}" height="${size}"
            xmlns="http://www.w3.org/2000/svg">
            <path class="mkc_circle-bg" stroke="${primaryColor}" stroke-width="${primaryWidth}"
                fill="${backgroundColor}" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="mkc_circle" stroke="${secondaryColor}" fill="${backgroundColor}" stroke-width="${secondaryWidth}"
                stroke-dasharray="${percent},100" stroke-linecap="${shape}" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:${Math.round(
			size / 5
		)}px;font-weight:bold">${percent}%</span>
    </div>`;
}

let charts = document.getElementsByClassName("circularProgressBar");

for (let i = 0; i < charts.length; i++) {
	let chart = charts[i];
	console.log(chart.dataset);
	let percent = "percent" in chart.dataset ? chart.dataset.percent : "0";
	let primaryWidth =
		"primarywidth" in chart.dataset ? chart.dataset.primarywidth : "1.5";
	let secondaryWidth =
		"secondarywidth" in chart.dataset ? chart.dataset.secondarywidth : "3";
	let size = "size" in chart.dataset ? chart.dataset.size : "100";
	let backgroundColor =
		"backgroundcolor" in chart.dataset
			? chart.dataset.backgroundcolor
			: "none";
	let shape = "shape" in chart.dataset ? chart.dataset.shape : "square";
	let primaryColor =
		"primarycolor" in chart.dataset
			? chart.dataset.primarycolor
			: "#1f1f1f";
	let secondaryColor =
		"secondarycolor" in chart.dataset
			? chart.dataset.secondarycolor
			: "#5c8df6";
	charts[i].innerHTML = createCircleChart(
		percent,
		size,
		shape,
		backgroundColor,
		primaryColor,
		secondaryColor,
		primaryWidth,
		secondaryWidth
	);
}
