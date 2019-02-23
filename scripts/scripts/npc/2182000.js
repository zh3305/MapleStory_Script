/*
 *R.E.D币兑换
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
	    cm.sendGetText("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎使用君主币兑换.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b#v4310038##z4310038##k #r1#k 枚 : #b#v4310036##z4310036##k #r20#k 枚\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#目前君主币：#r"+cm.itemQuantity(4310038)+" #k个\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：请输入消耗的#b君主币#r数量来兑换#b征服币");
        } else if (status == 1) { 
	if(cm.getText() < 1){
	    cm.playerMessage(1,"输入的数字不能小于1。");
	    cm.dispose();
	} else {
	    var xs = cm.getText() * 20;
	    cm.sendYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎使用君主币兑换.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#使用 #r" + cm.getText() + "#k 枚#b#v4310038##z4310038##k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#兑换 #r" + xs + "#k 枚#b#v4310036##z4310036##k"); 
	    }
        } else if (status == 2) { 
		var xs = cm.getText() * 20;
	if (cm.itemQuantity(4310038) >= cm.getText()) { 
	   cm.gainItem(4310038,-cm.getText());
	   cm.gainItem(4310036,cm.getText() * 20);
           cm.sendOk("兑换成功,请注意查收.\r\n#b"+ cm.getText() +"#k 个#v4310038##z4310038# 兑换了 #r"+ xs +"#k  个#v4310036##z4310036#");
           cm.dispose();
        } else {
           cm.sendOk("您没有足够的#v4310038##z4310038#,请多加努力.");
           cm.dispose();
	 }
      } 
   }
}