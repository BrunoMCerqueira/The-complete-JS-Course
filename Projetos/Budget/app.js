
// BUDGET CONTROLLER
var budgetController = (function(){

  var Income = function(id, description, value) {
    this.id = id,
    this.description = description,
    this.value = value
  };



  var Expense = function(id, description, value) {
    this.id = id,
    this.description = description,
    this.value = value,
    this.percentage = -1
  };

  Expense.prototype.calcPercentage = function(totalIncome){

    if (totalIncome > 0) {
      
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function(){
    return this.percentage;
  };

  var calculateTotal = function(type) {
    var sum = 0;

    data.allItems[type].forEach(function(cur){
      sum = sum + cur.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      expense: [],
      income: []
    },
    totals: {
      expense: 0,
      income: 0
    },
    budget: 0,
    percentage: -1
  }

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      // Create new ID
      if(data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on type
      if(type === 'expense') {
        newItem = new Expense(ID, des, val);
      } else if(type === 'income') {
        newItem = new Expense(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    deleteItem: function(type, id) {
      var ids, index;

      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if(index !== -1){
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function(){

      // calculate total income and expenses
      calculateTotal('expense');
      calculateTotal('income');

      // calculate the budget: inc - exp
      data.budget = data.totals.income - data.totals.expense;
      // calculate the percentage of income spent
      if(data.totals.income > 0) {
        data.percentage = Math.round((data.totals.expense / data.totals.income * 100));
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function(){

      data.allItems.expense.forEach(function(cur){
        cur.calcPercentage(data.totals.income);
      });

    },

    getPercentages: function(){
      var allPerc = data.allItems.expense.map(function(cur){
        return cur.getPercentage();
      });
      return allPerc;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalIncome: data.totals.income,
        totalExpense: data.totals.expense,
        totalpercentage: data.percentage
      }
    },

    testing: function() {
      console.log(data);
    }
  }
 
})();



// UI CONTROLLER
var UIController = (function(){

  var DOMstring = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: 'income__list',
    expenseContainer: 'expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };

  var formatNumber = function(num,   type){
      var numSplit, int, dec;

      num = Math.abs(num);
      num = num.toFixed(2);
      numSplit = num.split('.');

      int = numSplit[0];
      if(int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
      }
      dec = numSplit[1];

      return (type === 'expense' ? sign = '-' : sign = '+') + '' + int + '.' + dec;
  };

  var nodeListForEach = function(list, callback) {
    for(var i = 0; i < list.length; i++){
      callback(list[i], i);
    }
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstring.inputType).value,
        description: document.querySelector(DOMstring.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstring.inputValue).value)
      }

    },

    addListItem: function(obj, type) {
      var html, newHtml, element;

      // Create HTML string with placehokder text
      if (type === 'income') {
        element = DOMstring.incomeContainer;
        html ='<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      } else if (type === 'expense') {
        element = DOMstring.expenseContainer;
        html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }
      
      // Replace placeholder with data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      // Inser the HTML into DOM
      var d1 = document.getElementById(element);
      d1.insertAdjacentHTML('beforeend', newHtml);

    },

    deleteListItem: function(selectorId) {

      var el = document.getElementById(selectorId);
      el.parentNode.removeChild(el);

    },

    clearFields: function() {
      var fields, fieldsArr;

      fields = document.querySelectorAll(DOMstring.inputDescription + ', ' + 
      DOMstring.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);      

      fieldsArr.forEach(function(curr, ind, arr){
        curr.value = "";
      })

      fieldsArr[0].focus();
    },

    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(DOMstring.expensesPercLabel);
      
      

      nodeListForEach(fields, function(current, index){

        if(percentages[index] > 0){
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });


    },

    displayMonth: function() {
      var months, year, month, now;

      now = new Date();

      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMstring.dateLabel).textContent = months[month] + ' ' + year;


    },

    displayBudget: function(obj) {
      var type;
      obj.budget > 0 ? type = 'income' : type = 'expense';

      document.querySelector(DOMstring.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstring.incomeLabel).textContent = formatNumber(obj.totalIncome, 'income');
      
      document.querySelector(DOMstring.expensesLabel).textContent = formatNumber(obj.totalExpense, 'expense');

      if(obj.totalpercentage > 0) {
        document.querySelector(DOMstring.percentageLabel).textContent = obj.totalpercentage + '%';
      } else {
        document.querySelector(DOMstring.percentageLabel).textContent = '---';
      }


    },    

    changedType: function(){

      var fields = document.querySelectorAll(
        DOMstring.inputType + ',' +
        DOMstring.inputDescription + ',' +
        DOMstring.inputValue
      );

      nodeListForEach(fields, function(cur) {
        cur.classList.toggle('red-focus');
      });

      document.querySelector(DOMstring.inputBtn).classList.toggle('red');
    },

    getDOMString: function() {
      return DOMstring;
    }
  };

})();



// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

  var setupEventListener = function(){

    var DOM = UICtrl.getDOMString();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.wich === 13) {
        ctrlAddItem();
      }
    });
    
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
  };

  var updatePercentages = function() {


    // 1. Calculate the percentages.
    budgetCtrl.calculatePercentages();

    // 2. Read percentages from budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with new percentages.
    UICtrl.displayPercentages(percentages);

  };
  
  var updateBudget = function(){

    // 1. Calculate the budget.
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI.
    UICtrl.displayBudget(budget);

  }

  var ctrlAddItem = function() {
    var input, newItem
    // 1. Get input data.
    input = UICtrl.getInput();
    
    if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller.
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI.
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields.
      UICtrl.clearFields();

      // 5. Calculate and update budget
      updateBudget();  
    
      // 6. Calculate and update percentages
      updatePercentages();
    }
    
  };

  var ctrlDeleteItem = function (event){
    var itemId, splitId, type, ID;

    itemId = event.target.parentNode.parentNode.parentNode.id;

    

    if(itemId) {

      splitId = itemId.split('-');
      type = splitId[0];
      ID = parseInt(splitId[1]);


      // 1. Delete from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemId);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();

    }


  };
  return {

    init: function(){
      console.log('Application has started.');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalIncome: 0,
        totalExpense: 0,
        totalpercentage: -1
      });
      setupEventListener();
    }
  };
  

})(budgetController, UIController);



controller.init();