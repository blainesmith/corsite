﻿angular.module('Cor').factory('systemError', [
    '$modal', function ($modal) {
        return {
            open: function (error, title) {

                var params = {
                    icon: "error",
                    cancel: { visible: false, color: "" },
                    ok: { visible: true, color: "" },
                    boldMessage: (title) ? title : "A System Error has occured.",
                    standardMessage: error
                };

                var signOutErrorModal = $modal.open({
                    templateUrl: 'Shared/MessageBox',
                    controller: 'messageBoxCtrl',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        params: function () {
                            return params;
                        }
                    }
                });
            }
        };
    }
]);