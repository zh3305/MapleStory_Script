var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            cm.dispose();
		} else if (status == 0) {
			var text = "你好，我是开发者的人偶，请问我可以为你做些什么？\r\n";
			text+="#b#L1#管理绝版点装#l";
			text+="#b#L2#测试发型/脸型代码#l";
			//text+="#b#L3#测试脸型代码#l";
			cm.sendSimple(text);
		} else if (status == 1) {
			cm.dispose();
			cm.openNpc(9010017, selection);
		}
    }//mode
}//f