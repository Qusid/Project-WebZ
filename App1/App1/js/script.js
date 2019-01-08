$(document).ready(function () {


    Absolute("DSA", "pr2", "pr2", "pr2", "pr2_DSA", "pr2_DSA");

    Absolute("CA", "pr2", "pr2", "pr2", "pr2_CA", "pr2_CA");

    Absolute("AS", "pr2", "pr2", "pr2", "pr2_AS", "pr2_AS");

    Absolute("MC", "pr2", "pr2", "pr2", "pr2_MC", "pr2_MC");

    Absolute("OOP", "pr2", "pr2", "pr2", "pr2_OOP", "pr2_OOP");


    Absolute("AD", "DSA", "DM", "DM", "DM_DSA_AD", "DM_DSA_TOC");

    Absolute("TOC", "DSA", "DM", "DM", "DM_DSA_AD","DM_DSA_AD");
    
    Absolute("CDS", "DSA", "DSA", "DSA","DSA_CDS","pr2_DSA");
    
    Absolute("PL", "DSA", "DSA", "DSA", "DSA_PL", "pr2_DSA");
    
    Absolute("AI", "DSA", "DSA", "DSA", "DSA_AI", "pr2_DSA");

    Absolute("OS", "DSA", "CA", "AS","AS_OS","CA_OS");

    Absolute("CC", "OOP", "OOP", "OOP","OOP_CC","pr2_OOP");

    Absolute("CRY", "OOP", "OOP", "OOP","OOP_CRYP","pr2_OOP");

    Absolute("SE", "OOP", "OOP", "OOP","OOP_SE","pr2_OOP");

    Absolute("BD", "OOP", "OOP", "OOP", "OOP_BD", "pr2_OOP");

    Absolute("DBM", "OOP", "OOP", "OOP","OOP_DBM", "pr2_OOP");

});
function Absolute(string1, string2, string3, string4, string5, string6,string7) {
    Hover_over(string1, string2, string3, string4, string5, string6, string7);
    Hover_out(string1, string2, string3, string4, string5, string6, string7);
}

function Hover_over(string1, string2, string3, string4, string5, string6, string7) {
    $("#"+string1).mouseover(function () {
        $("#" + string1).css("font-weight", "bold");
        $("#" + string2).css("background-color", "lightgreen");
        $("#" + string2).css("color", "black").css("opacity", 1);
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
        $("#" + string6).css("stroke", "green")
        $("#" + string6).css("opacity", "1")
        $("#" + string7).css("stroke", "black")
        $("#" + string7).css("opacity", "1")
    });


}
function Hover_out(string1, string2, string3, string4, string5,string6, string7) {

    $("#" + string1).mouseout(function () {
        $("#" + string1).css("font-weight", "normal");
        $("#" + string2).css("background-color", "green");
        $("#" + string2).css("color", "white").css("opacity", 1);
        $("#" + string2).css("font-weight", "normal");
        $("#" + string3).css("color", "white").css("opacity", 1);
        $("#" + string3).css("background-color", "green");
        $("#" + string3).css("font-weight", "normal");
        $("#" + string4).css("color", "white").css("opacity", 1);
        $("#" + string4).css("background-color", "green");
        $("#" + string4).css("font-weight", "normal");
        $("#" + string5).css("color", "white").css("opacity", 1);
        $("#" + string5).css("background-color", "green");
        $("#" + string5).css("font-weight", "normal");
        $("#" + string6).css("stroke", "red")
        $("#" + string6).css("opacity", "1")
        $("#" + string7).css("stroke", "orange")
        $("#" + string7).css("opacity", "1")

    });

}


