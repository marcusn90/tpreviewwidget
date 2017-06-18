import angular from 'angular';

import TpWidgetItemComponent from './tp-widget-item.component';
import TpWidgetItemCtrl from './tp-widget-item.controller';

const TpWidgetItemModule = angular.module('tpWidgetItemModule', []);

TpWidgetItemModule
    .component('tpWidgetItem', TpWidgetItemComponent)
    .controller('TpWidgetItemCtrl', TpWidgetItemCtrl);

export default TpWidgetItemModule.name;