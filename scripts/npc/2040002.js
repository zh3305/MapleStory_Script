var dh;
var entry = true;

function start() {
    dh = cm.getEventManager("DollHouse");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.sendNext("我看见你很害怕。。不过这是可以理解的。里面有非常强大的怪物。如果你变心了。可以和我谈话。我相信你的勇气！");
	cm.dispose();
	return;
    } else if(mode == 0 && status == 2) {
	cm.sendNext("好吧。当你准备进入异次元空间的时候，请和我谈话。我劝告你不要花太多的时间。里面强大的怪物会把事实变得完全不同。");
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if(cm.getQuestStatus(3230) == 1) {
	if(status == 0) {
	    cm.sendYesNo("嗯。。我听说你帮了#b#p2040001##k一把。你可以不可以帮助我到异次元空间走一趟！帮我找出真正的玩具小屋。。？");
	} else if(status == 1) {
	    cm.sendNext("非常的谢谢你！实际上#b#p2040001##k要你帮他收集20个#b#t4031093##k是为了测试你的勇气！看来你的勇气深不可量！");
	} else if(status == 2) {
	    cm.sendYesNo("很久以前，妖怪来自另一个异次元空间，由于一个裂缝。妖怪逃了出来。并窃取了时钟上的摆钟。把他藏在了	玩具屋里面。但是里面有好几种玩具屋。你能帮我找出来吗？");
	    if (dh != null && dh.getProperty("noEntry").equals("true")) {
		entry = false;
	    }
	} else if(status == 3) {
	    cm.sendNext("好吧！我带你到异次元空间。你等下会看到很多的玩具屋。你要仔细观察那些玩具屋。把不同的玩具屋找出来。并攻击他。");
	} else if(status == 4) {
	    cm.sendNextPrev("当然，里面也有很多非常强大的怪物。请在时间限制之内找到#t4031094#！如果找到了钟摆。你可以和#p2040028#对话！我们会帮你敞开异次元空间的大门！");
	} else if(status == 5) {
	    if(dh == null || entry == false) {
		cm.sendPrev("对不起，里面已经有人在调查玩具屋了。请稍后在来。");
	    } else {
		cm.removeAll(4031093);
		dh.startInstance(cm.getChar());
	    }
	    cm.dispose();
	}
    } else if(cm.getQuestStatus(3230) == 2) {
	cm.sendNext("谢谢你帮我们找出了玩具钟摆！我送给你的礼物还满意吧？");
	cm.dispose();
    } else {
	cm.sendOk("我们是守候在这里的玩具兵！防止任何无关人员的进入。");
	cm.dispose();
    }
}