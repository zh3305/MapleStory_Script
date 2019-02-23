/*
 *兑换
 */

var status = 0; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
	    abb = 1;
	    cm.sendGetText("您好,欢迎使用点卷购买绑定奇幻国度币。点卷比率 #e#r1：10#n#k 绑定奇幻国度币。目前点卷：#r"+cm.getPlayer().getCSPoints(1)+" #k点\r\n#r注：请输入想要购买的数量.");
        } else if (status == 1) { 
	if(cm.getText() < 100000){
	    cm.playerMessage(1,"单次输入的数字不能小于100000。");
	    cm.dispose();
	} else {
	    cm.sendYesNo("您好,欢迎使用点卷购买绑定奇幻国度币.\r\n增加 #r" + cm.getText() + "#k 绑定奇幻国度币将会使用掉您 #r" + cm.getText() / 10 + " #k点卷\r\n请确认后使用。"); 
	    } 
        } else if (status == 2) { 
		var getmaxhp = cm.getChar().getStat().getMaxHp();
	if (cm.getPlayer().getCSPoints(1) >= cm.getText() / 10) { 
		   cm.gainNX(-cm.getText() / 10);
		   cm.gainPlayerPoints(cm.getText());
           cm.worldSpouseMessage(0x20,"『绑定奇幻国度币』 ：恭喜玩家 "+ cm.getChar().getName() +" 使用 "+ cm.getText() / 10 +" 点卷购买了 "+ cm.getText() +" 绑定奇幻国度币");
           cm.sendOk("成功增加了 "+cm.getText()+" 绑定奇幻国度币。");
           cm.dispose();
        } else {
           cm.sendOk("您没有足够的点卷,请获取后使用.");
           cm.dispose();
	 }
      } 
   }
}