/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

   if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
       ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 30);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 0);
        ms.spawnNPCRequestController(2159381, -1700, 20);
        ms.setNPCSpecialAction(2159381, "summon");
        ms.spawnNPCRequestController(2159384, -1600, 20);
        ms.setNPCSpecialAction(2159384, "summon");
        ms.sendSelfTalk(1, 2159381, "通过这个走廊，就是机库。通过那里之后，就能到达外面了。但是一路上到处都是警卫机器人。");
    } else if (status == 3) {
        ms.sendSelfTalk(3, 2159381, "我会想办法的。别担心。");
    } else if (status == 4) {
        ms.sendSelfTalk(1, 2159384, "刚才这位朋友说会成为累赘。老实说，我刚才掉进陷阱的时候手臂受了伤，没办法帮你。真的没关系吗？");
    } else if (status == 5) {
        ms.sendSelfTalk(3, 2159384, "没关系。我会想办法的。");
    } else if (status == 6) {
        ms.updateNPCSpecialAction(2159381, 1,2200, 100);
        ms.updateNPCSpecialAction(2159384, 1,2200, 100);
        ms.getDirectionInfo(1, 2100);
    } else if (status == 7) {
	ms.EnableUI(0);
        ms.removeNPCRequestController(2159384);
        ms.removeNPCRequestController(2159381);
        ms.dispose();
        ms.enableActions();
    }
}

