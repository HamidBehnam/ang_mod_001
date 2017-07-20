import angular from "angular"
import uiRouter from "@uirouter/angularjs"
import SummaryComponent from "./summary/summary.component.js"

const SummaryModule = angular.module("summary", [
    uiRouter
])
    .config(["$stateProvider", ($stateProvider) => {
        $stateProvider.state("summary", {
            url: "/summary",
            component: "summary"
        });
    }])
    .component("summary", SummaryComponent);

export default SummaryModule;