/* 
	自由市场进入钓鱼的NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("你想去哪里钓鱼呢？\r\n#L1#[#r普通渔场#k]#b梦幻国度钓鱼场#k#l\r\n#L4#[#r高级渔场#k]#b东方钓鱼场#b[#k#e#d1.5倍泡点#n#b]#k#l#k");
    } else if (status == 1) {
	    //if (cm.getPlayerStat("GM") == 1) {
        if (selection <= 2 && selection >= 0) {
            if (cm.getPlayer().getMapId() < 749050500 || cm.getPlayer().getMapId() > 749050502) {
                cm.saveLocation("FISHING");
            }
            cm.warp(749050500 + selection);
        }else if(selection == 3) {
		cm.warp(741000201,0);
		}else if(selection == 4) {
		cm.warp(741000202,0);
		}
        cm.dispose();
		/*}else{
		cm.playerMessage(1,"禁止入内！");
		cm.dispose();
		}*/
    }
}