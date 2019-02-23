/* 红包 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0 && im.used()) {
		im.dispose();
		im.openNpc(9300011, "Spring" );
		return;
    }
	im.dispose();
}
