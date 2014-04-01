module.exports = function(grunt) {
    grunt.registerTask('default', ['haml', 'htmlmin', 'csscomb', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify', 'imagemin', 'svgmin']);
}