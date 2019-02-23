importPackage(net.sf.odinms.client);
var status = 0;



function start() {
status = -1;
action(1, 0, 0);
}


function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 2 && mode == 0) {
cm.sendOk("Rawr!?");
cm.dispose();
return;
}

if (mode == 1)
status++;
else
status--;

if (status == 0) {
cm.sendNext("#b"+cm.mxdmz()+"冒险岛#k,祝福卷抽合成系统\r\n#b1.我可以为你合成祝福卷轴,只要你有足够的道具.\r\n#b2.祝福卷轴,砸卷时使用他,即使失败装备也不会损失砸卷次数. \r\n#b3.合成祝福卷轴需要#v4001035##b与#v4031344#.\r\n#b4.以上合成道具各城市的BOSS都有爆. \r\n#b5.拥有以上道具后每次可合成3张祝福卷轴哦. ");

} else if (status == 1) {
if ((cm.haveItem(4001035, 1)) && (cm.haveItem(4031344,1))) {
cm.sendYesNo("不错喔，看来你已经收集到制作祝福卷轴所需要的所有材料, 你现在就想让我给您制作 #b祝福卷轴#k 吗?");

} else if (!cm.haveItem(4001035, 1)) {
cm.sendOk("#b对不起,您的道具不足,我无法为您合成祝福卷轴.");
cm.dispose();

} else if (!cm.haveItem(4031344,1)) {
cm.sendOk("#b对不起,您的道具不足,我无法为您合成祝福卷轴.");
cm.dispose();
}
			
} else if (status == 2) {
cm.gainItem(4001035, -1);
cm.gainItem(4031344, -1);
cm.gainItem(2340000, 3);
			
}
}
}