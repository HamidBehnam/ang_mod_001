import template from "./info.component.html"
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

const InfoComponent = {
    template: template,
    bindings: {},
    controller: class InfoController {
        /*@ngInject*/
        constructor($ngRedux) {
            this.$ngRedux = $ngRedux;
            this.unsubscribe = this.$ngRedux.connect(this.mapState, {})(this);
            const infoMessage = {
                text: "My message text.",
                code: "My message code."
            };

            this.infoMessage = infoMessage;
        }

        $onDestroy() {
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

        replaceTheMessage(message) {
            this.$ngRedux.dispatch(replaceTheMessage(message));
        }

        addInfoProducer(producer) {
            this.$ngRedux.dispatch(addInfoProducer(producer));
        }

        acceptTheMessage($event) {
            console.log("this is accept the message method! event: ", $event);
        }
    }
};

export default InfoComponent;