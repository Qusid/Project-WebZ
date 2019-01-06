(document).ready(function () {


    ("#pr2").mouseover(function () {
        ("#DSA").css("background-color", "green");
        ("#DSA").css("opacity", 0.8);
        ("#CA").css("background-color", "green");
        ("#CA").css("opacity", 0.8);
    });
    ("#pr2").mouseout(function () {
        ("#DSA").css("background-color", "green");
        ("#DSA").css("opacity", 0.3);
        ("#CA").css("background-color", "green");
        ("#CA").css("opacity", 0.3);
    });




    ("#CDS").mouseover(function () {
        ("#DSA").css("background-color", "lightgreen");
    });
    ("#CDS").mouseout(function () {
        ("#DSA").css("background-color", "green");
    });


    ("#PL").mouseover(function () {
        ("#DSA").css("background-color", "lightgreen");
    });
    ("#PL").mouseout(function () {
        ("#DSA").css("background-color", "green");
    });



    ("#AD").mouseover(function () {
        ("#AD").css("font-weight", "bold");
        ("#DSA").css("background-color", "lightgreen");
        ("#DSA").css("color", "black").css("opacity", 1);
        ("#DSA").css("font-weight", "bold");
        ("#DM").css("background-color", "lightgreen");
        ("#DM").css("color", "black").css("opacity", 1);
        ("#DM").css("color", "black");
        ("#DM").css("font-weight", "bold");
    });
    ("#AD").mouseout(function () {
        ("#AD").css("font-weight", "normal");
        ("#DSA").css("background-color", "green");
        ("#DSA").css("color", "white").css("opacity", 0.3);
        ("#DSA").css("font-weight", "normal");
        ("#DM").css("color", "white").css("opacity", 0.3);
        ("#DM").css("background-color", "green");
        ("#DM").css("font-weight", "normal");

    });



    ("#TOC").mouseover(function () {
        ("#DSA").css("background-color", "lightgreen");
        ("#DM").css("background-color", "lightgreen");
    });
    ("#TOC").mouseout(function () {
        ("#DSA").css("background-color", "green");
        ("#DM").css("background-color", "green");
    });



    ("#CC").mouseover(function () {
        ("#OOP").css("background-color", "lightgreen");
        ("#pr2").css("background-color", "lightgreen");
    });
    ("#CC").mouseout(function () {
        ("#OOP").css("background-color", "green");
        ("#pr2").css("background-color", "green");
    });



    ("#pr2").on('click', function () {
        if (('#pr2').hasClass('clicked')) {
            ('#pr2').removeClass("clicked");
            ('#DSA').css('background-color', 'green');
            ('#DSA').css('opacity', '0.3');
            ('#CA').css('background-color', 'green');
            ('#CA').css('opacity', '0.3');
            ('#ASS').css('background-color', 'green');
            ('#ASS').css('opacity', '0.3');
            ('#MC').css('background-color', 'green');
            ('#MC').css('opacity', '0.3');
            ('#OOP').css('background-color', 'green');
            ('#OOP').css('opacity', '0.3');
        } else {
            ('#pr2').addClass("clicked");
            ('#DSA').css('background-color', 'green');
            ('#DSA').css('opacity', '1');
            ('#CA').css('background-color', 'green');
            ('#CA').css('opacity', '1');
            ('#ASS').css('background-color', 'darkgreen');
            ('#ASS').css('opacity', '1');
            ('#MC').css('background-color', 'green');
            ('#MC').css('opacity', '1');
            ('#OOP').css('background-color', 'green');
            ('#OOP').css('opacity', '1');
        }

    });


    ("#DSA").on('click', function () {
        if (('#DSA').hasClass('clicked')) {
            ('#DSA').removeClass("clicked");

            ('#DSA').css('background-color', 'green');
            ('#DSA').css('opacity', '0.3');
            ('#CDS').css('background-color', 'green');
            ('#CDS').css('opacity', '0.3');
            ('#PL').css('background-color', 'green');
            ('#PL').css('opacity', '0.3');
            ('#AI').css('background-color', 'green');
            ('#AI').css('opacity', '0.3');

        } else {
            ('#DSA').addClass("clicked");
            ('#DSA').css('background-color', 'green');
            ('#DSA').css('opacity', '1');
            ('#CDS').css('background-color', 'green');
            ('#CDS').css('opacity', '1');
            ('#PL').css('background-color', 'green');
            ('#PL').css('opacity', '1');
            ('#AI').css('background-color', 'green');
            ('#AI').css('opacity', '1');
        }

    });


    ("#OOP").on('click', function () {
        if (('#OOP').hasClass('clicked')) {
            ('#OOP').removeClass("clicked");

            ('#OOP').css('background-color', 'green');
            ('#OOP').css('opacity', '0.3');
            ('#CC').css('background-color', 'green');
            ('#CC').css('opacity', '0.3');
            ('#CRY').css('background-color', 'green');
            ('#CRY').css('opacity', '0.3');
            ('#SE').css('background-color', 'green');
            ('#SE').css('opacity', '0.3');
            ('#BD').css('background-color', 'green');
            ('#BD').css('opacity', '0.3');
            ('#DBM').css('background-color', 'green');
            ('#DBM').css('opacity', '0.3');

        } else {
            ('#OOP').addClass("clicked");
            ('#OOP').css('background-color', 'green');
            ('#OOP').css('opacity', '1');
            ('#CC').css('background-color', 'green');
            ('#CC').css('opacity', '1');
            ('#CRY').css('background-color', 'green');
            ('#CRY').css('opacity', '1');
            ('#SE').css('background-color', 'green');
            ('#SE').css('opacity', '1');
            ('#BD').css('background-color', 'green');
            ('#BD').css('opacity', '1');
            ('#DBM').css('background-color', 'green');
            ('#DBM').css('opacity', '1');

        }

    });






});

