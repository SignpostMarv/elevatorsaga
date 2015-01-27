/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      elevatorsaga_app: {
        options: {
          unused: false,
          globals: {
            $: true,
            CodeMirror: true,
            confirm: true,
            _: true,
            riot: true,
            console: true,
            createWorldController: true,
            createWorldCreator: true,
            challenges: true,
            clearAll: true,
            presentStats: true,
            presentChallenge: true,
            presentWorld: true,
            presentFeedback: true,
            presentCodeStatus: true,
            makeDemoFullscreen: true
          }
        },
        src: 'app.js'
      },
      elevatorsaga_base: {
        options: {
          unused: false,
          globals: {
            console: true,
            riot: true,
            $: true
          }
        },
        src: 'base.js'
      },
      elevatorsaga_challenges: {
        options: {
          unused: false,
          globals: {
            console: true,
            riot: true,
            $: true,
            _: true
          }
        },
        src: 'challenges.js'
      },
      elevatorsaga_elevator: {
        options: {
          unused: false,
          globals: {
            _: true,
            limitNumber: true,
            distanceNeededToAchieveSpeed: true,
            accelerationNeededToAchieveChangeDistance: true,
            epsilonEquals: true,
            deprecationWarning: true
          }
        },
        src: 'elevator.js'
      },
      elevatorsaga_floor: {
        options: {
          unused: false,
          globals: {
            riot: true
          }
        },
        src: 'floor.js'
      },
      elevatorsaga_interfaces: {
        options: {
          unused: false,
          globals: {
            riot: true,
            _: true,
            limitNumber: true,
            epsilonEquals: true,
            createBoolPassthroughFunction: true
          }
        },
        src: 'interfaces.js'
      },
      elevatorsaga_movable: {
        options: {
          unused: false,
          globals: {
            riot: true,
            console: true,
            distanceNeededToAchieveSpeed: true,
            accelerationNeededToAchieveChangeDistance: true
          }
        },
        src: 'movable.js'
      },
      elevatorsaga_presenters: {
        options: {
          unused: false,
          globals: {
            _: true,
            riot: true,
            $: true,
            console: true
          }
        },
        src: 'presenters.js'
      },
      elevatorsaga_user: {
        options: {
          unused: false,
          globals: {
            linearInterpolate: true
          }
        },
        src: 'user.js'
      },
      elevatorsaga_world: {
        options: {
          unused: false,
          globals: {
            _: true,
            asMovable: true,
            asElevator: true,
            asUser: true,
            asFloor: true,
            console: true,
            riot: true,
            asElevatorInterface: true
          }
        },
        src: 'world.js'
      },
      elevatorsaga_tests: {
        options: {
          unused: false,
          globals: {
            describe: true,
            beforeEach: true,
            asMovable: true,
            spyOn: true,
            it: true,
            expect: true,
            createWorldController: true,
            requireUserCountWithinTime: true,
            requireUserCountWithMaxWaitTime: true,
            requireUserCountWithinMoves: true,
            $: true,
            _: true,
            asElevator: true,
            asElevatorInterface: true,
          }
        },
        src: 'test/tests.js'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      elevatorsaga_app: {
        files: 'app.js',
        tasks: ['jshint:elevatorsaga_app']
      },
      elevatorsaga_base: {
        files: 'base.js',
        tasks: ['jshint:elevatorsaga_base']
      },
      elevatorsaga_challenges: {
        files: 'challenges.js',
        tasks: ['jshint:elevatorsaga_challenges']
      },
      elevatorsaga_elevator: {
        files: 'elevator.js',
        tasks: ['jshint:elevatorsaga_elevator']
      },
      elevatorsaga_floor: {
        files: 'floor.js',
        tasks: ['jshint:elevatorsaga_floor']
      },
      elevatorsaga_interfaces: {
        files: 'interfaces.js',
        tasks: ['jshint:elevatorsaga_interfaces']
      },
      elevatorsaga_movable: {
        files: 'movable.js',
        tasks: ['jshint:elevatorsaga_movable']
      },
      elevatorsaga_presenters: {
        files: 'presenters.js',
        tasks: ['jshint:elevatorsaga_presenters']
      },
      elevatorsaga_user: {
        files: 'user.js',
        tasks: ['jshint:elevatorsaga_user']
      },
      elevatorsaga_world: {
        files: 'world.js',
        tasks: ['jshint:elevatorsaga_world']
      },
      elevatorsaga_tests: {
        files: 'test/tests.js',
        tasks: ['jshint:elevatorsaga_tests']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint']);
};
