angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("home.html",
    "<div id=\"index-banner\" class=\"parallax-container\">\n" +
    "    <div class=\"section no-pad-bot\">\n" +
    "        <div class=\"container\">\n" +
    "            <br><br>\n" +
    "            <h1 class=\"header center teal-text text-lighten-2\">{{title}}</h1>\n" +
    "            <div class=\"row center\">\n" +
    "                <h5 class=\"header col s12 light\">{{desc}}</h5>\n" +
    "            </div>\n" +
    "            <div class=\"row center\">\n" +
    "                <a href=\"http://materializecss.com/getting-started.html\" id=\"download-button\" class=\"btn-large waves-effect waves-light teal lighten-1\">Get Started</a>\n" +
    "            </div>\n" +
    "            <br><br>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"parallax\"><img src=\"img/background1.jpg\" alt=\"Unsplashed background img 1\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"section\">\n" +
    "\n" +
    "        <!--   Icon Section   -->\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col s12 m4\" ng-repeat='thing in things'>\n" +
    "                <div class=\"icon-block\">\n" +
    "                    <h2 class=\"center brown-text\">\n" +
    "                        <i class=\"material-icons\">{{thing.icon}}</i>\n" +
    "                    </h2>\n" +
    "                    <h5 class=\"center\">{{thing.title}}</h5>\n" +
    "\n" +
    "                    <p class=\"light\">{{thing.desc}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"parallax-container valign-wrapper\">\n" +
    "    <div class=\"section no-pad-bot\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row center\">\n" +
    "                <h5 class=\"header col s12 light\">{{desc}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"parallax\"><img src=\"img/background2.jpg\" alt=\"Unsplashed background img 2\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"section\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col s12 center\">\n" +
    "                <h3>\n" +
    "                    <i class=\"mdi-content-send brown-text\"></i>\n" +
    "                </h3>\n" +
    "                <h4>Contact Us</h4>\n" +
    "                <p class=\"left-align light\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo,\n" +
    "                    ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed\n" +
    "                    ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"parallax-container valign-wrapper\">\n" +
    "    <div class=\"section no-pad-bot\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row center\">\n" +
    "                <h5 class=\"header col s12 light\">{{desc}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"parallax\"><img src=\"img/background3.jpg\" alt=\"Unsplashed background img 3\"></div>\n" +
    "</div>\n"
  );

}]);
