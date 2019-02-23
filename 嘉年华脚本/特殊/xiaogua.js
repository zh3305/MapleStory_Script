var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1082565/0/0#";  //饼干兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/CharacterEff/1003271/0/0#";  //红色心心
var d = "#fEffect/CharacterEff/1112946/4/1#";  //钻石
var e = "#fEffect/CharacterEff/1082229/0/0#";  //红心
var fbtp = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2490002);
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        var selStr = "　　#d尊敬的[#r #h # #d] 请选择您需挑战的副本\r\n";
        selStr += b + b + b + b + b + b + b + b + b + b + b + "#r#e棉花岛小怪兽#k#n" + b + b + b + b + b + b + b + b + b + b + b;
        selStr += "#b#L0#" + c + "蓝蘑菇王#l#L1#" + c + "黑山老妖#l#L2#" + c + "阴森世界#l#L3#" + c + "格瑞芬#l\r\n";
        selStr += "#b#L4#" + c + "僵蘑菇王#l#L5#" + c + "皮亚努斯#l#L6#" + c + "蝙蝠魔王#l#L7#" + c + "喷火龙#l\r\n";
        selStr += "#b#L40#" + c + "妖魔禅师#l#L41#" + c + "变异蜈蚣#l#L42#" + c + "雪山魔魅#l#L43#" + c + "艾利杰#l\r\n";
        selStr += "#b#L44#" + c + "雪域猫妖#l#L45#" + c + "驮狼雪人#l#L46#" + c + "青山武士#l#L47#" + c + "大海兽#l\r\n\r\n";
      //  selStr += b + b + b + b + b + b + b + b + b + b + b + "#r#e高级模式副本#k#n" + b + b + b + b + b + b + b + b + b + b + b;
      //  selStr += "#d#L8#" + c + "暗黑龙王#l#L9#" + c + "[碧欧拉]#l#L10#" + c + "狮子巨王#l#L11#" + c + "[闹钟]#l\r\n";
     //   selStr += "#d#L12#" + c + "枫之高校#l#L13#" + c + "怪物公园#l#L14#" + c + "艾菲尼亚#l#L15#" + c + "[扎昆]#l\r\n\r\n";
      //  selStr += b + b + b + b + b + b + b + b + b + b + b + "#r#e困难模式副本#k#n" + b + b + b + b + b + b + b + b + b + b + b;
       // selStr += "#e#r#L16#" + c + "品克缤[专属装]#l#L17#" + c + "女皇希纳斯[稀有饰品 140]#l\r\n";
     //   selStr += "#e#r#L18#" + c + "三大副本[稀有]#l#L19#" + c + "三核贝勒德[专属饰品 140]#l\r\n";
       // selStr += "#e#r#L20#" + c + "[进化]暗黑克劳德　★★★★★★「 稀有道具 」#l\r\n";
      // selStr += "#e#r#L21#" + c + "[进化]外星钻机兽　★★★★★★「稀有装 135」#l\r\n";
        //selStr += "#e#r#L22#" + c + "[进化]黑暗神卡里　★★★★★★「稀有装 135」#l\r\n"
       // selStr += "#e#r#L23#" + c + "[普通]邪僧黄金寺院　　★★★★「　 奖品 　」#l\r\n"
       // selStr += "#e#r#L24#" + c + "[普通]英语村的考试　　★★★★「　 奖品 　」#l\r\n"
       // selStr += "#e#r#L22#" + c + "[普通]关卡火力测试　　★★★★「　 奖品 　」#l\r\n"
       // selStr += "#e#r#L25#" + c + "[普通]森林保卫战　　　★★★★「　 奖品 　」#l\r\n\r\n";;
      //  selStr += b + b + b + b + b + b + b + b + b + b + b + "#r#e终极模式副本#k#n" + b + b + b + b + b + b + b + b + b + b + b;
      //  selStr += "#e#r#L26#" + c + "[终极]暴君麦格雷斯　★★★★★★「 终极装 」#l\r\n";
       // selStr += "#e#r#L27#" + c + "[终极]心灵中的梦魇　★★★★★★「 终极装 」#l\r\n";
      //  selStr += "#e#r#L28#" + c + "[终极]家园保卫战　　★★★★★★「 终极装 」#l\r\n";
      //  selStr += "#e#r#L29#" + c + "[终极]航海中的危机　★★★★★★「 终极装 」#l\r\n\r\n";
     //   selStr += b + b + b + b + b + b + b + b + b + b + b + "#r#e虐心模式副本#k#n" + b + b + b + b + b + b + b + b + b + b + b;
       // selStr += "#e#r#L30#" + c + "[虐心] 神话副本 　★★★★★★★「 稀有装 」#l\r\n";
      //  selStr += "#e#r#L31#" + c + "[虐心]深渊进行曲　★★★★★★★「 稀有装 」#l\r\n";
      //  selStr += "#e#r#L32#" + c + "[虐心]废墟的居民　★★★★★★★「 稀有装 」#l\r\n\r\n";
        //selStr += "#e#r#L33#" + c + "[虐心]黑暗神之影　★★★★★★★「 稀有装 」#l\r\n\r\n";
      //  selStr += b + b + b + b + b + b + b + b + b + b + b + "#r#e福利模式副本#k#n" + b + b + b + b + b + b + b + b + b + b + b;
     //   selStr += "#e#g#L34#" + e + "[福利]新版武陵道场　　★★★★　「 超经验 」#l\r\n";
     //   selStr += "#e#g#L35#" + e + "[福利]阿里安特的培训　★★★★　「 超福利 」#l\r\n";
     //   selStr += "#e#g#L36#" + e + "[福利]全民飞机总动员　★★★★　「 超福利 」#l\r\n";
     //   selStr += "#e#g#L37#" + e + "[福利] 西班牙斗牛曲 　★★★★　「 超福利 」#l\r\n";
     //   selStr += "#e#g#L48#" + e + "[福利] 拯救我的公主 　★★★★　「 超福利 」#l\r\n";
     //   selStr += "#e#g#L38#" + e + "[福利]利弗里天空庭院　★★★★　「 超福利 」#l\r\n\r\n";
      //  selStr += b + b + b + b + b + b + b + b + b + b + "#r#e噩梦★冒险极限★#k#n" + b + b + b + b + b + b + b + b + b;
      //  selStr += "#e#r#L39#" + e + "[噩梦]战国时代　★★★★★★★　「 超稀有 」#l\r\n";
        //selStr += "#e#r#L39#" + e + "[噩梦] 起源之塔 ★★★★★★★　「  噩梦  」#l\r\n\r\n" + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b + b;
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0://蓝蘑菇王
                cm.dispose();
                cm.warp(100020301);
                break;
            case 1://黑山老妖
                cm.dispose();
                cm.warp(211041400);
                break;
            case 2://阴森世界
                cm.dispose();
                cm.warp(551030200);
                break;
            case 3://格瑞芬
                cm.dispose();
                cm.warp(240020101);
                break;
            case 4://僵尸蘑菇王
                cm.dispose();
                cm.warp(100020401);
                break;
            case 5://皮亚努斯
                cm.dispose();
                cm.warp(230040420);
                break;
            case 6://蝙蝠魔王
                cm.dispose();
                cm.warp(100020301);
                break;
            case 7://喷火龙
                cm.dispose();
                cm.warp(240020401);
                break;
            case 8://暗黑龙王
                fbtp = 1;
                cm.sendYesNo("\r\n\r\n#e#d　　[ 4　 5 ] 频道 -进阶暗黑龙王\r\n　　[ 2 3 4 ] 频道 -普通暗黑龙王\r\n　　您现在确认想去挑战暗黑龙王吗？");
                break;
            case 9://生化默认 碧欧拉
                fbtp = 6;
                cm.sendYesNo("\r\n\r\n#e#d\t您现在确认想去挑战生化魔人·碧欧拉吗？");
                break;
            case 10://狮子王
                fbtp = 5;
                cm.sendYesNo("\r\n\r\n#e#d\t\t您现在确认想去挑战狮子王城吗？");
                break;
            case 11://闹钟
                fbtp = 2;
                cm.sendYesNo("\r\n\r\n#e#d\t\t您现在确认想去挑战帕普拉图斯吗？");
                break;
            case 12://枫之高校
                fbtp = 8;
                cm.sendOk("\r\n\r\n\r\n#r#e\t\t\t敬请期待");
                status = -1;
                cm.warp(744000000);
                break;
            case 13://怪物公园
                cm.dispose();
                cm.sendOk("\r\n\r\n\r\n#r#e\t\t\t敬请期待");
                //cm.warp(951000000);
                break;
            case 14://艾菲尼亚
                fbtp = 4;
                cm.sendYesNo("\r\n\r\n#e#d\t\t您现在确认想去挑战艾菲尼亚吗？");
                break;
            case 15://扎昆
                fbtp = 3;
                cm.sendYesNo("\r\n\r\n#e#d　　[ 123 ] 频道 - 普通扎昆\r\n　　[ 4与5 ] 频道 - 进阶扎昆\r\n　　您现在确认想去挑战扎昆吗？");
                break;
            case 16://扎昆
                fbtp = 9;
                cm.sendYesNo("\r\n\r\n#e#d　　[ 123 ] 频道 - 普通品克缤\r\n　　[ 4与5 ] 频道 - 进阶品克缤\r\n　　您现在确认想去挑战品克缤吗？");
                break;
            case 17://女皇希纳斯
                fbtp = 10;
                cm.sendYesNo("\r\n\r\n#e#d\t\t您现在确认想去挑战女皇希纳斯吗？");
                break;
            case 18://三大副本
                fbtp = 11;
                cm.sendYesNo("\r\n\r\n#e#d\t\t您现在确认想去挑战遗失的三大副本吗？");
                break;
            case 19://贝勒
                fbtp = 12;
                cm.sendYesNo("\r\n\r\n#e#d\t\t您现在确认想去挑战贝勒德吗？");
                break;
            case 20://暗黑克劳德
                cm.dispose();
                cm.openNpc(9220059);
                break;
            case 21://贝勒
                fbtp = 13;
                cm.sendYesNo("\r\n\r\n#e#d\t\t您现在确认想去挑战外星人钻机兽吗？");
                break;
            case 22://黑暗神卡里
                cm.dispose();
                cm.openNpc(9900003, 102);
                break;
            case 23://黄金寺院
                cm.dispose();
                cm.openNpc(9900003, 101);
                break;
            case 24://英语村
                cm.dispose();
                cm.openNpc(9310057);
                break;
            case 25://森林保卫战
                cm.dispose();
                cm.openNpc(9900003, 109);
                break;
            case 26://暴君·麦格雷斯
                fbtp = 15;
                cm.sendYesNo("\r\n\r\n#e#d　　[ 4 ] 频道 - 暴君·麦格雷斯\r\n　　您现在确认想去挑战暴君·麦格雷斯吗？");
                break;
            case 27://心灵中的梦魇
                cm.dispose();
                cm.openNpc(2490002, 43);
                break;
            case 28://家园保卫战
                cm.dispose();
                cm.openNpc(2490002, 63);
                break;
            case 29://航海中的危机
                cm.dispose();
                cm.warp(865000999, 0);
                break;
            case 30://神话
                cm.dispose();
                cm.warp(262030000);
                break;
            case 31://深渊进行曲
                cm.dispose();
                cm.openNpc(2159362);
                break;
            case 32://废墟居民
                cm.dispose();
                cm.openNpc(9900003, 700);
                break;
            case 33://黑暗神之影
                cm.sendOk("\r\n\r\n\r\n#r#e\t\t\t敬请期待");
                status = -1;
                break;
            case 34://武陵
                cm.dispose();
                cm.warp(925020001);
                break;
            case 35://阿里安特
                cm.dispose();
                cm.openNpc(2101017, 1);
                break;
            case 36:
                cm.worldSpouseMessage(0x20, "[全民飞机大战] ：玩家 " + cm.getChar().getName() + " 进入了机场候机室。");
                cm.dispose();
                cm.warp(540010001, 0);
                break;
            case 37://西班牙斗牛
                cm.dispose();
                cm.warp(866500000, 0);
                break;
            case 38:
                cm.dispose();
                cm.openNpc(9220032);
                break;
            case 39://战国时期
                cm.dispose();
                cm.openNpc(9900004,1012);
                break;
            case 40://妖怪禅师
                cm.dispose();
                cm.warp(250010503);
                break;
            case 41://变异蜈蚣
                cm.dispose();
                cm.warp(251010102);
                break;
            case 42://雪山魔魅
                cm.dispose();
                //cm.warp(211050000);
                cm.sendOk("\r\n\r\n\t\t\t#e#r存在出地图问题 等待修复在开放");
                break;
            case 43://艾莉婕
                cm.dispose();
                cm.warp(200010300);
                break;
            case 44://雪域猫妖
                cm.dispose();
                cm.warp(677000007);
                break;
            case 45://驮狼雪人
                cm.dispose();
                cm.warp(211040101);
                break;
            case 46://青山武士
                cm.dispose();
                cm.warp(251010101);
                break;
            case 47://大海兽
                cm.dispose();
                cm.warp(240040401);
                break;
            case 48://拯救公主
                cm.dispose();
                cm.openNpc(9310114, 2);
                break;
        }
    } else if (status == 2) {
        if (fbtp == 1) {
            cm.warp(240040700);
            cm.dispose();
        } else if (fbtp == 2) {
            cm.warp(220080000);
            cm.dispose();
        } else if (fbtp == 3) {
            cm.warp(211042200);
            cm.dispose();
        } else if (fbtp == 4) {
            cm.warp(300030300);
            cm.dispose();
        } else if (fbtp == 5) {
            cm.warp(211070000);
            cm.dispose();
        } else if (fbtp == 6) {
            cm.dispose();
            cm.openNpc(9120050);
        } else if (fbtp == 7) {
            cm.dispose();
            cm.warp(802000710);
        } else if (fbtp == 9) {
            cm.dispose();
            cm.warp(270050000);
        } else if (fbtp == 10) {
            cm.dispose();
            cm.warp(271040000);
        } else if (fbtp == 11) {
            cm.dispose();
            cm.warp(105200000);
        } else if (fbtp == 12) {
            cm.dispose();
            cm.warp(863000100);
        } else if (fbtp == 13) {
            cm.dispose();
            cm.warp(703020000);
        } else if (fbtp == 15) {
            cm.dispose();
            cm.warp(401072000);
        }
    }
}