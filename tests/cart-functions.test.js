const cartFunctions = require("../src/js/cart-functions.js");
const { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem} = require("../src/js/cart-functions.js");
const {formatCurrency} = require("../src/js/money-functions.js");

describe("calculateChange", () => {
  test("return change amount", function () {
    expect(calculateChange(5, 6)).toEqual(1);
  });

  test("total 12.30, payment 13.03 returns 0.73", function () {
    expect(calculateChange(12.30, 13.03)).toBeCloseTo(0.73);
  });

  test("return change amount", function () {
    expect(calculateChange(100, 200)).toEqual(100.00);
  });
});

describe("isSufficientPayment", () => {
  test("do i have enough moneys", function () {
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });

  test("do i have enough moneys", function () {
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });

  test("do i have enough moneys", function () {
    expect(isSufficientPayment(3, 3)).toEqual(true);
  });
});

describe("calculateTotal", () => {
  test("one item priced 4.99 returns 4.99", function(){
    expect(calculateTotal([{name:"Jelly", price:4.99}])).toBeCloseTo(4.99);
  });
  
  test("three items priced 3.50,12.99,0.03 returns 16.52", function(){
    expect(calculateTotal([
      {name:"Jelly", price:3.50},
      {name:"Ground Turkey", price:12.99},
      {name: "Misc", price: 0.03}
    ])).toBeCloseTo(16.52);
  });

  test("one item priced 4.99 returns 4.99", function(){
    expect(calculateTotal([])).toBeCloseTo(0);
  });

  test("three items priced 3.50,12.99,0.03 returns 16.52", function(){
    expect(calculateTotal([
      {name:"Jelly", price:3.50},
      {name:"Ground Turkey", price:12.99}
     
    ])).toBeCloseTo(16.49);
  });

});

// describe("addItem", () => {
//   let results = [{name: "Beans", price: }];
//   cartFunctions.addItem(results, "Beans", 3);

//   //call function
//   test("processing an empty array adds one item", function(){
//     expect(results).toEqual([
//       {name: "Beans", price: 3},
//       {name: "Sugar", price: 2}
//     ]);
//   });





describe("removeItem with class", () => {
  test("remove item from array", function () {
    let array = [
      {name: "Beans", Price: 3,},
      {name: "Sugar", Price: 2,},
      {name: "Taco", Price: 4,}
    ];
    removeItem(array, 0)
    expect(array).toEqual([
      {name: "Sugar", Price: 2,},
      {name: "Taco", Price: 4,}
    ]);
  });

  test("remove last item from array", function () {
    let array = [
      {name: "Beans", Price: 3,},
      {name: "Sugar", Price: 2,},
      {name: "Taco", Price: 4,}
    ];
    removeItem(array, 2)
    expect(array).toEqual([
      {name: "Beans", Price: 3,},
      {name: "Sugar", Price: 2,}
    ]);
  });

  test("remove middle item from array", function () {
    let array = [
      {name: "Beans", Price: 3,},
      {name: "Sugar", Price: 2,},
      {name: "Taco", Price: 4,}
    ];
    removeItem(array, 1)
    expect(array).toEqual([
      {name: "Beans", Price: 3,},
      {name: "Taco", Price: 4,}
    ]);
  });

  test("remove only item from array", function () {
    let array = [
      {name: "Beans", Price: 3,}
    ];
    removeItem(array, 0)
    expect(array).toEqual([]);
  });
  
});

test("remove last item from array", function () {
    let array = [
      {name: "Beans", Price: 3,},
      {name: "Sugar", Price: 2,},
      {name: "Taco", Price: 4,}
    ];
    removeItem(array, 1)
    expect(array).toEqual([
      {name: "Beans", Price: 3,},
      {name: "Taco", Price: 4,}
    ]);
  });

  describe("formatCurrency", () => {
    test("given amount 0 get back $0.00", function () {
      expect(formatCurrency(0)).toEqual("$0.00");
    });

   
      test("given amount 0 get back $1.00", function () {
        expect(formatCurrency(1)).toEqual("$1.00");
      });

      test("given amount 0 get back $1.50", function () {
        expect(formatCurrency(1.50)).toEqual("$1.50");
      });

      test("given amount 0 get back $0.01", function () {
        expect(formatCurrency(0.01)).toEqual("$0.01");
      });

      test("given amount 527.6789 get back $527.68", function () {
        expect(formatCurrency(527.6789)).toEqual("$527.68");
      });

      test("given amount -1 get back -$1.00", function () {
        expect(formatCurrency(-1)).toEqual("-$1.00");
      });

  });

  //WORK ON GET COINS? 
  //can be looked at tomorrow --- maybe fun homework




// describe("calculateTotal", () => {
//   test("do i have enough moneys", function () {
//     expect(calculateTotal([{ name: "Jelly", price: 4.99 }]).toBeCloseTo(4.99);
//   });

//   test("do i have enough moneys", function () {
//     expect(calculateTotal(
//       [{ name: "Jelly", price: 3.50 },
//       { name: "Ground Turkey", price: 12.99 },
//       { name: "Misc", price: 0.03 }]
//     )).toBeCloseTo(16.52);
//   });
// });

// describe("addItem", () => {
//   test.todo("add addItem tests here");
// });

// describe("removeItem", () => {
//   test.todo("add removeItem tests here");
// });
