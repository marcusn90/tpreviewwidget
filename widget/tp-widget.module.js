import angular from 'angular';

import TpWidgetItemModule from './widget-item/tp-widget-item.module';

import TpWidgetComponent from './tp-widget.component';
import TpWidgetCtrl from './tp-widget.controller';
import TpWidgetService from './tp-widget.service';

const TpWidgetModule = angular.module('tpWidgetModule', [ TpWidgetItemModule ]);

TpWidgetModule
    .component('tpWidget', TpWidgetComponent)
    .controller('TpWidgetCtrl', TpWidgetCtrl)
    .service('TpWidgetService', TpWidgetService);

export default TpWidgetModule.name;