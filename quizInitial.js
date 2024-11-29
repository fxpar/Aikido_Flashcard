
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
	// check extension
	const myAsset = questions[arr[i]-1][0];
	var myAssetHtml='';
	const ext = myAsset.substr(myAsset.length -3);
	if (ext == 'mp4') {
		myAssetHtml = '<video src="assets/'+myAsset+'" class="myvideo" alt="..." controls ></video>';
	}else{
		myAssetHtml ='<img src="assets/'+myAsset+'" class="myvideo" alt="..." controls ></img>';
	}
	sct += `<li class="slide">
	`+myAssetHtml+`
		<p>&nbsp;</p>
		  <details><summary class="btn">Quelle est cette situation de départ ?</summary>
			  <h1>`+questions[arr[i]-1][1]+`</h1>
		  </details>
	</li>`;
}

sct += `<li class="slide">
		<div style="margin-top:1rem"><a href="index.html" class="btn">Rejouer</a></div>
	</li>`;


var sc = document.getElementById("slides-container");
sc.innerHTML = sct;

  