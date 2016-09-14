$(window).resize(function() {
//This function is to alter the navbar in mobile screens. It removes the navba-fixed attribute
    if ($(window).width() < 480) {
        $('.navbar').removeClass("navbar-fixed-top"); 
        $('.navbar').css('opacity', 1)
    } else {
        $('.navbar').css('opacity', 0)
    }
});
//This is a scrolling animate function for navbar, Whenever the page is scrolled through, the opacity of the navigation bar increases gradually
$(document).on('scroll', function(e) {
    if ($(window).width() > 480) 
        $('.navbar').css("background-color","#ffffdf");
        $('.navbar').css('opacity', ($(document).scrollTop() / 900));

});

//This section of javascript is used to allow the user to add additional fields only when they want to
$(document).ready(function() {
//The fields are initially hidden, they can be showed to the user if they want to add an additional field
    $("#int4").hide();
    $("#int5").hide();
    $("#int6").hide();
    $("#skill4").hide();
    $("#skill5").hide();
    $("#skill6").hide();
    $("#expjs").hide();
    $("#edujs").hide();
    $("#ach2js").hide();
    $("#ach3js").hide();
//Counters are assigned for each section
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;

//This section is for the interests form. When the person wants to add an additional interest, they can just click the button
//Each button click increases the value of count. Each value of count performs a different function.
    $("#intclick").click(function() {
        count1++;
        if (count1 == 1) {
            $("#int4").show();
            $("#intclick").css("margin-top", "-12%");
        } else if (count1 == 2) {
            $("#int5").show();
            $("#intclick").css("margin-top", "-8%");
        } else if (count1 == 3) {
            $("#int6").show();
            $("#intclick").css("margin-top", "0%");
        } else {
            alert("Only upto 6 interests can be added");
        }

    });

//This section is for the Skills form. When the person wants to add an additional skill, they can just click the button
//Each button click increases the value of count. Each value of count performs a different function.
    $("#skillclick").click(function() {
        count2++;
        if (count2 == 1) {
            $("#skill4").show();
            $("#skillclick").css("margin-top", "-12%");
        } else if (count2 == 2) {
            $("#skill5").show();
            $("#skillclick").css("margin-top", "-8%");
        } else if (count2 == 3) {
            $("#skill6").show();
            $("#skillclick").css("margin-top", "0%");
        } else {
            alert("Only upto 6 Skills can be added");
        }

    });

//This section is for the experience form. When the person wants to add an additional experience, they can just click the button
//Each button click increases the value of count. Each value of count performs a different function.
    $("#expclick").click(function() {
        count3++;
        if (count3 == 1) {
            $("#expjs").show();
            $("#expclick").css("margin-top", "0%");
        } else {
            alert("Only upto 2 companies can be added")
        }
    });

//This section is for the education form. When the person wants to add an additional educatinal background, they can just click the button
//Each button click increases the value of count. Each value of count performs a different function.
    $("#educlick").click(function() {
        count4++;
        if (count4 == 1) {
            $("#edujs").show();
            $("#educlick").css("margin-top", "0%");
        } else {
            alert("Only upto 2 colleges can be added")
        }
    });

//This section is for the Achievements form. When the person wants to add an additional Achievement, they can just click the button
//Each button click increases the value of count. Each value of count performs a different function.
    $("#achclick").click(function() {
        count5++;
        if (count5 == 1) {
            $("#ach2js").show();
            $("#achclick").css("margin-top", "0%");
        } else if (count5 == 2) {
            $("#ach3js").show();
            $("#achclick").css("margin-top", "0%");
        } else {
            alert("only upto 3 achievements can be added");
        }
    });


});