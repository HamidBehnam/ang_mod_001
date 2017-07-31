import angular from "angular"
import uiRouter from "@uirouter/angularjs"
import summaryComponent from "./summary/summary.component.js"

const SummaryModule = angular.module("summary", [
    uiRouter
])
    .config(/* @ngInject */ ($stateProvider) => {
        $stateProvider.state("summary", {
            url: "/summary",
            component: "summary"
        });
    })
    .component("summary", summaryComponent);

export default SummaryModule;