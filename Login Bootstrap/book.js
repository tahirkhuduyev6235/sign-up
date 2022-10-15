let userArr = [];
if (localStorage.getItem('userArr')) {
    userArr = JSON.parse(localStorage.getItem('userArr'))
}




// { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
//     { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
//     { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
//     { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" }




let jsontxt = JSON.stringify(userArr);
localStorage.setItem("userArr", jsontxt);
let myJson = localStorage.getItem("userArr");
let myarr = JSON.parse(myJson);
let i;

// function refreshData(ad, janr, qiymet) {
//     let col4 = $(`
//     <div class:"col-4">
//      <div class="box">
//         <img src="book-img.jfif" alt="">
//         <button id = ("dlt")>Delete</button>
//         <p>Name: <span>${ad}</span></p>
//         <p>Genre: <span>${janr}</span></p>
//         <p>Price: <span>${qiymet}</span></p>
//        </div>
//     </div>`);
//     $(".users").append(col4);
// };





function refreshData() {
    $('.users').empty()
    for (let i = 0; i < userArr.length; i++) {

        let txt = ` <div class="col-3">
               <div class="box">
               <img src="book-img.jfif" alt="">
                <p>Name: <span>${userArr[i].bookname}</span></p>
                <p>Genre: <span>${userArr[i].genre}</span></p>
                <p>Price: <span>${userArr[i].price}</span></p>
                <button btn-id='${i}' class='dlt'>Delete</button>
                <button edit-btn-id='${i}' type="button" class="edit btn-primary" data-bs-toggle="modal" data-bs-target="#redakte">
                Edit
                </button>
                </div>
                </div>`;
        $(".users").append(txt);
    }
    localStorage.setItem('userArr', JSON.stringify(userArr))

    $('.dlt').click(function() {
        let index = $(this).attr('btn-id')
            // console.log(index);
        userArr.splice(index, 1)
        refreshData()

    })
}

refreshData()




$(document).scroll(function() {
    if (Math.ceil($(document).scrollTop()) + $(window).height() == $(document).height()) {
        let y = i + 4
        if (y < myarr.length) {
            for (i; i <= y; i++) {

                refreshData(myarr[i].bookname, myarr[i].genre, myarr[i].price);
            }
        }
    }
})



// $("#search").submit(function(e) {
//     e.preventDefault()
//     $(".users").empty()
//         // let names = ["Wimpy Kid","Capitan Grant Ship","Harry Potter","Invisible Man"]
//     let searchTxt = $("#searchTxt").val()
//     for (let i = 0; i < userArr.length; i++) {
//         let arrelment = userArr[i].toLowerCase()
//         searchTxt = searchTxt.toLowerCase()
//         if (arrelement.indexOf(searchTxt) != -1) {
//             // console.log(userArr[i].bookname)
//             refreshData(i, userArr[i].bookname, userArr[i].genre, userArr[i].price)
//         }

//     }
// })






$("#inputt").submit(function() {
    let nametxt = $("#name-input").val()
    let genretxt = $("#genre-input").val()
    let pricetxt = $("#price-input").val()

    let inputobj = { bookPhoto: "book-img.jfif", bookname: nametxt, genre: genretxt, price: pricetxt }
    userArr.push(inputobj)

    refreshData()






    // let a = $(`
    // <div class:"col-4">
    //  <div class="box">
    //     <img src="book-img.jfif" alt="">
    //     <p>Name: <span>${nametxt}</span></p>
    //     <p>Genre: <span>${genretxt}</span></p>
    //     <p>Price: <span>${pricetxt}</span></p>
    //    </div>
    // </div>`);
    // $(".users").append(a);

})





// $('.edit').click(function() {


let index
    // console.log(index);
$(".edit").click(function() {
    index = Number($(this).attr('edit-btn-id'))

    let kitabAd = userArr[index].bookname
    let kitabJanr = userArr[index].genre
    let kitabPrice = userArr[index].price

    $("#bookname").val(kitabAd)
    $("#bookgenre").val(kitabJanr)
    $("#bookprice").val(kitabPrice)






})

$("#edt-btn").click(function() {
    userArr[index].bookname = $("#bookname").val()
    userArr[index].genre = $("#bookgenre").val()
    userArr[index].price = $("#bookprice").val()
    refreshData()

})



// })