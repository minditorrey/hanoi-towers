'use strict';

$(document).ready(init);
var towers = $('.towers');
var selectedDisk = $('.selectedDisk');
var tower3 = $('.tower-3');
function init() {
$('.towers').click(clickTower);
	
}

function clickTower(e) {

	
	var $clickedTower = $(this);

	//if this tower does not have selected children and no tower has a selected disk
	//toggle class selected of first child
	if($clickedTower.find('.selected').length !==1 && $(".selected").length ===0){
		$($clickedTower.children()[$clickedTower.children().length-1]).toggleClass("selected");
	}
	//if this tower does not have selected children and another tower has a slected disk
	else if($clickedTower.find('.selected').length !==1 && $(".selected").length !==0){
			//if selected disk is smaller than clicked tower or clicked tower
			//has no children disks, remove class and append disk
			if($('.selected').data('size') < $(this).children().data('size') || $clickedTower.children().length ===0) {
			var $selectedDisk = $(".selected").remove();
			$clickedTower.append($selectedDisk);
			}
			//if selected disk is larger than children disks then alert: you cannot drop this here
			} else if($('.selected').data('size') > $clickedTower.children().data('size')) {
				alert('You cannot drop a disk onto a smaller disk!');			
			} else {
		//toggle class selected
		$($clickedTower.children()[$clickedTower.children().length-1]).toggleClass("selected");
	}

	//To Win
	if($(tower3.disks).length ===3) {
		$('#win').append("<p>You win!</p>");
}
	
}


	
	
	

	













