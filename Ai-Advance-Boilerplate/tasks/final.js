module.exports = function(grunt) {
    grunt.registerTask('final', ['haml', 'jade', 'htmlmin', 'sass', 'csscomb', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin', 'svgmin', 'copy', 'compress']);
}