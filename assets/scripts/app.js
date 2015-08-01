(function () {

    angular.module('app', [])
        .controller('FamilyTree', ['$scope', '$rootScope', '$document', FamilyTree]);

    function FamilyTree($scope, $rootScope) {

        $scope.familytree = {};

        $scope.renderTree = function() {

            var grandChildArray = [];
            $scope.familytree = {
                noChildren: [],
                noSiblings: [],
                mostGrandchildren: null
            };

            $('.person').each(function(index) {
                var childMatch = $(this).siblings('.children').children('li');
                var childCount = childMatch.size();
                var siblingCount = $(this).parent().siblings('li').size();
                var grandchildCount = childMatch.children('ul').children('li').size();
                var personName = $(this).text();

                $(this).data('childCount', childCount);

                if (childCount === 0) {
                    $scope.familytree.noChildren.push(personName);
                }
                if (siblingCount === 0) {
                    $scope.familytree.noSiblings.push(personName);
                }
                grandChildArray[grandchildCount] = personName;
            })
            $scope.familytree.mostGrandchildren = grandChildArray[grandChildArray.length-1];
        }

        $scope.updateTreeUi = function() {
            setTimeout(function() {
                $scope.$apply(function () {
                    $scope.nosiblings = $scope.familytree.noSiblings.join(", ");
                    $scope.nochildren = $scope.familytree.noChildren.join(', ');
                    $scope.mostgrandchildren = $scope.familytree.mostGrandchildren;
                })
            }, 0);
        }

        $scope.renderTree();
        $scope.updateTreeUi();

    }


})();