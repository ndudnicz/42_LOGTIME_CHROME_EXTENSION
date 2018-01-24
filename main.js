var data = JSON.parse(document.getElementsByClassName('container-inner-item boxed')[2].childNodes[3].getAttribute('data-location-graph'))
let h = {}
for (let i in data) {
	var d = new Date(i), a = data[i].split(':');
	if (d.getMonth() != undefined) {
		var m = d.getMonth() + 1;
		if (!h[m]) {h[m] = 0;}
		h[m] += (parseInt(a[0]) + (parseInt(a[1]) / 60));
	}
}
var M = ['', 'jan', 'feb', 'mar', 'apr', 'may', 'jub', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
for (let i in h) {
	let p = document.createElement('span');
	p.innerHTML =M[i] + ': ' + Math.floor(h[i]) + 'h; ';
	document.getElementsByClassName('container-inner-item boxed')[2].appendChild(p);
}
