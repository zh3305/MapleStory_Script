/*  创新型副本  
 *  组队任务副本
 *  功能：玩家进行答题、保护MOB、跳跳、消灭BOSS
 *  作者：AND 358122354
 */
var status = -1;
var em;
var Count;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("好吧，你继续玩吧。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		em = cm.getEventManager("Shower");
		if(em.getProperty("state")=="0"){
			cm.sendOk("副本没有开启");
			cm.dispose();
			return;
		}
		var TXT = "";
		if (cm.getMapId()==911006100&&em.getProperty("Next")=="2"){//NEXT为2证明保护长老过关
			TXT+= "#L0##r我想进入下一关#k#l\r\n";
		}else if(cm.getMapId()==911006100&&em.getProperty("Next")=="1"){//NEXT为1表示检测保护长老是否过关
			TXT+= "#L4##r我保护成功拉！#k#l\r\n";
		}else if(cm.getMapId()==911006100&&em.getProperty("opendati")=="1"){
			cm.dispose();
			cm.openNpc(9400024,"ShowerOne");
			return;
		}else if(cm.getMapId()==922000000){
			Count = em.getProperty("JQCount");
			TXT+="目前机器零件数：#b"+Count+"#k\r\n";
			TXT+="还需要:#r"+(10-Count)+"#k 个\r\n";
			TXT+="#L2#上交机器零件！#l";
			TXT+="#L3##r我想进入下一关#k#l\r\n";
		}else if(cm.getMapId()==931050431&&em.getProperty("Next")=="2"){
			TXT+="#L5##r召唤魔王！#k#l\r\n";
		}
			TXT+= "#L1#我想离开这里#l\r\n";
            cm.sendYesNo("你想做什么？\r\n\r\n"+TXT);
    } else if (status == 1) {
		switch(selection){
			case 0://判断是否能进玩具跳跳
					if(!cm.isLeader()){
						cm.sendOk("请让队长跟我说话");
						cm.dispose();
						return;
					}
					if(em.getProperty("Next")=="2"){
						cm.warpParty(922000000,0);
						cm.getMap(922000000).startMapEffect("收集10个零件并且到最右边交给长老瞧瞧!", 5120054);
					}else{
						cm.sendOk("还没过关呢，急啥急！");
					}
				cm.dispose();
				break;

			case 1://离开
				cm.warp(911006500);
				cm.dispose();
				break;
			case 2://收集零件进行叠加
				if (cm.haveItem(4031092)){
					var ii = cm.getItemQuantity(4031092);
					em.setProperty("JQCount",(parseInt(em.getProperty("JQCount"))+ii)+"");
					cm.gainItem(4031092,-ii);
					if(parseInt(em.getProperty("JQCount"))>=10){
						cm.showEffect(true, "quest/party/clear");
						cm.playSound(true, "Party1/Clear");
					}
				}else{
					cm.showEffect(true, "quest/party/wrong_kor");
					cm.playSound(true, "Party1/Failed");
					cm.sendOk("没有杀害就没有买卖，没有机器零件我顶你个肺！");
					cm.dispose();
				}
				cm.dispose();
				break;
			case 3://跳跳过去最后一关
				if(!cm.isLeader()){
						cm.sendOk("请让队长跟我说话");
						cm.dispose();
						return;
				}
				if(parseInt(em.getProperty("JQCount"))>=10){
					cm.warpParty(931050431);
					cm.getMap(931050431).startMapEffect("问问长老如何召唤魔王", 5120054);
				}else{
					cm.showEffect(true, "quest/party/wrong_kor");
					cm.playSound(true, "Party1/Failed");
					cm.sendOk("Are you kidding me?搜集好10个机器零件再来找我，好吗？我的官人！");
				}
				cm.dispose();
				break;
			case 4:
				if(!cm.isLeader()){
						cm.sendOk("请让队长跟我说话");
						cm.dispose();
						return;
					}
				if (cm.haveMonster(9402011)&&cm.getMonsterCount(cm.getMapId())==2&&parseInt(em.getProperty("Next"))==1){
					cm.showEffect(true, "quest/party/clear");
					cm.playSound(true, "Party1/Clear");
					eim = em.getInstance("Shower");
					em.schedule("Start11", 1000 * 1,eim);
				}else{
					cm.showEffect(true, "quest/party/wrong_kor");
					cm.playSound(true, "Party1/Failed");
					cm.sendOk("赶紧消灭怪物保护长老");
				}
				cm.dispose();
				break;
			case 5:
				if(!cm.isLeader()){
						cm.sendOk("请让队长跟我说话");
						cm.dispose();
						return;
					}
				if(em.getProperty("Next")=="2"){
					em.setProperty("Next", "3");
					eim = em.getInstance("Shower");
					em.schedule("Start12", 1000 * 5,eim);
					cm.changeMusic("Bgm41/Gravity Lord Rise");
					cm.getMap().startMapEffect("魔王将在5秒后抵达战场", 5120054);
				}else{
					cm.sendOk("魔王已经召唤过了");
				}
				cm.dispose();
				break;
		}
	}
}
