/**
 * Created by hamidbehnam on 7/16/17.
 */

import '../less/style.less';
import angular from 'angular';
import RootComponent from './root.component.js'
import InfoModule from "./info/info.module"

const RootModule = angular.module('root', [
    InfoModule.name
])
    .config(["$locationProvider", ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])
    .component('root', RootComponent);

export default RootModule;
