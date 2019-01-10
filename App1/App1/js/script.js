$(document).ready(function () {


    $("#MC")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("PR2");
         PreLinksON("PR2_MC");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("PR2");
         PreLinksOFF("PR2_MC");     

    });

    $("#DM")

        .mouseover(function(){
        BaseON(this);
         PostReqsON("AD","TOC");
         PostLinksON("DM_DSA_AD","DM_DSA_TOC");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("AD","TOC");
         PreLinksOFF("DM_DSA_AD","DM_DSA_TOC");     

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
         PreReqsOFF("CA","AS","DSA");
         PreLinksOFF("DSA_OS","CA_OS","AS_OS"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA","PR2_CA","PR2_AS");      

    });


    $("#DM").mouseover(function(){
      $("#AD").css({"border-top":"30px solid RED"});
      $("#TOC").css({"border-top":"30px solid RED"});
  });

        $("#DSA").mouseover(function(){
      $("#TOC").css({"border-bottom":"30px solid RED"});
       $("#AD").css({"border-bottom":"30px solid RED"});
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
         PreReqsOFF("PR2");
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
         PreReqsOFF("OOP");
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
         PreReqsOFF("OOP");
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
         PreReqsOFF("OOP");
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
         PreReqsOFF("OOP");
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
         PreReqsOFF("OOP");
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
         PreReqsOFF("PR2");
         PostReqsOFF("AD","TOC","CDS","PL","AI");
         PreLinksOFF("PR2_DSA");  
         PostLinksOFF("DSA_AD","DSA_TOC","DSA_CDS","DSA_PL","DSA_AI"); 

    });

    $("#AD")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA","DM");
         PreLinksON("DM_DSA_AD");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("DSA","DM");
         PreLinksOFF("DM_DSA_AD"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });


    $("#TOC")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA","DM");
         PreLinksON("DM_DSA_TOC");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("DSA","DM");
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
         PreReqsOFF("DSA");
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
         PreReqsOFF("DSA");
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
         PreReqsOFF("DSA");
         PreLinksOFF("DSA_AI"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });


});

// ------------ BUTTON FUNCTIONS

function BaseON(){
   $(arguments).css({"border":"5px solid black","font-weight":"bold","color":"black","background-color":"orangered"});}

function PreReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("border","5px solid black").css("font-weight", "bold").css("color","black").css("background-color", "lime");
    }
}

function PrePreReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("border","5px solid black").css("font-weight", "bold").css("color","black").css("background-color", "lime");
    }
}


function PrePreReqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("border","0px solid black").css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}

function PostPostReqsOff(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}

function BaseOFF(){
   $(arguments).css({"border":"0px solid black","font-weight":"normal","color":"white","background-color":"teal"});}



function PreReqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("border","0px solid blue").css("font-weight", "normal").css("color","white").css("background-color", "teal");
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

