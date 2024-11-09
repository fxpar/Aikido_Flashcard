
console.log(questions.length);
var arr = [];
while(arr.length < nb){
    var r = Math.floor(Math.random() * questions.length) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

var sct = "";
for (let i = 0; i < arr.length; i++) {
	console.log(i);
	console.log(questions[arr[i]-1][1]);
	sct += `<li class="slide">
		<video src="assets/`+questions[arr[i]-1][0]+`" class="myvideo" alt="..." controls ></video>
		<p>&nbsp;</p>
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

  