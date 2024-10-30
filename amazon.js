var imgs = [
    "camera/camera1.jpg",
    "camera/camera2.jpg",
    "camera/camera3.jpg",
    "camera/camera4.jpg",
    "camera/camera5.jpg",
    "camera/camera6.jpg",
    "camera/camera7.jpg",
    "food/food1.jpg",
    "food/food2.jpg",
    "food/food3.jpg",
    "food/food4.jpg",
    "food/food5.jpg",
    "food/food6.jpg",
    "food/food7.jpg",
    "plant/plant1.jpg",
    "plant/plant2.jpg",
    "plant/plant3.jpg",
    "plant/plant4.jpg",
    "plant/plant5.jpg",
    "plant/plant6.jpg",
    "plant/plant7.jpg",
    "utensil/utensil1.jpg",
    "utensil/utensil2.jpg",
    "utensil/utensil3.jpg",
    "utensil/utensil4.jpg",
    "utensil/utensil5.jpg",
    "utensil/utensil6.jpg",
    "utensil/utensil7.jpg",
]
function populate() {
    let hor_item_con = document.createElement("div")
    hor_item_con.className = "hor-item-con"
    document.querySelector("#main").append(hor_item_con)
    for (let i = 0; i < 3; i++) {

        let item_wrapper = document.createElement("div")
        item_wrapper.className = "item-wrapper"
        hor_item_con.append(item_wrapper)

        let img_wrapper = document.createElement("div")
        img_wrapper.className = "img-wrapper"
        item_wrapper.append(img_wrapper)

        let item_img = document.createElement("img")
        item_img.src = randImg()
        item_img.alt = "This didn't load."
        item_img.className = "item-img"
        img_wrapper.append(item_img)
        
        let info_wrapper = document.createElement("div")
        info_wrapper.className = "info-wrapper"
        item_wrapper.append(info_wrapper)
        
        let info = document.createElement("div")
        info.className = "info"
        info_wrapper.append(info)
        
        let item_publisher = document.createElement("div")
        item_publisher.className = "item-publisher"
        info.append(item_publisher)
        
        let el7 = document.createElement("span")
        el7.textContent = "Publisher"
        item_publisher.append(el7)
        
        let item_name = document.createElement("div")
        item_name.className = "item-name"
        info.append(item_name)
        
        let el9 = document.createElement("span")
        el9.textContent = item_img.src.split('/')[item_img.src.split('/').length - 1].replace(".jpg","")
        item_name.append(el9)

        let item_price = document.createElement("div")
        item_price.className = "item-price"
        info.append(item_price)

        let el11 = document.createElement("span")
        el11.textContent = `$${randPrice()}`
        item_price.append(el11)
    }
}

for (let i = 0; i <= 5; i++) {
    populate()

}

function randImg() {
    var num = Math.floor(Math.random() * (1 + imgs.length))
    return imgs[num]
}
function randPrice() {
    return Math.floor(Math.random() * (1 + 1000) + 1)
}