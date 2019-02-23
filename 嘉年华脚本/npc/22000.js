var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("看来你还有其他的事情没有处理完,下次再来找我吧。");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("你想乘坐前往明珠港的航班？...如果一旦前往就不能再回到这里,你现在确定前往吗？");
	} else if (status == 1) {
	    cm.warp(104000000,0);
		cm.dispose();
    }
  }
