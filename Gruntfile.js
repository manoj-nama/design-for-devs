'use strict';

module.exports = function (grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      autoprefixer: {
         dist: {
            options: {
               browsers: ['last 2 versions']
            },
            files: {
               'public/app.css': 'public/app.css'
            }
         }
      },
      sass: {
         dev: {
            options: {
               //style: "compressed"
               style: "extended"
            },
            files: {
               "public/app.css": "public/assets/styles/app.scss"
            }
         }
      },
      watch: {
         compass: {
            files: ["public/**/*.{scss,sass}"],
            tasks: ["sass:dev", "autoprefixer:dist"]
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
   grunt.loadNpmTasks("grunt-autoprefixer");
   grunt.loadNpmTasks("grunt-express-server");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("serve", ["default"]);
   grunt.registerTask("default", ["sass", "autoprefixer", "express", "watch"]);

};