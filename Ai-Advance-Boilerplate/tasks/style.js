module.exports = function(grunt) {
    grunt.registerTask('style', ['sass','csscomb', 'autoprefixer', 'cssmin']);
}