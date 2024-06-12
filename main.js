const text = document.querySelector('.textc p');
text.innerHTML = text.innerHTML.split("").map(
	(char, i) =>
		`<span style="transform:rotate(${i * 7.3}deg)">${char}</span>`
).join("")