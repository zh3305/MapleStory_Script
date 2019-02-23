var status = 0; 
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 
function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
            cm.sendNext("你想去挑战 #b大王蜈蚣#k 吗？"); 
        } else if (status == 1) { 
            if(cm.getLevel() >= 150 ){  //判断人物等级 
                if (cm.getParty() == null) { // 没有开队伍 
                    cm.sendOk("#e你好像还没有一个队伍,我是不能送你进去的."); 
                    cm.dispose(); 
                    } 
            if (!cm.isLeader()) { // 不是队长 
                cm.sendSimple("如果你想挑战一下蜈蚣, 那么你只能自己开队伍,一个人去单挑,所以不能和人家组队！"); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 1){ //判断队伍里面是否大于1人，如果大于，则不能开启任务 
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("wgquest");  //wgquest为任务的名字 
                if (em == null) { 
                    cm.sendOk("error！"); 
                    cm.dispose(); 
                    } 
                } else {  //开始任务 
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                cm.removeFromParty(4001008, party); 
                cm.removeFromParty(4001007, party);  
                } 
            cm.serverNotice(5, "[副本系统]玩家:" + cm.c.getPlayer().getName() + " 带着绝招,进入了蜈蚣地图开始挑战大王蜈蚣!~~")); 
            cm.dispose(); 
                    } 
                } 
            }else{ 
                cm.sendOk("#e#r挑战 #b大王蜈蚣#k 需Lv.150.\r\n副本奖励：#v4031549# #v4031344# #v4031250# #v4032226# #v1302037# 以及大量卷轴"); 
                cm.dispose(); 
            } 
        } 
    } 
} 
 