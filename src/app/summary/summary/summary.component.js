import template from "./summary.component.html"

const SummaryComponent = {
    template: template,
    bindings: {},
    controller: class SummaryController {
        /*@ngInject*/
        constructor(AuthorService) {
            this.AuthorService = AuthorService;
        }
    }
};

export default SummaryComponent;