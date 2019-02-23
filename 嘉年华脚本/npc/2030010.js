/* Amon
 * Last Mission : Zakum's Altar (280030000)
 */

function start() {
    cm.sendYesNo("你现在是想离开这里吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	//	cm.warp(211042200, 0);
		cm.warp(211042300, 0);
    }
    cm.dispose();
}
