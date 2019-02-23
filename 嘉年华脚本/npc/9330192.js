var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("好吧，你继续玩吧。从光标也可以直接出去哦");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
            cm.sendYesNo("你如果把这里清理干净了那我可以送你出去");
    } else if (status == 1) {
        if (cm.getMonsterCount(744000001) >= 0){
			for (var i =0;i<5 ;i++ ){
			if (cm.getPQLog('枫之高校')==i){
			//var A = Math.floor(Math.random() * 20)+300;
				cm.gainPlayerPoints(+600);
				break;
			}
		}
		cm.setPQLog('枫之高校');
		cm.warp(910000000);
        }else{
			cm.sendOk("请把怪物清理掉吧");
		}
		cm.playerMessage(5,"提示：每日可获得组队积分次数为5次");
		cm.dispose();
	}
}
