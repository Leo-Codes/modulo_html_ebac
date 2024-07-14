module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    './dev/styles/main.css': './src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    './build/styles/main.css': './src/styles/main.less'
                }
            }
        },
        uglify: {
            development: {
                files: {
                    './dev/js/main.js': './src/js/main.js'
                }
            },
            production: {
                files: {
                    './build/js/main.js': './src/js/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["less:development", "uglify:development"]);
    grunt.registerTask("build", ["less:production", "uglify:production"]);
}
