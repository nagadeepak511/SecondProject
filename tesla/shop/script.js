var api = 'https://tesla-clone-naga.herokuapp.com'

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
            <div class="categoryList"><a href="javascript:updateShopItems('https://tesla-clone-naga.herokuapp.com/charging/at home')" class="mainCategory">At Home</a></div>
            <div class="categoryList"><a href="javascript:updateShopItems('https://tesla-clone-naga.herokuapp.com/charging/on the road')" class="mainCategory">On the Road</a></div>
            <div class="categoryList"><a href="javascript:updateShopItems('https://tesla-clone-naga.herokuapp.com/charging/parts')" class="mainCategory">Parts</a></div>
        </div>
        <div class="categoryImageContainer">
            <img src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/flyout-nav/feature_wall_connector.jpg" alt="" class="categoryImage">
            <h1 class="categoryHeading">Charging</h1>
        </div>
    `
]

// category animation

function showCategoryContianer(ind){
    document.getElementsByClassName('categories')[0].innerHTML = categories[ind]
    document.getElementsByClassName('categories')[0].style.visibility = 'visible'
}

function hideCategory(){
    document.getElementsByClassName('categories')[0].style.visibility = 'hidden'
}

// cart animation
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

// add items to cart
var addedItems = []

function updateCartTotal(){
    var total = 0
    var ind=0
    addedItems.map((item)=>{
        total-=-item.cost.split('$')[1]*document.getElementsByClassName('cartItemQuantity')[ind].innerHTML
        ind++
    })
    document.getElementById('cartTotal').innerHTML = '$' + total
}

function updateItems(){
    document.getElementById('closeContainer').innerHTML = `
    <h6>Your cart(${addedItems.length})</h6>
    <i id="closeButton" onclick="hideCart()" class="fas fa-times" aria-hidden="true"></i>
    `
    document.getElementById('addedItems').innerHTML=''
    var ind=0
    addedItems.map((addedi)=>{
        document.getElementById('addedItems').innerHTML+=`
            <div class="cartItem">
                <img src="${addedi.thumb}" alt="" class="cartThumb">
                <div class="cartItemDetails">
                    <h4 class="cartItemName">${addedi.name}</h4>
                    <p class="cartItemCost">${addedi.cost}</p>
                </div>
                <div>
                    <button class="cartMinus" onclick="decrementQuantity(${ind})">-</button><span class="cartItemQuantity">${addedi.quantity}</span><button class="cartPlus" onclick="incrementQuantity(${ind})">+</button>
                </div>
                <i class="removeCartItem fas fa-trash-alt" onclick="removeCartItem(${ind})" aria-hidden="true"></i>
            </div>
        `
        ind++
    })
    updateCartTotal()
}

function addItem(i){
    if(addedItems.filter((item)=>{
        return item.name == document.getElementsByClassName('productName')[i].innerText
    }).length==0){
        addedItems.push({
            "name":document.getElementsByClassName('productName')[i].innerText,
            "thumb":document.getElementsByClassName('productImg')[i].getAttribute('src'),
            "cost":document.getElementsByClassName('itemCost')[i].innerText,
            "quantity":1
        })
    }
    updateItems()
}

// quantity
function decrementQuantity(i){
    document.getElementsByClassName('cartItemQuantity')[i].innerHTML = document.getElementsByClassName('cartItemQuantity')[i].innerHTML == 0?0:document.getElementsByClassName('cartItemQuantity')[i].innerHTML-1
    if(document.getElementsByClassName('cartItemQuantity')[i].innerHTML == 0){
        addedItems.splice(i,1)
        updateItems()
    }
}

function incrementQuantity(i){
    document.getElementsByClassName('cartItemQuantity')[i].innerHTML -= -1
    addedItems[i].quantity+=1
    updateCartTotal()
}

function removeCartItem(i){
    addedItems.splice(i,1)
    updateItems()
}

// get categories
function getCategories(){
    fetch(api+'/categories')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        var s='<div class="categoryListContainer">'
        for(var i=0; i<data[1].mainCategories.length; i++){
            s+=`<div class="categoryList">
            <a class="mainCategory" href="">${data[1].mainCategories[i].categoryName.toUpperCase()}</a>`
            for(var j=0; j<data[1].mainCategories[i].subCategories.length; j++){
                s+=`<li><a href="javascript:updateShopItems('https://tesla-clone-naga.herokuapp.com/${data[1].mainCategories[i].categoryName.replace(' ','')}/${data[1].mainCategories[i].subCategories[j].toLowerCase()}')">${data[1].mainCategories[i].subCategories[j]}</a></li>`
            }
            s+='</div>'
        }
        s+=`</div><div class="categoryImageContainer">
        <img src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/flyout-nav/feature_roof_rack.jpg" alt="" class="categoryImage">
        <h1 class="categoryHeading">Charging</h1>
    </div>`
        categories[0] =s;
    })
}

function updateShopItems(url){
    fetch(url)
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data)
        document.getElementsByClassName('productsContainer')[0].innerHTML=``
        for(var i=0; i<data.length; i++){
            document.getElementsByClassName('productsContainer')[0].innerHTML+=`
            <div class="productDiv" onmouseover ="showQuickAdd(${i})" onmouseleave="hideQuickAdd(${i})">
                <a href="#" class="product">
                    <img class="productImg" src="${data[i].thumbnails[0]}" alt="" >
                    <h3 class="productName">${data[i].name}</h3>
                    <p class="itemcost">${data[i].cost}</p>
                </a>
                <div class="quickAdd" onClick="addItem(${i})">Quick Add +</div>
            </div>
            `
        }
    })
}

// onload
function onloadFunc(){
    updateCartTotal()
    getCategories()
}