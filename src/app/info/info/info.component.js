import template from "./info.component.html"

import {
    getInfoState,
    getInfoTitle,
    getInfoTitleLength,
    getInfoMessage,
    getInfoProducers,
    getInfoVerifiers,
    getLoadingStatus
} from "../shared/redux/info.selectors";

const InfoComponent = {
    template: template,
    bindings: {},
    controller: class InfoController {
        /*@ngInject*/
        constructor($timeout, $ngRedux, InfoActionsService) {
            this.$timeout = $timeout;
            this.$ngRedux = $ngRedux;
            this.InfoActionsService = InfoActionsService;
        }

        $onInit() {
            this.unsubscribe = this.$ngRedux.connect(this.mapState, this.InfoActionsService)(this); // if you pass action generators (InfoActionService) like this,
            // $neRedux.connect method will generate all the dispatch callers for you, I mean say that you have an action generator called 'addNameToTitle',
            // by sending the generators to the connect method it will generate:
            // addNameToTitle() {
            //  this.$ngRedux.dispatch(addNameToTitle())
            // }
            // in your controller class, so you don't need to write this, and as a result you can just use this.addNameToTitle() or $ctrl.addNameToTitle() and be sure that you're calling
            // the dispatch behind the sense.
            //
            // if you had more action generators, you could merge them using Object.assign and use the result instead.
            //
            // IMPORTANT: One more thing about this approach: you have to be careful about the name conflicts, for instance in the example above make sure that you don't already have this.addNameToTitle
            //
            // more info: https://egghead.io/lessons/angular-1-x-angular-1-x-redux-map-state-and-dispatchers-to-redux
            this.replaceTheMessage({
                text: "Hamid",
                code: "Behnam"
            });

            this.loadInfoVerifiersAsync();
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
                infoProducers: getInfoProducers(state),
                infoVerifiers: getInfoVerifiers(state),
                isContentLoading: getLoadingStatus(state)
            };
        }

        acceptTheMessage($event) {
            console.log("this is accept the message method! event: ", $event);
        }
    }
};

export default InfoComponent;