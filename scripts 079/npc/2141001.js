importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);



var status = 0;  



	
function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {   
    if (mode == -1) {  
        cm.dispose();  
    }  
    else {   
        if (mode == 0) {      
            cm.dispose();   
            return;   
        }
        if (mode == 1) {
            status++;  
        }      
        else {  
            status--;  
        }  
        if (status == 0) {
		var pbMap = cm.getC().getChannelServer().getMapFactory().getMap(270050100);
			if (pbMap.getCharacters().size() == 0) {
				cm.sendYesNo("品客缤在休息,看起来里面没有人在挑战.\r\n您每天可以进入的次数为#r3#k次[目前已经进入#r" + cm.getBossLog('PB') + "#k次]\r\n为现在时间是: " + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒,每天凌晨会刷新游戏数据.\r\n[进入需要等级达到Lv.150以上,职业不限]\r\n您确定好了,要进入挑战 #b时间的宠儿-品客缤 #k吗？");


			} else { // 有人在里面
				for (var i = 0; i < 5; i++) {
					if (pbMap.getMonsterById(8820002 + 1) != null) {  //要是有人则换地图
						cm.getPlayer().dropMessage("战争已经开始了,您不能进入.");
						cm.dispose();

					}

				}

				for (var i = 0; i < 4; i++) {
					if (pbMap.getMonsterById(8820015 + 1) != null) {
						cm.getPlayer().dropMessage("战争已经开始了,您不能进入.");
						cm.dispose();
					}
				}
					if (pbMap.getMonsterById(8820001) != null) {
						cm.getPlayer().dropMessage("战争已经开始了,您不能进入.");
						cm.dispose();
					}
				else
				cm.sendYesNo("品客缤在休息,看起来里面没有人在挑战.\r\n您每天可以进入的次数为#r3#k次[目前已经进入#r" + cm.getBossLog('PB') + "#k次]\r\n为现在时间是: " + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒,每天凌晨会刷新游戏数据.\r\n[进入需要等级达到Lv.150以上,职业不限]\r\n您确定好了,要进入挑战 #b时间的宠儿-品客缤 #k吗？");
}
       
        } else if (status == 1  && cm.getLevel() >= 150) {
                if (cm.getBossLog('PB') < 3)
                {
                    cm.gainItem(4008000,1);
                  cm.warp(270050100);
                    cm.setBossLog('PB');
cm.serverNotice("[Boss频道]:玩家"+cm.getChar().getName()+"怀着巨大的勇气,去打品客缤啦.大家为TA加油啊.");
                    cm.dispose();
                }
                else
                {
                    cm.sendOk("#r你每天只能允许进入3次 ! 时间未到.");
                   mode = 1;
                   status = -1;
                }
                
            }
            else{
                cm.sendOk("你的等级不足120级，所以不能进入!");
               mode = 1;
               status = -1;
			
        }
    }
}