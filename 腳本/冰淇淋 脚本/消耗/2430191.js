importPackage(Packages.handling.world);
importPackage(Packages.tools);

function start() {
    if (im.haveItem(2430191)) {
       im.gainItem(1012468,1);//喵喵糖果
       im.gainItem(1002903,1);//糖果粉红头巾
       im.gainItem(1003009,1);//七彩糖果发带
       im.gainItem(1003239,1);//木莓糖果套头帽
       im.gainItem(1003240,1);//蓝莓糖果套头帽
       im.gainItem(1102709,1);//双色糖果翅膀
       im.gainItem(1042329,1);//糖果色T恤
       im.gainItem(1112114,1);//粉红糖果名片戒指
       im.gainItem(1072394,1);//糖果雨鞋
       im.gainItem(1702530,1);//莎啦啦糖果
	   im.gainItem(2430191,-1);
       im.sendOk("礼物已经送到,检查背包吧。");
	   im.getC().getChannelServer().broadcastPacket(Packages.tools.packet.CWvsContext.broadcastMsg(2, im.getC().getChannel(), " : " + "[新手礼包]恭喜玩家【" + im.getChar().getName() + "】领取新手礼包."));

	  // World.Broadcast.broadcastMessage(Packages.tools.packet.CWvsContext.broadcastMsg(6,  "[上线提示]" + "玩家：【" + im.getPlayer().getName() + "】" + "欢迎来到 [" + im.getChannelServer().getServerName() + "]世界！"));
	  im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}