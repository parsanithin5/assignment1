let ele = document.createElement("h1");
ele.innerText = "dynamic creation of html element";
//ele.id = "demmo"
ele.setAttribute("id" , "demo")
console.log(ele);
//ele.removeAttribute("id");
 document.body.appendChild(ele);

 let image = document.createElement("img");
 image.src="./654321.jpg";
 console.log(image);

 document.body.appendChild(image)
 