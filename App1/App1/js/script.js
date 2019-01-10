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



    $("#MC")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("PR2");
         PreLinksON("PR2_MC");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PrereqsOFF("PR2");
         PreLinksOFF("PR2_MC");     

    });


    $("#OS")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("CA","AS","DSA");
         PreLinksON("DSA_OS","CA_OS","AS_OS");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA","PR2_CA","PR2_AS");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("CA","AS","DSA");
         PreLinksOFF("DSA_OS","CA_OS","AS_OS"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA","PR2_CA","PR2_AS");      

    });



    $("#OOP")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("PR2");
         PostReqsON("CC","CRY","SE","BD","DBM");
         PreLinksON("PR2_OOP");
         PostLinksON("OOP_CC","OOP_CRY","OOP_SE","OOP_BD","OOP_DBM")
         })
        .mouseout(function(){
         BaseOFF(this); 
         PrereqsOFF("PR2");
         PostReqsOFF("CC","CRY","SE","BD","DBM");
         PreLinksOFF("PR2_OOP");  
         PostLinksOFF("OOP_CC","OOP_CRY","OOP_SE","OOP_BD","OOP_DBM"); 

    });


    $("#CC")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("OOP");
         PreLinksON("OOP_CC");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_OOP");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("OOP");
         PreLinksOFF("OOP_CC"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_OOP");      

    });

    $("#CRY")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("OOP");
         PreLinksON("OOP_CRY");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_OOP");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("OOP");
         PreLinksOFF("OOP_CRY"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_OOP");      

    });

    $("#SE")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("OOP");
         PreLinksON("OOP_SE");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_OOP");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("OOP");
         PreLinksOFF("OOP_SE"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_OOP");      

    });

    $("#BD")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("OOP");
         PreLinksON("OOP_BD");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_OOP");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("OOP");
         PreLinksOFF("OOP_BD"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_OOP");      

    });

    $("#DBM")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("OOP");
         PreLinksON("OOP_DBM");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_OOP");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("OOP");
         PreLinksOFF("OOP_DBM"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_OOP");      

    });


    $("#DSA")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("PR2");
         PostReqsON("AD","TOC","CDS","PL","AI");
         PreLinksON("PR2_DSA");
         PostLinksON("DSA_AD","DSA_TOC","DSA_CDS","DSA_PL","DSA_AI")
         })
        .mouseout(function(){
         BaseOFF(this); 
         PrereqsOFF("PR2");
         PostReqsOFF("AD","TOC","CDS","PL","AI");
         PreLinksOFF("PR2_DSA");  
         PostLinksOFF("DSA_AD","DSA_TOC","DSA_CDS","DSA_PL","DSA_AI"); 

    });

    $("#AD")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA");
         PreLinksON("DM_DSA_AD");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("DSA");
         PreLinksOFF("DM_DSA_AD"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });


    $("#TOC")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA");
         PreLinksON("DM_DSA_TOC");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("DSA");
         PreLinksOFF("DM_DSA_TOC"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });


    $("#CDS")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA");
         PreLinksON("DSA_CDS");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("DSA");
         PreLinksOFF("DSA_CDS"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });

    $("#PL")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA");
         PreLinksON("DSA_PL");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("DSA");
         PreLinksOFF("DSA_PL"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });

    $("#AI")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA");
         PreLinksON("DSA_AI");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("DSA");
         PreLinksOFF("DSA_AI"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });


});

// ------------ BUTTON FUNCTIONS

function BaseON(){
   $(arguments).css("font-weight","bold").css("color","black").css("background-color","orangered");
}

function PreReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "bold").css("color","black").css("background-color", "lime");
    }
}

function PrePreReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","black").css("background-color", "lime");
    }
}


function PrePreReqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}

function PostPostReqsOff(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}


function BaseOFF(){
   $(arguments).css("font-weight","normal").css("color","white").css("background-color","teal");
}


function PrereqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}




function PostReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "bold").css("color","black").css("background-color", "lime");
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
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "6");
    }
}

function PrePreLinksON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "4");
    }
}


function PreLinksOFF(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "purple").css("strokeWidth", "2");
    }
}

function PrePreLinksOFF(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "purple").css("strokeWidth", "2");
    }
}


function PostLinksON(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "7");
    }
}

function PostLinksOFF(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "purple").css("strokeWidth", "2");
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
        $("#" + string2);
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
