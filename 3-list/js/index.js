document.addEventListener("DOMContentLoaded", function (e) {


  document.addEventListener("submit", function (event) {

    event.preventDefault();

    let itemInput = document.querySelector("input[name='item-input']");
    let itemValue = itemInput.value;
    //console.log("itemValue is " + itemValue);

    //test to be sure that user entered a value
    if (itemValue.length !== 0) {
      //create new item
      let newItemEl = document.createElement("li");  // Create list item
      let newCheckbox = document.createElement("input"); //create checkbox
      newCheckbox.setAttribute("type", "checkbox");
      newItemEl.appendChild(newCheckbox); // add checkbox to list item
      let newLabel = document.createElement("label"); //create label
      newLabel.textContent = itemValue;
      newItemEl.appendChild(newLabel); //add label to list item

      //get a reference to list and append list item
      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);
      //clear the user input
      itemInput.value = '';

      //add a click event listener that serves a toggle
      newCheckbox.addEventListener("click", function (event) {
        //        console.log("changed this this checkbox: " + this.nextSibling.textContent + "with this textDecoration" + this.nextSibling.style.textDecoration);
        let completedItem = document.createElement("li");
        completedItem.textContent = this.nextSibling.textContent;
        document.getElementById("completed-list").appendChild(completedItem);
        this.parentElement.remove();

        /*
        if (this.nextSibling.style.textDecoration == "line-through") {
          // TODO set the textDecoration style on this.nextSibling to blank (empty string)
          this.nextSibling.style.textDecoration = '';
        } else {
          this.nextSibling.style.textDecoration = "line-through";
        }

        */
      });

    }
  }) // form submit
}) // document ready

