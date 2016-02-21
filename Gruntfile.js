'use strict';

module.exports = function (grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
         dev: {
            options: {
               style: "compressed"
            },
            files: {
               "public/app.css": "public/assets/styles/app.scss"
            }
         }
      },
      watch: {
         compass: {
            files: ["public/**/*.{scss,sass}"],
            tasks: ["sass:dev"]
         }
      },
      express: {
         dev: {
            options: {
               script: 'app.js'
            }
         }
      }
   });

   grunt.loadNpmTasks("grunt-contrib-sass");
   grunt.loadNpmTasks("grunt-express-server");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["express", "sass", "watch"]);

};