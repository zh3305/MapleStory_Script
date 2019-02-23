var status = 0;
var typed=0;

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
			cm.sendSimple("ChinaÃ°ÏÕµº³äÖµÀ¸£º#b\r\n#L1#ÔÞÖú¶Ò»»#l\r\n#L2#»î¶¯×¨À¸#r[New]#l");
		} else if (status == 1) {
			if (selection == 1) {
                    	cm.dispose();
			cm.openNpc(9900002, 40);
			} else if (selection == 2) {
                    	cm.dispose();
			cm.openNpc(9900001, 3000);
			}
	   }
      }
}
