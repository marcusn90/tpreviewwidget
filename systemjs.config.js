SystemJS.config({
    baseURL: '/',
    packages: {
        '/': {
            main: 'app.js',
            defaultExtension: 'js'
        }
    },
    map: {
        'angular': 'node_modules/angular/angular.min.js',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel'
});