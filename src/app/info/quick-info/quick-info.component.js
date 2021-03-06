import template from "./quick-info.component.html"

const quickInfoComponent = {
    bindings: {
        info: "<",
        infoTitle: "<",
        infoTitleLength: "<",
        infoMessage: "<",
        infoProducers: "<",
        infoVerifiers: "<",
        isContentLoading: "<",
        addNameToTitle: "&",
        addNumberToTitle: "&",
        replaceTheMessage: "&",
        addInfoProducer: "&",
        acceptTheMessage: "&"
    },
    template: template,
    controller: class QuickInfoController {
        /*@ngInject*/
        constructor($timeout) {
            this.$timeout = $timeout;
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
        }

        callAddNameToTitle() {
            this.addNameToTitle();
        }

        callAddNumberToTitle() {
            this.addNumberToTitle();
        }

        callReplaceTheMessage () {
            this.replaceTheMessage({
                $event: {
                    text: "TEXT",
                    code: "CODE"
                }
            });
        }

        callAddInfoProducer() {
            this.addInfoProducer({
                $event: "a new producer"
            });
        }
    }
};

export default quickInfoComponent;