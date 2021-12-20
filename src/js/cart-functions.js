function calculateChange(total, payment) {
    let change = (payment-total);
    let changeReturn = +change.toFixed(2);
    return changeReturn;
};

function isSufficientPayment(total, payment){
    //jeseekia way
    return payment >= total; 
    //my way
    // if (total <= payment) {
    //     return true;
    // }else{        
    //     return false;
    // }
};

function calculateTotal(itemsArray){
    let total = 0;
    for(let i=0; i<itemsArray.length; i++){
        total += itemsArray[i].price;

    }

    return total;

};

function addItem(itemsArray, name, price){
    itemsArray.push({"name": name, "price": price})
    // return [{name: "Beans", price: 3}]
};

function removeItem(itemsArray, index){
    itemsArray.splice(index, 1); //"1" is the number of objects to delete NOT the index number.
    
};



module.exports = {
    calculateChange:calculateChange,
    calculateTotal:calculateTotal,
    isSufficientPayment:isSufficientPayment,
    addItem:addItem,
    removeItem:removeItem
}