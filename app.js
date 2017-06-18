import angular from 'angular';

import TpWidgetModule from './widget/tp-widget.module';


const app = angular.module('tpWidgetApp', [ TpWidgetModule ])
    

angular.bootstrap(document.documentElement, [app.name]);
