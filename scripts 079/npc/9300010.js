importPackage(net.sf.odinms.client);

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
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

	if (cm.getChar().getVip() <= 0){
		var vipstr = ""+cm.mxdmz()+"玩家";	
	} else if(cm.getChar().getVip() == 1){
		var vipstr = ""+cm.mxdmz()+"会员①";		
	} else if(cm.getChar().getVip() == 2){
		var vipstr = ""+cm.mxdmz()+"会员②";	
	} else if(cm.getChar().getVip() == 3){
		var vipstr = ""+cm.mxdmz()+"会员③";	
	} else if(cm.getChar().getVip() == 4){
		var vipstr = ""+cm.mxdmz()+"会员④";		
	} else if(cm.getChar().getVip() == 5){
		var vipstr = ""+cm.mxdmz()+"会员⑤";				
		}

	if (status == 0) {
   	    var add = "欢迎来到#r"+cm.mxdmz()+"冒险岛#k,我是传送人员.\r\n\r\n";

		add += "             呵呵，是不是结婚结束了,点我会到自由市场！\r\n\r\n#b";


		add += ""+sss+"\r\n\r\n";

		add += "#L1#"+xxx+""+ttt+"-自由市场#l";

		cm.sendSimple (add);    

	} else if (status == 1) {

	if (selection == 0) {
		cm.openNpc(9250009);

	} else if (selection == 1) {
		if (cm.getPlayer().getMapId() >=910000000 && cm.getPlayer().getMapId() <=910000022) {
		cm.sendOk("#b您已经在自由市场中间了.");
		cm.dispose();
		}else{
		cm.warp(910000000,0);
		cm.dispose();
		}	




		}					
		}
		}
		}

