function ProductMaker(imgPath, pTitle, pType, pPrice){
	this.imgPath = imgPath
	this.pTitle = pTitle
	this.pType = pType
	this.pPrice = pPrice
}

// Create product objects
const shoe1 = new ProductMaker('img/atmos.jpg', 'Air max 1', 'Atmos', "$300");
const shoe2 = new ProductMaker('img/blackcement3.jpg', 'Air Jordan 3', 'Black Cement', "$200");
const shoe3 = new ProductMaker('img/bred4.jpg', 'Air Jordan 4', 'Bred', "$200");
const shoe4 = new ProductMaker('img/spacejam.jpg', 'Air Jordan 11', 'Space Jam', "$250");
const shoe5 = new ProductMaker('img/tripleblack.jpg', 'Ultra Boost 3.0', 'Triple Black', "$250");
const shoe6 = new ProductMaker('img/teamorange.jpg', 'Air Max 95', 'Team Orange', "$180");
const shoe7 = new ProductMaker('img/metallic.jpg', 'Air Jordan 5', 'Metallic', "$250");
const shoe8 = new ProductMaker('img/royal.jpg', 'Air Max 1', 'Royal', "$200");

// Create an empty array
let pArray = [];

// Use javascript to put objects into an the array
pArray.push(shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8);

// Double check to see if the array has all of our products
// console.log(pArray)

for(i = 0; i < pArray.length; i++){
	// console.log(pArray[i]);
	// ++++++++CREATE ELEMENTS+++++++
	// create div for single item
	let pTile = document.createElement("div");
	// Create img tag that goes into pTile
	let pImg = document.createElement("img");
	let pTitle = document.createElement("a");
	let pType = document.createElement("p");
	let pPrice = document.createElement("p");
	// ++++++PUT TEXT IN ELEMENTS ++++++
	// Plug in imgPath to pImg src
	pImg.src = pArray[i].imgPath;
	// Title
	pTitle.innerHTML = pArray[i].pTitle;
	// Plug in pArray[i].pType to pType
	pType.innerHTML = pArray[i].pType;
	// Price
	pPrice.innerHTML = pArray[i].pPrice;

	// Adding hyperlink to pTitle
	pTitle.href = "https://www.flightclub.com/";

	// Double checking the tags and content
	console.log(pImg, pTitle, pType, pPrice,)

	// +++++++COMBINE ALL ELEMENTS++++++
	// Put the image in the pTile
	pTile.appendChild(pImg);
	// pTitle
	pTile.appendChild(pTitle);
	// pPrice
	pTile.appendChild(pType);
	// pSize
	pTile.appendChild(pPrice);

	// Add class of img-fluid
	pImg.className = "img-fluid";
	pTitle.className = "title";
	pType.className = "type";
	pPrice.className = "price";
	// Add bootstrap class to EACH file
	pTile.className = "col-sm-3 border";

	// Send pTile to parent on HTML
	document.getElementById('productSection').appendChild(pTile)

}
