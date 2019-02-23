var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    } 
    if (status == 0) {
        var selStr = "亲爱的#r#h ##k您好，您需要满技能吗？\r\n如果出现卡NPC 请输入@ea解卡!#l \r\n#b#L1#一键技能全满#l \r\n#L2#加满职业技能#l";
        cm.sendSimple(selStr);
    } else if (status == 1){
        } if (selection == 1) {
            //Beginner
                cm.maxAllSkills();
            cm.dispose();
        cm.sendOk("恭喜您所有技能已满！！");
	    } else if (selection == 2) {
                cm.maxSkillsByJob();
            cm.dispose();
        cm.sendOk("恭喜您职业技能已满！！");
	}
}
