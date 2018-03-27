// JavaScript Document
   
    window.onload = init();

	function init() {
		"use strict";
            window.addEventListener('scroll', function(e) {
                var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    shrinkOn = 300,
                    header = document.querySelector("header");
                if (distanceY > shrinkOn) {
                    classie.add(header, "smaller");
                } else {
                    if (classie.has(header, "smaller")) {
                        classie.remove(header, "smaller");
                    }
                }
            });
		
			$.ajax({
				method:'GET',
				url:'assets/data/menu.json',
				dataType:'json',
				success: function(data){
					console.log('all was good');
					console.log(data.menu.length);
                    console.log(data.menu);
					
					if(data.menu.length > 0){
						data.menu.forEach(function(data){
                            
                            console.log(data);
							//$('nav').append('<a href="love.html">love</a>');							
							$('nav').append('<a href="'+data.MenuLink+'">'+data.MenuName+'</a>');
							//$('nav').append("<a href='"+item.MenuLink+"'>"+item.MenuName+"</a>");
							
						});
						
						
					}
				},
				error: function(){
					console.log('all was not good');
				}
			});
		
 }
 

 function menuBuilder(obj) {
	 var theMenu = '';
	 if (obj.length > 0) {
		 
		 
		 
	 }
 }


