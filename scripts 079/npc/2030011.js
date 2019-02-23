var status;

function start() {
	status = -1
	action(1,0,0);
}

function action(mode, type, selection){
	if (mode == -1) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			cm.sendNext("想到外面去就跟我说吧。中途放弃真的可惜啊！");
		} else {
			cm.warp(211042300);
			cm.removeAll(4001015);
			cm.removeAll(4001016);
			cm.removeAll(4001018);
			cm.dispose();
		}
	}
}