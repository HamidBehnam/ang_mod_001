import template from "./summary.component.html"
import {getSummaryCode} from "../shared/redux/summary.selectors"

const summaryComponent = {
    template: template,
    bindings: {},
    controller: class SummaryController {
        /*@ngInject*/
        constructor(AuthorService, $ngRedux) {
            this.AuthorService = AuthorService;
            this.$ngRedux = $ngRedux;
        }

        $onInit() {
            this.unsubscribe = this.$ngRedux.connect(this.mapState, {})(this); // you can even map the actions, in this case the dispatch callers will be generated for you! https://egghead.io/lessons/angular-1-x-angular-1-x-redux-map-state-and-dispatchers-to-redux
        }

        $onDestroy() {
            this.unsubscribe();
        }

        mapState(state) {
            return {
                summaryCode: getSummaryCode(state)
            };
        }
    }
};

export default summaryComponent;