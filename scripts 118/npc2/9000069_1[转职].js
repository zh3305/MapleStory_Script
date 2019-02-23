/* Made by RedTape fixed by Marat */
var noAdvance = "#b对不起，现在你不能转职。你的等级必须在 ";
var advance = "你好哦，我这里可以提供快速转职哦~#r\r\n火炮手一转请找财神.双刀请转飞侠到20级找财神.\r\n转职后，会赠送道具。请确认你的道具栏每格都有2个以上的空格。如果转职后因背包格数不足而领取不到道具，不能恢复。";
var unable = "好像你已经通过了全部的转职了，你的冒险生活怎么样？如果遇到不开心的事，笑笑就过了。以后还有很多事情等着你去面对。";
var noThanks = "\r\n\r\n#L1#谢谢，但是我现在暂时不想转职。#l";
var check = "你确定你想成为一个 ";
var congrats = "你想成为一个 ";
var jobDir;
var status;
var newJob;
var newJobName;
var Sp;
var a=1;
var jobData = Array(
"新手", 0, 
"战士", 100, 
"剑客", 110, 
"勇士", 111, 
"英雄", 112, 
"准骑士", 120, 
"骑士", 121, 
"圣骑士", 122, 
"枪战士", 130, 
"龙骑士", 131, 
"黑骑士", 132, 
"魔法师", 200, 
"火毒法师", 210, 
"火毒巫师", 211, 
"火毒魔导士", 212, 
"冰雷法师", 220, 
"冰雷巫师", 221, 
"冰雷魔导士", 222, 
"牧师", 230, 
"祭司", 231, 
"主教", 232, 
"弓箭手", 300, 
"猎人", 310, 
"射手", 311, 
"神射手", 312, 
"弩弓手", 320, 
"游侠", 321, 
"箭神", 322, 
"飞侠", 400, 
"刺客", 410, 
"无影人", 411, 
"隐士", 412, 
"侠客", 420, 
"独行客", 421, 
"侠盗", 422, 
"海盗", 500, 
"拳手", 510, 
"斗士", 511, 
"冲锋队长", 512, 
"火枪手", 520, 
"大副", 521, 
"船长", 522, 
"游戏管理员", 800, 
"游戏管理员", 900, 
"超级游戏管理员", 910, 
"初心者", 1000, 
"魂骑士（一转）", 1100, 
"魂骑士（二转）", 1110, 
"魂骑士（三转）", 1111, 
"魂骑士（四转）", 1112, 
"炎术士（一转）", 1200, 
"炎术士（二转）", 1210, 
"炎术士（三转）", 1211, 
"炎术士（四转）", 1212, 
"风灵使者（一转）", 1300, 
"风灵使者（二转）", 1310, 
"风灵使者（三转）", 1311, 
"风灵使者（四转）", 1312, 
"夜行者（一转）", 1400, 
"夜行者（二转）", 1410, 
"夜行者（三转）", 1411, 
"夜行者（四转）", 1412, 
"奇袭者（一转）", 1500, 
"奇袭者（二转）", 1510, 
"奇袭者（三转）", 1511, 
"奇袭者（四转）", 1512, 
"战童", 2000, 
"战神（一转）", 2100, 
"战神（二转）", 2110, 
"战神（三转）", 2111, 
"战神（四转）", 2112, 
"预备兵", 3000, 
"唤灵法师（一转）", 3200, 
"唤灵法师（二转）", 3210, 
"唤灵法师（三转）", 3211, 
"唤灵法师（四转）", 3212, 
"豹弩游侠（一转）", 3300, 
"豹弩游侠（二转）", 3310, 
"豹弩游侠（三转）", 3311, 
"豹弩游侠（四转）", 3312, 
"机械师（一转）", 3500, 
"机械师（二转）", 3510, 
"机械师（三转）", 3511, 
"机械师（四转）", 3512
/*"恶魔猎手(一转) ", 3100,
"恶魔猎手(二转) ", 3110,
"恶魔猎手(三转) ", 3111,
"恶魔猎手(四转) ", 3112,
"双弩精灵(一转) ", 3200,
"双弩精灵(二转) ", 3210,
"双弩精灵(三转) ", 3211,
"双弩精灵(四转) ", 3212,
"火枪手(一转) ", 520,
"火枪手(二转) ", 530,
"火枪手(三转) ", 531,
"火枪手(四转) ", 532*/);
var first;
var sd;
var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
	cm.dispose();
    }
    if (status == 0) {
        if (cm.getJob() % 100 == 0) {
            noAdvance += cm.getJob() % 1000 == 0 ? "10": "30";
        } else {
            noAdvance += cm.getJob() % 10 == 0 ? "70": "120";
            noAdvance += " 级才能转职.\r\n你现在的等级为 " + cm.getPlayerStat("LVL") + " 级。" + "\r\n#r新职业(恶魔、双弩、火炮)已经修改为自动转职!#r\r\n火炮手一转请找财神.双刀请转飞侠到20级找财神.";
        }
    }
    if ((cm.getJob() % 10 == 2 && !cm.getJob() >= 433 && !cm.getJob() <= 430) || cm.getJob() == 900 || cm.getJob() == 910 || cm.getJob() == 800 || (cm.getJob() > 1000 && cm.getJob() < 1500 && cm.getJob() % 10 == 1)) {
        cm.sendOk(unable);
        cm.dispose();
        return;
    } else {
        if (status == 0) {
            if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) {
                if ((cm.getPlayerStat("LVL") == 8 || cm.getPlayerStat("LVL") == 9) && cm.getJob() != 2000) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0 && (jobData[i + 1] == (200 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else if (cm.getPlayerStat("LVL") >= 10) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0) if ((jobData[i + 1] % 100 == 0) && (jobData[i + 1] > cm.getJob()) && (jobData[i + 1] < (600 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk("" + noAdvance + " 级或8级才能转职，你现在的等级为 " + cm.getPlayerStat("LVL") + " 级。");
                    cm.dispose();
                    return;
                }
                first = true;
            } else if (cm.getJob() % 100 == 0) { //第二次转职
                if (cm.getPlayerStat("LVL") >= 30) {
                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 2 == 0 && (jobData[i + 1] % 10 == 0 && jobData[i + 1] % 100 != 0)) && (jobData[i + 1] > cm.getJob() && jobData[i + 1] <= (cm.getJob() + 30))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }
            } else if (cm.getJob() % 10 == 0 || cm.getJob() % 10 == 1) { // 第三次\4次转职
                if (cm.getPlayerStat("LVL") >= (cm.getJob() % 10 == 1 ? 120 : 70)) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0 && (jobData[i + 1] - 1 == cm.getJob())) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk(unable);
                cm.dispose();
                return;
            }
            advance += noThanks;
            cm.sendSimple(advance);
        } else if (status == 1) {
            if (selection == 1) {
                cm.sendOk("你现在不想转职吗？那好吧。等你想要转职可以来找我，我时时刻刻在这里。");
                cm.dispose();
            } else {
                if (a=1) {
                    newJob = selection;
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 2 == 0 && jobData[i + 1] == newJob) newJobName = jobData[i];
                    cm.sendNext("你已经成为一个 #b" + newJobName + "#k 了\r\n\r\n#r - 恶魔、火炮手、双弩，已经换为自动转职。如果造成技能异常请联系管理。")
                } else {
                    cm.sendNext("继续转职的话，请让装备栏和消耗栏各腾出两个格子。")
                    cm.dispose();
                }
            } //selection
        /*} else if (status == 2) {
            if (!cm.MissionStatus(cm.getPlayer().getId(),110414000, 0, 2)){//查看时间间隔到了没
		cm.sendOk("#r非法的操作，为了确保注意事项您有仔细观看，请5秒后再点击下一步。")
		cm.MissionDelete(cm.getPlayer().getId(), 110414000);//放弃任务，重新计数
				cm.dispose();
		}else{
			*/
            cm.changeJob(newJob);
            // 还没有给予SP的函数。giveSp()//T050 超过等级就给少了的Sp

            if (newJob == 2100) { //如果是战神第一转
               // cm.teachSkill(21000000, 0, 10); //矛连击强化
                //cm.teachSkill(21001003, 0, 10); //快速矛
            } else if (newJob == 2110) { //战神第二转
               /* cm.teachSkill(21100000, 0, 10);
                cm.teachSkill(21100002, 0, 10);
                cm.teachSkill(21100004, 0, 10);
                cm.teachSkill(21100005, 0, 10);*/
            } else if (newJob == 2111) { //战神第三转
              //  cm.teachSkill(21110002, 0, 10);
            } else if (newJob == 2112) { //战神第四转
              /*  cm.teachSkill(21120001, 0, 10); //攻击策略
                cm.teachSkill(21120002, 0, 10); //战神之舞
                cm.teachSkill(21121003, 0, 10); //战神的意志
                cm.teachSkill(21121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(21120004, 0, 10); //2280014[技能册]防守策略
                cm.teachSkill(21120005, 0, 10); //2280013[技能册]巨熊咆哮
                cm.teachSkill(21120006, 0, 10); //2280015[技能册]钻石星辰
                cm.teachSkill(21120007, 0, 10); //2280016[技能册]战神之盾*/
            } else if (newJob == 431) {
               /* cm.teachSkill(4311003, 0, 10);*/
            } else if (newJob == 432) {
               /* cm.teachSkill(4321000, 0, 10);
                cm.teachSkill(4321001, 20, 20);*/
            } else if (newJob == 434) {
               /* cm.teachSkill(4331002, 0, 10);
                cm.teachSkill(4331005, 0, 10);*/
            } else if (newJob == 434) {
             /*   cm.teachSkill(4341000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(4340001, 0, 10); //武器用毒液
                cm.teachSkill(4341002, 0, 10); //2280030[技能册]终极斩 
                cm.teachSkill(4341003, 0, 10); //怪物炸弹
                cm.teachSkill(4341004, 0, 10); //忍者箭雨
                cm.teachSkill(4341005, 0, 10); //2280031[技能册]地狱锁链
                cm.teachSkill(4341006, 0, 10); //傀儡召唤
                cm.teachSkill(4341007, 0, 10); //荆棘*/
            } else if (newJob == 1111) { //魂骑士
               /* cm.teachSkill(11111004, 0, 10); //轻舞飞扬
                cm.teachSkill(11110005, 0, 10); //进阶斗气*/
            } else if (newJob == 1211) { //炎术士
                /*cm.teachSkill(12111003, 0, 10); //天降落星
                cm.teachSkill(12111004, 0, 10); //火魔兽*/
            } else if (newJob == 1311) { //风灵使者
               /* cm.teachSkill(13111002, 0, 10); //暴风箭雨
                cm.teachSkill(13110003, 0, 10); //神箭手*/
            } else if (newJob == 1411) { //夜行者
            /*    cm.teachSkill(14111005, 0, 10); //三连环光击破
                cm.teachSkill(14110004, 0, 10); //武器用毒液*/
            } else if (newJob == 1511) { //奇袭者
              /*  cm.teachSkill(15111004, 0, 10); //光速拳
                cm.teachSkill(15111005, 0, 10); //极速领域*/
            } else if (newJob == 412) { //隐士
              /*  cm.teachSkill(4120002, 0, 10); //假动作
                cm.teachSkill(4120005, 0, 10); //武器用毒液
                cm.teachSkill(4121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(4121003, 0, 10); //2280006[技能册]挑衅
                cm.teachSkill(4121004, 0, 10); //忍者伏击
                cm.teachSkill(4121006, 0, 10); //暗器伤人
                cm.teachSkill(4121007, 0, 10); //2280010[技能册]三连环光击破
                cm.teachSkill(4121008, 0, 10); //忍者冲击*/
            } else if (newJob == 422) { //侠盗
              /*  cm.teachSkill(4220002, 0, 10); //假动作
                cm.teachSkill(4220005, 0, 10); //武器用毒液
                cm.teachSkill(4221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(4221001, 0, 10); //暗杀
                cm.teachSkill(4221003, 0, 10); //2280006[技能册]挑衅
                cm.teachSkill(4221004, 0, 10); //忍者伏击
                cm.teachSkill(4221006, 0, 10); //烟幕弹
                cm.teachSkill(4221007, 0, 10); //一出双击*/
            } else if (newJob == 312) { //神射手
               /* cm.teachSkill(3120005, 0, 10); //神箭手
                cm.teachSkill(3121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(3121002, 0, 10); //火眼晶晶
                cm.teachSkill(3121003, 0, 10); //2280005[技能册]飞龙冲击波
                cm.teachSkill(3121004, 0, 10); //暴风箭雨
                cm.teachSkill(3121006, 0, 10); //火凤凰
                cm.teachSkill(3121007, 0, 10); //击退箭
                cm.teachSkill(3121008, 0, 10); //集中精力*/
            } else if (newJob == 322) { //
               /* cm.teachSkill(3221003, 0, 10); //2280005[技能册]飞龙冲击波
                cm.teachSkill(3220004, 0, 10); //神弩手
                cm.teachSkill(3221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(3221001, 0, 10); //穿透箭
                cm.teachSkill(3221002, 0, 10); //火眼金睛
                cm.teachSkill(3221005, 0, 10); //冰凤凰
                cm.teachSkill(3221006, 0, 10); //刺眼箭
                cm.teachSkill(3221007, 0, 10); //一击要害箭*/
            } else if (newJob == 212) { //火毒
             /*   cm.teachSkill(2121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(2121001, 0, 10); //创世之破
                cm.teachSkill(2121002, 0, 10); //魔法反击
                cm.teachSkill(2121003, 0, 10); //火凤球
                cm.teachSkill(2121004, 0, 10); //2280004[技能册]终极无限
                cm.teachSkill(2121005, 0, 10); //冰破魔兽
                cm.teachSkill(2121006, 0, 10); //连环爆破
                cm.teachSkill(2121007, 0, 10); //天降落星*/
            } else if (newJob == 222) { //冰雷
              /*  cm.teachSkill(2221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(2221001, 0, 10); //创世之破
                cm.teachSkill(2221002, 0, 10); //魔法反击
                cm.teachSkill(2221003, 0, 10); //冰凤球
                cm.teachSkill(2221004, 0, 10); //2280004[技能册]终极无限
                cm.teachSkill(2221005, 0, 10); //火魔兽
                cm.teachSkill(2221006, 0, 10); //链环闪电
                cm.teachSkill(2221007, 0, 10); //落霜冰破*/
            } else if (newJob == 232) { //主教
               /* cm.teachSkill(2321000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(2321001, 0, 10); //创世之破
                cm.teachSkill(2321002, 0, 10); //魔法反击
                cm.teachSkill(2321003, 0, 10); //强化圣龙
                cm.teachSkill(2321004, 0, 10); //2280004[技能册]终极无限
                cm.teachSkill(2321005, 0, 10); //圣灵之盾
                cm.teachSkill(2321006, 0, 10); //复活术
                cm.teachSkill(2321007, 0, 10); //2280009[技能册]光芒飞箭
                cm.teachSkill(2321008, 0, 10); //圣光普照*/
            } else if　 (newJob == 112) {
             /*   cm.teachSkill(1121001, 0, 10); //磁石
                cm.teachSkill(1121002, 0, 10); //稳如泰山
                cm.teachSkill(1121006, 0, 10); //2280012[技能册]突进
                cm.teachSkill(1121008, 0, 10); //勇猛劈砍
                cm.teachSkill(1121010, 0, 10); //葵花宝典
                //cm.teachSkill(1121009,0,10);//英雄之斧
                cm.teachSkill(1120003, 0, 10); //2280007[技能册]万佛归一破
                cm.teachSkill(1120004, 0, 10); //阿基里斯
                cm.teachSkill(1121000, 0, 10); //2280003[技能册]冒险岛勇士*/
            } else if (newJob == 122) {
               /* cm.teachSkill(1220005, 0, 10); //阿基里斯
                cm.teachSkill(1220006, 0, 10); //寒冰掌
                cm.teachSkill(1220010, 0, 10); //2280008[技能册]万佛归一破
                cm.teachSkill(1221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(1221001, 0, 10); //磁石
                cm.teachSkill(1221002, 0, 10); //稳定如山
                cm.teachSkill(1221003, 0, 10); //圣灵之剑
                cm.teachSkill(1221004, 0, 10); //圣灵之锤
                cm.teachSkill(1221007, 0, 10); //2280012[技能册]突进
                cm.teachSkill(1221009, 0, 10); //连环环破
                cm.teachSkill(1221011, 0, 10); //圣域*/
            } else if (newJob == 132) {
               /* cm.teachSkill(1320005, 0, 10); //阿基里斯
                cm.teachSkill(1320006, 0, 10); //恶龙附身
                cm.teachSkill(1320008, 0, 10); //灵魂治愈
                cm.teachSkill(1320009, 0, 10); //灵魂祝福
                cm.teachSkill(1321000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(1321001, 0, 10); //磁石
                cm.teachSkill(1321002, 0, 10); //稳如泰山
                cm.teachSkill(1321003, 0, 10); //2280012[技能册]突进
                cm.teachSkill(1321007, 0, 10); //灵魂助力*/
            } else if (newJob == 512) {
               /* cm.teachSkill(5121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(5121002, 0, 10); //超能量
                cm.teachSkill(5121003, 0, 10); //超级变身
                cm.teachSkill(5121004, 0, 10); //金手指
                cm.teachSkill(5121005, 0, 10); //索命
                // cm.teachSkill(5121006,0,10);
                cm.teachSkill(5121007, 0, 10); //光速拳
                //cm.teachSkill(5121008,0,5);
                cm.teachSkill(5121009, 0, 10); //极速领域
                cm.teachSkill(5121010, 0, 10); //伺机待发
                cm.teachSkill(5121001, 0, 10); //潜龙出渊*/
            } else if (newJob == 522) {
                /*cm.teachSkill(5220001, 0, 10); //属性强化
                cm.teachSkill(5220011, 0, 10); //导航辅助
                cm.teachSkill(5220002, 0, 10); //超级章鱼炮台
                cm.teachSkill(5221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(5221003, 0, 10); //地毯式空袭
                cm.teachSkill(5221004, 0, 10); //金属风暴
                cm.teachSkill(5221009, 0, 10); //心灵控制
                cm.teachSkill(5221006, 0, 10); //武装*/
                //cm.teachSkill(5221007, 0, 10); //急速射
                //cm.teachSkill(5221008, 0, 10); //重量炮击
            } //newjob
            if (first) {
                //cm.resetAp();
            } //如果是一转，重置AP

            if (newJob == 100 || newJob == 1100) {
                cm.gainItem(1302007, 1)
            } else if (newJob == 110 || newJob == 1110) {
                cm.gainItem(1402002, 1)
            } else if (newJob == 111 || newJob == 1111) {
                cm.gainItem(1402003, 1)
            } else if (newJob == 112) {
                cm.gainItem(1402004, 1)
            } else if (newJob == 120) {
                cm.gainItem(1422004, 1)
            } else if (newJob == 121) {
                cm.gainItem(1422005, 1)
            } else if (newJob == 122) {
                cm.gainItem(1422027, 1)
            } else if (newJob == 130) {
                cm.gainItem(1432002, 1)
            } else if (newJob == 131) {
                cm.gainItem(1432004, 1)
            } else if (newJob == 132) {
                cm.gainItem(1432007, 1)
            } else if (newJob == 200 || newJob == 1200) {
                cm.gainItem(1372063, 1)
            } else if (newJob == 210 || newJob == 220 || newJob == 230 || newJob == 1210) {
                cm.gainItem(1372066, 1)
            } else if (newJob == 211 || newJob == 221 || newJob == 231 || newJob == 1211) {
                cm.gainItem(1372069, 1)
            } else if (newJob == 212 || newJob == 222 || newJob == 232) {
                cm.gainItem(1372072, 1)
            } else if (newJob == 300 || newJob == 1300 || newJob == 3300) {
                cm.gainItem(1452093, 1);
                cm.gainItem(1462078, 1);
            } else if (newJob == 310 || newJob == 1310 || newJob == 3310) {
                cm.gainItem(1452096, 1);
            } else if (newJob == 311 || newJob == 1311 || newJob == 3311) {
                cm.gainItem(1452099, 1);
            } else if (newJob == 312 || newJob == 3312) {
                cm.gainItem(1452101, 1);
            } else if (newJob == 320) {
                cm.gainItem(1462081, 1);
            } else if (newJob == 321) {
                cm.gainItem(1462084, 1);
            } else if (newJob == 322) {
                cm.gainItem(1462086, 1);
            } else if (newJob == 400 || newJob == 1400) {
                cm.gainItem(1332104, 1);
                cm.gainItem(1472104, 1);
            } else if (newJob == 410 || newJob == 1410) {
                cm.gainItem(1472107, 1);
            } else if (newJob == 411 || newJob == 1411) {
                cm.gainItem(1472110, 1);
            } else if (newJob == 412) {
                cm.gainItem(1472112, 1);
            } else if (newJob == 420) {
                cm.gainItem(1332107, 1);
            } else if (newJob == 421) {
                cm.gainItem(1332110, 1);
            } else if (newJob == 422) {
                cm.gainItem(1332115, 1);
            } else if (newJob == 500 || newJob == 1500 || newJob == 3500) {
                cm.gainItem(1482066, 1);
                cm.gainItem(1492066, 1)
            } else if (newJob == 510 || newJob == 1510 || newJob == 3510) {
                cm.gainItem(1482069, 1);
            } else if (newJob == 511 || newJob == 1511 || newJob == 3511) {
                cm.gainItem(1482072, 1);
            } else if (newJob == 512 || newJob == 3512) {
                cm.gainItem(1482074, 1);
            } else if (newJob == 520) {
                cm.gainItem(1492069, 1);
            } else if (newJob == 521) {
                cm.gainItem(1492072, 1);
            } else if (newJob == 522) {
                cm.gainItem(1492074, 1);
            } else if (newJob == 2100) {
                cm.gainItem(1442096, 1);
            } else if (newJob == 2110) {
                cm.gainItem(1442099, 1);
            } else if (newJob == 2111) {
                cm.gainItem(1442102, 1);
            } else if (newJob == 2112) {
                cm.gainItem(1442105, 1);
            } else if (newJob == 3200) {
                cm.gainItem(1382085, 1);
            } else if (newJob == 3210) {
                cm.gainItem(1382088, 1);
            } else if (newJob == 3211) {
                cm.gainItem(1382091, 1);
            } else if (newJob == 3212) {
                cm.gainItem(1382094, 1);
            }
            if (Sp) {
                cm.sendNext("经过小助手的辛苦培养。从现在开始你已经是#b" + newJobName + "#k了！\r\n我给了你一些小礼物~请到道具栏查收~\r\n\r\n目前你的等级是" + cm.getPlayerStat("LVL") + "，超过了等级转职。系统为你补上了" + (cm.getPlayerStat("LVL") - 10) * 3 + "点SP。")
                cm.dispose();
            } else {
                cm.sendOk("经过小助手的辛苦培养。从现在开始你已经是#b" + newJobName + "#k了！\r\n我给了你一些小礼物~请到道具栏查收~");
                cm.dispose();
            }
        }	
    }
}

function giveSp() { //要放在转职职业代码 后面
    if (cm.getJob() == 200 && cm.getPlayerStat("LVL") > 8) { //如果是魔法师，且超过了转职等级 8
        Sp = true;
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 8) * 3)
    } else if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) { //第一次转职，且超过了转职等级 10
        Sp = true
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 10) * 3)
    }
}