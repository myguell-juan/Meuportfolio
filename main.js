const text = document.querySelector('.textc p');
text.innerHTML = text.innerHTML.split("").map(
	(char, i) =>
		`<span style="transform:rotate(${i * 5.4}deg)">${char}</span>`
).join("")

window.addEventListener("scroll", function(){
	let header = document.querySelector("#cabeca")
	header.classList.toggle('rolagem', window.scrollY > 0)
})

gsap.fromTo('.loading-page', 
	{ opacity: 1 },
	{ 
	  opacity: 0, 
	  duration: 1.5, 
	  delay: 3.5,
	  onComplete: () => {
		document.querySelector('.loading-page').style.display = 'none';
	  }
	}
  );

gsap.fromTo('.logo-name', {
	y:50,
	opacity:0
},{
	y:0,
	opacity:1,
	duration:2,
	delay:.5,
})