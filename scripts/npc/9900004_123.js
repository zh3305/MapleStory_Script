var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 2 && mode == 0) {
            cm.dispose();
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple("#e#b我是满技能的NPC只能帮你满当前职业技能.如果没有帮您加的技能就说明是有问题的技能。#k#l\r\n#L1##r------┈━═☆一键满技能☆═━┈-------#k#l");
        } else if (status == 1) {
            if (cm.getJob() == 0) {
            } else if (cm.getJob() >= 5100 && cm.getJob() <= 5112) {
                cm.teachSkill(51000000, 10, 10) //增加HP
                cm.teachSkill(51000001, 15, 15) //灵魂盾
                cm.teachSkill(51000002, 10, 10) //灵魂敏捷
                cm.teachSkill(51001003, 10, 10) //灵魂跳跃
                cm.teachSkill(51001004, 20, 20) //灵魂之刃
                cm.teachSkill(51100000, 10, 10) //物理训练
                cm.teachSkill(51100001, 20, 20) //精准剑
                cm.teachSkill(51100002, 20, 20) //终结攻击
                cm.teachSkill(51101003, 20, 20) //快速剑
                cm.teachSkill(51101004, 20, 20) //愤怒
                cm.teachSkill(51101005, 20, 20) //灵魂突刺
                cm.teachSkill(51101006, 20, 20) //闪耀追逐
                cm.teachSkill(51110000, 30, 30) //自我恢复
                cm.teachSkill(51110001, 20, 20) //专注
                cm.teachSkill(51110002, 20, 20) //灵魂突击
                cm.teachSkill(51111003, 10, 10) //闪耀之光
                cm.teachSkill(51111004, 20, 20) //灵魂恢复术
                cm.teachSkill(51111005, 20, 20) //魔击无效
                cm.teachSkill(51111006, 20, 20) //灵魂挥剑
                cm.teachSkill(51111007, 20, 20) //闪耀爆破
                cm.teachSkill(51120000, 30, 30) //战斗精通
                cm.teachSkill(51120001, 30, 30) //进阶精准剑
                cm.teachSkill(51120002, 30, 30) //进阶终结攻击
                cm.teachSkill(51120003, 30, 30) //进阶灵魂盾
                cm.teachSkill(51121004, 30, 30) //稳如泰山
                cm.teachSkill(51121005, 30, 30) //冒险岛勇士
                cm.teachSkill(51121006, 30, 30) //灵魂之怒
                cm.teachSkill(51121007, 30, 30) //灵魂抨击
                cm.teachSkill(51121008, 30, 30) //闪耀爆炸
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() == 2003 || cm.getJob() >= 2400 && cm.getJob() <= 2412) {
                //cm.teachSkill(20031203,1,1)//幻影回归
                //cm.teachSkill(20031205,1,1)//幻影屏障
                //cm.teachSkill(20031207,1,1)//印技之瞳
                //cm.teachSkill(20031208,1,1)//幻影屏障
                //cm.teachSkill(20031209,1,1)//卡牌审判
                //cm.teachSkill(20031210,1,1)//卡牌审判
                //cm.teachSkill(20031211,1,1)//潜行
                //cm.teachSkill(20031212,1,1)//诱饵
                cm.teachSkill(24000003, 10, 10) //快速逃避
                cm.teachSkill(24001000, 20, 20) //二连刺
                cm.teachSkill(24001001, 20, 20) //幻影印技天赋 Ⅰ
                cm.teachSkill(24001002, 15, 15) //迅捷幻影
                cm.teachSkill(24100003, 10, 10) //卡片雪舞
                cm.teachSkill(24100004, 20, 20) //精准手杖
                cm.teachSkill(24100006, 10, 10) //超级幸运星
                cm.teachSkill(24101000, 20, 20) //命运召唤
                cm.teachSkill(24101001, 20, 20) //幻影印技天赋 Ⅱ
                cm.teachSkill(24101002, 20, 20) //和风卡浪
                cm.teachSkill(24101005, 20, 20) //快速手杖
                cm.teachSkill(24110004, 20, 20) //电光回避
                cm.teachSkill(24110007, 20, 20) //敏锐直觉
                cm.teachSkill(24111000, 20, 20) //卡牌斩碎
                cm.teachSkill(24111001, 20, 20) //幻影印技天赋 Ⅲ
                cm.teachSkill(24111002, 0, 0) //神秘的运气 
                cm.teachSkill(24111003, 20, 20) //幸运保护
                cm.teachSkill(24111005, 20, 20) //月光祝福
                cm.teachSkill(24111006, 20, 20) //幻影突击
                cm.teachSkill(24111008, 20, 20) //幻影突击
                cm.teachSkill(24120002, 20, 20) //黑色秘卡
                cm.teachSkill(24120006, 30, 30) //手杖专家
                cm.teachSkill(24121000, 30, 30) //蓝光连击
                cm.teachSkill(24121001, 10, 10) //幻影印技天赋 Ⅳ
                cm.teachSkill(24121003, 20, 20) //暮光祝福
                cm.teachSkill(24121004, 30, 30) //圣歌祈祷
                cm.teachSkill(24121005, 10, 10) //卡片风暴
                cm.teachSkill(24121007, 0, 0) //灵魂偷取
                cm.teachSkill(24121008, 30, 30) //冒险岛勇士
                cm.teachSkill(24121009, 10, 10) //勇士的意志
                cm.teachSkill(24121010, 20, 20) //暮光祝福	
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() == 508 || cm.getJob() == 570 || cm.getJob() == 571 || cm.getJob() == 572) {
                cm.teachSkill(5080000, 10, 10) //侠客行
                cm.teachSkill(5081001, 20, 20) //龙翼拳
                cm.teachSkill(5081002, 20, 20) //双弹射击
                cm.teachSkill(5081003, 10, 10) //前空翻
                cm.teachSkill(5080004, 10, 10) //狮子的力量
                cm.teachSkill(5081005, 20, 20) //螺旋冲击
                cm.teachSkill(5700000, 20, 20) //精准枪
                cm.teachSkill(5700003, 10, 10) //物理训练
                cm.teachSkill(5700004, 20, 20) //三连射杀
                cm.teachSkill(5700005, 15, 15) //侠士的忍耐
                cm.teachSkill(5701001, 20, 20) //熊猫地震
                cm.teachSkill(5701005, 20, 20) //速射
                cm.teachSkill(5701006, 20, 20) //冥想
                cm.teachSkill(5701007, 20, 20) //双重螺旋
                cm.teachSkill(5710004, 20, 20) //侠义韧性
                cm.teachSkill(5710005, 20, 20) //气运丹田
                cm.teachSkill(5711000, 20, 20) //双管枪射击
                cm.teachSkill(5711001, 20, 20) //滑膛炮
                cm.teachSkill(5711002, 20, 20) //猛虎扑食
                cm.teachSkill(5711006, 30, 30) //求道之拳
                cm.teachSkill(5711011, 20, 20) //幸运骰子
                cm.teachSkill(5721000, 30, 30) //冒险岛勇士
                cm.teachSkill(5721001, 10, 10) //连射
                cm.teachSkill(5721001, 5, 5) //勇士的意志
                cm.teachSkill(5721003, 20, 20) //无尽追击
                cm.teachSkill(5721004, 30, 30) //亢龙有悔
                cm.teachSkill(5720005, 0, 0) //双幸运骰子
                cm.teachSkill(5721006, 30, 30) //爆头
                cm.teachSkill(5720008, 20, 20) //狂热
                cm.teachSkill(5721007, 30, 30) //英勇突袭
                cm.teachSkill(5721009, 20, 20) //海盗气魄
                cm.teachSkill(5721009, 20, 20) //勇士的意志
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 100 && cm.getJob() <= 132) {
                cm.teachSkill(1001003, 20, 20); //圣甲术
                cm.teachSkill(1001004, 20, 20); //圣甲术
                cm.teachSkill(1001005, 20, 20); //圣甲术
                cm.teachSkill(1000006, 10, 10); //圣甲术
                cm.teachSkill(1100000, 20, 20); //圣甲术
                cm.teachSkill(1100002, 20, 20); //圣甲术
                cm.teachSkill(1101004, 20, 20); //圣甲术
                cm.teachSkill(1101006, 20, 20); //圣甲术
                cm.teachSkill(1101007, 20, 20); //圣甲术
                cm.teachSkill(1101008, 20, 20); //圣甲术
                cm.teachSkill(1100009, 10, 10); //圣甲术
                cm.teachSkill(1110000, 20, 20); //圣甲术
                cm.teachSkill(1111002, 20, 20); //斗气集中
                cm.teachSkill(1101010, 10, 10); //速行
                cm.teachSkill(1201010, 10, 10); //速行
                cm.teachSkill(1301010, 10, 10); //速行
                cm.teachSkill(1111003, 20, 20); //圣甲术
                cm.teachSkill(1111005, 20, 20); //圣甲术
                cm.teachSkill(1111007, 20, 20); //圣甲术
                cm.teachSkill(1111008, 20, 20); //圣甲术
                cm.teachSkill(1111010, 20, 20); //圣甲术
                cm.teachSkill(1110009, 20, 20); //圣甲术
                cm.teachSkill(1120003, 30, 30); //圣甲术
                cm.teachSkill(1121000, 30, 30); //冒险岛勇士
                cm.teachSkill(1121001, 30, 30); //圣甲术
                cm.teachSkill(1121002, 30, 30); //圣甲术
                cm.teachSkill(1121006, 30, 30); //圣甲术
                cm.teachSkill(1121008, 30, 30); //圣甲术
                cm.teachSkill(1121010, 30, 30); //圣甲术
                cm.teachSkill(1121011, 5, 5); //圣甲术
                cm.teachSkill(1120012, 10, 10); //圣甲术
                cm.teachSkill(1120013, 30, 30); //圣甲术
                cm.teachSkill(1300000, 20, 20); //longqi
                cm.teachSkill(1300002, 20, 20); //圣甲术
                cm.teachSkill(1301004, 20, 20); //圣甲术
                cm.teachSkill(1301006, 20, 20); //圣甲术
                cm.teachSkill(1301007, 20, 20); //圣甲术
                cm.teachSkill(1301008, 20, 20); //圣甲术
                cm.teachSkill(1300009, 10, 10); //圣甲术
                cm.teachSkill(1111007, 20, 20); //圣甲术
                cm.teachSkill(1310000, 20, 20); //圣甲术
                cm.teachSkill(1311001, 20, 20); //圣甲术
                cm.teachSkill(1311003, 20, 20); //圣甲术
                cm.teachSkill(1311005, 20, 20); //圣甲术
                cm.teachSkill(1311006, 30, 30); //圣甲术
                cm.teachSkill(1311008, 20, 20); //圣甲术
                cm.teachSkill(1310009, 10, 10); //圣甲术
                cm.teachSkill(1311007, 0, 0); //魔击无效
                cm.teachSkill(1120013, 30, 30); //圣甲术
                cm.teachSkill(1320006, 30, 30); //圣甲术
                cm.teachSkill(1320008, 20, 20); //圣甲术
                cm.teachSkill(1321000, 30, 30); //冒险岛勇士
                cm.teachSkill(1321001, 30, 30); //圣甲术
                cm.teachSkill(1321002, 30, 30); //圣甲术
                cm.teachSkill(1321003, 30, 30); //圣甲术
                cm.teachSkill(1321010, 5, 5); //圣甲术
                cm.teachSkill(1320011, 10, 10); //圣甲术
                cm.teachSkill(1321012, 30, 30); //圣甲术
                cm.teachSkill(1321007, 30, 30); //圣甲术
                cm.teachSkill(1320009, 20, 20); //灵魂祝福
                cm.teachSkill(1200000, 20, 20); //shengqi
                cm.teachSkill(1200002, 20, 20); //圣甲术
                cm.teachSkill(1201004, 20, 20); //圣甲术
                cm.teachSkill(1201006, 20, 20); //圣甲术
                cm.teachSkill(1201007, 20, 20); //圣甲术
                cm.teachSkill(1201008, 20, 20); //圣甲术
                cm.teachSkill(1200009, 10, 10); //圣甲术
                cm.teachSkill(1210001, 20, 20); //圣甲术
                cm.teachSkill(1211002, 30, 30); //圣甲术
                cm.teachSkill(1211004, 20, 20); //圣甲术
                cm.teachSkill(1211006, 20, 20); //圣甲术
                cm.teachSkill(1211008, 20, 20); //圣甲术
                cm.teachSkill(1211009, 20, 20); //圣甲术
                cm.teachSkill(1211011, 20, 20); //圣甲术
                cm.teachSkill(1211010, 0, 0); //元气恢复
                cm.teachSkill(1220005, 30, 30); //圣甲术
                cm.teachSkill(1220006, 30, 30); //圣甲术
                cm.teachSkill(1220010, 10, 10); //圣甲术
                cm.teachSkill(1221000, 30, 30); //冒险岛勇士
                cm.teachSkill(1221004, 0, 0); //神圣冲击
                cm.teachSkill(1221007, 30, 30); //圣甲术
                cm.teachSkill(1221009, 30, 30); //圣甲术
                cm.teachSkill(1221011, 30, 30); //圣甲术
                cm.teachSkill(1221012, 5, 5); //圣甲术
                cm.teachSkill(1221002, 30, 30); //圣甲术
                cm.teachSkill(1220013, 0, 0); //祝福护甲
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 200 && cm.getJob() <= 232) {
                cm.teachSkill(2001002, 15, 15); //魔法盾
                cm.teachSkill(2001003, 15, 15); //魔法盾
                cm.teachSkill(2001004, 20, 20); //魔法盾
                cm.teachSkill(2001005, 20, 20); //魔法盾
                cm.teachSkill(2000006, 10, 10); //魔法盾
                cm.teachSkill(2200000, 20, 20); //魔法盾
                cm.teachSkill(2201001, 20, 20); //魔法盾
                cm.teachSkill(2201002, 20, 20); //魔法盾
                cm.teachSkill(2201003, 10, 10); //魔法盾
                cm.teachSkill(2201004, 20, 20); //魔法盾
                cm.teachSkill(2201005, 20, 20); //魔法盾
                cm.teachSkill(2200006, 20, 20); //魔法盾
                cm.teachSkill(2200007, 10, 10); //魔法盾
                cm.teachSkill(2210000, 20, 20); //魔法盾
                cm.teachSkill(2210001, 20, 20); //魔法盾
                cm.teachSkill(2211002, 20, 20); //魔法盾
                cm.teachSkill(2211003, 20, 20); //魔法盾
                cm.teachSkill(2211004, 20, 20); //魔法盾
                cm.teachSkill(2211005, 20, 20); //魔法盾
                cm.teachSkill(2211006, 20, 20); //魔法盾
                cm.teachSkill(2211007, 10, 10); //快速移动精通
                cm.teachSkill(2211008, 10, 10); //自然力重置
                cm.teachSkill(2210009, 20, 20); //魔法爆击
                cm.teachSkill(2221000, 30, 30); //冒险岛勇士
                cm.teachSkill(2221001, 30, 30); //魔法盾
                cm.teachSkill(2221003, 30, 30); //魔法盾
                cm.teachSkill(2221004, 30, 30); //魔法盾
                cm.teachSkill(2221005, 30, 30); //魔法盾
                cm.teachSkill(2221006, 30, 30); //魔法盾
                cm.teachSkill(2221007, 30, 30); //魔法盾
                cm.teachSkill(2221008, 5, 5); //魔法盾
                cm.teachSkill(2221009, 10, 10); //魔法盾
                cm.teachSkill(2220010, 30, 30); //魔法盾
                
                cm.teachSkill(2100006, 20, 20); //火毒开始
                cm.teachSkill(2100000, 20, 20); //魔法盾
                cm.teachSkill(2101001, 20, 20); //魔法盾
                cm.teachSkill(2101002, 20, 20); //魔法盾
                cm.teachSkill(2101003, 10, 10); //魔法盾
                cm.teachSkill(2101004, 20, 20); //魔法盾
                cm.teachSkill(2101005, 20, 20); //魔法盾
                cm.teachSkill(2100007, 10, 10); //魔法盾
                cm.teachSkill(2110000, 20, 20); //魔法盾
                cm.teachSkill(2110001, 20, 20); //魔法盾
                cm.teachSkill(2111002, 20, 20); //魔法盾
                cm.teachSkill(2111003, 20, 20); //魔法盾
                cm.teachSkill(2111006, 10, 10); //魔法盾
                cm.teachSkill(2111007, 10, 10); //快速移动精通
                cm.teachSkill(2111008, 10, 10); //魔法盾
                cm.teachSkill(2110009, 20, 20); //魔法爆击
                cm.teachSkill(2111004, 20, 20); //封印术
                cm.teachSkill(2111005, 20, 20); //魔法狂暴
                cm.teachSkill(2121000, 30, 30); //冒险岛勇士
                cm.teachSkill(2121001, 30, 30); //魔法盾
                cm.teachSkill(2121002, 10, 10); //魔法盾
                cm.teachSkill(2121003, 30, 30); //魔法盾
                cm.teachSkill(2121004, 30, 30); //魔法盾
                cm.teachSkill(2121005, 30, 30); //魔法盾
                cm.teachSkill(2121006, 30, 30); //魔法盾
                cm.teachSkill(2121007, 30, 30); //魔法盾
                cm.teachSkill(2121008, 5, 5); //魔法盾
                cm.teachSkill(2121009, 10, 10); //魔法盾
                cm.teachSkill(2120010, 30, 30); //魔法盾
                
                cm.teachSkill(2300000, 20, 20); //主教
                cm.teachSkill(2301001, 20, 20); //魔法盾
                cm.teachSkill(2301002, 20, 20); //魔法盾
                cm.teachSkill(2301003, 15, 15); //魔法盾
                cm.teachSkill(2301004, 15, 15); //魔法盾
                cm.teachSkill(2301005, 20, 20); //魔法盾
                cm.teachSkill(2300006, 20, 20); //魔法盾
                cm.teachSkill(2300007, 10, 10); //魔法盾
                cm.teachSkill(2311001, 10, 10); //魔法盾
                cm.teachSkill(2311002, 10, 10); //魔法盾
                cm.teachSkill(2311007, 10, 10); //快速移动精通
                cm.teachSkill(2310010, 20, 20); //魔法爆击
                cm.teachSkill(2311003, 30, 30); //魔法盾
                cm.teachSkill(2311004, 30, 30); //魔法盾
                cm.teachSkill(2311005, 0, 0); //巫毒术
                cm.teachSkill(2311006, 20, 20); //魔法盾
                cm.teachSkill(2310008, 20, 20); //魔法盾
                cm.teachSkill(2311009, 0, 0); //神圣魔法盾
                cm.teachSkill(2321000, 30, 30); //冒险岛勇士
                cm.teachSkill(2321001, 30, 30); //创世之破
                cm.teachSkill(2321003, 30, 30); //强化圣龙
                cm.teachSkill(2321003, 30, 30); //魔法盾
                cm.teachSkill(2321004, 0, 0); //终极无限
                cm.teachSkill(2321005, 30, 30); //魔法盾
                cm.teachSkill(2321006, 5, 5); //魔法盾
                cm.teachSkill(2321007, 30, 30); //魔法盾
                cm.teachSkill(2321008, 30, 30); //魔法盾
                cm.teachSkill(2321009, 5, 5); //魔法盾
                cm.teachSkill(2321010, 10, 10); //魔法盾
                cm.teachSkill(2320011, 30, 30); //魔法盾
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 300 && cm.getJob() <= 322) {//弓箭手
                cm.teachSkill(3000001, 20, 20); //强力箭
                cm.teachSkill(3000002, 15, 15); //远程箭
                cm.teachSkill(3001004, 15, 15); //集中术
                cm.teachSkill(3001005, 15, 15); //断魂箭
                cm.teachSkill(3100000, 20, 20); //自然吸收
                cm.teachSkill(3100001, 20, 20); //自然吸收
                cm.teachSkill(3101002, 20, 20); //自然吸收
                cm.teachSkill(3101003, 10, 10); //自然吸收
                cm.teachSkill(3101004, 10, 10); //自然吸收
                cm.teachSkill(3101005, 20, 20); //自然吸收
                cm.teachSkill(3100006, 10, 10); //自然吸收
                cm.teachSkill(3101007, 15, 15); //自然吸收
                cm.teachSkill(3111000, 20, 20); //自然吸收
                cm.teachSkill(3110001, 15, 15); //自然吸收
                cm.teachSkill(3111002, 15, 15); //自然吸收
                cm.teachSkill(3111003, 20, 20); //自然吸收
                cm.teachSkill(3111004, 20, 20); //自然吸收
                cm.teachSkill(3111005, 20, 20); //自然吸收
                cm.teachSkill(3111006, 20, 20); //自然吸收
                cm.teachSkill(3110007, 10, 10); //自然吸收
                cm.teachSkill(3111008, 20, 20); //自然吸收
                cm.teachSkill(3120005, 20, 20); //自然吸收
                cm.teachSkill(3120006, 30, 20); //自然吸收
                cm.teachSkill(3121000, 30, 30);//自然吸收
                cm.teachSkill(3121002, 30, 30); //自然吸收
                cm.teachSkill(3121004, 30, 30); //自然吸收
                cm.teachSkill(3121007, 30, 30); //自然吸收
                cm.teachSkill(3120008, 30, 30); //自然吸收
                cm.teachSkill(3121009, 5, 5); //自然吸收
                cm.teachSkill(3120010, 30, 30); //自然吸收
                cm.teachSkill(3120011, 10, 10); //自然吸收
                cm.teachSkill(3120012, 15, 15); //自然吸收
                cm.teachSkill(3120012, 15, 15); //lushou
                //---
                cm.teachSkill(3200000, 20, 20); //自然吸收
                cm.teachSkill(3200001, 20, 20); //自然吸收
                cm.teachSkill(3201002, 20, 20); //自然吸收
                cm.teachSkill(3201003, 10, 10); //自然吸收
                cm.teachSkill(3201004, 10, 10); //自然吸收
                cm.teachSkill(3200006, 10, 10); //自然吸收
                cm.teachSkill(3201007, 15, 15); //自然吸收
                cm.teachSkill(3211000, 20, 20); //自然吸收
                cm.teachSkill(3210001, 15, 15); //自然吸收
                cm.teachSkill(3211002, 15, 15); //自然吸收
                cm.teachSkill(3211003, 20, 20); //自然吸收
                cm.teachSkill(3211004, 20, 20); //自然吸收
                cm.teachSkill(3211005, 20, 20); //自然吸收
                cm.teachSkill(3211006, 20, 20); //自然吸收
                cm.teachSkill(3210007, 10, 10); //自然吸收
                cm.teachSkill(3211008, 20, 20); //自然吸收
                cm.teachSkill(3220004, 20, 20); //自然吸收
                cm.teachSkill(3220005, 30, 30); //自然吸收
                cm.teachSkill(3221000, 30, 30); //冒险岛勇士
                cm.teachSkill(3221001, 30, 30); //自然吸收
                cm.teachSkill(3221002, 30, 30); //自然吸收
                cm.teachSkill(3221006, 30, 30); //自然吸收
                cm.teachSkill(3221007, 30, 30); //自然吸收
                cm.teachSkill(3221008, 5, 5); //自然吸收
                cm.teachSkill(3220009, 10, 10); //自然吸收
                cm.teachSkill(3220010, 10, 10); //自然吸收
                cm.teachSkill(3220012, 30, 30); //自然吸收
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 400 && cm.getJob() <= 422) {
                cm.teachSkill(4001002, 10, 10); //集中术
                cm.teachSkill(4001011, 10, 10); //闪跃
                cm.teachSkill(4000012, 10, 10); //侧移
                cm.teachSkill(4001013, 10, 10); //快刀斩
                cm.teachSkill(4001003, 10, 10); //集中术
                cm.teachSkill(4001334, 20, 20); //集中术
                cm.teachSkill(4001344, 20, 20); //集中术
                cm.teachSkill(4000000, 20, 20); //集中术
                cm.teachSkill(4001005, 20, 20); //轻功
                cm.teachSkill(4000001, 5, 5); //集中术
                cm.teachSkill(4100000, 20, 20); //集中术
                cm.teachSkill(4100001, 30, 30); //集中术
                cm.teachSkill(4101003, 20, 20); //集中术
                cm.teachSkill(4101004, 20, 20); //集中术
                cm.teachSkill(4101005, 20, 20); //集中术
                cm.teachSkill(4100006, 10, 10); //集中术
                cm.teachSkill(4110000, 20, 20); //集中术
                cm.teachSkill(4111001, 20, 20); //集中术
                cm.teachSkill(4111002, 20, 20); //影分身
                cm.teachSkill(4111003, 20, 20); //集中术
                cm.teachSkill(4111004, 20, 20); //集中术
                cm.teachSkill(4111005, 20, 20); //集中术
                cm.teachSkill(4111006, 20, 20); //集中术
                cm.teachSkill(4111007, 0, 0); //黑暗杂耍
                cm.teachSkill(4120002, 30, 30); //集中术
                cm.teachSkill(4120005, 30, 30); //集中术
                cm.teachSkill(4121000, 30, 30); //冒险岛勇士
                cm.teachSkill(4121003, 30, 30); //集中术
                cm.teachSkill(4121004, 30, 30); //集中术
                cm.teachSkill(4121006, 30, 30); //集中术
                cm.teachSkill(4121007, 30, 30); //集中术
                cm.teachSkill(4121008, 10, 10); //集中术
                cm.teachSkill(4121009, 5, 5); //集中术
                cm.teachSkill(4120010, 10, 10); //集中术
                cm.teachSkill(4200000, 20, 20); //集中术
                cm.teachSkill(4201002, 20, 20); //集中术
                cm.teachSkill(4201003, 20, 20); //集中术
                cm.teachSkill(4201004, 20, 20); //集中术
                cm.teachSkill(4201005, 30, 30); //集中术
                cm.teachSkill(4200006, 10, 10); //集中术
                cm.teachSkill(4210000, 10, 10); //集中术
                cm.teachSkill(4211001, 10, 10); //集中术
                cm.teachSkill(4211002, 20, 20); //集中术
                cm.teachSkill(4211003, 10, 10); //集中术
                cm.teachSkill(4211004, 20, 20); //集中术
                cm.teachSkill(4211005, 10, 10); //集中术
                cm.teachSkill(4211006, 20, 20); //集中术
                cm.teachSkill(4220002, 30, 30); //集中术
                cm.teachSkill(4220005, 30, 30); //集中术
                cm.teachSkill(4221000, 30, 30); //集中术
                cm.teachSkill(4221001, 30, 30); //集中术
                cm.teachSkill(4221003, 30, 30); //集中术
                cm.teachSkill(4221004, 30, 30); //集中术
                cm.teachSkill(4221006, 0, 0); //烟幕弹
                cm.teachSkill(4221007, 30, 30); //集中术
                cm.teachSkill(4221008, 5, 5); //集中术
                cm.teachSkill(4220009, 10, 10); //集中术
                cm.teachSkill(4211008, 20, 20); //影分身
                cm.teachSkill(4211009, 20, 20); //集中术




                //cm.teachSkill(4201003,20,20);//轻功
                cm.teachSkill(4201008, 20, 20); //二段跳
                cm.teachSkill(4201009, 20, 20); //命运
                cm.teachSkill(4201011, 10, 10); //金钱护盾
                //cm.teachSkill(4210000,10,10);//盾防精通
                cm.teachSkill(4211011, 20, 20); //刀刃之舞
                cm.teachSkill(4210012, 10, 10); //贪婪
                cm.teachSkill(4210013, 20, 20); //永恒黑暗
                cm.teachSkill(4211007, 0, 0); //黑暗杂耍
                cm.teachSkill(4221010, 30, 10); //突然袭击
                cm.teachSkill(4220012, 30, 10); //短刀专家
                cm.teachSkill(4221013, 20, 10); //侠盗本能

                
                //cm.teachSkill(4200007,10,10);//物理训练
                cm.teachSkill(4101008, 20, 20); //爆裂飞镖
                cm.teachSkill(4101009, 10, 10); //二段跳
                cm.teachSkill(4101010, 20, 20); //风之护符
                cm.teachSkill(4110008, 20, 20); //永恒黑暗
                cm.teachSkill(4111007, 0, 0); //黑暗杂耍
                cm.teachSkill(4111009, 10, 10); //暗器伤人
                cm.teachSkill(4111010, 20, 20); //三连环光击破
                cm.teachSkill(4110012, 10, 10); //娴熟飞镖术
                cm.teachSkill(4120012, 30, 30); //暗器专家
                cm.teachSkill(4111013, 20, 20); //影子分裂
                cm.teachSkill(4110014, 10, 10); //药品吸收		
                cm.teachSkill(4121013, 30, 30); //四连镖
                cm.teachSkill(4121014, 30, 30); //黑暗祝福
                cm.teachSkill(4121015, 0, 0); //模糊领域
                cm.teachSkill(4121016, 30, 30); //突然袭击
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() == 509 || cm.getJob() >= 580 && cm.getJob() <= 592) {
                //500
                cm.teachSkill(5090000, 20, 20); //快动作
                cm.teachSkill(5091001, 20, 20); //百裂拳
                cm.teachSkill(5091002, 20, 20); //半月踢
                cm.teachSkill(5091003, 20, 20); //双弹射击
                cm.teachSkill(5091005, 20, 20); //疾驰
                cm.teachSkill(5090006, 20, 20); //幸运一击
                cm.teachSkill(5001005, 10, 10); //疾驰
                cm.teachSkill(5000007, 10, 10); //致命咆哮
                //580
                cm.teachSkill(5800001, 20, 20); //精准拳
                cm.teachSkill(5801006, 20, 20); //急速拳
                cm.teachSkill(5801002, 20, 20); //回马
                cm.teachSkill(5801003, 20, 20); //升龙连击
                cm.teachSkill(5801004, 0, 0); //贯骨击
                cm.teachSkill(5801005, 20, 20); //生命分流
                cm.teachSkill(5801007, 0, 0); //橡木伪装
                cm.teachSkill(5800008, 20, 20); //必杀拳
                cm.teachSkill(5800009, 20, 20); //HP增加
                //590
                cm.teachSkill(5900000, 20, 20); //精准枪
                cm.teachSkill(5900007, 20, 20); //强力弹
                cm.teachSkill(5901001, 20, 20); //快枪手
                cm.teachSkill(5901002, 20, 20); //投弹攻击
                cm.teachSkill(5901003, 20, 20); //速射
                cm.teachSkill(5901004, 20, 20); //迷惑射击
                cm.teachSkill(5901005, 20, 20); //轻羽鞋
                cm.teachSkill(5901006, 20, 20); //激退射杀
                //581
                cm.teachSkill(5810000, 20, 20); //迷惑攻击
                cm.teachSkill(5810001, 20, 20); //能量获得
                cm.teachSkill(5811002, 20, 20); //能量爆破
                cm.teachSkill(5811004, 20, 20); //能量耗转
                cm.teachSkill(5811005, 20, 20); //超人变形
                cm.teachSkill(5811006, 30, 30); //碎石乱击
                cm.teachSkill(5811007, 0, 0); //幸运骰子
                cm.teachSkill(5810008, 20, 20); //近战精通
                //591
                cm.teachSkill(5910000, 20, 20); //三连射杀
                cm.teachSkill(5911001, 0, 0); //章鱼炮台
                cm.teachSkill(5911002, 0, 0); //海鸥空袭
                cm.teachSkill(5911004, 20, 20); //烈焰喷射
                cm.teachSkill(5911005, 20, 20); //寒冰喷射
                cm.teachSkill(5911006, 30, 30); //导航
                cm.teachSkill(5911007, 0, 0); //幸运骰子								
                //582
                cm.teachSkill(5821001, 10, 10); //潜龙出渊
                cm.teachSkill(5821002, 20, 20); //超能量
                cm.teachSkill(5821003, 20, 20); //超级变身
                cm.teachSkill(5821004, 20, 20); //金手指
                cm.teachSkill(5821005, 20, 20); //索命
                cm.teachSkill(5821007, 30, 30); //光速拳
                //cm.teachSkill(5821008,20,20);//勇士的意志
                cm.teachSkill(5821009, 20, 20); //极速领域
                cm.teachSkill(5821010, 20, 20); //伺机待发
                cm.teachSkill(5820011, 20, 20); //反制攻击
                //592
                cm.teachSkill(5920001, 10, 10); //属性强化
                cm.teachSkill(5920002, 20, 20); //超级章鱼炮台
                cm.teachSkill(5920011, 20, 20); //导航辅助
                cm.teachSkill(5920012, 20, 20); //反制攻击
                cm.teachSkill(5921003, 20, 20); //地毯式空袭
                cm.teachSkill(5921004, 20, 20); //金属风暴
                cm.teachSkill(5921006, 20, 20); //武装
                cm.teachSkill(5921007, 20, 20); //急速射
                cm.teachSkill(5921008, 20, 20); //重量炮击
                cm.teachSkill(5921009, 20, 20); //心灵控制
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();

            } else if (cm.getJob() >= 1100 && cm.getJob() <= 1111) {
                cm.teachSkill(11000005, 10, 10); //圣甲术
                cm.teachSkill(11001001, 10, 10); //圣甲术
                cm.teachSkill(11001002, 20, 20); //强力攻击
                cm.teachSkill(11001003, 20, 20); //群体攻击
                cm.teachSkill(11001004, 10, 10); //魂精灵
                cm.teachSkill(11100000, 20, 20); //精准剑
                cm.teachSkill(11101001, 20, 20); //快速剑
                cm.teachSkill(11101002, 30, 30); //终极剑
                cm.teachSkill(11101003, 20, 20); //愤怒之火
                cm.teachSkill(11101004, 30, 30); //灵魂之刃
                cm.teachSkill(11101006, 20, 20); //伤害反射
                cm.teachSkill(11100007, 10, 10); //物理训练
                cm.teachSkill(11101005, 10, 10); //灵魂迅移
                cm.teachSkill(11110000, 20, 20); //魔力恢复
                cm.teachSkill(11111001, 20, 20); //斗气集中
                cm.teachSkill(11111002, 20, 20); //恐慌
                cm.teachSkill(11111003, 20, 20); //昏迷
                cm.teachSkill(11111004, 20, 20); //轻舞飞扬
                cm.teachSkill(11110005, 20, 20); //进阶斗气
                cm.teachSkill(11111006, 20, 20); //灵魂突刺
                cm.teachSkill(11111007, 20, 20); //灵魂属性
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 1200 && cm.getJob() <= 1211) {
                cm.teachSkill(12000005, 10, 10); //魔法盾
                cm.teachSkill(12001001, 15, 15); //魔法盾
                cm.teachSkill(12001002, 15, 15); //魔法铠甲
                cm.teachSkill(12001003, 20, 20); //魔法双击
                cm.teachSkill(12001004, 10, 10); //炎精灵
                cm.teachSkill(12101000, 20, 20); //精神力
                cm.teachSkill(12100007, 20, 20); //精神力
                cm.teachSkill(12101001, 10, 10); //缓速术
                cm.teachSkill(12101002, 30, 30); //火焰箭
                cm.teachSkill(12101003, 20, 20); //快速移动
                cm.teachSkill(12101004, 20, 20); //魔法狂暴
                cm.teachSkill(12101005, 10, 10); //自然力重置
                cm.teachSkill(12101006, 20, 20); //火柱
                cm.teachSkill(12100008, 10, 10); //智慧激发
                cm.teachSkill(12110000, 20, 20); //魔法抗性
                cm.teachSkill(12110001, 20, 20); //魔力激化
                cm.teachSkill(12111002, 20, 20); //封印术
                cm.teachSkill(12111003, 0, 0); //天降落星
                cm.teachSkill(12111004, 20, 20); //火魔兽
                cm.teachSkill(12111005, 20, 20); //火牢术屏障
                cm.teachSkill(12111006, 30, 30); //火风暴
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 1300 && cm.getJob() <= 1311) {
                cm.teachSkill(13000000, 20, 20); //强力箭
                cm.teachSkill(13000001, 15, 15); //远程箭
                //cm.teachSkill(13001002,10,10);//集中术
                cm.teachSkill(13001003, 20, 20); //二连射
                cm.teachSkill(13001004, 10, 10); //风精灵
                cm.teachSkill(13100000, 20, 20); //精准弓
                cm.teachSkill(13101001, 20, 20); //快速箭
                cm.teachSkill(13101002, 20, 20); //终极弓
                cm.teachSkill(13101003, 10, 10); //无形箭
                cm.teachSkill(13101004, 10, 10); //疾风步
                cm.teachSkill(13101005, 20, 20); //暴风射击
                cm.teachSkill(13101006, 10, 10); //风影漫步
                cm.teachSkill(13101007, 20, 20); //风影漫步
                cm.teachSkill(13100008, 10, 10); //物理训练
                cm.teachSkill(13111000, 20, 20); //箭雨
                cm.teachSkill(13111001, 20, 20); //箭扫射
                cm.teachSkill(13111002, 30, 30); //暴风箭雨
                //cm.teachSkill(13110003,20,20);//神箭手
                cm.teachSkill(13111004, 15, 15); //替身术
                cm.teachSkill(13111005, 0, 0); //信天翁
                cm.teachSkill(13111006, 20, 20); //风灵穿越
                cm.teachSkill(13111007, 20, 20); //疾风扫射
                cm.teachSkill(13110008, 10, 10); //闪避
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 1400 && cm.getJob() <= 1411) {
                cm.teachSkill(14000000, 20, 20); //集中术
                cm.teachSkill(14000001, 5, 5); //远程暗器
                cm.teachSkill(14001002, 10, 10); //诅咒术
                cm.teachSkill(14001003, 10, 10); //隐身术
                cm.teachSkill(14001004, 20, 20); //双飞斩
                cm.teachSkill(14001005, 10, 10); //夜精灵
                cm.teachSkill(14001007, 20, 20); //轻功
                cm.teachSkill(14100000, 20, 20); //精准暗器
                cm.teachSkill(14100001, 20, 20); //强力投掷
                cm.teachSkill(14101002, 20, 20); //快速暗器
                cm.teachSkill(14101003, 20, 20); //轻功
                cm.teachSkill(14101004, 20, 20); //二段跳
                cm.teachSkill(14100005, 10, 10); //驱逐
                cm.teachSkill(14101006, 20, 20); //吸血
                cm.teachSkill(14101008, 20, 20); //爆裂飞镖
                cm.teachSkill(14101009, 20, 20); //风之护符
                cm.teachSkill(14100010, 10, 10); //物理训练
                cm.teachSkill(14111000, 0, 0); //影分身
                cm.teachSkill(14111001, 20, 20); //影网术
                cm.teachSkill(14111002, 20, 20); //多重飞镖
                cm.teachSkill(14110003, 20, 20); //药剂精通
                cm.teachSkill(14110004, 20, 20); //武器用毒液
                cm.teachSkill(14111005, 20, 20); //三连环光击破
                cm.teachSkill(14111006, 30, 30); //毒炸弹
                cm.teachSkill(14111007, 10, 10); //暗器伤人
                cm.teachSkill(14111008, 20, 20); //影子分裂
                cm.teachSkill(14110009, 20, 20); //永恒黑暗
                cm.teachSkill(14110011, 10, 10); //药剂吸收
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 1500 && cm.getJob() <= 1511) {
                cm.teachSkill(15000000, 20, 20); //快动作
                cm.teachSkill(15001001, 20, 20); //百裂拳
                cm.teachSkill(15001002, 0, 0); //半月踢
                cm.teachSkill(15001003, 10, 10); //疾驰
                cm.teachSkill(15001004, 10, 10); //雷精灵
                cm.teachSkill(15000006, 10, 10); //致命咆哮
                cm.teachSkill(15000008, 10, 10); //HP增加
                cm.teachSkill(15100001, 20, 20); //精准拳
                cm.teachSkill(15101002, 20, 20); //急速拳
                cm.teachSkill(15101003, 0, 0); //贯骨击
                cm.teachSkill(15100004, 20, 20); //能量获得
                cm.teachSkill(15101005, 20, 20); //能量爆破
                cm.teachSkill(15101006, 20, 20); //雷鸣
                cm.teachSkill(15101008, 20, 20); //静心
                cm.teachSkill(15101010, 30, 30); //龙卷风拳
                cm.teachSkill(15100009, 20, 20); //物理训练
                cm.teachSkill(15110000, 15, 15); //必杀拳
                cm.teachSkill(15110009, 20, 20); //致命狂热
                cm.teachSkill(15110010, 20, 20); //迷惑攻击
                cm.teachSkill(15111001, 20, 20); //能量耗转
                cm.teachSkill(15111002, 20, 20); //超人变形
                cm.teachSkill(15111012, 20, 20); //碎石乱击
                cm.teachSkill(15111004, 20, 20); //光速拳
                cm.teachSkill(15111005, 0, 0); //极速领域
                cm.teachSkill(15111006, 20, 20); //闪光击
                cm.teachSkill(15111007, 30, 30); //鲨鱼波
                cm.teachSkill(15111008, 0, 0); //能量爆炸
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 2100 && cm.getJob() <= 2112) {
                cm.teachSkill(21000000, 10, 10); //矛连击强化
                cm.teachSkill(21001001, 5, 5); //战斗步伐
                cm.teachSkill(21000002, 20, 20); //双重重击
                cm.teachSkill(21001003, 20, 20); //快速矛
                cm.teachSkill(21000004, 10, 10); //斗气爆裂
                cm.teachSkill(21100000, 20, 20); //精准矛
                cm.teachSkill(21100001, 20, 20); //三重重击
                cm.teachSkill(21100002, 20, 20); //战神突进
                cm.teachSkill(21101003, 10, 10); //抗压
                cm.teachSkill(21100005, 20, 20); //连环吸血
                cm.teachSkill(21101006, 20, 20); //冰雪矛
                cm.teachSkill(21100007, 20, 20); //幻影狼牙
                cm.teachSkill(21100008, 10, 10); //物理训练
                cm.teachSkill(21100010, 20, 20); //终极矛
                cm.teachSkill(21110000, 20, 20); //爆击强化
                cm.teachSkill(21111001, 20, 20); //灵巧击退
                cm.teachSkill(21110002, 20, 20); //全力挥击
                cm.teachSkill(21110003, 20, 20); //终极投掷
                cm.teachSkill(21110006, 20, 20); //旋风
                cm.teachSkill(21111009, 20, 20); //斗气重生
                cm.teachSkill(21110010, 20, 20); //分裂攻击
                cm.teachSkill(21110011, 20, 20); //战神之审判
                cm.teachSkill(21111012, 10, 10); //摩诃祝福
                cm.teachSkill(21121000, 30, 30); //冒险岛勇士
                cm.teachSkill(21120001, 30, 30); //攻击策略
                cm.teachSkill(21120002, 30, 30); //战神之舞
                cm.teachSkill(21121003, 30, 30); //战神的意志
                cm.teachSkill(21120004, 30, 30); //防守策略
                cm.teachSkill(21120005, 30, 30); //巨熊咆哮
                cm.teachSkill(21120006, 30, 30); //钻石星辰
                cm.teachSkill(21120007, 30, 30); //战神之盾
                cm.teachSkill(21121008, 5, 5); //勇士的意志
                cm.teachSkill(21120009, 30, 30); //战神之舞 - 双重重击
                cm.teachSkill(21120010, 30, 30); //战神之舞 - 三重重击
                cm.teachSkill(21120011, 10, 10); //迅捷移动
                cm.teachSkill(21120012, 30, 30); //进阶终极攻击
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 2200 && cm.getJob() <= 2218) {
                cm.teachSkill(22000000, 20, 20); //龙魂
                cm.teachSkill(22001001, 20, 20); //魔法导弹
                cm.teachSkill(22101000, 20, 20); //火焰环
                cm.teachSkill(22101001, 20, 20); //快速移动
                cm.teachSkill(22111000, 20, 20); //闪电箭
                cm.teachSkill(22111001, 20, 20); //魔法盾
                cm.teachSkill(22121000, 20, 20); //冰点寒气
                cm.teachSkill(22121001, 10, 10); //自然力重置
                cm.teachSkill(22120002, 10, 10); //咒语精通
                cm.teachSkill(22131000, 20, 20); //魔力闪爆
                cm.teachSkill(22131001, 10, 10); //魔法屏障
                cm.teachSkill(22131002, 10, 10); //缓速术
                cm.teachSkill(22140000, 15, 15); //魔法爆击
                cm.teachSkill(22141001, 20, 20); //龙推力
                cm.teachSkill(22141002, 20, 20); //魔法狂暴
                cm.teachSkill(22141004, 10, 10); //飞龙传动
                cm.teachSkill(22151001, 20, 20); //火焰喷射
                cm.teachSkill(22151002, 10, 10); //魔翼斩杀
                cm.teachSkill(22151003, 10, 10); //抗魔领域
                cm.teachSkill(22150000, 15, 15); //魔力激化
                cm.teachSkill(22160000, 5, 5); //龙的愤怒
                cm.teachSkill(22120001, 10, 10); //智慧激发
                cm.teachSkill(22150004, 10, 10); //飞龙闪
                cm.teachSkill(22161005, 10, 10); //快速移动精通s
                cm.teachSkill(22161001, 20, 20); //地震
                cm.teachSkill(22161002, 10, 10); //鬼刻符
                cm.teachSkill(22161003, 5, 5); //极光恢复
                cm.teachSkill(22161004, 20, 20); //玛瑙的保佑
                cm.teachSkill(22171000, 30, 30); //冒险岛勇士
                cm.teachSkill(22170001, 30, 30); //魔法精通
                cm.teachSkill(22171002, 30, 30); //魔龙分身
                cm.teachSkill(22171003, 30, 30); //火焰轮
                cm.teachSkill(22171004, 5, 5); //勇士的意志
                cm.teachSkill(22181000, 25, 25); //玛瑙的祝福
                cm.teachSkill(22181001, 30, 30); //熊熊烈火
                cm.teachSkill(22181002, 30, 30); //黑暗迷雾
                cm.teachSkill(22181003, 20, 20); //灵魂之石
                cm.teachSkill(22181004, 20, 20); //玛瑙的意志
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            //双弩1转
            } else if (cm.getJob() >= 2300 && cm.getJob() <= 2312 && cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
                cm.teachSkill(20021110, 1, 1); //精灵的祝福
                cm.teachSkill(20020111, 1, 1); //优雅移动
                cm.teachSkill(20020112, 1, 1); //王者资格
                cm.teachSkill(20021160, 1, 1);
                cm.teachSkill(23001000, 20, 20); //快速二连射
                cm.teachSkill(23000001, 15, 15); //潜力激发
                cm.teachSkill(23001002, 20, 20); //杂耍跳
                cm.teachSkill(23000003, 20, 20); //敏锐瞄准
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            //双弩2转
            } else if (cm.getJob() >= 2300 && cm.getJob() <= 2312 && cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 70) {
                cm.teachSkill(23101000, 20, 20);
                cm.teachSkill(23101001, 20, 20);
                cm.teachSkill(23100004, 20, 20);
                cm.teachSkill(23110006, 20, 20);
                cm.teachSkill(23120011, 20, 20);
                cm.teachSkill(23001000, 20, 20);
                cm.teachSkill(23101002, 20, 20);
                cm.teachSkill(23101003, 20, 20);
                cm.teachSkill(23100005, 20, 20);
                cm.teachSkill(23100006, 20, 20);
                cm.teachSkill(23100008, 20, 20);
                cm.teachSkill(23101002, 20, 20);
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            //双弩3转
            } else if (cm.getJob() >= 2300 && cm.getJob() <= 2312 && cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getLevel() < 120) {
                cm.teachSkill(23111000, 20, 20); //急袭双杀
                cm.teachSkill(23111001, 20, 20); //飞叶龙卷风
                cm.teachSkill(23111002, 20, 20); //独角兽之角
                cm.teachSkill(23111003, 20, 20); //狂风俯冲
                cm.teachSkill(23110006, 15, 15); //爆裂飞腿
                cm.teachSkill(23111004, 20, 20); //火焰咆哮
                cm.teachSkill(23111005, 20, 20); //水盾
                cm.teachSkill(23111008, 20, 20); //精灵骑士
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            //双弩4转
            } else if (cm.getJob() >= 2300 && cm.getJob() <= 2312 && cm.getPlayer().getLevel() >= 120) {
                cm.teachSkill(23121000, 30, 30); //伊师塔之环
                cm.teachSkill(23121002, 20, 20); //传说之矛
                cm.teachSkill(23121003, 30, 30); //闪电刀刃
                cm.teachSkill(23120011, 20, 20); //旋转月瀑坠击
                cm.teachSkill(23121004, 30, 30); //古老意志
                cm.teachSkill(23120009, 30, 30); //双弩枪专家
                cm.teachSkill(23120010, 20, 20); //防御突破
                //cm.teachSkill(23120012,30,0);//进阶终极攻击
                cm.teachSkill(23121005, 30, 30); //冒险岛勇士
                cm.teachSkill(23121008, 5, 5); //勇士的意志
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 3200 && cm.getJob() <= 3212) {
                cm.teachSkill(32001000, 20, 20); //三段冲击
                cm.teachSkill(32001001, 10, 10); //惩戒
                cm.teachSkill(32100006, 20, 20)
                cm.teachSkill(32001002, 15, 15); //快速移动
                cm.teachSkill(32001003, 20, 20); //黑暗灵气
                cm.teachSkill(32101000, 20, 20); //四段冲击
                cm.teachSkill(32101001, 20, 20); //黑暗锁链
                cm.teachSkill(32101002, 20, 20); //蓝色灵气
                cm.teachSkill(32101003, 20, 20); //黄色灵气
                cm.teachSkill(32101004, 20, 20); //伤害吸收
                cm.teachSkill(32101005, 20, 20); //快速长杖
                cm.teachSkill(32100007, 10, 10); //智慧激发
                cm.teachSkill(32110001, 20, 20); //战斗精通
                cm.teachSkill(32111002, 20, 20); //死亡冲击
                cm.teachSkill(32111003, 20, 20); //黑暗闪电
                cm.teachSkill(32111004, 10, 10); //转化
                cm.teachSkill(32111005, 0, 0); //霸体
                cm.teachSkill(32111006, 20, 20); //重生
                cm.teachSkill(32111010, 10, 10); //快速移动精通
                cm.teachSkill(32111011, 20, 20); //进阶黑暗连锁
                cm.teachSkill(32111014, 0, 0); //稳如泰山
                cm.teachSkill(32120000, 0, 0); //进阶黑暗灵气
                cm.teachSkill(32120001, 0, 0); //进阶黄色灵气
                cm.teachSkill(32121002, 30, 30); //致命冲击
                cm.teachSkill(32121003, 30, 30); //飓风
                cm.teachSkill(32121004, 30, 30); //黑暗创世
                cm.teachSkill(32121006, 0, 0); //避难所
                cm.teachSkill(32121007, 30, 30); //冒险岛勇士
                //cm.teachSkill(32121008,5,5);//勇士的意志
                cm.teachSkill(32120009, 0, 0); //活力激化
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 3300 && cm.getJob() <= 3312) {
                cm.teachSkill(33001000, 20, 20); //连环三箭
                cm.teachSkill(33001001, 15, 15); //美洲豹骑士
                cm.teachSkill(33001002, 10, 10); //豹二阶跳
                cm.teachSkill(33001003, 20, 20); //快速弩
                cm.teachSkill(33100000, 20, 20); //精准弩
                cm.teachSkill(33101001, 20, 20); //炸裂箭
                cm.teachSkill(33101002, 20, 20); //美洲豹怒吼
                cm.teachSkill(33101003, 10, 10); //无形箭
                cm.teachSkill(33101004, 20, 20); //地雷
                cm.teachSkill(33101005, 10, 10); //吞噬
                cm.teachSkill(33100009, 20, 20); //终极弓弩
                cm.teachSkill(33100010, 10, 10); //物理训练
                cm.teachSkill(33110000, 20, 20); //骑宠精通
                cm.teachSkill(33111001, 30, 30); //狂野射击
                cm.teachSkill(33111002, 30, 30); //十字攻击
                cm.teachSkill(33111003, 20, 20); //野兽陷进
                cm.teachSkill(33111004, 20, 20); //致盲
                cm.teachSkill(33111005, 20, 20); //银鹰
                cm.teachSkill(33111006, 20, 20); //利爪狂风
                cm.teachSkill(33111007, 30, 30); //暴走形态
                cm.teachSkill(33120000, 30, 30); //神弩手
                cm.teachSkill(33121001, 30, 30); //闪光箭雨
                cm.teachSkill(33121002, 30, 30); //音速震波
                cm.teachSkill(33121004, 30, 30); //火眼晶晶
                cm.teachSkill(33121007, 30, 30); //冒险岛勇士
                cm.teachSkill(33121009, 30, 30); //奥义箭乱舞
                cm.teachSkill(33121005, 10, 10); //神经毒气
                cm.teachSkill(33121008, 5, 5); //勇士的意志
                cm.teachSkill(33120010, 10, 10); //野性本能
                cm.teachSkill(33120011, 30, 30); //进阶终极攻击
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 3500 && cm.getJob() <= 3512) {
                cm.teachSkill(35001001, 20, 20); //火焰喷射器
                cm.teachSkill(35001002, 10, 10); //金属机甲
                cm.teachSkill(35001003, 20, 20); //钻臂冲击
                cm.teachSkill(35001004, 15, 15); //机枪扫射
                cm.teachSkill(35100000, 20, 20); //机械精通
                cm.teachSkill(35101003, 20, 20); //原子锤
                cm.teachSkill(35101004, 20, 20); //火箭推进器
                cm.teachSkill(35101005, 10, 10); //传送门
                cm.teachSkill(35101006, 20, 20); //机械加速
                cm.teachSkill(35101007, 20, 20); //完美机甲
                cm.teachSkill(35100008, 20, 20); //精准重武器
                cm.teachSkill(35101009, 20, 20); //强化火焰喷射器
                cm.teachSkill(35101010, 20, 20); //强化机枪扫射
                cm.teachSkill(35111001, 20, 20); //人造卫星
                cm.teachSkill(35111002, 0, 0); //磁场
                cm.teachSkill(35111004, 20, 20); //金属机甲：重机枪
                cm.teachSkill(35111005, 15, 15); //加速器
                cm.teachSkill(35111011, 20, 20); //治疗机器人
                cm.teachSkill(35111013, 20, 20); //幸运骰子
                cm.teachSkill(35110014, 20, 20); //精准机械拳
                cm.teachSkill(35111015, 20, 20); //火箭拳
                cm.teachSkill(35120000, 30, 30); //终极机甲
                cm.teachSkill(35120001, 15, 15); //机器人精通
                cm.teachSkill(35121003, 30, 30); //战争机器：泰坦
                cm.teachSkill(35121005, 30, 30); //金属机甲：导弹战车
                cm.teachSkill(35121006, 25, 25); //卫星防护
                cm.teachSkill(35121007, 30, 30); //冒险岛勇士
                cm.teachSkill(35121008, 5, 5); //勇士的意志
                cm.teachSkill(35121009, 30, 30); //机器人工厂：RM1
                cm.teachSkill(35121010, 20, 20); //放大器
                cm.teachSkill(35121012, 30, 30); //激光爆破
                cm.teachSkill(35121013, 20, 20); //金属机甲：重机枪
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 430 && cm.getJob() <= 434) {
                cm.teachSkill(4001003, 10, 10); //集中术
                cm.teachSkill(4001002, 10, 10); //集中术
                cm.teachSkill(4001011, 10, 10); //闪跃
                cm.teachSkill(4000012, 10, 10); //侧移
                cm.teachSkill(4001013, 10, 10); //快刀斩
                cm.teachSkill(4300000, 20, 20); //精准双刀
                cm.teachSkill(4301003, 20, 20); //暗影轻功
                cm.teachSkill(4301004, 15, 15); //龙卷风
                cm.teachSkill(4311002, 30, 30); //流云斩
                cm.teachSkill(4311003, 20, 20); //双刀风暴
                cm.teachSkill(4311005, 20, 20); //命运
                cm.teachSkill(4310006, 10, 10); //物理训练
                cm.teachSkill(4311009, 10, 10); //快速双刀
                cm.teachSkill(4321002, 5, 5); //闪光弹
                cm.teachSkill(4321004, 20, 20); //悬浮地刺
                cm.teachSkill(4320005, 20, 20); //武器用毒液
                cm.teachSkill(4321006, 20, 20); //暗影飞跃斩
                cm.teachSkill(4330009, 10, 10); //影子闪避
                cm.teachSkill(4311007, 10, 10); //暗影二段跳
                cm.teachSkill(4331000, 20, 20); //血雨腥风
                cm.teachSkill(4330001, 10, 10); //进阶隐身术
                cm.teachSkill(4331002, 30, 30); //镜像分身
                cm.teachSkill(4331003, 20, 20); //死亡猫头鹰
                cm.teachSkill(4331006, 20, 20); //地狱锁链
                cm.teachSkill(4330007, 10, 10); //生命偷取
                cm.teachSkill(4330008, 20, 20); //永恒黑暗
                cm.teachSkill(4341000, 30, 30); //冒险岛勇士
                cm.teachSkill(4340001, 30, 30); //龙卷风
                cm.teachSkill(4341002, 30, 30); //终极斩
                cm.teachSkill(4340010, 10, 10); //锋利
                cm.teachSkill(4341011, 30, 30); //突然袭击
                cm.teachSkill(4341004, 30, 30); //暴怒刀阵
                cm.teachSkill(4341006, 30, 30); //傀儡召唤
                cm.teachSkill(4341007, 30, 30); //荆棘
                cm.teachSkill(4341008, 5, 5); //勇士的意志
                cm.teachSkill(4341009, 30, 30); //幽灵一击
                cm.teachSkill(4340012, 10, 10); //致命毒液
                cm.teachSkill(4340013, 30, 30); //双刀专家
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 2700 && cm.getJob() <= 2712) {//夜光法师
                //夜光1转
                cm.teachSkill(27001002, 5, 5); //光束瞬移
                cm.teachSkill(27000003, 10, 10); //普通魔法防护
                cm.teachSkill(27001004, 10, 10); //魔力延伸
                //夜光2转
                cm.teachSkill(27101100, 20, 20); //
                cm.teachSkill(27101101, 10, 10); //
                cm.teachSkill(27101202, 20, 20); //
                cm.teachSkill(27100003, 20, 20); //
                cm.teachSkill(27101004, 10, 10); //
                cm.teachSkill(27100005, 10, 10); //
                cm.teachSkill(27100006, 5, 5); //
                //夜光3转
                cm.teachSkill(27111100, 20, 20); //
                cm.teachSkill(27111101, 20, 20); //
                cm.teachSkill(27111202, 20, 20); //
                cm.teachSkill(27111303, 20, 20); //
                cm.teachSkill(27111004, 10, 10); //
                cm.teachSkill(27111005, 10, 10); //
                cm.teachSkill(27111006, 20, 20); //
                cm.teachSkill(27110007, 20, 20); //
                //夜光4转
                cm.teachSkill(27121100, 10, 10); //
                cm.teachSkill(27121201, 10, 10); //
                cm.teachSkill(27121202, 10, 10); //
                cm.teachSkill(27121303, 10, 10); //
                cm.teachSkill(27121304, 10, 10); //
                cm.teachSkill(27121005, 10, 10); //
                cm.teachSkill(27121006, 10, 10); //
                cm.teachSkill(27121007, 10, 10); //
                cm.teachSkill(27121008, 10, 10); //
                cm.teachSkill(27121009, 10, 10); //
                cm.teachSkill(27121010, 10, 10); //
                cm.teachSkill(27121211, 10, 10); //
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 501 && cm.getJob() <= 532) {
                cm.teachSkill(5011000, 20, 20); //溅射炮
                cm.teachSkill(5011001, 20, 20); //炮击拳
                cm.teachSkill(5011002, 15, 15); //紧急后撤
                cm.teachSkill(5010003, 10, 10); //升级火炮
                cm.teachSkill(5301000, 20, 20); //强击炮
                cm.teachSkill(5301001, 20, 20); //猴子炸药桶
                cm.teachSkill(5301002, 20, 20); //大炮加速
                cm.teachSkill(5301003, 20, 20); //猴子魔法
                cm.teachSkill(5300005, 20, 20); //精准炮
                cm.teachSkill(5300004, 15, 15); //致命炮火
                cm.teachSkill(5300008, 10, 10); //海盗训练
                cm.teachSkill(5311000, 20, 20); //穿甲炮
                cm.teachSkill(5311001, 20, 20); //猴子超级炸弹
                cm.teachSkill(5311003, 15, 15); //炮击跳跃
                cm.teachSkill(5311002, 20, 20); //猴子冲击波
                cm.teachSkill(5311004, 10, 10); //随机橡木桶
                cm.teachSkill(5311005, 20, 20); //幸运骰子
                cm.teachSkill(5310006, 15, 15); //火炮强化
                cm.teachSkill(5310007, 20, 20); //生命强化
                cm.teachSkill(5310008, 20, 20); //猴子冲击波
                cm.teachSkill(5310009, 15, 15); //反击炮
                cm.teachSkill(5321000, 30, 30); //加农火箭炮
                cm.teachSkill(5321001, 30, 30); //诺特勒斯战舰
                cm.teachSkill(5321003, 15, 15); //磁性船锚
                cm.teachSkill(5321004, 15, 15); //双胞胎猴子支援
                cm.teachSkill(5321005, 30, 30); //冒险岛勇士
                cm.teachSkill(5320007, 5, 5); //双幸运骰子
                cm.teachSkill(5320008, 30, 30); //超级猴子魔法
                cm.teachSkill(5320009, 30, 30); //极限燃烧弹
                cm.teachSkill(5321010, 30, 30); //海盗精神
                cm.teachSkill(5321012, 30, 30); //集中炮击
                cm.sendOk("恭喜您，技能以成功全满了!!");
                cm.dispose();
            } else if (cm.getJob() >= 3001 && cm.getJob() <= 3112) {
                cm.teachSkill(80000001, 1, 1); //恶魔之怒
                cm.teachSkill(30010110, 1, 1); //恶魔跳跃
                cm.teachSkill(30011109, 1, 1); //恶魔之翼
                cm.teachSkill(30010111, 1, 1); //死亡诅咒
                cm.teachSkill(30010112, 1, 1); //恶魔之怒
                cm.teachSkill(30010185, 1, 1); //恶魔之血
                cm.teachSkill(31000004, 10, 1); //恶魔血月斩1次强化
                cm.teachSkill(31001000, 20, 1); //恶魔血月斩1次强化
                cm.teachSkill(31001001, 20, 1); //恶魔血月斩1次强化
                cm.teachSkill(31000002, 20, 1); //恶魔血月斩1次强化
                cm.teachSkill(31000003, 20, 1); //恶魔血月斩1次强化
                //二转
                cm.teachSkill(31100007, 1, 1); //恶魔血月斩1次强化
                cm.teachSkill(31101000, 20, 20); //灵魂吞噬	
                cm.teachSkill(31101001, 20, 20); //黑暗猛攻
                cm.teachSkill(31101002, 15, 15); //恶魔追踪
                cm.teachSkill(31101003, 20, 20); //
                cm.teachSkill(31100004, 20, 20); //
                cm.teachSkill(31101005, 20, 20); //
                cm.teachSkill(31100006, 20, 20); //
                cm.teachSkill(31100005, 20, 20); //
                //三转
                cm.teachSkill(31110010, 1, 1); //恶魔血月斩2次强化
                cm.teachSkill(31111000, 20, 20); //黑暗审判
                cm.teachSkill(31111001, 20, 20); //死亡牵引
                cm.teachSkill(31111003, 20, 20); //血腥渡鸦
                cm.teachSkill(31111005, 20, 20); //恶魔呼吸
                cm.teachSkill(31111004, 20, 20); //黑暗忍耐
                cm.teachSkill(31110006, 15, 15); //邪恶拷问
                cm.teachSkill(31110007, 20, 20); //精神集中
                cm.teachSkill(31110008, 15, 15); //精气防护
                cm.teachSkill(31110009, 5, 5); //极限精气吸收
                //四转
                cm.teachSkill(31120011, 1, 1); //恶魔血月斩最终强化
                cm.teachSkill(31121000, 30, 30); //恶魔爆炸
                cm.teachSkill(31121001, 30, 30); //恶魔冲击波
                cm.teachSkill(31121003, 20, 20); //鬼泣
                cm.teachSkill(31121006, 20, 20); //黑暗束缚
                cm.teachSkill(31121005, 30, 30); //黑暗变形
                cm.teachSkill(31121007, 15, 15); //无限精气
                cm.teachSkill(31121002, 10, 10); //吸血鬼之触
                cm.teachSkill(31121004, 30, 30); //冒险岛勇士
                cm.teachSkill(31120008, 30, 30); //进阶精准武器
                cm.teachSkill(31120009, 30, 30); //皮肤硬化
                cm.sendOk("恭喜您，技能以成功全满了!骑宠技能也加满了哦!");
                cm.dispose();
            } else {
                cm.sendOk("当前职业无法满技能,或你的等级没达到满技能的等级");
                cm.dispose();
            }
        }
    }
}