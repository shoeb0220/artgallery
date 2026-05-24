fetch("/artworks")

.then(res => res.json())

.then(data => {

const gallery =
document.querySelector(".gallery");

gallery.innerHTML = "";

data.forEach(art => {

gallery.innerHTML += `

<div>

<img src="images/${art.image}">

<p><b>${art.title}</b></p>

<p>
By: ${art.student}
</p>

<p>
Class: ${art.class}
</p>

</div>

`;

});

});