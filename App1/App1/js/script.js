$(document).ready(function () {

    array = ["PR2","DM","DSA","CA","AS","MC","OOP","AD","TOC","CDS","PL","AI","OS","CC","CRY","SE","BD","DBM"];

    buttons = [
    ["DSA", "CA", "AS", "MC", "OOP"],
    [ "PR2", "CDS", "PL","AI"],
    ["PR2"],
    ["PR2"], // CA
    ]

    /*
    for (var i = 0; i < array.length; i++) {
        $("#" + array[i]).hover(
        function(){PreReqsON("CA","AS","DSA");},
        function(){PrereqsOFF("CA","AS","DSA");});
    }
    //*/


    $("#OOP").mouseover(function(){
        $(this).css("background-color","blue");

    });


    $("#OS").hover(
        function(){PreReqsON("CA","AS","DSA");PreLinksON("DSA_OS","CA_OS","AS_OS")},
        function(){PrereqsOFF("CA","AS","DSA");PreLinksOFF("DSA_OS","CA_OS","AS_OS")}
        );


    $("#DSA").hover(
        function(){PreReqsON("PR2");PostReqsON("CDS","PL","AI");PreLinksON("PR2_DSA");PostLinksON("SDA_AD","DSA_TOC","DSA_CDS","DSA_PL","DSA_AI");},
        function(){PrereqsOFF("PR2");PostReqsOFF("CDS","PL","AI");PreLinksOFF("PR2_DSA");PostLinksOFF("SDA_AD","DSA_TOC","DSA_CDS","DSA_PL","DSA_AI");}
        );




});

// ------------ BUTTON FUNCTIONS

function PreReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "bold").css("color","black").css("background-color", "lightgreen");
    }
}

function PrereqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}




function PostReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "bold").css("color","black").css("background-color", "orange");
    }
}

function PostReqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}



// -------- LINKS FUNCTIONS




function PreLinksON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("opacity", "1").css("strokeWidth", "6");
    }
}


function PreLinksOFF(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("opacity", "1").css("strokeWidth", "3");
    }
}


function PostLinksON(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("opacity", "1").css("strokeWidth", "8");
    }
}

function PostLinksOFF(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("opacity", "1").css("strokeWidth", "3");
    }
}













function Absolute(string1, string2, string3, string4, string5, string6,string7) {
    Hover_over(string1, string2, string3, string4, string5, string6, string7);
    Hover_out(string1, string2, string3, string4, string5, string6, string7);
}
function Absolute_path(string1, string2, string3, string4, string5, string6, string7) {
    Hover_path(string1, string2, string3, string4, string5, string6, string7);
    Hoverout_path(string1, string2, string3, string4, string5, string6, string7);
}

function Hover_over(string1, string2, string3, string4, string5, string6, string7) {
    $("#"+string1).mouseover(function () {
        $("#" + string1).css("font-weight", "bold").css("color","black");
                $("#" + string1).css("background-color", "lightgreen");
        $("#" + string2).css("background-color", "lightgreen");
        $("#" + string2).css("color", "black").css("opacity", 1);
        $("#" + string2).css("border-width","thick");
        $("#" + string2).css("font-weight", "bold");
        $("#" + string3).css("background-color", "lightgreen");
        $("#" + string3).css("color", "black").css("opacity", 1);
        $("#" + string3).css("font-weight", "bold");
        $("#" + string4).css("background-color", "lightgreen");
        $("#" + string4).css("color", "black").css("opacity", 1);
        $("#" + string4).css("font-weight", "bold");
        $("#" + string5).css("background-color", "lightgreen");
        $("#" + string5).css("color", "black").css("opacity", 1);
        $("#" + string5).css("font-weight", "bold");
        $("#" + string6).css("background-color", "lightgreen");
        $("#" + string6).css("color", "black").css("opacity", 1);
        $("#" + string6).css("font-weight", "bold");
        $("#" + string7).css("background-color", "lightgreen");
        $("#" + string7).css("color", "black").css("opacity", 1);
        $("#" + string7).css("font-weight", "bold");
       
    });


}
function Hover_out(string1, string2, string3, string4, string5,string6, string7) {

    $("#" + string1).mouseout(function () {
        $("#" + string1).css("font-weight", "normal").css("color","white");
            $("#" + string1).css("background-color", "teal");
        $("#" + string2).css("background-color", "teal");
        $("#" + string2).css("color", "white").css("opacity", 1);
        $("#" + string2).css("font-weight", "normal");

        $("#" + string3).css("color", "white").css("opacity", 1);
        $("#" + string3).css("background-color", "teal");
        $("#" + string3).css("font-weight", "normal");
        $("#" + string4).css("color", "white").css("opacity", 1);
        $("#" + string4).css("background-color", "teal");
        $("#" + string4).css("font-weight", "normal");
        $("#" + string5).css("color", "white").css("opacity", 1);
        $("#" + string5).css("background-color", "teal");
        $("#" + string5).css("font-weight", "normal");
        $("#" + string6).css("color", "white").css("opacity", 1);
        $("#" + string6).css("background-color", "teal");
        $("#" + string6).css("font-weight", "normal");
        $("#" + string7).css("color", "white").css("opacity", 1);
        $("#" + string7).css("background-color", "teal");
        $("#" + string7).css("font-weight", "normal");
       
    });

}

