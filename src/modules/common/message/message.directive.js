var message = workshopApp.directive("dtvMessage",
    dtvDirective
);

function dtvDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            type: '@msgType'
        },
        templateUrl: 'partials/common/message/message.tpl.html'
    };
};