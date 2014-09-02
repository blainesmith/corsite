angular.module('Cor').controller('messageBoxCtrl', [
    '$scope', '$modalInstance', 'params', function ($scope, $modalInstance, params) {
        $scope.model = {
            icon: -1,
            boldMessage: "boldMessage",
            standardMessage: "standardMessage",
            cancel: { visible: false, color: "", text: "Cancel" },
            ok: { visible: false, color: "primary", text: "OK" },
            delete: { visible: false, color: "danger" },
            replace: { visible: false, color: "danger" },
            buttonCount: 0
        };

        $scope.model.buttonCount = 0;

        var setParamValues = function (model, parameters) {
            if (parameters !== undefined && parameters !== null) {
                if (parameters.visible !== undefined) {
                    model.visible = parameters.visible;
                    if (model.visible) {
                        $scope.model.buttonCount++;
                    }
                }
                if (parameters.color !== undefined) {
                    model.color = parameters.color;
                }
                if (parameters.text !== undefined) {
                    model.text = parameters.text;
                }
            }
        };

        if (params !== undefined && params !== null) {
            switch (params.icon) {
                case "success":
                    $scope.model.icon = 0;
                    break;
                case "info":
                    $scope.model.icon = 1;
                    break;
                case "warning":
                    $scope.model.icon = 2;
                    break;
                case "error":
                    $scope.model.icon = 3;
                    break;
                default:
                    $scope.model.icon = -1;
            }
            setParamValues($scope.model.cancel, params.cancel);
            setParamValues($scope.model.ok, params.ok);
            setParamValues($scope.model.delete, params.delete);
            setParamValues($scope.model.remove, params.remove);

            if ($scope.model.buttonCount > 2) {
                alert("MessageBox can only support one or two buttons!");
                throw "MessageBox can only support one or two buttons!";
            }
        }

        $scope.model.boldMessage = params.boldMessage;
        $scope.model.standardMessage = params.standardMessage;

        //$scope.model.boldMessage = "Bold message /%Message%/ rest of message. And another /%Can I do this%/?";
        //$scope.model.standardMessage = "Standard message";

        $scope.click = function (action) {
            $modalInstance.close(action);
        };

    }
]);