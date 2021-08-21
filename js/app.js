// select all needed handler id 
let defaultMemoryPrice = document.getElementById('default-memory-price');
let extraMemoryPrice = document.getElementById('extra-memory-price');

let defaultStoragePrice = document.getElementById('default-storage-price');
let mediumStoragePrice = document.getElementById('medium-storage-price');
let maxStoragePrice = document.getElementById('max-storage-price');

let freeDeliveryPrice = document.getElementById('free-delivery-price');
let chargeDeliveryPrice = document.getElementById('charge-delivery-price');
let promoButton = document.getElementById('promo-button');

// select all display field
let memeoryPriceField = document.getElementById('memory-price');
let storagePriceField = document.getElementById('storage-price');
let deliveryPriceField = document.getElementById('delivery-price');
let subTotalField = document.getElementById('sub-total-price');
//promo
let promoInputField = document.getElementById('promo-input-field');
//total
let totalField = document.getElementById('total');

//function for add value in price field
function addDefaultPrice(field) {
    field.innerText = '0';
    subTotalCalc();
}

//get field value
function getFieldValue(field) {
    let fieldText = field.innerText;
    let fieldFloat = parseFloat(fieldText);
    return fieldFloat;
}

//function for add value in price field with price
function addCustomPrice(field, price) {
    field.innerText = price;
    subTotalCalc();
}

//calculate sub total
function subTotalCalc() {
    let subTotal = 1299 + getFieldValue(memeoryPriceField) + getFieldValue(storagePriceField) + getFieldValue(deliveryPriceField);
    subTotalField.innerText = subTotal;
    totalField.innerText = subTotal;
}

//apply Promo and calculte total 
function applyPromo() {
    let inputText = promoInputField.value;
    if (inputText == 'stevekaku') {
        let subTotalValue = getFieldValue(subTotalField);
        totalField.innerText = subTotalValue - (subTotalValue * 0.2);
        promoInputField.value = '';
    }
}

// add event handler for default vlaue
defaultMemoryPrice.addEventListener('click', function () {
    addDefaultPrice(memeoryPriceField);
});
defaultStoragePrice.addEventListener('click', function () {
    addDefaultPrice(storagePriceField);
});
freeDeliveryPrice.addEventListener('click', function () {
    addDefaultPrice(deliveryPriceField);
});

//add event handler for extra service
extraMemoryPrice.addEventListener('click', function () {
    addCustomPrice(memeoryPriceField, 180);
});
mediumStoragePrice.addEventListener('click', function () {
    addCustomPrice(storagePriceField, 100);
});
maxStoragePrice.addEventListener('click', function () {
    addCustomPrice(storagePriceField, 180);
});
chargeDeliveryPrice.addEventListener('click', function () {
    addCustomPrice(deliveryPriceField, 20);
});

//apply Promo code using event handler
promoButton.addEventListener('click', function () {
    applyPromo();
});

/* ---------------------------------------End Javascript Calculation, Happy Codding--------------------------------------- */