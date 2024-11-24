getParameter = (key) => { 
    address = window.location.search 
    parameterList = new URLSearchParams(address) 
    return parameterList.get(key) 
} 
var questions2;
// NomFichierSvg, prononciation, hiragana, Consonne, Voyelle, Catégorie
// ['Hiragana_letter_A.svg', 'A', 'あ', 'A', 'A', 'vk'],
// ['Hiragana_letter_Ba.svg', 'Ba', 'ば', 'B', 'A', ''],

const cat = getParameter('cat');
if (getParameter('cat')!== null) {
	console.log(cat);
	if (cat=="tous") {
		questions2 = questions;
	}else{
	questions2 = questions.filter((questions) => questions[5] == cat);
	}
	console.log(questions2);
	
}else{
	questions2 = questions;
}


console.log(questions2.length);
var arr = [];
while(arr.length < nb){
    var r = Math.floor(Math.random() * questions2.length) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

var sct = "";
for (let i = 0; i < arr.length; i++) {
	//console.log(i);
	//console.log(questions[arr[i]-1][1]);
	sct += `<li class="slide">
		<img src="assets/`+questions2[arr[i]-1][0]+`" class="myhira" alt="..." controls ></img>
		<p>&nbsp;</p>
		  <details><summary class="btn">Prononciation ?</summary>
			  <h1 style="font-size:xx-large">`+questions2[arr[i]-1][1]+`</h1>
			  <br/>
						  <details><summary>Exemple</summary>
			  <h1>`+questions2[arr[i]-1][6]+` : `+questions2[arr[i]-1][7]+`</h1>
			  </details>
		  </details>
	</li>`;
}

sct += `<li class="slide">
		<div style="margin-top:1rem"><a href="index.html" class="btn">Rejouer</a></div>
	</li>`;


var sc = document.getElementById("slides-container");
sc.innerHTML = sct;

  