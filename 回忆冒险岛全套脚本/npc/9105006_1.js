/* 
	
*/
var status = -1;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;36140
    }
    if (status == 0) {
        cm.sendSimple("如果你有#b#t05150135##k，我可以为你设计一个发型。怎么样？\r\n#b#L0#更换发型(使用闪耀皇家理发券)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [35340,35350,35260,35560,36130,33150,36700,35290,36370,36830,36860,36810,36710,36680,36590,36310,36300,36140,35150,33750,33430,33510,33241,33250,33330, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33970, 33980, 33990];
            } else {
                hair_Colo_new = [37930,38420,37880,38390,38521,38504,34850,31880,38011,38110,38460,38490,38240,38070,37990,37920,37760,37720,37700,37630,37520,37510,37440,37320,34770,34590,31990,31900,34880, 34890, 34900, 34910, 34940, 34950, 34960, 34970, 34980, 34990];
            }
            for (var i = 30000; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("使用皇家理发券，可以随机更换发型。你真的要使用#b#t05150135##k，更换发型吗？");
        }
    } else if (status == 2) {
	    //cm.gainItemPeriod(5150135,1,1);
        if (cm.setRandomAvatar(5150135, hair_Colo_new) == 1) {
            cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
        } else {
            cm.sendOk("必须要有闪耀皇家理发券，我才能为你理发。");
        }
        cm.safeDispose();
    }
}