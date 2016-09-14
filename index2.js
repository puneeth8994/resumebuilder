 //This JS file is used for the second resume template
$(document).ready(function() {
   //Prevent default operation pevents the form from reloading
    document.getElementById("theme2").addEventListener("click", function(event) {
        event.preventDefault();
        console.log($('.form1').serialize());
   //This function is used to replace the body of the main html file with the resume template
        var experiment2 = function() {
   //all the form input valuesare declared as variables using the jQuery .val() function.
            var res2fullname = $("#fullname").val();
            var res2phone = $("#phone").val();
            var res2mail = $("#mail").val();
            var res2int1 = $("#int1").val();
            var res2int2 = $("#int2").val();
            var res2int3 = $("#int3").val();
            var res2int4 = $("#int4").val();
            var res2int5 = $("#int5").val();
            var res2int6 = $("#int6").val();
            var res2skill1 = $("#skill1").val();
            var res2skill2 = $("#skill2").val();
            var res2skill3 = $("#skill3").val();
            var res2skill4 = $("#skill4").val();
            var res2skill5 = $("#skill5").val();
            var res2skill6 = $("#skill6").val();
            var res2exp1 = $("#exp1").val();
            var res2exp2 = $("#exp2").val();
            var res2exp3 = $("#exp3").val();
            var res2exp4 = $("#exp4").val();
            var res2exp21 = $("#exp21").val();
            var res2exp22 = $("#exp22").val();
            var res2exp23 = $("#exp23").val();
            var res2exp24 = $("#exp24").val();
            var res2edu1 = $("#edu1").val();
            var res2edu2 = $("#edu2").val();
            var res2edu3 = $("#edu3").val();
            var res2edu21 = $("#edu21").val();
            var res2edu22 = $("#edu22").val();
            var res2edu23 = $("#edu23").val();
            var res2ach11 = $("#ach11").val();
            var res2ach12 = $("#ach12").val();
            var res2ach13 = $("#ach13").val();
            var res2ach21 = $("#ach21").val();
            var res2ach22 = $("#ach22").val();
            var res2ach23 = $("#ach23").val();
            var res2ach31 = $("#ach31").val();
            var res2ach32 = $("#ach32").val();
            var res2ach33 = $("#ach33").val();

            //The below functions is used to notify warnings to the users when they haven't filled a specific field.
            //If the below given values return with an empty string, the form isn't accepted unless the form is filled as per the rules.
            if (res2fullname == "") {
                alert("Please fill your full name");
            } else if (res2phone == "") {
                alert("Please fill your phone number");
            } else if (res2mail == "") {
                alert("Please fill your E-mail Address");
            } else if (res2int1 == "" || res2int2 == "" || res2int3 == "") {
                alert("Please fill your Technology interests");
            } else if (res2skill1 == "" || res2skill2 == "" || res2skill3 == "") {
                alert("Please fill atleast three fields in the skill set section");
            } else if (res2exp1 == "" || res2exp2 == "" || res2exp3 == "") {
                alert("Please fill everything in the experience section");
            } else if (res2edu1 == "" || res2edu2 == "" || res2edu3 == "") {
                alert("Please fill everything in the education section");
            } else if (res2ach11 == "" || res2ach12 == "" || res2ach13 == "") {
                alert("Please fill Atleast 1 achievement");
            } else

              //This is the resume template declared as a variable.
                var html2 = '<script>' +
                'function pdf2() {' +
                'window.print();}' +
                '</script>' +
                '<button onclick="pdf2()" class="pdf pull-right" style="color:red"><i class="fa fa-3x fa-file-pdf-o" aria-hidden="true"></i></button>' +
                '<body style="padding-top:2%; font-family: \"times new roman\";">' +
                '<div class="container" style="border:2px; border-style:solid;">' +

                '<div class="container" style="margin: 2.5em 0 3em 0;">' +
                '<div class="row">' +
                '<div class="col-md-8.5 col-lg-9 col-sm-7 col-xs-12">' +
                '<h1 style="font-size:2.4em; word-break:normal;"><b>' + res2fullname + '</b></h1>' +
                '</div>' +
                '<div class="col-md-3.5 col-lg-3 col-sm-5 col-xs-12">' +
                '<ul style="list-style:none;">' +
                '<li style="font-size:1.2em; word-break:break-all;">' + res2phone + '</li>' +
                '<li style="font-size:1.2em; word-break:break-all;"><i>' + res2mail + '</i></li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +

                //Career Objectives Section
                '<div class="container">' +
                '<div class="row">' +
                '<div class="col-md-3 col-lg-3">' +
                '<h3 style="font-size:1.8em;"><b>Career Objectives</b></h3>' +
                '</div>' +
                '<div class="col-md-9 col-lg-9">' +
                '<p style="font-size:1.4em; padding-top:2%;">To be involved in work where I can utilize my skills and be creatively involved' +
                ' with system that effectively contributes to the growth of the organization.</p>' +
                '</div>' +
                '<hr/>' +
                '</div>' +
                '</div>' +

                //Interests section
                '<div class="container" style="margin: 2.5em 0 3em 0;">' +
                '<div class="row">' +
                '<div class="col-md-3 col-lg-3">' +
                '<h3 style="font-size:1.8em;"><b>Interested in</b></h3>' +
                '</div>' +
                '<div class="col-md-9 col-lg-9">' +
                '<ul class="pull-left" style="list-style:none; padding-top:2%; margin-left:-4%; font-size:1.4em;">' +
                '<li class="pull-left" style="word-break:normal;">' + res2int1 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left" style="word-break:normal;">' + res2int2 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left" style="word-break:normal;">' + res2int3 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160</li><br/>' +
                '<li class="pull-left" style="word-break:normal;">' + res2int4 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left" style="word-break:normal;">' + res2int5 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left" style="word-break:normal;">' + res2int6 + '</li><br/>' +
                '</div>' +
                '<hr/>' +
                '</div>' +
                '</div>' +

                //Skills section
                '<div class="container">' +
                '<div class="row">' +
                '<div class="col-md-3 col-lg-3">' +
                '<h3 style="font-size:1.8em;"><b>Skills</b></h3>' +
                '</div>' +
                '<div class="col-md-9 col-lg-9">' +
                '<ul class="pull-left" style="list-style:none; padding-top:3%; margin-left:-4%; font-size:1.4em;">' +
                '<li class="pull-left">' + res2skill1 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left">' + res2skill2 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left">' + res2skill3 + '&#160;&#160;</li><br/>' +
                '<li class="pull-left">' + res2skill4 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left">' + res2skill5 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                '<li class="pull-left">' + res2skill6 + '&#160;&#160;</li><br/>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +

                //Experience section
                '<div class="container">' +
                '<div class="row">' +
                '<div class="col-md-3 col-lg-3">' +
                '<h3 style="font-size:1.8em;"><b>Experience</b></h3>' +
                '</div>' +
                '<div class="col-md-9 col-lg-9">' +
                '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                '<li style="font-size:1.4em; word-break:normal;"><b>' + res2exp1 + '</b></li>' +
                '<li style="font-size:1em; word-break:normal">' + res2exp2 + '</li>' +
                '<li style="font-size:1.2em; word-break:normal">' + res2exp3 + '</li>' +
                '<li style="font-size:1.2em; word-break:normal">' + res2exp4 + '</li>' +
                '</ul>' +
                '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                '<li style="font-size:1.4em; word-break:normal;"><b>' + res2exp21 + '</b></li>' +
                '<li style="font-size:1em; word-break:normal">' + res2exp22 + '</li>' +
                '<li style="font-size:1.2em; word-break:normal">' + res2exp23 + '</li>' +
                '<li style="font-size:1.2em; word-break:normal">' + res2exp24 + '</li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +

                //Education section
                '<div class="container">' +
                '<div class="row">' +
                '<div class="col-md-3 col-lg-3">' +
                '<h3 style="font-size:1.8em;"><b>Education</b></h3>' +
                '</div>' +
                '<div class="col-md-9 col-lg-9">' +
                '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                '<li style="font-size:1.3em; word-break:normal">' + res2edu1 + '</li>' +
                '<li style="font-size:1em; word-break:normal">' + res2edu2 + '</li>' +
                '<li style="font-size:1em; word-break:normal">' + res2edu3 + '</li>' +
                '</ul>' +
                '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                '<li style="font-size:1.3em; word-break:normal">' + res2edu21 + '</li>' +
                '<li style="font-size:1em; word-break:normal">' + res2edu22 + '</li>' +
                '<li style="font-size:1em; word-break:normal">' + res2edu23 + '</li>' +
                '</ul>' +

                '</div>' +
                '</div>' +
                '</div>' +

                //Achievements section
                '<div class="container">' +
                '<div class="row">' +
                '<div class="col-md-3 col-lg-3">' +
                '<h3 style="font-size:1.8em;"><b>Achievements</b></h3>' +
                '</div>' +
                '<div class="col-md-9 col-lg-9">' +

                '<ul style="margin-left:-4%; list-style:none; padding-top:3%;">' +
                '<li style="font-size:1.3em; word-break:normal"><b>' + res2ach11 + '</b></li>' +
                '<li style="font-size:1.1em; word-break:normal">' + res2ach12 + '</li>' +
                '<li style="font-size:1.1em; word-break:normal">' + res2ach13 + '</li>' +
                '</ul>' +

                '<ul style="margin-left:-4%; list-style:none; padding-top:3%;">' +
                '<li style="font-size:1.3em; word-break:normal"><b>' + res2ach21 + '</b></li>' +
                '<li style="font-size:1.1em; word-break:normal">' + res2ach22 + '</li>' +
                '<li style="font-size:1.1em; word-break:normal">' + res2ach23 + '</li>' +
                '</ul>' +

                '<ul style="margin-left:-4%; list-style:none; padding-top:3%;">' +
                '<li style="font-size:1.3em; word-break:normal"><b>' + res2ach31 + '</b></li>' +
                '<li style="font-size:1.1em; word-break:normal">' + res2ach32 + '</li>' +
                '<li style="font-size:1.1em; word-break:normal">' + res2ach33 + '</li>' +
                '</ul>' +

                '</div>' +
                '</div>' +
                '</div>' +

                '</div>' +
                '</body>';



            return html2;

        }
       //This function is used to replace the html file.
        $("#cat").html(experiment2);

    });



});