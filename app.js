//budget controller
var budgetController = (function () {
  var x = 23;
  // private add function
  var add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      return b;
    },
  };
})();

//ui controller
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__type",
    inputBtn: ".add__btn",
  };

  return {
    getinput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return DOMstrings;
    },
  };
})();

// GLOBAL APP Controller
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
        console.log(DOM);
      }
    });
  };

  var ctrlAddItem = function () {
    // Get filed input data
    var input = UICtrl.getinput();
    console.log(input);
    //add the item to the budget controller
    //add the new item to the ui
    //calculate the budget
    //display the budget
  };

  return {
    init: function () {
      console.log("Application has started.");
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
