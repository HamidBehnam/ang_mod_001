import angular from "angular";
import AuthorService from "./services/author.service.js"

const SharedModule = angular.module("shared", [])
    .service("AuthorService", AuthorService);

export default SharedModule;