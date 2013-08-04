********************************
compass-grunt-brower-scaffolding
********************************

My purpose is to provide you with a simple scaffolding to help you for building mockups fast. Bootstap helps you to design your ui, compass (and sass) helps you to write your custom slylesheet and livereload helps you to preview your work without switching between your editor and your browser.

Prerequisite
------------

`Bower <https://github.com/bower/bower>`_ and `Grunt <http://gruntjs.com/getting-started>`_. depends on Node and npm.

* `NodeJS <http://nodejs.org/>`_
* `npm <http://npmjs.org/>`_
* `compass <http://compass-style.org/>`_
* `sass <http://sass-lang.com/>`_

Tested on macosx mountain lion.

Install Bower
^^^^^^^^^^^^^

Bower is installed globally using npm:.

::

    $ npm install -g bower


Install Grunt
^^^^^^^^^^^^^

Install Grunt's command line interface (CLI). Grunt will be only installed in your project folder.

::

    $ npm install -g grunt-cli



Install Sass and compass
^^^^^^^^^^^^^^^^^^^^^^^^

Sass and Compass are installed globally on the system.

::

    $ gem update --system
    $ gem install sass
    $ gem install compass


Install and init project
------------------------

Checkout the project.

::

    $ git clone https://github.com/k3z/compass-grunt-brower-scaffolding.git ./<project-folder>


Run Bower to download dependencies

::

    $ cd <project-folder>/
    $ bower install


Bower components are now in www/assets/components/. I choose a specific version of bootstrap front end framework that is sass ready (https://github.com/thomas-mcdonald/bootstrap-sass).


Run Grunt to initialize project

::

    $ cd <project-root>/
    $ npm install
    $ grunt


Compiled sass (scss) files are now in www/assets/css/project.css

Grunt can observe your files and execute somme task automaticaly.

To run Grunt in background

::

    $ grunt watch


To refresh automatically your browser window each time grunt execute a task, install and activate livereload plugin in your browser tab (http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).


Content
-------

The sample content is only here to demonstrate the power of grunt and compass.
Look at the sass (scss) code in /www/assets/sass/project.scss. It's an example of what sass and compass can do the simplify and optimize your stylesheets.


Production file
---------------

To generate a compressed css file, ready for production use :

::

    $ grunt production