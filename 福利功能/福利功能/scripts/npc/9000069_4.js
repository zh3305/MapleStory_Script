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
        cm.sendSimple("系统会将你转为新手,并且将清空你的技能\r\n你确定不玩这个职业了吗.\r\n#r#L0#我确定不玩了");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getJob() > 0&& cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(0);
                cm.clearSkills();
		cm.sendOk("系统已将你转为新手.\r\n并且已清空你的技能.");
            } else {
                cm.sendOk("你已是新手职业 或你的等级没有达到10.");
            }
            cm.dispose();

         } 
    }
}