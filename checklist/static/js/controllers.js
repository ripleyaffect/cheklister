'use strict';

function ChecklistController($scope) {
	$scope.list_title = 'Change This Title';
	$scope.items = [ 
		{ text: 'Edit an item by tapping it', complete: false, priority: 3 }, 
		{ text: 'Item one', complete: true, priority: 2 }, 
		{ text: 'Item two', complete: false, priority: 2 },
		{ text: 'Start your own list', complete: false, priority: 1 }
	];
	$scope.new_item = { text: 'New item', priority: 2 }

	$scope.addItem = function() {
		if($scope.new_item.text == '') {
			return;
		}
		$scope.items.push({ 
			text: $scope.new_item.text, 
			complete: false,
			priority: $scope.new_item.priority
		});
		$scope.items.sort(function(a, b) { return a });
		$scope.items.sort(function(a, b){
 			return b.priority-a.priority
		})
		$scope.new_item.text = 'New item';
	}

	$scope.deleteItem = function(item) {
		$scope.items.splice($scope.items.indexOf(item), 1);
	}

	$scope.numComplete = function() {
		var count = 0;
		angular.forEach($scope.items, function(item) {
			count += item.complete ? 1 : 0;
		});
		return count;
	}

	$scope.totalPriority= function() {
		var priority = 0;
		angular.forEach($scope.items, function(item) {
			priority += Math.pow(item.priority, 1.5)
		});
		return priority;
	}

	$scope.percentComplete = function() {
		var total_priority = $scope.totalPriority()
		var percent_complete = 0;
		angular.forEach($scope.items, function(item) {
			percent_complete += item.complete ? Math.pow(item.priority, 1.5) / total_priority : 0;
		});
		return (percent_complete * 100).toFixed(0);
	}

	$scope.itemPlural = function() {
		return $scope.numComplete() == 1  ? "item" : "items";
	}
}