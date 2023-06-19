// $(document).ready(function () {

//     // $("button").click(function () {
//     //     $("h1").hide();
//     // })

//     $("h1").click(function () {
//         $(".candy").hide();
//     })
// });


// 2. jQuery Events

// $(function () {
//     $("p").click(function () {
//         console.log("A paragraph was clicked.");
//     })
// })

// // dblclick
// // mouseenter
// // mouseleave
// // mousedown
// // mouseup
// //hover -> takes two functions as arguments, first is for mouseenter and second is for mouseleave

// $(function () {
//     $("div").hover(
//         function () {
//             console.log('Enter')
//         },
//         function () {
//             console.log('Leave')
//         })

// });


// //form events
// // focus
// // blur
// // change
// // select

// $(function () {
//     $("input").focus(function () {
//         console.log("Focus on input field");
//     })
// })


// // add multiple events on a single function

// $(function () {
//     $("p").on("click mouseenter", function () {
//         console.log("Change on paragraph");
//     })
// })

// //remove a event handler

// $("p").off("click");


// //running event only once
// $("div").one("click", function () { });

// $(function () {
//     $("div").one("click", function () {
//         console.log("Div clicked");
//     })
// });


////////////////////////////////////////
// 3. jQuery Effects

// $("h1").slideUp(2000);
// $("h1").slideDown(1000);


// $("button").on("click", function () {
//     $("button").slideUp(5000, function () {
//         $(this).remove();
//     });
// });

// $("h1").on("click", function () {
//     $("button").stop();
// });

// $("div").fadeOut(2000).delay(2000).fadeIn(2000);


///////////////////////////////////////////////////
// 4. jQuery Animations

// $("#go").click(function () {

//     $('#block').animate({
//         opacity: 0.5,
//         marginLeft: "+=50"
//     },
//         3000,
//         function () {
//             $(this).after("<div>Animation Complete </div>   ")
//         })

// })

//////////////////////////////////
// 5. Manupulating the DOM
//get and set with http, text, val, and attr

$("#btn").click(function () {
    console.log($("#newpara").text())
})

$("#btn1").click(function () {
    console.log($("#newpara").html())
})

$("#btn2").click(function () { //set content
    $("#newpara").text("WOW new Text")
})

$("#btn").click(function () {
    console.log($("#link").attr('href'))
})

$("#btn").click(function () {
    console.log($("#testinput").val())
})

$("#btn1").click(function () {
    $("#testinput").val('Asim Timsina')
})
