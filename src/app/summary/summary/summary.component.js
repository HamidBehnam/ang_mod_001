import template from "./summary.component.html"

const SummaryComponent = {
    template: template,
    bindings: {},
    controller: class SummaryController {
        /*@ngInject*/
        constructor(AuthorService, $ngRedux) {
            this.AuthorService = AuthorService;
            this.$ngRedux = $ngRedux;
            this.unsubscribe = $ngRedux.connect(this.mapState, {})(this);
        }

        $onDestroy() {
            this.unsubscribe();
        }

        mapState(state) {
            return {
                summaryCode: state.summary.summaryCode
            };
        }
    }
};

export default SummaryComponent;