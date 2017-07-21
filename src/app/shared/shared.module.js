import angular from "angular";
import AuthorService from "./services/author.service.js"
import interactiveItem from "./directives/interactive-item/interactive-item.directive.js"

const SharedModule = angular.module("shared", [])
    .service("AuthorService", AuthorService)
    .directive("interactiveItem", interactiveItem);

export default SharedModule;