module.exports = {
    main: {
        options: {
            archive: 'finalbuild.zip'
        },
        files: [{
            flatten: false,
            src: ['finalbuild/**'],
            dest: 'finalbuild/'
        }]
    }
}