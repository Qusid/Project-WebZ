﻿$(document).ready(function () {

    $("#PR2")

        .mouseover(function(){
        BaseON(this);
         PostReqsON("DSA","CA", "AS","MC","OOP");
         PostLinksON("PR2_DSA","PR2_CA","PR2_AS","PR2_MC","PR2_OOP");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostReqsOFF("DSA","CA", "AS","MC","OOP");
         PostLinksOFF("PR2_DSA","PR2_CA","PR2_AS","PR2_MC","PR2_OOP");     

    });
     



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
      $("#AD").css("background-image","linear-gradient(90deg,  cyan 10%, teal 10%)").css("font-weight","bold").css("color","black");
      $("#TOC").css("background-image","linear-gradient(90deg,  cyan 10%, teal 10%)").css("font-weight","bold").css("color","black");
      $("#DSA").css("background-image","linear-gradient(90deg,  teal 90%, cyan 90%)").css("font-weight","bold").css("color","black");
  });

        $("#DM").mouseout(function(){
      $("#AD").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#TOC").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#DSA").css("background", "teal").css("font-weight","normal").css("color","white");
  });



$("#DSA").mouseover(function(){
      $("#AD").css("background-image","linear-gradient(90deg,  purple 10%, teal 10%)").css("font-weight","bold").css("color","white");
      $("#TOC").css("background-image","linear-gradient(90deg,  purple 10%, teal 10%)").css("font-weight","bold").css("color","white");
      $("#OS").css("background-image","linear-gradient(90deg,  tomato 10%, teal 10%)").css("font-weight","bold").css("color","white");
      $("#DM").css("background-image","linear-gradient(90deg,  teal 90%, purple 90%)").css("font-weight","bold").css("color","white");
      $("#CA").css("background-image","linear-gradient(90deg,  teal 90%, tomato 90%)").css("font-weight","bold").css("color","white");
      $("#AS").css("background-image","linear-gradient(90deg,  teal 90%, tomato 90%)").css("font-weight","bold").css("color","white");
  });

        $("#DSA").mouseout(function(){
      $("#AD").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#TOC").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#OS").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#DM").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#CA").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#AS").css("background", "teal").css("font-weight","normal").css("color","white");
  });



$("#CA").mouseover(function(){
      $("#OS").css("background-image","linear-gradient(90deg,  cyan 10%, teal 10%)").css("font-weight","bold").css("color","black");
      $("#AS").css("background-image","linear-gradient(90deg,  teal 90%, cyan 90%)").css("font-weight","bold").css("color","black");
      $("#DSA").css("background-image","linear-gradient(90deg,  teal 90%, cyan 90%)").css("font-weight","bold").css("color","black");
  });

        $("#CA").mouseout(function(){
      $("#OS").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#AS").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#DSA").css("background", "teal").css("font-weight","normal").css("color","white");
  });

$("#AS").mouseover(function(){
      $("#OS").css("background-image","linear-gradient(90deg,  cyan 10%, teal 10%)").css("font-weight","bold").css("color","black");
      $("#CA").css("background-image","linear-gradient(90deg,  teal 90%, cyan 90%)").css("font-weight","bold").css("color","black");
      $("#DSA").css("background-image","linear-gradient(90deg,  teal 90%, cyan 90%)").css("font-weight","bold").css("color","black");
  });

        $("#AS").mouseout(function(){
      $("#OS").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#CA").css("background", "teal").css("font-weight","normal").css("color","white");
      $("#DSA").css("background", "teal").css("font-weight","normal").css("color","white");
  });




    $("#DM")

        .mouseover(function(){
        BaseON(this);
        thinPostLinksON("DM-DSA_AD","DM-DSA_t", "DM-DSA_b", "DM-DSA_TOC")
         })
        .mouseout(function(){
         BaseOFF(this); 
         PostLinksOFF("DM-DSA_AD","DM-DSA_t", "DM-DSA_b", "DM-DSA_TOC")

    });



    $("#CA")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("PR2");
         PreLinksON("PR2_CA");
         PostLinksON("CA_OS")
         thinPostLinksON("DSA_OS","CA_OS","AS_OS")
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("PR2");
         PreLinksOFF("PR2_CA");
         PostLinksOFF("CA_OS","DSA_OS","CA_OS","AS_OS")

    });


    $("#AS")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("PR2");
         PreLinksON("PR2_AS");
         PostLinksON("AS_OS")
         thinPostLinksON("DSA_OS","AS_OS","CA_OS")
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("PR2");
         PreLinksOFF("PR2_AS");
         PostLinksOFF("AS_OS","DSA_OS","AS_OS","CA_OS")

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
         PostReqsON("CDS","PL","AI");
         PreLinksON("PR2_DSA");
         PostLinksON("DSA_AD","DSA_TOC","DSA_CDS","DSA_PL","DSA_AI")
         thinPostLinksON("DM-DSA_b","DM-DSA_t","DM-DSA_AD","DM-DSA_TOC","DSA_OS","CA_OS","AS_OS")
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("PR2");
         PostReqsOFF("CDS","PL","AI");
         PreLinksOFF("PR2_DSA");  
         PostLinksOFF("DSA_AD","DSA_TOC","DSA_CDS","DSA_PL","DSA_AI","DM-DSA_b","DM-DSA_t","DM-DSA_AD","DM-DSA_TOC","DSA_OS","CA_OS","AS_OS"); 
    });

    $("#AD")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA","DM");
            PreLinksON("DM-DSA_b","DM-DSA_t","DM-DSA_AD");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("DSA","DM");
            PreLinksOFF("DM-DSA_b","DM-DSA_t","DM-DSA_AD"); 
             PrePreReqsOFF("PR2");
             PrePreLinksOFF("PR2_DSA");      

    });


    $("#TOC")

        .mouseover(function(){
        BaseON(this);
         PreReqsON("DSA","DM");
            PreLinksON("DM-DSA_b","DM-DSA_t","DM-DSA_TOC");
             PrePreReqsON("PR2");
             PrePreLinksON("PR2_DSA");
         })
        .mouseout(function(){
         BaseOFF(this); 
         PreReqsOFF("DSA","DM");
            PreLinksOFF("DM-DSA_b","DM-DSA_t","DM-DSA_TOC"); 
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
   $(arguments).css({"border":"5px solid black","font-weight":"bold","color":"black","background-color":"CYAN"});}

function PreReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "bold").css("color","black").css("background-color", "lawngreen");
    }
}

/*
function PrePreReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("color","black").css("background-color", "lightgreen");
    }
}


function PrePreReqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}

*/

function PostPostReqsOff(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}

function PostPostReqsON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("font-weight", "bold").css("color","white").css("background-color", "darkblue");
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
        $("#" + arguments[i]).css("font-weight", "bold").css("color","black").css("background-color", "cyan");
    }
}

function PostReqsOFF(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("border","0px solid black").css("font-weight", "normal").css("color","white").css("background-color", "teal");
    }
}



// -------- LINKS FUNCTIONS




function PreLinksON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "6");
    }
}



function PreLinksOFF(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "2");
    }
}

/*
function PrePreLinksON(){
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "4");
    }
}

function PrePreLinksOFF(){
   for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "2");
    }
}

*/


function PostLinksON(){
   for (var i = arguments.length - 1; i >= 0; i--) {
       $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "7");
    }
}

function thinPostLinksON(){
   for (var i = arguments.length - 1; i >= 0; i--) {
       $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "3.5");
    }
}

function PostLinksOFF() {
    for (var i = arguments.length - 1; i >= 0; i--) {
        $("#" + arguments[i]).css("stroke", "black").css("strokeWidth", "2");
    }
}
