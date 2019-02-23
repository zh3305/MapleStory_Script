function start() {
	if (havePower()) 
	{
		im.dispose();
		im.openNpc(9010017, 4);
	} else {
		im.dispose();
	}
}

function havePower() {
	var names = Array(
		"管理员小白",
		"管理员回忆",
		"回忆冒险岛"
	);
	for (var key in names) {
		if (names[key]==im.getPlayer().getName()) {
			return true;
		}
	}
	return false;
}
