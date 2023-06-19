// $(document).ready(function () {

//     // $("button").click(function () {
//     //     $("h1").hide();
//     // })

//     $("h1").click(function () {
//         $(".candy").hide();
//     })
// });


// 2. jQuery Events

$(function () {
    $("p").click(function () {
        console.log("A paragraph was clicked.");
    })
})

// dblclick
// mouseenter
// mouseleave
// mousedown
// mouseup
//hover -> takes two functions as arguments, first is for mouseenter and second is for mouseleave

$(function () {
    $("div").hover(
        function () {
            console.log('Enter')
        },
        function () {
            console.log('Leave')
        })

});


//form events
// focus
// blur
// change
// select

$(function () {
    $("input").focus(function () {
        console.log("Focus on input field");
    })
})


// add multiple events on a single function

$(function () {
    $("p").on("click mouseenter", function () {
        console.log("Change on paragraph");
    })
})

//remove a event handler

$("p").off("click");


//running event only once
$("div").one("click", function () { });

$(function () {
    $("div").one("click", function () {
        console.log("Div clicked");
    })
});