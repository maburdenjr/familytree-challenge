(function () {
    angular.module('app')
        .directive('person', function($compile) {
            return {
                restrict: 'C',
                link: function(scope, ele, attrs) {
                    // Double click to create new child element
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

                    //Hit escape to delete child element
                    ele.on('keyup', function(event) {
                        event.stopPropagation();
                        var personName = $(this).text();
                        if(event.which == 27){
                            var deleteElement = confirm("Are you sure you want to remove "+personName+" and his/her descendants from the family tree.");
                            if (deleteElement == true) {
                                if ($(this).parent().parent().siblings('.person').data('childCount') >= 1) {
                                    $(this).parent().remove();
                                } else {
                                    $(this).parent().parent().remove();
                                }
                                scope.renderTree();
                            }
                        }
                    });
                }
            }
        });

})();