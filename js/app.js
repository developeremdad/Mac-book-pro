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
let promoInputField = document.getElementById('promo-input-field');
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
function addCustomizePrice(field, price) {
    let subTotalText = subTotalField.innerText;

    field.innerText = price;
    subTotalCalc();
    
}

//calculate sub total
function subTotalCalc() {
    let subTotal = 1299 +  getFieldValue(memeoryPriceField) + getFieldValue(storagePriceField) + getFieldValue(deliveryPriceField);
    subTotalField.innerText = subTotal;
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
    addCustomizePrice(memeoryPriceField, 100);
});
mediumStoragePrice.addEventListener('click', function () {
    addCustomizePrice(storagePriceField, 100);
});
maxStoragePrice.addEventListener('click', function () {
    addCustomizePrice(storagePriceField, 180);
});
chargeDeliveryPrice.addEventListener('click', function () {
    addCustomizePrice(deliveryPriceField, 100);
});
