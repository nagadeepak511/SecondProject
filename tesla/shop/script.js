var api = 'https://tesla-clone-naga.herokuapp.com/'

var categories = [
        `<div class="categoryListContainer">
            <div class="categoryList">
                <a class="mainCategory" href="">Model S</a>
                <li><a href="">Interior</a></li>
                <li><a href="">Exterior</a></li>
                <li><a href="">Wheels</a></li>
                <li><a href="">Floor mats</a></li>
                <li><a href="">Parts</a></li>
                <li><a href="">Keys</a></li>
            </div>
            <div class="categoryList">
                <a class="mainCategory" href="">Model X</a>
                <li><a href="">Interior</a></li>
                <li><a href="">Exterior</a></li>
                <li><a href="">Wheels</a></li>
                <li><a href="">Floor mats</a></li>
                <li><a href="">Parts</a></li>
                <li><a href="">Keys</a></li>
            </div>
            <div class="categoryList">
                <a class="mainCategory" href="">Model Y</a>
                <li><a href="">Interior</a></li>
                <li><a href="">Exterior</a></li>
                <li><a href="">Wheels</a></li>
                <li><a href="">Floor mats</a></li>
                <li><a href="">Parts</a></li>
                <li><a href="">Keys</a></li>
            </div>
            <div class="categoryList">
                <a class="mainCategory" href="">Model 3</a>
                <li><a href="">Interior</a></li>
                <li><a href="">Exterior</a></li>
                <li><a href="">Wheels</a></li>
                <li><a href="">Floor mats</a></li>
                <li><a href="">Parts</a></li>
                <li><a href="">Keys</a></li>
            </div>
        </div>
        <div class="categoryImageContainer">
            <img src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/flyout-nav/feature_roof_rack.jpg" alt="" class="categoryImage">
            <h1 class="categoryHeading">Vehicle Accessories</h1>
        </div>`,
    `
        <div class="categoryListContainer">
            <div class="categoryList"><a href="" class="mainCategory">At the Home</a></div>
            <div class="categoryList"><a href="" class="mainCategory">On the Road</a></div>
            <div class="categoryList"><a href="" class="mainCategory">Parts</a></div>
        </div>
        <div class="categoryImageContainer">
            <img src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/flyout-nav/feature_wall_connector.jpg" alt="" class="categoryImage">
            <h1 class="categoryHeading">Charging</h1>
        </div>
    `
]

function showCategoryContianer(ind){
    document.getElementsByClassName('categories')[0].innerHTML = categories[ind]
    document.getElementsByClassName('categories')[0].style.visibility = 'visible'
}

function hideCategory(){
    document.getElementsByClassName('categories')[0].style.visibility = 'hidden'
}

function ShowCart(){
    document.getElementsByClassName('cart')[0].style.visibility = 'visible'
    document.getElementsByTagName('header')[0].style.opacity = 0.1
    document.getElementsByClassName('productsContainer')[0].style.opacity = 0.1
}

function hideCart(){
    document.getElementsByClassName('cart')[0].style.visibility = 'hidden'
    document.getElementsByTagName('header')[0].style.opacity = 1
    document.getElementsByClassName('productsContainer')[0].style.opacity = 1
}

function  showQuickAdd(i){
    document.getElementsByClassName('quickAdd')[i].style.visibility = 'visible'
}

function hideQuickAdd(i){
    document.getElementsByClassName('quickAdd')[i].style.visibility = 'hidden'
}

function addItem(i){
    
}

// var categories;

function getcategories(){
    fetch(api+'models')
    .then((res)=>{console.log(res)})
    //.then((data)=>{console.log(data)})
}