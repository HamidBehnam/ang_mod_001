import template from "./summary.component.html"
import {getSummaryCode} from "../shared/redux/summary.selectors"

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
                summaryCode: getSummaryCode(state)
            };
        }
    }
};

export default SummaryComponent;