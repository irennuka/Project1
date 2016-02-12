module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
          my_target: {
            files: {
               'target/main.js': ['src/js/main.js']
            }
          }
    },

    cssmin: {
        target: {
            files: {
                'target/main.css': ['src/css/main.css']
            }
        }
    },

    htmlmin: {
        target: {
          files: {
            'target/main.html': 'src/html/main.html'
          }
        }
     },

    watch: {
        files: ['**/*'],
    }
  });

  module.exports = function(grunt) {

  	require('load-grunt-config')(grunt);

  };

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'watch']);
};