import uiRouter from "@uirouter/angularjs"
import InfoComponent from "./info/info.component.js"
import QuickInfoComponent from "./quick-info/quick-info.component.js"

const InfoModule = angular.module("info", [
    uiRouter
])
    .config(["$stateProvider", ($stateProvider) => {
        $stateProvider.state("info", {
            url: "/info",
            component: "info"
        });
    }])
    .component("info", InfoComponent)
    .component("quickInfo", QuickInfoComponent);

export default InfoModule;