/**
 * Created by hamidbehnam on 7/16/17.
 */

import '../less/style.less';
import angular from 'angular';
import RootComponent from './root.component.js'
import InfoModule from "./info/info.module"
import SummaryModule from "./summary/summary.module.js"

const RootModule = angular.module('root', [
    InfoModule.name,
    SummaryModule.name
])
    .config(["$locationProvider", ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])
    .component('root', RootComponent);

export default RootModule;
