importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

function start() {
var ptyz = 10; //设置购买单件需要的元宝
var gjyz = 10; //设置购买单件需要的元宝


if (cm.getLevel() > 1 ) {  
    cm.sendSimple ("#b"+cm.mxdmz()+"冒险岛,椅子售货机。\r\n#k[其余椅子会慢慢更新][部分椅子任务中获得]\r\n#d剩余元宝:#r" + cm.getzb() + "点\r\n【稀有椅子】\r\n#L12##v3010050#[兑换]#l #L13##v3012003#[兑换]#l #L14##v3010034#[兑换]#l\r\n#L15##v3010035#[兑换]#l#L16##v3010068#[兑换]#l#L17##v3010069#[兑换]#l\r\n#L18##v3010021#[兑换]#l#L19##v3010002#[兑换]#l#L20##v3010004#[兑换]#l\r\n#L21##v3010005#[兑换]#l#L22##v3010006#[兑换]#l#L23##v3012001#[兑换]#l\r\n#L24##v3012002#[兑换]#l#L25##v3010046#[兑换]#l#L26##v3010047#[兑换]#l\r\n#L27##v3010041#[兑换]#l#L28##v3010043#[兑换]#l#L29##v3010051#[兑换]#l\r\n#L30##v3010052#[兑换]#l#L31##v3010044#[兑换]#l#L32##v3010036#[兑换]#l\r\n#L33##v3010019#[兑换]#l#L34##v3010124#[兑换]#l#L35##v3010125#[兑换]#l\r\n#L36##v3010126#[兑换]#l#L37##v3010127#[兑换]#l#L38##v3010128#[兑换]#l\r\n#L39##v3010129#[兑换]#l#L40##v3010131#[兑换]#l#L41##v3010132#[兑换]#l\r\n#L42##v3010133#[兑换]#l#L43##v3010137#[兑换]#l#L44##v3010139#[兑换]#l\r\n#L45##v3010149#[兑换]#l#L46##v3010152#[兑换]#l#L47##v3010112#[兑换]#l");
    } else {
    cm.sendOk("找我什么事，想要启动我的力量吗，你需要足够的条件")
    }
}
function action(mode, type, selection) {
var ptyz = 10; //设置购买单件需要的元宝
var gjyz = 10; //设置购买单件需要的元宝
cm.dispose();
if (selection == 0) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010007,1);//粉色海狗靠垫
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 1) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010010,1);//白玉海豹靠垫
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 2) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010008,1);//蓝色海狗靠垫
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 3) { 
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010016,1);//黑色海狗靠垫
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 4) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010029,1);//蓝环凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 5) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010031,1);//红环凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 6) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010030,1);//黑环凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 7) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010031,1);//红环凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010032,1);//黄环凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 9) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010033,1);//绿环凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 10) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010003,1);//红色时尚转椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 11) {
	if(cm.getzb() >= ptyz) {
            cm.setzb(-ptyz); 
	cm.gainItem(3010037,1);//亲亲嘴凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 12) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010050,1);//公主凳
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 13) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3012003,1);//爱心椅子
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 14) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010034,1);//悠长假期(红色)
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 15) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010035,1);//悠长假期(蓝色)
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 16) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010068,1);//露水椅子
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 17) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010069,1);//大黄风
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 18) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010021,1);//暖暖桌
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 19) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010002,1);//绿色时尚转椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 20) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010004,1);//黄蓝休闲椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 21) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010005,1);//红蓝休闲椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 22) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010006,1);//黄色时尚转椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 23) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3012001,1);//篝火
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 24) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3012002,1);//浴桶
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 25) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010046,1);//红龙椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 26) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010047,1);//蓝龙椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 27) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010041,1);//骷髅王座
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 28) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010043,1);//魔女的飞扫把
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 29) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010051,1);//沙漠兔子1靠垫
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 30) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010052,1);//沙漠兔子2靠垫
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 31) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010044,1);//同一红伞下
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}

} else if (selection == 32) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010036,1);//浪漫秋千
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 34) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010124,1);//都纳斯喷气椅子
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 35) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010125,1);//尼贝隆战舰椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 36) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010126,1);//蝙蝠魔王座
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 37) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010127,1);//扎昆宝座
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 38) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010128,1);//黑龙宝座
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 39) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010129,1);//酋长宝座
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 40) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010131,1);//贪吃熊猫
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 41) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010132,1);//撒娇猫椅子     
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 42) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010133,1);//帐篷椅
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 43) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010137,1);//神龙椅子
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 44) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010139,1);//私密空间 
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 45) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010149,1);//猫眯风 
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 46) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010152,1);//黄色帐篷椅子
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 47) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010112,1);//情书柜子
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();}
} else if (selection == 33) {
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
	cm.gainItem(3010019,1);//寿司椅 
         cm.sendOk("购买成功！祝您游戏愉快！ 你现在剩有元宝 #r"+cm.getyzb()+"#k.");
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"系统管理员" + " : " + cm.getPlayer().getName() +" 玩家成功购买了稀有椅子，大家为他祝贺！",true).getBytes());
        }else{
        cm.sendOk("抱歉你没有#v4031250#"); 
	cm.dispose();
}
}
}