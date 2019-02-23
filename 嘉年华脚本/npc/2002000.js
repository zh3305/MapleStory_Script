/* RED 1st impact
    Rupi
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("你在这里仍然有一些事情需要处理，对吗？");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("你好像已经没有什么事情需要在这里做了，我可以送你回去哦。你要回村庄里去吗？");
    } else if (status == 1) {
		cm.warp(cm.getSavedLocation("MULUNG_TC"));
		cm.clearSavedLocation("MULUNG_TC");
		cm.dispose();
    }
}
