$(document).ready(function () {

  $(document).submit(function (event) {
    event.preventDefault();
    // get the value of the input box using jQuery
    let itemInput = $("[name='item-input']");
    let itemValue = itemInput.val();

    //check that user has input a value before proceeding
    if (itemValue.length !== 0) {
      //create new item
      $(".todo-list").append("<li><input type='checkbox'><label>" + itemValue + " </label></li>");
      // clear user input field
      itemInput.val('');

      //set up toggle on check box click
      $(":checkbox").change(function (event) {
        let completedItem = $(this).siblings("label").text();

        if ($(this).is(':checked')) {

          $(".completed-list").append("<li> " + completedItem + " </li>");
          $(".completed-list").last().css("color", "blue");
          $(this).prop("checked", false);
          $(this).parent().remove();
        }

      }) // checkbox event function

    }
  }) // form submit
}) // document ready