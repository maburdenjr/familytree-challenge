(function () {
    angular.module('app')
        .directive('person', modifyTree);

    function modifyTree() {
        var directive = {
            restrict: 'C',
            link: link
        }

        return directive;

        function link(scope, ele, attrs) {
            ele.on('click', function(event) {
                event.stopPropagation();
                var newChild = "<li><a href='#' class='person editme' contenteditable='true'>New Child</a></li>";
                if ($(this).data('childCount') == 0) {
                } else {
                    $(this).siblings('.children').append(newChild);
                }
            })
        }
    }

})();