
//Google Analytics Tracker START 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-54650418-1', 'auto');
	ga('send', 'pageview');

//Mobile Navbar
$(document).ready(function(){
        $("#nav-mobile").html($("#nav-main").html());
        $("#nav-trigger span").click(function(){
          if ($("nav#nav-mobile ul").hasClass("expanded")) {
              $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
              $(this).removeClass("open");
          } else {
              $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
              $(this).addClass("open");
          }
        });
      });