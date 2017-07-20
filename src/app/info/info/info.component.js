import template from "./info.component.html"

const InfoComponent = {
    template: template,
    bindings: {},
    controller: class InfoController {
        constructor() {
            const infoMessage = {
                text: "My message text.",
                code: "My message code."
            };

            this.infoMessage = infoMessage;
        }

        acceptTheMessage($event) {
            console.log("this is accept the message method! event: ", $event);
        }
    }
};

export default InfoComponent;