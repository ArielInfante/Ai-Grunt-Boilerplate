module.exports = function(grunt) {
    grunt.registerTask('default', ['haml', 'jade', 'htmlmin', 'sass', 'csscomb', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify', 'imagemin', 'svgmin']);
}