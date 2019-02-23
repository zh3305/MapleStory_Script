var status = 0;
var i = java.lang.Math.floor(Math.random() * 100);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(cm.getMeso() >= 20000000){
			cm.sendSimple(">运气活动：#b<豪情赌拿中介>\r\n\r\n#k>活动目标：#b<看你敢不敢赌 - 我这里有大把中介币>\r\n\r\n#k#L1#2000万冒险岛币赌上#l");
			} else {
			cm.sendOk("冒险币不足2000万。");
			cm.dispose();
			}
		} else if (status == 1) {
			if (selection == 1) {
			if(i <= 10){
                	cm.gainMeso(-20000000);
			cm.gainItem(4000463,1);
                        cm.dispose();
			cm.sendOk("你赢了，获得了1个中介币...我不服，敢不敢在来！！！");
			cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + " 在豪情赌拿中介 2000万筹码中获得了一定的中介币，大家恭喜他(她)。");
			}else{
                	cm.gainMeso(-20000000);
                        cm.dispose();
			cm.sendOk("你输了，还敢来吗？大过年的，怕什么。我等你！！！");
			}
			}
		}
	}
}