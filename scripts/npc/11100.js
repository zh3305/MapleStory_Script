var status = 0;
var maps = new Array(60000, 221000300);

function start() {
	status = 0;
	cm.sendYesNo("Yo! I'm #p" + cm.getNpc() + "#, lulz! I can warp you lululululu.");
}

function action(mode, type, selection) {
	if (status == 0) {
		status = 1;
		cm.sendNext("#bBe prepared#k ;)))");
	} else if (status == 1) {
		status = 2;
		var warpText = "CHOOOOOSE! BOHAHAHAHAHAH ;))#b";
		for (var i = 0; i < maps.length; i++)
			warpText += "\r\n#L" + i + "##m" + maps[i] + "##l";
		cm.sendSimple(warpText);
	} else if (status == 2) {
		cm.warp(maps[selection], 0);
		cm.dispose();
	}
}	