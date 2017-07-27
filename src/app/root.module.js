/**
 * Created by hamidbehnam on 7/16/17.
 */

import '../less/style.less';
import angular from 'angular';
import ngRedux from "ng-redux";
import ReduxThunk from "redux-thunk"
import ngReduxUiRouter from "redux-ui-router"
import rootReducer from "./root.reducer";
import RootComponent from './root.component.js'
import InfoModule from "./info/info.module"
import SummaryModule from "./summary/summary.module.js"
import SharedModule from "./shared/shared.module.js"

const RootModule = angular.module('root', [
    ngRedux,
    ngReduxUiRouter,
    InfoModule.name,
    SummaryModule.name,
    SharedModule.name
])
    .component('root', RootComponent);

if (process.env.DEBUG_REDUX === "on") {
    //we don't need these imports in non-dev or non-debuggable environments.
    const createLogger = require("redux-logger").createLogger;
    const DevTools = require("./devTools").default;
    const runDevTools = require("./devTools").runDevTools;

    RootModule.config(/* @ngInject */ ($locationProvider, $ngReduxProvider) => {
        $locationProvider.html5Mode(true);
        $ngReduxProvider.createStoreWith(rootReducer, ["ngUiRouterMiddleware", ReduxThunk, createLogger()], [DevTools.instrument()]);
    })
        .run(runDevTools);
} else {
    RootModule.config(/* @ngInject */ ($locationProvider, $ngReduxProvider) => {
        $locationProvider.html5Mode(true);
        $ngReduxProvider.createStoreWith(rootReducer, ["ngUiRouterMiddleware", ReduxThunk]);
    });
}

if (process.env.NODE_ENV === "dev") {
    console.log("DEBUG_REDUX: ", process.env.DEBUG_REDUX);
    console.log("NODE_ENV: ", process.env.NODE_ENV);
    console.log("APP_VERSION: ", VERSION);
}

export default RootModule;

/* to learn more about @ngInject :
https://github.com/schmod/babel-plugin-angularjs-annotate
https://github.com/huston007/ng-annotate-loader
 */
