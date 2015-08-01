(function () {
    angular.module('app')
        .directive('person', function($compile) {
            return {
                restrict: 'C',
                link: function(scope, ele, attrs) {
                    ele.on('dblclick', function(event) {
                        event.stopPropagation();
                        var newSibling = "<li><a href='#' class='person editme' contenteditable='true'>New Child</a></li>";
                        var newFamily = "<ul class='children'>"+newSibling+"</ul>";
                        if ($(this).data('childCount') == 0) {
                            $(this).after($compile(newFamily)(scope));
                        } else {
                            $(this).siblings('.children').append($compile(newSibling)(scope));
                        }
                        scope.renderTree();
                    })
                }
            }
        });

})();