function Hover_path(string1, string2, string3, string4, string5, string6, string7) {
    $("#" + string1).mouseover(function () {
        $("#" + string2).css("stroke", "black");
        $("#" + string2).css("opacity", "1");
        $("#" + string2).css("strokeWidth", "8");
        $("#" + string3).css("stroke", "black");
        $("#" + string3).css("opacity", "1");
        $("#" + string3).css("strokeWidth", "6");
        $("#" + string4).css("stroke", "black");
        $("#" + string4).css("opacity", "1");
        $("#" + string5).css("stroke", "black");
        $("#" + string5).css("opacity", "1");
        $("#" + string6).css("stroke", "black");
        $("#" + string6).css("opacity", "1");
        $("#" + string7).css("stroke", "black");
        $("#" + string7).css("opacity", "1");
        });
}
function Hoverout_path(string1, string2, string3, string4, string5, string6, string7) {
    $("#" + string1).mouseout(function () {
        $("#" + string2).css("stroke", "indigo");
        $("#" + string2).css("opacity", "1");
        $("#" + string2).css("strokeWidth", "3");
        $("#" + string3).css("stroke", "indigo");
        $("#" + string3).css("opacity", "1");
        $("#" + string3).css("strokeWidth", "3");
        $("#" + string4).css("stroke", "indigo");
        $("#" + string4).css("opacity", "1");
        $("#" + string5).css("stroke", "indigo");
        $("#" + string5).css("opacity", "1");
        $("#" + string6).css("stroke", "indigo");
        $("#" + string6).css("opacity", "1");
        $("#" + string7).css("stroke", "indigo");
        $("#" + string7).css("opacity", "1");
    });

}

function Highlight(string1) {


     $("#" + string1).css("background-color", "lightgreen").css("color", "black").css("opacity", 1).css("font-weight", "bold");   
   /* 
    for (var i = 0; i < arguments.length; i++) {
        //$("#"+string1).mouseover(function () {
        $("#" + arguments[i]).css("background-color", "lightgreen").css("color", "black").css("opacity", 1).css("font-weight", "bold");
        //});
    }*/

    /*
        $("#" + string1).css("font-weight", "bold").css("color","black");
        $("#" + string1).css("background-color", "lightgreen");

        $("#" + string2).css("background-color", "lightgreen");
        $("#" + string2).css("color", "black").css("opacity", 1);
        $("#" + string2).css("border-width","thick");
        $("#" + string2).css("font-weight", "bold");

        $("#" + string3).css("background-color", "lightgreen");
        $("#" + string3).css("color", "black").css("opacity", 1);
        $("#" + string3).css("font-weight", "bold");

        $("#" + string4).css("background-color", "lightgreen");
        $("#" + string4).css("color", "black").css("opacity", 1);
        $("#" + string4).css("font-weight", "bold");

        $("#" + string5).css("background-color", "lightgreen");
        $("#" + string5).css("color", "black").css("opacity", 1);
        $("#" + string5).css("font-weight", "bold");

        $("#" + string6).css("background-color", "lightgreen");
        $("#" + string6).css("color", "black").css("opacity", 1);
        $("#" + string6).css("font-weight", "bold");

        $("#" + string7).css("background-color", "lightgreen");
        $("#" + string7).css("color", "black").css("opacity", 1);
        $("#" + string7).css("font-weight", "bold");
       //*/

}

function HighlightOff() {
    /*
    for (var i = 0; i < arguments.length; i++) {
        $("#" + arguments[i]).css("background-color", "teal");
        $("#" + arguments[i]).css("color", "white").css("opacity", 1);
        $("#" + arguments[i]).css("font-weight", "normal");
    }*/

    $("#" + string1).css("background-color", "pink").css("color", "white").css("opacity", 1).css("font-weight", "normal");  

}
