
function action(mode, type, selection) {
	if(cm.getPlayerStat("GM")==true){
    cm.openShop(1111);
    cm.dispose();
	}else{
	cm.sendOk("Gm only");
	cm.dispose();
	}
}
