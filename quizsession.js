

const urlParams = new URLSearchParams(window.location.search);
const tparam = urlParams.get('t'); // list of techniques
const d = urlParams.get('d'); // date

const arr = tparam.split(",");

console.log(arr.length);

console.log(arr);

var sct = "";
for (let i = 0; i < arr.length; i++) {
	console.log(i);
	console.log(questions[arr[i]-1][1]);
	sct += `<li class="slide">
		<video src="assets/`+questions[arr[i]-1][0]+`" class="myvideo" alt="..." controls ></video>
		<p>&nbsp;`+d+`</p>
		  <details><summary class="btn">Quelle est cette technique ?</summary>
			  <h1>`+questions[arr[i]-1][1]+`</h1>
		  </details>
	</li>`;
}

sct += `<li class="slide">
		<div style="margin-top:1rem"><a href="index.html" class="btn">Rejouer</a></div>
	</li>`;


var sc = document.getElementById("slides-container");
sc.innerHTML = sct;

  