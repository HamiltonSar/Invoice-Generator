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
const ResultsMainContainer = document.getElementById("ResultsMainContainer");
const ResultContainer = document.getElementById("ResultContainer");
const PrintButton = document.getElementById("PrintButton");
const ButtonsManagerContainer = document.getElementById("ButtonsManagerContainer");
let ArrayPrices = [];
let prices;



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
    
    return BodyDataContainer.appendChild(createRow);
}




function GenerateCalculation () {
    ResultsMainContainer.style.display = "flex";
    let totalSumArray = 0;
    ArrayPrices.forEach( ( element ) => { totalSumArray += element } );
    let taxes = parseInt((totalSumArray * 0.2).toFixed(2));
    let IVA = parseInt((totalSumArray * 0.12).toFixed(2));
    let Off = parseInt((totalSumArray * 0.10).toFixed(2));
    let finalPrice = (totalSumArray - Off) + (IVA + taxes);

    ResultContainer.innerHTML = 
    `
        <div class="productmanagercontainer__resultcontent">
            <h2 class="productmanagercontainer__results">Total</h2>
            <h2 class="productmanagercontainer__results"> ${ totalSumArray }$ </h2>
        </div>
        <div class="productmanagercontainer__resultcontent">
            <h2 class="productmanagercontainer__results">Taxes</h2>
            <h2 class="productmanagercontainer__results"> ${ taxes }$ </h2>
        </div>
        <div class="productmanagercontainer__resultcontent">
            <h2 class="productmanagercontainer__results">IVA</h2>
            <h2 class="productmanagercontainer__results"> ${IVA}$ </h2>
        </div>
        <div class="productmanagercontainer__resultcontent">
            <h2 class="productmanagercontainer__results">Off</h2>
            <h2 class="productmanagercontainer__results">${Off}$</h2>
        </div>
        <div class="productmanagercontainer__resultcontent">
            <h2 class="productmanagercontainer__results">Final</h2>
            <h2 class="productmanagercontainer__results">${finalPrice}$</h2>
        </div>
        `
        return ResultsMainContainer.innerHTML = createCalculationContainer.innerHTML;
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

AddNewProductButton.addEventListener("click" , ()=> {
    PopUpProductManager.style.display = "flex";
});
    
CalculateButton.addEventListener("click" , GenerateCalculation);


PrintButton.addEventListener("click" , ()=> {
    PopUpProductManager.style.display = "none"
    ButtonsManagerContainer.style.display = "none";
    window.print();
})
