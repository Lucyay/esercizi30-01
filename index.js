const fetch = require("node-fetch")
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
	console.log("Id dei post di utente con id 4:")
	data.forEach(post => {
		if (post.userId===4){
			console.log(post.id)
		}})
	return data
})
.then(data => {
	console.log("Id dei post di utente con id dispari:")
	data.forEach(post => {
		if (post.userId%2===0){
			console.log(post.id)
		}
	})
	return data
})
.then(data => {
	console.log("Id dei post con numero pari di parole nel titolo")
	data.forEach(post => {
		if (post.title.split(" ").length %2 ===0){
			console.log(post.id)
		}
	})
	return data
})
.then(data => {
	console.log("Id dei post con numero di lettere nel body multiplo di 3")
	data.forEach(post => {
		if ((post.title.split("").length - post.title.split(" ").length + 1) % 3 === 0){
			console.log(post.id)
		}
	})
	return data
})
.then(data => {
	let body = []
	console.log("Commenti con titoli che iniziano per s:")
	data.forEach(post => {
		if (post.title.charAt(0) === "s"){
			post.body = post.body.replace(/(\r\n|\n|\r)/gm, "")
			body.push(post.body)
		}
	})
	console.log(body.join(", "))
})