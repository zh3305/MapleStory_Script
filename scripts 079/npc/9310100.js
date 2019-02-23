var Price = 10000000;               //这里是设置价格的
var svrName = "●5元冒险岛";       //这里用来设置服务器名字

//****以上为参数部分,您可以根据你的需要设置*******//

var fee;
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
	cm.sendOk("需要购买人气随时来找我!!");
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("需要购买人气随时来找我!!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("  #fUI/UIWindow.img/QuestIcon/6/0#\r\n  您好，我是#b"+cm.mxdmz()+"冒险岛#k人气商。\r\n  购买人气的价格为每点 #r" + Price + "#k 游戏币\r\n  如需购买,请点下一步!");
        } else if (status == 1) {          	           	 
						cm.sendGetNumber("  #fUI/UIWindow.img/QuestIcon/6/0#\r\n  请问您需要购买多少点人气?\r\n ",1,1,10000);		 				 
        } else if (status == 2) {  
        			fee = selection;
        			if ((cm.getPlayer().getFame() + fee) < 32767){
            		cm.sendYesNo("您购买 #r" + fee + "#k 点人气,共需要支付 #r" + fee * Price + "#k 游戏币,您确定要购买吗？" );  
            	}else{
            		cm.sendOk("由于最大人气上限为32767，您已经不能购买这么多人气了!");
            		cm.dispose();
            	}
	    	
        } else if (status == 3) {
        			if (cm.getMeso() < (fee * Price)){
        				cm.sendOk("您好，你身上的钱只够买！#r" + Math.floor(cm.getMeso() / Price) + " #k点人气！");
        			}else{
								cm.gainFame(fee);
								cm.gainMeso(-fee * Price);
								cm.sendOk("购买人气成功!，您当前的人气值为 #r" + cm.getPlayer().getFame() + "#k 点!" );
							}
							cm.dispose();
						
	   		}
          
  	 }
}

