'use strict';

module.exports = function (grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
         dev: {
            options: {
               style: "expanded"
            },
            files: {
               "public/assets/styles/main.css": "public/assets/styles/main.scss"
            }
         }
      },
      watch: {
         compass: {
            files: ["public/**/*.{scss,sass}"],
            tasks: ["sass:dev"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-contrib-sass");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["sass", "watch"]);

};