/* 
	NPC Name: 		Cherry
	Map(s): 		Victoria Road : Ellinia Station (101000300)
	Description: 		Ellinia Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    boat = cm.getEventManager("Boats");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("You must have some business to take care of here, right?");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("本次航班已经出发了.");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendOk("本次航班已经开放。请耐心在这等一会儿，就要出发了！");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("船已经起飞。我很抱歉,但是你将不得不乘坐下一趟。请在这耐心等等吧.");
	    cm.dispose();
	} else {
	    cm.sendNext("出发前5分钟开始才可以入场。请稍等一下。不过也别来得太晚。出发前1分钟就会结束出航准备，无法让客人登船了。");
	    cm.dispose();
	}
    } else if(status == 1) {
	//cm.warp(101000301, 0);
	cm.dispose();
    }
}