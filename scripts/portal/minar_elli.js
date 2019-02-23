/*
魔法种子

*/
function enter(pi) {
try {
    if (pi.haveItem(4031346)) {
	if (pi.getMapId() == 240010100) {
	    pi.playPortalSE();
	    pi.warp(101030100, "minar00");
	} else {
	    pi.playPortalSE();
	    pi.warp(240010100, "elli00");
	}
	pi.gainItem(4031346, -1);
	pi.playerMessage("消耗一个魔法种子，向某个地方移动。");
	return true;
    } else {
	pi.playerMessage("没有魔法种子，无法进行移动");
	return false;
    }
} catch (e) {
    pi.playerMessage("错误：" + e);
}
}
