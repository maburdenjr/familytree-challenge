(function () {

    angular.module('app', [])
        .controller('FamilyTree', ['$scope', '$rootScope', '$document', FamilyTree]);

    function FamilyTree($scope, $rootScope) {

        var tree = evaluateTree();
        console.log(tree);

    }

    function evaluateTree() {
        var familyTree = {
            noChildren: [],
            noSiblings: [],
            mostGrandchildren: null
        }

        var grandChildArray = [];

        $('.person').each(function(index) {
            var childMatch = $(this).siblings('.children').children('li');
            var childCount = childMatch.size();
            var siblingCount = $(this).parent().siblings('li').size();
            var grandchildCount = childMatch.children('ul').children('li').size();
            var personName = $(this).text();

            $(this).data('childCount', childCount);

            if (childCount === 0) {
                familyTree.noChildren.push(personName);
            }
            if (siblingCount === 0) {
                familyTree.noSiblings.push(personName);
            }
            grandChildArray[grandchildCount] = personName;
        })
        familyTree.mostGrandchildren = grandChildArray[grandChildArray.length-1];
        return familyTree;
    }

})();