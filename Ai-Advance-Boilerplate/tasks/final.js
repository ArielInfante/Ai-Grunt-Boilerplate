module.exports = function(grunt) {
    grunt.registerTask('final', ['haml', 'htmlmin', 'csscomb', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin', 'svgmin', 'copy', 'compress']);
}