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
	switch (cm.getJob()) {
//一转
	case 0://新手
		cm.sendSimple("请选择你要转职的职业\r\n#b#L100#战士#L200#魔法师#L300#弓箭手#L400#飞侠#L500#海盗\r\n#L1100#魂骑士#L1200#炎术师#L1300#风灵使者#L1400#夜行者#L1500#奇袭者\r\n#L2100#战神1转\r\n#L2200#龙神#L430#暗影双刀#L3200#幻灵斗师#L3300#豹弩游侠#L3500#机械师\r\n#L2300#双弩精灵#L501#火炮手#L3100#恶魔猎手\r\n#L508#龙的传人#L5100#光之骑士#L2400#怪盗幻影");
		break;
//二转
	case 100:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L110#剑客\r\n#L120#准骑士\r\n#L130#枪战士");
	    //cm.openNpc(9000069,2);
		break;
	case 200:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L210#火毒法师\r\n#L220#冰雷法师\r\n#L230#牧师");
		break;
	case 300:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L310#猎人\r\n#L320#弩弓手");
		break;
	case 400:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L410#刺客\r\n#L420#侠客");
		break;
	case 500:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L510#拳手\r\n#L520#火枪手");
		break;

	case 1100:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1110#魂骑士2转");
		break;
	case 1200:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1210#炎术师2转");
		break;
	case 1300:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1310#风灵使者2转");
		break;
	case 1400:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1410#夜行者2转");
		break;
	case 1500:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1510#奇袭者2转");
		break;

	case 2100:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2110#战神2转");
		break;
	case 430:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L432#双刀2转");
		break;
	case 3200:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3210#幻灵2转");
		break;
	case 3300:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3310#豹弩2转");
		break;
	case 3500:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3510#机械2转");
		break;
	case 2300:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2310#精灵2转");
		break;
	case 501:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L530#火炮2转");
		break;
	case 3100:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3110#恶魔2转");
		break;
	case 5100:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L5110#米哈尔2转");
		break;
	case 2400:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2410#幻影2转");
		break;
	case 508:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L570#龙的传人2转");
		break;

//三转
	case 110:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L111#勇士");
		break;
	case 120:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L121#骑士");
		break;
	case 130:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L131#龙骑士");
		break;
	case 210:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L211#火毒巫师");
		break;
	case 220:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L221#冰雷巫师");
		break;
	case 230:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L231#祭祀");
		break;
	case 310:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L311#射手");
		break;
	case 320:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L321#游侠");
		break;
	case 410:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L411#无影人");
		break;
	case 420:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L421#独行客");
		break;
	case 510:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L511#斗士");
		break;
	case 520:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L521#大幅");
		break;
	
	case 1110:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1111#魂骑士3转");
		break;
	case 1210:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1211#炎术师3转");
		break;
	case 1310:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1311#风灵使者3转");
		break;
	case 1410:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1411#夜行者3转");
		break;
	case 1510:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L1511#奇袭者3转");
		break;

	case 2110:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2111#战神3转");
		break;
	case 432:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L433#双刀3转");
		break;
	case 3210:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3211#幻灵3转");
		break;
	case 3310:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3311#豹弩3转");
		break;
	case 3510:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3511#机械师3转");
		break;
	case 2310:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2311#精灵3转");
		break;
	case 530:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L531#火炮手3转");
		break;
	case 3110:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3111#恶魔3转");
		break;
	case 5110:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L5111#米哈尔3转");
		break;
	case 2410:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2411#幻影3转");
		break;
	case 570:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L571#龙的传人3转");
		break;

//四转
	case 111:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L112#英雄");
		break;
	case 121:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L122#圣骑士");
		break;
	case 131:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L132#黑骑士");
		break;
	case 211:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L212#火毒魔导师");
		break;
	case 221:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L222#冰雷魔导师");
		break;
	case 231:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L232#主教");
		break;
	case 311:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L312#神射手");
		break;
	case 321:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L322#箭神");
		break;
	case 411:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L412#隐士");
		break;
	case 421:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L422#侠盗");
		break;
	case 511:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L512#冲锋队长");
		break;
	case 521:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L522#船长");
		break;
	
	case 2111:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2112#战神4转");
		break;
	case 433:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L434#双刀4转");
		break;
	case 3211:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3212#幻灵4转");
		break;
	case 3311:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3312#豹弩4转");
		break;
	case 3511:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3512#机械师4转");
		break;
	case 2311:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2312#精灵4转");
		break;
	case 531:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L532#火炮手4转");
		break;
	case 3111:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L3112#恶魔4转");
		break;
	case 5111:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L5112#米哈尔4转");
		break;
	case 2411:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2412#幻影4转");
		break;
	case 571:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L572#龙的传人4转");
		break;

//龙神
	case 2200:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2210#龙神2转");
		break;
	case 2210:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2211#龙神3转");
		break;
	case 2211:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2212#龙神4转");
		break;
	case 2212:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2213#龙神5转");
		break;
	case 2213:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2214#龙神6转");
		break;
	case 2214:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2215#龙神7转");
		break;
	case 2215:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2216#龙神8转");
		break;
	case 2216:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2217#龙神9转");
		break;
	case 2217:
		cm.sendSimple("请选择你要转职的职业\r\n#b#L2218#龙神10转");
		break;
	
	default:
		cm.sendOk("如果你需要转职的话记得找我");
            	cm.dispose();
	}
    } else if (status == 1) {
        switch (selection) {
//★转职
//一转
        case 200://魔法师
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 8) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你不是新手职业 或你的等级没有达到8");
            }
            cm.dispose();
            break;
        case 100:
        case 300:
        case 400:
        case 500:
        case 1100:
        case 1200:
        case 1300:
        case 1400:
        case 1500:
        case 2100:
        case 2200:
        case 430:
        case 3200:
        case 3300:
        case 3500:
        case 2300:
        case 501:
        case 3100:
        case 5100:
        case 2400:
        case 508:
            if (cm.getJob() == 0 && cm.getPlayer().getLevel() >= 10) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你不是新手职业或你的等级没有达到10");
            }
            cm.dispose();
            break;
