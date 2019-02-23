var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("你确定要兑换挑战物品吗？\r\n如果你能带来100个#v4000134#,100个#v4000149#,10个#v4000151#,10个#v4000152#我就可以给你闹钟挑战的物品.\r\n你确定要兑换挑战物品吗...\r\n#b#L0#是的我要兑换.#l\r\n#b#L1#哦,这么麻烦 我去自由购买别的玩家的好了.#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
	if(cm.haveItem(4000134,100) && cm.haveItem(4000149,100) && cm.haveItem(4000151,10) && cm.haveItem(4000152,10) ){
	cm.gainItem(4000134,-100);
	cm.gainItem(4000149,-100);
	cm.gainItem(4000151,-10);
	cm.gainItem(4000152,-10);
	cm.gainItem(4031179,+1);
	cm.sendOk("祝贺你兑换成功");
	cm.dispose();
}else{
	cm.sendOk("你的物品数量不够\r\n需要100个#v4000134#,100个#v4000149#,10个#v4000151#,10个#v4000152#...");
}
            cm.dispose();
            break;
        case 1:
            cm.dispose();
		cm.warp(910000000);
            break;
        }
    }
}