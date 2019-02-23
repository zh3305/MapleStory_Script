/*
 *	圣诞快乐伤害皮肤
 */
function start() {
	im.changeHurtSkin("0");
	im.topMsg("使用伤害皮肤道具成功。");
	//im.getPlayer().showMessage(11, "使用伤害皮肤道具成功。");
	im.gainItem(2431965,-1);
	im.dispose();
}