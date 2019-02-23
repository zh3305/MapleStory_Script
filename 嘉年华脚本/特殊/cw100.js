/*
 *天天爱养成
 */
var status = 0; 
var cwzt = "";
var cwjd = "";

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 

    if(cm.getPQLog("宠物总计成长值",1) >=0 && cm.getPQLog("宠物总计成长值",1) <= 100){
	cwjd = "第1阶段(孵化期)";
	cwzt = "#fUI/UIWindow2.img/raise/18/0#";
    } else if(cm.getPQLog("宠物总计成长值",1) >=101 && cm.getPQLog("宠物总计成长值",1) <= 200){
	cwjd = "第2阶段(破壳期)";
	cwzt = "#fUI/UIWindow2.img/raise/18/1#";
    } else if(cm.getPQLog("宠物总计成长值",1) >=201 && cm.getPQLog("宠物总计成长值",1) <= 300){
	cwjd = "第3阶段(幼崽期)";
	cwzt = "#fUI/UIWindow2.img/raise/18/2#";
    } else if(cm.getPQLog("宠物总计成长值",1) >=301 && cm.getPQLog("宠物总计成长值",1) <= 400){
	cwjd = "第4阶段(幼年期)";
	cwzt = "#fUI/UIWindow2.img/raise/18/3#";
    } else if(cm.getPQLog("宠物总计成长值",1) >=401 && cm.getPQLog("宠物总计成长值",1) <= 500){
	cwjd = "5第阶段(成长期)";
	cwzt = "#fUI/UIWindow2.img/raise/19/1#";
    } else if(cm.getPQLog("宠物总计成长值",1) >=501 && cm.getPQLog("宠物总计成长值",1) <= 600){
	cwjd = "第6阶段(成熟期)";
	cwzt = "#fUI/UIWindow2.img/raise/19/2#";
    } else {
	cwjd = "第7阶段(完全体)";
	cwzt = "#fUI/UIWindow2.img/raise/19/3#";
    }

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
	    cm.sendGetText("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,[养成]小伙伴的养成:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#小伙伴成长状态："+ cwzt +" "+ cwjd +"\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#1个中介币=1点成长值\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#目前小伙伴成长值：(#r"+cm.getPQLog("宠物总计成长值",1)+" #k/#r 800#k) 点\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：请输入饲养小伙伴成长值点数(总值超过800后果自负)：");
        } else if (status == 1) { 
	if(cm.getText() < 1 || cm.getText() > 800){
	    cm.playerMessage(1,"输入的数字不能小于1或大于800。");
	    cm.dispose();
	} else {
	    cm.sendYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,[养成]小伙伴的养成:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#使用#r" + cm.getText() + "#k中介\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#饲养#r" + cm.getText() + "#k点成长值"); 
	    }
        } else if (status == 2) { 
	if(cm.getPQLog("宠物总计成长值",1) < 800){
	if (cm.haveItem(4000463,cm.getText())) { 
	   cm.gainItem(4000463, -cm.getText());
	for(var i = 1; i <= cm.getText(); i++){
	   cm.setPQLog("宠物总计成长值",1);
	}
	   cm.worldSpouseMessage(0x14,"[小伙伴养成] 玩家 "+ cm.getChar().getName() +" 为他(她)的小伙伴饲养了 "+ cm.getText() +" 点成长值.(草泥马)高兴的嗷嗷叫!");
           cm.sendOk("饲养成功,请注意查看.");
           cm.dispose();
        } else {
           cm.sendOk("您没有足够的中介币,请多加努力.");
           cm.dispose();
	 }
	} else {
	   cm.sendOk("小伙伴已经养成完全体满成长值状态,无法继续成长。\r\n#r已经可以使用#b [养成]小伙伴的奇葩威力 #r它会给你带来惊喜。");
           cm.dispose();
	}
      } 
   }
}