module.exports = function(grunt) {
    grunt.registerTask('script', ['jshint', 'concat', 'uglify']);
}