/* ===========================================================
			注释(cm.sendSimple\cm.itemQuantity())
	脚本类型: 		NPC
	所在地图:		
	脚本名字:		
==============================================================
制作时间：2010年9月22日 17:19:48
制作人员：笔芯
=============================================================
for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.startPopMessage(cm.getPlayer().getId(), "您必须让自己的背包腾出一格。");
					cm.dispose();
					return;
				}
			}
*/

var a = 0;
var ss = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
 if (a >= 2 && mode != 1){
		cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
	}else{
    if (mode == -1) {
       cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1){
            cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
		}else if (a == 0) {
					if (ss == 1){
						cm.setNPC_Mode(18);
                    cm.openNpc(2101014);
                    cm.setNPC_Mode(0);
					}else{
						
					var rand = Math.floor(Math.random() * 3);
					if (rand == 1){
						cm.sendOk("获得了1万游戏币。")
						cm.gainMeso(10000)
						cm.dispose();
					}else if (rand == 2){
						cm.sendOk("获得了500点券。")
						cm.gainNX(500)
						cm.dispose();
					}else{
						cm.sendOk("对不起,你什么都没得到。")
					        cm.dispose();
					}
      }
				}else if (a == 1){
					cm.sendNext("#h #你好，当前时间是 #b"+cm.getHour()+"点"+cm.getMin()+"分"+cm.getSec()+"秒#k\r\n游戏币：#r"+cm.getMeso()+"元#k　点卷：#r"+cm.getNX()+"点#k\r\n当时间到达#r15:00--23:59#k之间，请拿起你的鼠标疯狂点击吧\r\n给你1分钟时间，看谁点的快！");
				}else if (a == 2){
					if (cm.getHour() > 14 && cm.getMin() > 1){
						cm.sendYesNo("看来时间已经到了，确定要领取吗？")
					}else{
						a = -1;
						ss = 1;
	cm.sendOk("抱歉！当前时间是 #b"+cm.getHour()+"点"+cm.getMin()+"分"+cm.getSec()+"秒#k，当时间到达#r15:00--23:59#k之间，请拿起你的鼠标疯狂点击吧！")
	
					}
				}else if (a == 3){
					a = -1;
						ss = 1;
					var rand = Math.floor(Math.random() * 3);
					if (rand == 1){
						cm.sendOk("获得了1万游戏币。")
						cm.gainMeso(10000)
						//cm.dispose();
					}else if (rand == 2){
						cm.sendOk("获得了10点券。")
						cm.gainNX(10)
						//cm.dispose();
					}else{
						cm.sendOk("获得了2万游戏币。")
						cm.gainMeso(20000)
						//cm.dispose();
					}
						
					
	}//status
}
}
	}