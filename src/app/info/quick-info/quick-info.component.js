import template from "./quick-info.component.html"
import {
    addNameToTitle,
    addNumberToTitle,
    replaceTheMessage,
    addInfoProducer
} from "../shared/redux/info.actions";
import {
    getInfoState,
    getInfoTitle,
    getInfoTitleLength,
    getInfoMessage,
    getInfoProducers
} from "../shared/redux/info.selectors"

const QuickInfoComponent = {
    bindings: {
        // infoMessage: "<", ...........by using redux, component can get its data from the redux' store.
        acceptTheMessage: "&"
    },
    template: template,
    controller: class QuickInfoController {
        /* @ngInject */
        constructor($timeout, $ngRedux) {
            this.$timeout = $timeout;
            this.$ngRedux = $ngRedux;
            this.unsubscribe = $ngRedux.connect(this.mapState, {})(this);
            console.log("Constructor: good place to pre initialize the class properties. this.something = 234;");
        }

        doSomething(params) {
            console.log("this is doSomething method inside the quick info component! params: ", params);
            this.acceptTheMessage({$event: params});
            this.$timeout(() => console.log("this is a message after a delay"), 5000);
        }

        $onInit() {
            console.log("$onInit: will be called when the controller class is constructed and controller's binding properties are set. good place for some data processing.");
        }

        $onChanges() {
            console.log("$onChanges: will be called whenever a one way binding is changed. Important: it could be called even before $onInit.");
        }

        $onDestroy() {
            console.log("$onDestroy: will be called at the moment that the controller is about to be destroyed. good place for removing the watchers and relasing the resources.");
            this.unsubscribe();
        }

        mapState(state) {
            return {
                info: getInfoState(state),
                infoTitle: getInfoTitle(state),
                infoTitleLength: getInfoTitleLength(state),
                infoMessage: getInfoMessage(state),
                infoProducers: getInfoProducers(state)
            };
        }

        addNameToTitle() {
            this.$ngRedux.dispatch(addNameToTitle());
        }

        addNumberToTitle() {
            this.$ngRedux.dispatch(addNumberToTitle());
        }

        replaceTheMessage () {
            this.$ngRedux.dispatch(replaceTheMessage({
                text: "TEXT",
                code: "CODE"
            }));
        }

        addInfoProducer() {
            this.$ngRedux.dispatch(addInfoProducer("a new producer"));
        }
    }
};

export default QuickInfoComponent;