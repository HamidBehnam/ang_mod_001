import uiRouter from "@uirouter/angularjs"
import InfoComponent from "./info/info.component.js"

const InfoModule = angular.module("info", [
    uiRouter
])
    .config(["$stateProvider", ($stateProvider) => {
        $stateProvider.state("info", {
            url: "/info",
            component: "info"
        });
    }])
    .component("info", InfoComponent);

export default InfoModule;