let toDoList = document.querySelector(".to_do_list");
let addPannel = document.querySelector('#add_pannel');
let thingContainer = document.querySelector('.thing_container')
let add = document.querySelector(".add");
let addButton = document.querySelector('#add_button');
let find = document.querySelector(".find")
let findButton = document.querySelector("#find_button");
let addForm = document.querySelector("#add_form");
let newelem = document.createElement("li");
let findForm = document.querySelector("#find_form")

//_________Add_functionality_________//



//______Add_button_functionality______//

let storage = [];
let addPannel_wiev = 0; 


addButton.onclick = () => {
	let newElement = document.createElement("li");
	newElement.setAttribute("done", "false");
	newElement.innerHTML = `<span id="todoNumber">${storage.length + 1}.</span><span id="todoText">${addForm.value}</span>`;
	thingContainer.appendChild(newElement);

	let deleteButton = document.createElement('p');
	deleteButton.textContent = "delete";
	deleteButton.style.cssText = "background-color: gray; color: red; cursor: default;";

	let doneBox = document.createElement("input");
	doneBox.setAttribute("id", "doneBox");
	doneBox.setAttribute("type", "checkbox");
	newElement.appendChild(doneBox);


	deleteButton.onclick = function(){
		let elementsCount = storage.length;
		newElement.style.display = "none";

		for(let i = 0; i < storage.length; i++){
			if(storage[i] == newElement){
				storage.splice(i, 1);
			}
		}

		for(let i = 0; i < elementsCount - 1; i++){
			storage[i].querySelector("#todoNumber").textContent = `${i + 1}.`;
		}
	}

	doneBox.onclick = function(){
		if(newElement.querySelector("#doneBox").checked){
			newElement.querySelector("#todoText").style.cssText = "text-decoration: line-through black";
		}
		else{
			newElement.querySelector("#todoText").style.textDecoration = "none";
		}
	}

	newElement.appendChild(deleteButton);
	deleteButton.style.marginLeft = "80%";
	storage.push(newElement);


}


//_______Find_functionality__________//

let find_wiev = 0; 

find.onclick = () => {
	if (find_wiev === 0) {
		find_form.style.zIndex = '1';
		find_form.style.width = "80px";
		find_form.style.opacity = "0.8";
		findButton.style.marginRight = "80px";
		findButton.style.opacity = "0.9";
		find_wiev = 1;
	}
	else {
		find_form.style.width = "1px";
		find_form.style.opacity = "0";
		findButton.style.marginRight = "0px";
		findButton.style.opacity = "0";
		find_wiev = 0;
	}
}


findButton.onclick = () => {
  for (let i = 0; i < storage.length; i++) {
    if (storage[i].textContent.indexOf(findForm.value) >= 0) {
      storage[i].style.display = "block";
    } else {
      storage[i].style.display = "none";
    }
  }
};

findForm.addEventListener("keyup", function(){
	findButton.onclick();
})