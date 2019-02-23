/*
 *
 *  此脚本由乐章网络制作完成
 * 购买商业脚本请加群:1049548
 *
 */


importPackage(net.sf.odinms.client);

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


var status = 0;
var xl = 200;
var jilv = 0;
var costa;
var xx = -1;



	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function GetRandomNum(Min,Max){  
		var Range = Max - Min;  
		var Rand = Math.random();  
		return(Min + Math.round(Rand * Range));  
		}  
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;





	if (status == 0) {
		
   	    var add = "#r"+cm.mxdmz()+"冒险岛#k,#r赌博系统#k\r\n ";

		add += ""+xxx+"-增加下注请点#e#b[加注]#n#k\r\n ";

		add += ""+xxx+"-加倍赌博赔率由左到右赔率递增,奖金增加概率降低.\r\n ";

		add += ""+xxx+"-当前下注押金:#b<#e#r 修炼赌博 #n#b>#b<#e#r "+xl+" 修炼#n#b >#k\r\n";

		add += "#L0#"+ttt+"-[#r加注#k]#l\r\n\r\n";

		add += "#L1#"+ttt+"-[#b1:1倍赔率#k]#l";

		add += "#L2#"+ttt+"-[#b1:2倍赔率#k]#l";

		add += "#L3#"+ttt+"-[#b1:3倍赔率#k]#l";

		cm.sendSimple (add,2); 

	} else if (status == 1) {

	if (selection == 0){
		cm.sendOk("#b成功加注#r200修炼#b,请点确定后查看.");
		xl = xl + 200
		status = -1; 

	} else if (selection == 1){

   	    var add = "#b<#e#r 元宝赌博 #n#b>\r\n\r\n";

		add += ""+ttt+"-您选择的是[#r赔率1:1#b].\r\n";

		add += ""+ttt+"-您的押注为[#r"+xl+"个迅雷#b].\r\n";

		add += ""+ttt+"-如果胜利将获取[#r除本金外"+xl*1+"修炼#b]的奖励.\r\n";

		add += ""+ttt+"-点击[#r是#b]开始赌博,点击[#r不是#b]放弃赌博.";

		cm.sendYesNo (add); 

		jilv = 1; 

		xx=0

	} else if (selection == 2){

   	    var add = "#b<#e#r 修炼赌博 #n#b>\r\n\r\n";

		add += ""+ttt+"-您选择的是[#r赔率1:2#b].\r\n";

		add += ""+ttt+"-您的押注为[#r"+xl+"个修炼#b].\r\n";

		add += ""+ttt+"-如果胜利将获取[#r除本金外"+xl*2+"修炼#b]的奖励.\r\n";

		add += ""+ttt+"-点击[#r是#b]开始赌博,点击[#r不是#b]放弃赌博.";

		cm.sendYesNo (add)

		jilv = 2; 

		xx=0

	} else if (selection == 3){

   	    var add = "#b<#e#r 修炼赌博 #n#b>\r\n\r\n";

		add += ""+ttt+"-您选择的是[#r赔率1:3#b].\r\n";

		add += ""+ttt+"-您的押注为[#r"+xl+"个修炼#b].\r\n";

		add += ""+ttt+"-如果胜利将获取[#r除本金外"+xl*3+"修炼#b]的奖励.\r\n";

		add += ""+ttt+"-点击[#r是#b]开始赌博,点击[#r不是#b]放弃赌博.";

		cm.sendYesNo (add)

		jilv = 3; 

		xx=0

		}

	} else if (status == 2) {

	if (xx == 0){
		if (jilv == 0){
		} else if (jilv != 0){
		if (cm.getChar().getRw15() < xl) {
		cm.sendOk("#b您的修炼点不足,不能参加赌博.....");
		status = -1; 
		}else {
		jiaru = GetRandomNum(0,jilv);
		if (jiaru == 0) {
		xl = xl * jilv
		cm.gainrw15(+xl);
		cm.sendOk("#b恭喜,您已经大获全胜...");
		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[赌博系统]" + " : " + "恭喜玩家 [" + cm.getPlayer().getName() + "] 在修炼赌拼中胜利了,TA获得了["+xl+"修炼点]",true).getBytes());
		status = -1; 
		} else {
		cm.gainrw15(-xl);
		cm.sendOk("#b悲剧啊.你输了....");
		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[赌博系统]" + " : " + "悲剧的玩家 [" + cm.getPlayer().getName() + "] 在修炼赌拼中失败了,TA失去了["+xl+"修炼点]",true).getBytes());
		status = -1; 
		}
		}
		}





		









		}					
		}
		}
		}

