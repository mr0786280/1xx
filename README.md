# 1xx

https://1xx.catchthesehands.net

inside out project version 100.0
	- added header resize functionality
	
inside out project version 100.1
	- added footer resize functionality
	- added jQuery, teather and popper
	
inside out project version 100.2
	-fix the footer by adjusting the bootstrap column widths wrap inside a bootstrap row
	
inside out project version 101.0
	- added first layer of navigation
	- created assets/js/app.js
	- created assets/data/menu.json
	- moved header resize js to app.js 
	
inside out project version 102.0
    - completed menuBuilder function to app.js
	- completed nav through menuBuilder function with recursion
	
inside out project version 102.1
	- completed css for navigation 
	
inside out project version 103.0 (accidentally called 103-3 in github :c)
    - fixed enlarging navigation on header shrink
	- added loader to application with gears
	
inside out project version 104.0
	-  modified the ajax call to get the JSON for the menu from the me.catchthesehands.net site
	- modified the menuBuilder function to accept the JSON data from Wordpress REST API
	- removed data/menu.json from file system considering is it no longer needed
	
inside out project version 105.0
	- prepended the title to the production site link
	- added link to GitHub pages to the top of the content me WP Site Changes
	- added and activated a new theme (WP Bootstrap Starter - Version: 3.0.11 - By Afterimage Designs)
	- added home page name "iop-html5-" to pages do not add to menu
	- added content from https://www.diffchecker.com/3ZeHoYyZ
	- nested all pages below your home page "iop-html5-home"
	- updated "Main Menu" to "iop-html5 Menu"
	
~inside out App Site Changes

 - index.html
      - code changes https://www.diffchecker.com/4k9vqfca
      - removed comments and cleaned code
      - added the click event to the logo - calls the getPage function
      - removed both main content sections
      - added the circle loading div and content
 - style.css
      - code changes https://www.diffchecker.com/jCetXEtM
      - added the logo & logo:hover classes for the logo in the header - no inked
      - added the section class to keep the page from closing all the way when there is no content
      - added the following classes for the loader circle 
           - circle, wave, wave:before, wave:after
           - add keyframes for animation animate
 - app.js
      - code changes https://www.diffchecker.com/qS2xXeDk
      - removed comments and cleaned code
      - added the getPage function to capture link clicks and get page content
      - added getPage function call to the ajax call for the menus on page load to get the homepage
      - modified the forEach loop in the menuBuilder to include the page id as a data attribute
	
inside out project version 106.0

 	me WP Site Changes
 		- add the pages for the links in the general links section in the footer
    	- contact us, frequently ask questions, terms & conditions, privacy policy
 
 	inside out App Site Changes
		- index.html
      	- code changes https://www.diffchecker.com/Td5ZPWg6
      	- add id="genLinks" to the ul in the "General Links" section in the footer
 	 app.js
      	- code changes https://www.diffchecker.com/KBtMvQ7d
      	- add ajax call to gret the general links menu
      	- add variables to the menubuilder function to accepet id and class information 