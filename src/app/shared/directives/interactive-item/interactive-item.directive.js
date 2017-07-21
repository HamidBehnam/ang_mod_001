import template from "./interactive-item.directive.html"
import InteractiveItemController from "./interactive-item.controller.js"

const interactiveItem = () => {
    let interactiveItem = {
        template: template,
        controller: InteractiveItemController,
        controllerAs: "interactiveItemCtrl", // we can't use assign $ctrl because it's already in use in the target page.
        link: (scope, element, attrs) => {
            element.on("click", () => {
                console.log("hello");
            });
        }
    };

    return interactiveItem;
};

export default interactiveItem;