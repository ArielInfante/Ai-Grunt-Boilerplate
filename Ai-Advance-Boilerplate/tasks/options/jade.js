module.exports = {
    compile: {
        options: {
            // data: function(dest, src) {
            //     return require('jade/data/userdata.json');
            // },
            pretty: true
        },
        files: [{
            expand: true,
            cwd: 'jade/',
            src: '*.jade',
            dest: '',
            ext: '.html'
        }]
    }
}