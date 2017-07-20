import template from "./quick-info.component.html"

const QuickInfoComponent = {
    bindings: {
        infoMessage: "<",
        acceptTheMessage: "&"
    },
    template: template,
    controller: class QuickInfoController {
        constructor() {
        }

        doSomething(params) {
            console.log("this is doSomething method inside the quick info component! params: ", params);
            this.acceptTheMessage({$event: params});
        }
    }
};

export default QuickInfoComponent;