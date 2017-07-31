import uiRouter from "@uirouter/angularjs"
import ngResource from "angular-resource"
import infoComponent from "./info/info.component.js"
import quickInfoComponent from "./quick-info/quick-info.component.js"
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
    .component("info", infoComponent)
    .component("quickInfo", quickInfoComponent)
    .service("ApiService", ApiService)
    .factory("InfoActionsService", InfoActionsService);

export default InfoModule;