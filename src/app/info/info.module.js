import uiRouter from "@uirouter/angularjs"
import ngResource from "angular-resource"
import InfoComponent from "./info/info.component.js"
import QuickInfoComponent from "./quick-info/quick-info.component.js"
import ApiService from "./shared/utils/api.service"
import InfoActionsService from "./shared/redux/info.actions";

const InfoModule = angular.module("info", [
    uiRouter,
    ngResource
])
    .config(/* @ngInject */ ($stateProvider) => {
        $stateProvider.state("info", {
            url: "/info",
            component: "info"
        });
    })
    .component("info", InfoComponent)
    .component("quickInfo", QuickInfoComponent)
    .service("ApiService", ApiService)
    .factory("InfoActionsService", InfoActionsService);

export default InfoModule;