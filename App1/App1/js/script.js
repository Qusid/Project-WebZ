$(document).ready(function () {

    Absolute("pr2", "DSA", "CA", "AS", "MC", "OOP");
    Absolute_path("pr2", "pr2_DSA", "pr2_CA","pr2_AS","pr2_MC","pr2_OOP");

    Absolute("DSA", "pr2", "CDS", "PL","AI");
    Absolute_path("DSA","pr2_DSA", "pr2_DSA");

    Absolute("CA", "pr2", "pr2", "pr2");
    Absolute_path("CA","pr2_CA", "pr2_CA");

    Absolute("AS", "pr2", "pr2", "pr2");
    Absolute_path( "AS","pr2_AS", "pr2_AS");

    Absolute("MC", "pr2", "pr2", "pr2");
    Absolute_path("MC","pr2_MC", "pr2_MC");

    Absolute("OOP","pr2", "CC", "CRY", "SE","BD","DBM");
    Absolute_path("OOP","pr2_OOP","OOP_CC","OOP_CRYP","OOP_SE","OOP_BD","OOP_DBM");


    Absolute("AD", "DSA", "DM", "DM");
    Absolute_path("AD","DM_DSA_AD", "DM_DSA_TOC");

    Absolute("TOC", "DSA", "DM", "DM");
    Absolute_path("TOC","DM_DSA_AD", "DM_DSA_AD");
    
    Absolute("CDS", "DSA", "DSA", "DSA", "DSA");
    Absolute_path("CDS","DSA_CDS", "pr2_DSA");
    
    Absolute("PL", "DSA", "DSA", "DSA", "DSA");
    Absolute_path("PL","DSA_PL", "pr2_DSA");
    
    Absolute("AI", "DSA", "DSA", "DSA", "DSA");
    Absolute_path("AI","DSA_AI", "pr2_DSA");

    Absolute("OS", "DSA", "CA", "AS", "AS" );
    Absolute_path("OS","AS_OS", "CA_OS");

    Absolute("CC", "OOP", "OOP", "OOP", "OOP");
    Absolute_path("CC","OOP_CC", "pr2_OOP");

    Absolute("CRY", "OOP", "OOP", "OOP", "OOP");
    Absolute_path("CRY","OOP_CRYP", "pr2_OOP");

    Absolute("SE", "OOP", "OOP", "OOP", "OOP");
    Absolute_path("SE","OOP_SE", "pr2_OOP");

    Absolute("BD", "OOP", "OOP", "OOP", "OOP");
    Absolute_path("BD","OOP_BD", "pr2_OOP");

    Absolute("DBM", "OOP", "OOP", "OOP", "OOP");
    Absolute_path("DBM","OOP_DBM", "pr2_OOP");

});
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
