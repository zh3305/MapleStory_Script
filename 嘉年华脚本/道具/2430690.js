/*
    Made by Kent
*/
var status = -1;
var itemList = Array(
Array(5000217, 5, 2, 0), 
Array(1802354, 0, 1, 0));
function start() {
        var chance = Math.floor(Math.random() * 10);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
		if (itemList[i][1] >= chance) {
			finalitem.push(itemList[i]);
		}
        }
        if (finalitem.length != 0) {
		im.used(1);
        	var random = new java.util.Random();
        	var finalchance = random.nextInt(finalitem.length);
        	var itemId = finalitem[finalchance][0];
        	var quantity = finalitem[finalchance][2];
        	var notice = finalitem[finalchance][3];
                if (itemId == 5000217) {
                    im.gainPetItem(itemId, quantity);
                } else {
                    im.gainItem(itemId, quantity, 30 * 24 * 60 * 60 * 1000);
                }
		
	}
	im.dispose();
}
