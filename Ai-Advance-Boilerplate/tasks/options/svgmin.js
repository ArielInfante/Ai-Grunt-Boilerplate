module.exports = {
    options: {
        plugins: [
            { removeViewBox: false },
            { removeUselessStrokeAndFill: false }
        ]
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.svg'],
            dest: 'build/images/',
            ext: 'min.svg'
        }]
    }
}