//二转
	case 110:
	case 120:
	case 130:
	case 210:
	case 220:
	case 230:
	case 310:
	case 320:
	case 410:
	case 420:
	case 510:
	case 520:

	case 1110:
	case 1210:
	case 1310:
	case 1410:
	case 1510:
	
	case 2110:
	case 432:
	case 3210:
	case 3310:
	case 3510:
	case 2310:
	case 530:
	case 3110:
	case 5110:
	case 2410:
	case 570:
            if (cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到30");
            }
            cm.dispose();
            break;
//三转
	case 111:
	case 121:
	case 131:
	case 211:
	case 221:
	case 231:
	case 311:
	case 321:
	case 411:
	case 421:
	case 511:
	case 521:

	case 1111:
	case 1211:
	case 1311:
	case 1411:
	case 1511:

	case 2111:
	case 433:
	case 3211:
	case 3311:
	case 3511:
	case 2311:
	case 531:
	case 3111:
	case 5111:
	case 2411:
	case 571:
            if (cm.getPlayer().getLevel() >= 70) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到70");
            }
            cm.dispose();
            break;
//四转
	case 112:
	case 122:
	case 132:
	case 212:
	case 222:
	case 232:
	case 312:
	case 322:
	case 412:
	case 422:
	case 512:
	case 522:
	case 2112:
	case 434:
	case 3212:
	case 3312:
	case 3512:
	case 2312:
	case 532:
	case 3112:
	case 5112:
	case 2412:
	case 572:
            if (cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到120");
            }
            cm.dispose();
            break;
//龙神专用
	case 2210:
            if (cm.getPlayer().getLevel() >= 20) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到20");
            }
            cm.dispose();
            break;
	case 2211:
            if (cm.getPlayer().getLevel() >= 30) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到30");
            }
            cm.dispose();
            break;
	case 2212:
            if (cm.getPlayer().getLevel() >= 40) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到40");
            }
            cm.dispose();
            break;
	case 2213:
            if (cm.getPlayer().getLevel() >= 50) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到50");
            }
            cm.dispose();
            break;
	case 2214:
            if (cm.getPlayer().getLevel() >= 60) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到60");
            }
            cm.dispose();
            break;
	case 2215:
            if (cm.getPlayer().getLevel() >= 70) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到70");
            }
            cm.dispose();
            break;
	case 2216:
            if (cm.getPlayer().getLevel() >= 80) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到80");
            }
            cm.dispose();
            break;
	case 2217:
            if (cm.getPlayer().getLevel() >= 120) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到120");
            }
            cm.dispose();
            break;
	case 2218:
            if (cm.getPlayer().getLevel() >= 160) {
                cm.getPlayer().changeJob(selection);
            } else {
                cm.sendOk("你的等级没有达到160");
            }
            cm.dispose();
            break;


        }
	cm.maxSkillsByJob();//加技能
    }
}