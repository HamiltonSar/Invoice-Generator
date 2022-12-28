const PopUpProductManager = document.getElementById("PopUpProductManager");
const AddNewProductButton = document.getElementById("AddNewProductButton");
const AddProductButton = document.getElementById("AddProductButton");
const ProductEntry = document.getElementById("ProductEntry");
const NumbersEntry = document.getElementById("NumbersEntry");
const UnitaryEntry = document.getElementById("UnitaryEntry");
const PriceEntry = document.getElementById("PriceEntry");
const TableContainer = document.getElementById("TableContainer");
const BodyDataContainer = document.getElementById("BodyDataContainer");
const DeleteAllButton = document.getElementById("DeleteAllButton");
const FooterDataContainer = document.getElementById("FooterDataContainer");
const CalculateButton = document.getElementById("CalculateButton");
let ArrayPrices = [];
let prices;

CalculateButton.addEventListener("click" , GenerateResults);

function GenerateRowElements () {
    PopUpProductManager.style.display = "none";
    TableContainer.style.display = "block";
    const createRow = document.createElement("TR");
    createRow.className = "productmanagercontainer__rowbody";
    createRow.innerHTML = 
    `
    <th class="productmanagercontainer__rowdatab"> ${ProductEntry.value} </th>
    <th class="productmanagercontainer__rowdatab"> ${NumbersEntry.value} </th>
    <th class="productmanagercontainer__rowdatab"> ${UnitaryEntry.value} </th>
    <th class="productmanagercontainer__rowdatab"> ${PriceEntry.value} </th>
    <th class="productmanagercontainer__rowdatab"> <button class = "productmanagercontainer__buttondeleterow"> <i class = "fas fa-trash productmanagercontainer__buttonicon">  </i> </button> </th>
    
    `
    ProductEntry.value = "";
    NumbersEntry.value = "";
    UnitaryEntry.value = "";
    PriceEntry.value = "";
    let PricesParsed = parseFloat(prices);
    ArrayPrices = [...ArrayPrices , PricesParsed];
    for (const iteration of ArrayPrices){
        console.log(ArrayPrices += iteration);
    }

    return BodyDataContainer.appendChild(createRow);
}
function GenerateResults () {
    FooterDataContainer.style.display = "block";
}

UnitaryEntry.addEventListener("input" , ()=> {
    let NumberParsed = parseFloat(NumbersEntry.value);
    let UnitaryParsed = parseFloat(UnitaryEntry.value);
    if ( isNaN(UnitaryParsed) || isNaN(NumberParsed)){
        prices = PriceEntry.value = "Please , write numbers";
        AddProductButton.removeEventListener("click" , GenerateRowElements)
    } else {
        prices = PriceEntry.value =  UnitaryParsed * NumberParsed;
        AddProductButton.addEventListener("click" , GenerateRowElements );
    }
} )

DeleteAllButton.addEventListener("click" , ()=> {
    BodyDataContainer.innerHTML = "";
})
// CalculateButton.addEventListener("click" , ()=> {

// })

AddNewProductButton.addEventListener("click" , ()=> {
    PopUpProductManager.style.display = "flex";
});

