module.exports = {
    options: {
        browsers: ['last 2 version']
    },
    multiple_files: {
        expand: true,
        flatten: true,
        src: 'build/css/resorted/*.resorted.css', //The source files are entered in the css folder
        dest: 'build/css/prefixed/' //The output files are entered in the build/css file
    }
}