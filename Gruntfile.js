module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      default: [
        '.tmp',
        'dist/'
      ]
    },

    webfont: {
      default: {
        src: 'src/img/*.svg',
        dest: 'dist/fonts/',
        destCss: 'dist/fonts/',
        options: {
          font: 'ui-icon',
          styles: 'font,icon',
          types: 'eot,woff2,woff,svg',
          syntax: 'bootstrap',
          template: 'src/_template.css',
          htmlDemo: true,
          htmlDemoTemplate: 'src/_template.html',
          htmlDemoFilename: 'index',
          destHtml: './',
          stylesheet: 'less',
          relativeFontPath: '../fonts/',
          engine: 'fontforge',
          autoHint: true
        }
      }
    },

    svgstore: {
      options: {
        prefix : 'icon-'
      },
      default: {
        files: {
          'dist/icons.svg': ['src/img/*.svg']
        }
      },
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-svgstore');

  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'webfont',
    'svgstore'
  ]);

};
