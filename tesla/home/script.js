var models = [
    'model-s',
    'model-x',
    'model-y',
    'model-3',
    'new-interior',
    'solar-panel',
    'solar-roof'
]

function loadCars(){
    for(var i=0; i<models.length; i++){
        document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML + `
        <div class="carContainer" style="background-image: url(../data/images/${models[i]}.jpg)">
            <div class="carDescription">
                <h1 class="carModel">${models[i].split('-')[0].toUpperCase()} ${models[i].split('-')[1].toUpperCase()}</h1>
                <a href="#">Order online for touchless delivery</a>
            </div>
            <div class="carLinkContainer">
                <a href="" class="carLink">Custom Order</a>
                <a href="" id="lastCarLink" class="carLink">Existing Inventory</a>
            </div>
        </div>
        `
    }
}

function collapseMenu(){
    document.getElementById('menu').style.transform = 'translateX(100%)';
}

function showMenu(){
    document.getElementById('menu').style.transform = 'translateX(0)';
}