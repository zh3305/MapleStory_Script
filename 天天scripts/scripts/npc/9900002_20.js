var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {

       var jobid = cm.getJob();
       var lvs = cm.getPlayer().getLevel();
       if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
          var ms = "\r\n#e   #r冒险家                 新英雄#n\r\n#b#L100#战    士#l               #r#L1010#双弩精灵#l    \r\n#b#L101#飞    侠#l               #r#L1011#怪盗幻影#l    \r\n#b#L102#海    盗#l               #r#L1012#恶魔猎手#l   \r\n#b#L103#魔 法 师#l               #r#L1013#龙的传人#l   \r\n#b#L104#弓 箭 手#l               #r#L1014#神炮之王#l    \r\n  \r\n"
       } 
          var texts = "#r ┈┈┈━═☆#i4251201##r   转职向导   #i4251201# #r☆═━┈┈┈ \r\n#d" + cm.getVipname() + "  #r#h #  #d您现在的职业是 #r" + cm.getJobNameById(jobid) +"  \r\n#k请选择你需要转职向导服务：\r\n"

          cm.sendSimple(texts + ms);


       // cm.sendSimple("你确定要转职？(恶魔/双弩/等.../自动转职业.)\r\n#b#L5#我要转职为恶魔猎手(一转)#l\r\n#b#L7#我要转职为怪盗幻影#l\r\n#b#L6#我要转职为光之骑士#l\r\n#b#L0#我要转职为火炮手#l\r\n#b#L1#我要转职为双刀#l\r\n#b#L4#我要转职为双弩(一转)#l\r\n#b#L8#我要转职为海盗(一转)#l\r\n#b#L3#进行其它职业转职(战士/法师/等...)#l");


    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(501);
                    cm.sendOk("系统已经为您转职为火炮手.\r\n以后的转职都为自动转职.");
                } else {
                    cm.sendOk("你不是新手职业 或你的等级没有达到10.");
                }
                cm.dispose();
                break;
            case 1:
                if (cm.getJob() == 400 && cm.getPlayer().getLevel() >= 20) {
                    cm.getPlayer().changeJob(430);
                } else if (cm.getJob() == 433 && cm.getPlayer().getLevel() >= 120) {
                    cm.getPlayer().changeJob(434);
                    cm.sendOk("系统已经为您转职为暗影双刀.\r\n你已经成功转职为火炮手.\r\n以后的转职都为自动转职.");
                } else {
                    cm.sendOk("你不是飞侠(一转)职业 或你的等级没有达到20.(双刀一转请转飞侠)");
                }
                cm.dispose();
                break;
            case 2:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(2700);
                    cm.sendOk("系统已经为您转职为夜光法师.");
                } else if (cm.getJob() == 2700 && cm.getPlayer().getLevel() >= 30) {
                    cm.getPlayer().changeJob(2710);
                    cm.sendOk("系统已经为您转职为夜光法师2转");
                } else if (cm.getJob() == 2710 && cm.getPlayer().getLevel() >= 70) {
                    cm.getPlayer().changeJob(2711);
                    cm.sendOk("系统已经为您转职为夜光法师3转");
                } else if (cm.getJob() == 2711 && cm.getPlayer().getLevel() >= 120) {
                    cm.getPlayer().changeJob(2712);
                    cm.sendOk("系统已经为您转职为夜光法师4转");
                } else {
                    cm.sendOk("你不是夜光法师职业 或你的等级没有达到要求.");
                }
                cm.dispose();
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9900002, 22);
                break;
            case 4:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(2300);
                    cm.sendOk("系统已经为您转职为双弩弓箭手.\r\n以后的转职都为自动转职.");
                } else {
                    cm.sendOk("你不是新手职业 或你的等级没有达到10.");
                }
                cm.dispose();
                break;
            case 5:
                if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(3100);
                    cm.gainItem(1322122,1);
                    cm.sendOk("系统已经为您转职为恶魔猎手.\r\n以后的转职都为自动转职.");
                } else {
                    cm.sendOk("你不是新手职业 或你的等级没有达到10.");
                }
                cm.dispose();
                break;
            case 6:
                if (cm.getJob() == 5000 && cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(5100);
                    cm.sendOk("系统已经为您转职为光之骑士.");
                } else if (cm.getJob() == 5100 && cm.getPlayer().getLevel() >= 30) {
                    cm.getPlayer().changeJob(5110);
                    cm.sendOk("系统已经为您转职为光之骑士2转");
                } else if (cm.getJob() == 5110 && cm.getPlayer().getLevel() >= 70) {
                    cm.getPlayer().changeJob(5111);
                    cm.sendOk("系统已经为您转职为光之骑士3转");
                } else if (cm.getJob() == 5111 && cm.getPlayer().getLevel() >= 120) {
                    cm.getPlayer().changeJob(5112);
                    cm.sendOk("系统已经为您转职为光之骑士4转");
                } else {
                    cm.sendOk("你不是光之骑士职业 或你的等级没有达到要求.");
                }
                cm.dispose();
                break;
            case 7:
                if (cm.getJob() == 0 &&  cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(2400);
                    cm.sendOk("系统已经为您转职为幻影怪盗.\r\n以后的转职都为自动转职.");
                } else {
                    cm.sendOk("你不是必须是新手职业,或你的等级没有达到要求.\r\n幻影职业都为自动转职.");
                }
                cm.dispose();
                break;
            case 8:
                if (cm.getJob() == 0 &&  cm.getPlayer().getLevel() >= 10) {
                    cm.getPlayer().changeJob(509);
                    cm.sendOk("系统已经为您转职为海盗");
                } else {
                    cm.sendOk("你不是必须是新手或龙的传人,或你的等级没有达到要求.");
                }
                cm.dispose();
                break;

            case 100:
                cm.dispose();
                cm.openNpc(9900004, 1002100);
                break;

            case 101:
                cm.dispose();
                cm.openNpc(9900004, 1002101);
                break;

            case 102:
                cm.dispose();
                cm.openNpc(9900004, 1002102);
                break;

            case 103:
                cm.dispose();
                cm.openNpc(9900004, 1002103);
                break;

            case 104:
                cm.dispose();
                cm.openNpc(9900004, 1002104);
                break;

            case 1010:
                cm.dispose();
                cm.openNpc(9900004, 10021010);
                break;



        }
    }
}