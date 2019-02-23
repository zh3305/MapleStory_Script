//Little Suzy Event Warp NPC by Anujan
function start() {
	if (!cm.gotoEvent())
		cm.sendOk("你不能使用我.");
	cm.dispose();
}
