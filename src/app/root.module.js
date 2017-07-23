/**
 * Created by hamidbehnam on 7/16/17.
 */

import '../less/style.less';
import angular from 'angular';
import ngRedux from "ng-redux";
import infoReducer from "./info/shared/reducers";
import RootComponent from './root.component.js'
import InfoModule from "./info/info.module"
import SummaryModule from "./summary/summary.module.js"
import SharedModule from "./shared/shared.module.js"

const RootModule = angular.module('root', [
    ngRedux,
    InfoModule.name,
    SummaryModule.name,
    SharedModule.name
])
    .config(/* @ngInject */ ($locationProvider, $ngReduxProvider) => {
        $locationProvider.html5Mode(true);
        $ngReduxProvider.createStoreWith({
            info: infoReducer
        });
    })
    .component('root', RootComponent);

export default RootModule;

/* to learn more about @ngInject :
https://github.com/schmod/babel-plugin-angularjs-annotate
https://github.com/huston007/ng-annotate-loader
 */
