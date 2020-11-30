// console.log('Document is not ready');
        // $(document).ready(function () {
        // $('.demo').text('Document is ready').css('color', 'green').css('font-weight', 'bold').fadeIn(1500);
        // $('a[target="_blank"]').css('color', 'red');

        // $('#item-list > li:first').css('color', 'red');
        //   });
        // console.log('Document is not ready');

        // ----- JQuery Function -----
        // ----- Traversing the DOM -----
        // $("button").click(function (e) {
        //     // $("#item-list").find("a").css('color', 'red');
        //     $("#first-li").closest("li").css('color', 'red');
        //     $("#first-li").parent().css('border', '1px solid red').css('margin', '2px').css('padding',
        //         '2px');
        //     $("#first-li").siblings().css('border', '1px solid green').css('margin', '2px').css('padding',
        //         '2px');
        //     $("#first-li").first().css('border', '1px solid blue').css('margin', '2px').css('padding',
        //         '2px');
        // });

        // DOM Manipulation


        // $("button").click(function () {
        //     var answer = $('#answer-box').val();
        //     if (answer.toLowerCase() == 'islamabad') {
        //         $('#result').text('Your answer is correct.');
        //     } else {
        //         $('#result').html('<span style="color:red"> Your answer is  wrong</span>');
        //         $('#answer').text('Correct Answer is Islamabad');
        //     }
        // })

        // Add or remove elements

        // $('.after').click(function () {
        //     $('.after').append('<div class="color-box attached"> Attached </div>');
        // });
        // $('.before').click(function () {
        //     $('.before').before('<div class="color-box attached"> Attached </div>');
        // });
        // $('.append').click(function () {
        //     $('.append').append('<div class="color-box attached"> Attached </div>');
        // });
        // $('.prepend').click(function () {
        //     $('.prepend').prepend('<div class="color-box attached"> Attached </div>');
        // });

        // Modifying attributes and properties

        // $('#linkFix').click(
        //     function () {
        //         var targetValue = $('a').attr('target');
        //         console.log(targetValue);
        //         if (targetValue == '_self') {
        //             $('a').attr('target', '_blank');
        //         }
        //     }
        // );
        // $('#linkFix').click(function () {
        //     if ($('a').hasClass('after') == true) {
        //         $('a').removeClass('after')
        //     };
        // })
        // $('#linkFix').click(function () {
        //     $('#google-link').clone().insertAfter('#clone-link');
        // });
        // var numList = [1, 2, 3, 4, 5, 6];
        // $.each(numList, function (index, value) {
        //     console.log(index, value);

        // });

        // $('li').each(function (index, element) {
        //     console.log($(this).toggleClass('color-box'));
        // });


        // $('li').each(function (index, element) {
        //     $('li').eq(2).toggleClass('color-box');
        // });

        // $('li').filter('.middle');
        // $('li').has('ul').css('background-color', 'pink');
        // // $('li').not('ul').css('background-color', 'red');
        // $('#btn1').click(function () {
        //     $('div').data({
        //         "cart": 200,
        //         "items": 300,
        //     });
        // });
        // $('#btn2').click(function () {
        //     console.log($('div').data("cart"));
        //     console.log($('div').data("items"));
        // });

        // $('#showBoxes').click(function () {
        // $('.color-box').hide(1000);
        // $('.color-box').fadeIn(1000);
        // $('.color-box').fadeTo(1000, 0.5);
        // $('.color-box').slideUp();
        //     $('.color-box').slideToggle();
        // });
        // $('#hideBoxes').click(function () {
        // $('.color-box').show(1000);
        // $('.color-box').fadeOut(1000);
        // $('.color-box').fadeTo(1000, 1);
        // $('.color-box').slideDown();
        // });
        // $('#showBoxes').click(function () {
        //     $('.color-box').show(500);
        // });
        // $('#hideBoxes').click(function () {
        //     $('.color-box').hide(1000);

        // });
        // $('#toggleBoxes').click(function () {
        //     $('.color-box').toggle(100);
        // });


        // ******************
        // JQuery Animation
        // ******************

        //  $('#animateBoxes').click(function () {
        //     $('.color-box').animate({
        //         'width': '300px',
        //         'display': 'block',
        //         // position: 'absolute',
        //         'margin-top': '300px',
        //         'opacity': '0.5',
        //     }, 2000)
        // })