 //This JS file is used for the first resume template
 $(document).ready(function() {
  //Prevent default operation pevents the form from reloading
     document.getElementById("theme1").addEventListener("click", function(event) {
         event.preventDefault();
         console.log($('.form1').serialize());
   //This function is used to replace the body of the main html file with the resume template
         var experiment1 = function() {
   //all the form input valuesare declared as variables using the jQuery .val() function.
             var fullname = $("#fullname").val();
             var phone = $("#phone").val();
             var mail = $("#mail").val();
             var int1 = $("#int1").val();
             var int2 = $("#int2").val();
             var int3 = $("#int3").val();
             var int4 = $("#int4").val();
             var int5 = $("#int5").val();
             var int6 = $("#int6").val();
             var skill1 = $("#skill1").val();
             var skill2 = $("#skill2").val();
             var skill3 = $("#skill3").val();
             var skill4 = $("#skill4").val();
             var skill5 = $("#skill5").val();
             var skill6 = $("#skill6").val();
             var exp1 = $("#exp1").val();
             var exp2 = $("#exp2").val();
             var exp3 = $("#exp3").val();
             var exp4 = $("#exp4").val();
             var exp21 = $("#exp21").val();
             var exp22 = $("#exp22").val();
             var exp23 = $("#exp23").val();
             var exp24 = $("#exp24").val();
             var edu1 = $("#edu1").val();
             var edu2 = $("#edu2").val();
             var edu3 = $("#edu3").val();
             var edu21 = $("#edu21").val();
             var edu22 = $("#edu22").val();
             var edu23 = $("#edu23").val();
             var ach11 = $("#ach11").val();
             var ach12 = $("#ach12").val();
             var ach13 = $("#ach13").val();
             var ach21 = $("#ach21").val();
             var ach22 = $("#ach22").val();
             var ach23 = $("#ach23").val();
             var ach31 = $("#ach31").val();
             var ach32 = $("#ach32").val();
             var ach33 = $("#ach33").val();

             //The below functions is used to notify warnings to the users when they haven't filled a specific field.
             //If the below given values return with an empty string, the form isn't accepted unless the form is filled as per the rules.
             if (fullname == "") {
                 alert("Please fill your full name");
             } else if (phone == "") {
                 alert("Please fill your phone number");
             } else if (mail == "") {
                 alert("Please fill your E-mail Address");
             } else if (int1 == "" || int2 == "" || int3 == "") {
                 alert("Please fill your Technology interests");
             } else if (skill1 == "" || skill2 == "" || skill3 == "") {
                 alert("Please fill atleast three fields in the skill set section");
             } else if (exp1 == "" || exp2 == "" || exp3 == "") {
                 alert("Please fill everything in the experience section of atleast 1 company");
             } else if (edu1 == "" || edu2 == "" || edu3 == "") {
                 alert("Please fill everything in the education section of atleast 1 college");
             } else if (ach11 == "" || ach12 == "" || ach13 == "") {
                 alert("Please fill Atleast 1 achievement completely");
             } else



            //This is the resume template declared as a variable.
                 var html1 = '<script>' +
                 'function pdf() {' +
                 'window.print();}' +
                 '</script>' +
                 '<button onclick="pdf()" class="pdf pull-right" style="color:red"><i class="fa fa-3x fa-file-pdf-o" aria-hidden="true"></i></button>' +
                 '<body style="padding-top:2%; font-family: \"times new roman\";">' +
                 '<div class="container" style= "background-color:#F5F5FF;">' +
                 '<div style="border: solid; border-color:black; border-width:8px 0 2px 0;">' +

                 //The below part is for full name and phone number and E-mail

                 '<div class="container" style="margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc;">' +
                 '<div class="row">' +
                 '<div class="col-md-9 col-lg-9">' +
                 '<h1 style="word-break:normal;">' + fullname + '</h1>' +
                 '</div>' +
                 '<div class="col-md-3 col-lg-3">' +
                 '<h3 style="font-size:1.2em;">' + phone + '</h3>' +
                 '<h3 style="font-size:1.2em; word-break:break-all;">' + mail + '</h3>' +
                 '</div>' +
                 '</div>' +
                 '</div>' +

                 //The below part represents career objectives

                 '<div class="container">' +
                 '<div class="row">' +
                 '<div class="col-md-3 col-lg-3">' +
                 '<h3>Career Objectives</h3>' +
                 '</div>' +
                 '<div class="col-md-9 col-lg-9">' +
                 '<p style="font-size:1.4em; padding-top:3%;">To be involved in work where I can utilize my skills and be creatively' +
                 ' involved with system that effectively contributes to the growth of the organization.</p>' +
                 '</div>' +
                 '<hr/>' +
                 '</div>' +
                 '</div>' +

                 //Technology interests

                 '<div class="container">' +
                 '<div class="row">' +
                 '<div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">' +
                 '<h3>Interested in</h3>' +
                 '</div>' +
                 '<div class="col-md-9 col-lg-9">' +
                 '<ul class="pull-left" style="font-size:1.4em; list-style:none; padding-top:3%; margin-left:-4%; word-break:normal;">' +
                 '<li class="pull-left">' + int1 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + int2 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + int3 + '&#160;&#160;</li><br/>' +
                 '<li class="pull-left">' + int4 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + int5 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + int6 + '&#160;&#160;</li><br/>' +
                 '</ul>' +
                 '</div>' +
                 '</div>' +
                 '</div>' +

                 //Skill set  

                 '<div class="container">' +
                 '<div class="row">' +
                 '<div class="col-md-3 col-lg-3">' +
                 '<h3>Skills</h3>' +
                 '</div>' +
                 '<div class="col-md-9 col-lg-9">' +
                 '<ul class="pull-left" style="font-size:1.4em; list-style:none; padding-top:3%; margin-left:-4%; word-break:normal;">' +
                 '<li class="pull-left">' + skill1 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + skill2 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + skill3 + '&#160;&#160;</li><br/>' +
                 '<li class="pull-left">' + skill4 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + skill5 + '&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</li>' +
                 '<li class="pull-left">' + skill6 + '&#160;&#160;</li><br/>' +
                 '</ul>' +
                 '</div>' +
                 '</div>' +
                 '</div>' +

                 //Experience

                 '<div class="container">' +
                 '<div class="row">' +
                 '<div class="col-md-3 col-lg-3">' +
                 '<h3>Experience</h3>' +
                 '</div>' +
                 '<div class="col-md-9 col-lg-9">' +
                 '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                 '<li style="font-size:1.4em; word-break:normal;"><b>' + exp1 + '</b></li>' +
                 '<li style="font-size:1em; word-break:normal;">' + exp2 + '</li>' +
                 '<li style="font-size:1.2em; word-break:normal;">' + exp3 + '</li>' +
                 '<li style="font-size:1.2em; word-break:normal;">' + exp4 + '</li>' +
                 '</ul>' +

                 '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                 '<li style="font-size:1.4em; word-break:normal;"><b>' + exp21 + '</b></li>' +
                 '<li style="font-size:1em; word-break:normal;">' + exp22 + '</li>' +
                 '<li style="font-size:1.2em; word-break:normal;">' + exp23 + '</li>' +
                 '<li style="font-size:1.2em; word-break:normal;">' + exp24 + '</li>' +
                 '</ul>' +

                 '</div>' +
                 '</div>' +
                 '</div>' +

                 //Education

                 '<div class="container">' +
                 '<div class="row">' +
                 '<div class="col-md-3 col-lg-3">' +
                 '<h3>Education</h3>' +
                 '</div>' +
                 '<div class="col-md-9 col-lg-9">' +
                 '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                 '<li style="font-size:1.3em; word-break:normal">' + edu1 + '</li>' +
                 '<li style="font-size:1em; word-break:normal">' + edu2 + '</li>' +
                 '<li style="font-size:1em; word-break:normal">' + edu3 + '</li>' +
                 '</ul>' +

                 '<ul style="list-style:none; padding-top:3%; font-size:1.4em; margin-left:-4%;">' +
                 '<li style="font-size:1.3em; word-break:normal">' + edu21 + '</li>' +
                 '<li style="font-size:1em; word-break:normal">' + edu22 + '</li>' +
                 '<li style="font-size:1em; word-break:normal">' + edu23 + '</li>' +
                 '</ul>' +

                 '</div>' +
                 '</div>' +
                 '</div>' +

                 //Achievements, limiting to 3 to make the resume look concise

                 '<div class="container">' +
                 '<div class="row">' +
                 '<div class="col-md-3 col-lg-3">' +
                 '<h3>Achievements</h3>' +
                 '</div>' +
                 '<div class="col-md-9 col-lg-9">' +
                 '<ul style="margin-left:-4%; list-style:none; padding-top:0%; font-size:1.4em; margin-left:-4%;">' +
                 '<li style="font-size:1.3em; padding-top:2%; word-break:normal;"><b>' + ach11 + '</b></li>' +
                 '<li style="font-size:1.1em; word-break:normal;">' + ach12 + '</li>' +
                 '<li style="font-size:1.1em; word-break:normal;">' + ach13 + '</li>' +
                 '</ul>' +

                '<ul style="margin-left:-4%; list-style:none; padding-top:0%; font-size:1.4em; margin-left:-4%;">' +
                 '<li style="font-size:1.3em; padding-top:2%; word-break:normal;"><b>' + ach21 + '</b></li>' +
                 '<li style="font-size:1.1em; word-break:normal;">' + ach22 + '</li>' +
                 '<li style="font-size:1.1em; word-break:normal;">' + ach23 + '</li>' +
                 '</ul>' +

                 '<ul style="margin-left:-4%; list-style:none; padding-top:0%; font-size:1.4em; margin-left:-4%;">' +
                 '<li style="font-size:1.3em; padding-top:2%; word-break:normal;"><b>' + ach31 + '</b></li>' +
                 '<li style="font-size:1.1em; word-break:normal;">' + ach32 + '</li>' +
                 '<li style="font-size:1.1em; word-break:normal;">' + ach33 + '</li>' +
                 '</ul>' +


                 '</div>' +
                 '</div>' +
                 '</div>' +

                 '</div>' +
                 '</body>';



             return html1;

         }
     //This function is used to replace the html file.
         $("#cat").html(experiment1);

     });


 });