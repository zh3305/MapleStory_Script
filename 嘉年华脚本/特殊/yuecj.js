status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var Star = "#fEffect/CharacterEff/1112904/2/1#";
/***************************************/
var cost = 40;  //每次消耗的HyPay额度
var itemList = Array(
Array(1003797, 450, 1, 3), //高贵战士头盔 - (无描述)
Array(1003798, 450, 1, 3), //高贵流丹维奇帽 - (无描述)
Array(1003799, 450, 1, 3), //高贵游侠贝雷帽 - (无描述)
Array(1003800, 450, 1, 3), //高贵刺客软帽 - (无描述)
Array(1003801, 450, 1, 3), //高贵流浪者帽 - (无描述)
Array(1042254, 450, 1, 3), //鹰眼战士盔甲 - (无描述)
Array(1042255, 450, 1, 3), //鹰眼丹维奇长袍 - (无描述)
Array(1042256, 450, 1, 3), //鹰眼游侠斗篷 - (无描述)
Array(1042257, 450, 1, 3), //鹰眼刺客衬衣 - (无描述)
Array(1042258, 450, 1, 3), //鹰眼流浪者外衣 - (无描述)
Array(1062165, 450, 1, 3), //魔术师战士短裤 - (无描述)
Array(1062166, 450, 1, 3), //魔术师丹维奇短裤 - (无描述)
Array(1062167, 450, 1, 3), //魔术师游侠短裤 - (无描述)
Array(1062168, 450, 1, 3), //魔术师刺客短裤 - (无描述)
Array(1062169, 450, 1, 3),  //魔术师流浪者短裤 - (无描述)
Array(2432069, 50, 1, 3),
Array(1102481, 50, 1, 3), // 暴君西亚戴斯披风 // (无描述)
Array(1102482, 50, 1, 3), // 暴君赫尔梅斯披风 // (无描述)
Array(1102483, 50, 1, 3), // 暴君凯伦披风 // (无描述)
Array(1102484, 50, 1, 3), // 暴君利卡昂披风 // (无描述)
Array(1102485, 50, 1, 3), // 暴君阿尔泰披风 // (无描述)
Array(1072743, 50, 1, 3), // 暴君西亚戴斯靴 // (无描述)
Array(1072744, 50, 1, 3), // 暴君赫尔梅斯靴 // (无描述)
Array(1072745, 50, 1, 3), // 暴君凯伦靴 // (无描述)
Array(1072746, 50, 1, 3), // 暴君利卡昂靴 // (无描述)
Array(1072747, 50, 1, 3), // 暴君阿尔泰靴 // (无描述)
Array(1132174, 50, 1, 3), // 暴君西亚戴斯腰带 // (无描述)
Array(1132175, 50, 1, 3), // 暴君赫尔梅斯腰带 // (无描述)
Array(1132176, 50, 1, 3), // 暴君凯伦腰带 // (无描述)
Array(1132177, 50, 1, 3),// 暴君利卡昂腰带 // (无描述)
Array(1132178, 50, 1, 3),// 暴君阿尔泰腰带 // (无描述)
/*极真装备*/
Array(1102471, 250, 1, 3), // 赫里希安精锐战士披风 // (无描述)
Array(1102472, 250, 1, 3), // 赫里希安精锐法师披风 // (无描述)
Array(1102473, 250, 1, 3), // 赫里希安精锐弓箭手披风 // (无描述)
Array(1102474, 250, 1, 3), // 赫里希安精锐飞侠披风 // (无描述)
Array(1102475, 250, 1, 3), // 赫里希安精锐海盗披风 // (无描述)
Array(1072732, 250, 1, 3), // 赫里希安精锐战士靴 // (无描述)
Array(1072733, 250, 1, 3), // 赫里希安精锐法师靴 // (无描述)
Array(1072734, 250, 1, 3), // 赫里希安精锐弓箭手靴 // (无描述)
Array(1072735, 250, 1, 3), // 赫里希安精锐飞侠靴 // (无描述)
Array(1072736, 250, 1, 3), // 赫里希安精锐海盗靴 // (无描述)
Array(1132164, 250, 1, 3), // 赫里希安精锐战士腰带 // (无描述)
Array(1132165, 250, 1, 3), // 赫里希安精锐法师腰带 // (无描述)
Array(1132166, 250, 1, 3), // 赫里希安精锐弓箭手腰带 // (无描述)
Array(1132167, 250, 1, 3), // 赫里希安精锐飞侠腰带 // (无描述)
Array(1132168, 250, 1, 3), // 赫里希安精锐海盗腰带 // (无描述)
Array(1102476, 150, 1, 3), // 诺巴西亚戴斯披风 // (无描述)
Array(1102477, 150, 1, 3), // 诺巴赫尔梅斯披风 // (无描述)
Array(1102478, 150, 1, 3), // 诺巴凯伦披风 // (无描述)
Array(1102479, 150, 1, 3), // 诺巴利卡昂披风 // (无描述)
Array(1102455, 150, 1, 3), // 诺巴阿尔泰披风 // (无描述)
Array(1072737, 150, 1, 3), // 诺巴西亚戴斯靴 // (无描述)
Array(1072738, 150, 1, 3), // 诺巴赫尔梅斯靴 // (无描述)
Array(1072739, 150, 1, 3), // 诺巴凯伦靴 // (无描述)
Array(1072740, 150, 1, 3), // 诺巴利卡昂靴 // (无描述)
Array(1072741, 150, 1, 3), // 诺巴阿尔泰靴 // (无描述)
Array(1132169, 150, 1, 3), // 诺巴西亚戴斯腰带 // (无描述)
Array(1132170, 150, 1, 3), // 诺巴赫尔梅斯腰带 // (无描述)
Array(1132171, 150, 1, 3), // 诺巴凯伦腰带 // (无描述)
Array(1132172, 150, 1, 3), // 诺巴利卡昂腰带 // (无描述)
Array(1132173, 150, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
/*160装备*/
Array(1012438, 150, 1, 3)
);

var itemList2 = Array(
Array(1022211, 150, 1, 3),
Array(1032224, 150, 1, 3),
Array(1122269, 150, 1, 3),
Array(1132247, 150, 1, 3),
Array(1152160, 150, 1, 3),
Array(1003976, 150, 1, 3),
Array(1102623, 150, 1, 3),
Array(1082556, 150, 1, 3),
Array(1052669, 150, 1, 3),
Array(1072870, 150, 1, 3),
Array(1212089, 150, 1, 3),
Array(1222084, 150, 1, 3),
Array(1232084, 150, 1, 3),
Array(1242090, 150, 1, 3),
Array(1302297, 150, 1, 3),
Array(1312173, 150, 1, 3),
Array(1322223, 150, 1, 3),
Array(1332247, 150, 1, 3),
Array(1342090, 150, 1, 3),
Array(1362109, 150, 1, 3),
Array(1382231, 150, 1, 3),
Array(1402220, 150, 1, 3),
Array(1412153, 150, 1, 3),
Array(1422158, 150, 1, 3),
Array(1432187, 150, 1, 3),
Array(1432187, 150, 1, 3),
Array(1452226, 150, 1, 3),
Array(1462213, 150, 1, 3),
Array(1472235, 150, 1, 3),
Array(1482189, 150, 1, 3),
Array(1492199, 150, 1, 3),
Array(1522113, 150, 1, 3),
Array(1532118, 150, 1, 3),
/* 150 武器 */
Array(1402196, 250, 1, 3),
Array(1382208, 250, 1, 3),
Array(1372177, 250, 1, 3),
Array(1362090, 250, 1, 3),
Array(1342082, 250, 1, 3),
Array(1332225, 250, 1, 3),
Array(1322203, 250, 1, 3),
Array(1312153, 250, 1, 3),
Array(1302275, 250, 1, 3),
Array(1242061, 250, 1, 3),
Array(1242060, 250, 1, 3),
Array(1232057, 250, 1, 3),
Array(1222058, 250, 1, 3)
);
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            cm.dispose();
        }
        status--;

    }
    if (status == 0) {
        var txt = Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
        txt += "#d想抽奖吗？精品道具入谁家？我这里有150-160不等高级道具\r\n";
        txt += "魔方 卷轴 奇特座椅 限量时装 等新奇道具 [ #r还在等待吗#d ]\r\n\r\n#k";
        txt += "#d[ #r#h ##d ] 玩家余额：#r" + cm.getHyPay(1) + "　#b[ 40余额抽一回 ]\r\n#k";
        txt += "#b#L0#开始抽奖 [ 可抽 #r" + parseInt(cm.getHyPay(1) / cost) + "#b 次 ]\t\t#r☆奖品图鉴如下☆#l#k\r\n\r\n";
        txt += Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
        txt += "#i1003797##i1003798##i1003799##i1003800##i1003801##i1042254##i1042255##i1042256##i1042257##i1042258##i1062165##i1102481##i1102482##i1102483##i1102484##i1102485##i1072743##i1072744##i1072745##i1072746##i1072747##i1222058##i1232057##i1242060##i1242061##i1302275##i1312153##i1322203##i1332225##i1342082##i1362090##i1372177##i1382208##i1402196#";
        cm.sendSimple(txt);
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getRMB(1) < cost) {
                cm.sendOk("你好像没有" + cost + "点余额");
                cm.dispose();
                return;
            }
            var chance = Math.floor(Math.random() * 500);
            var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        for (var i = 0; i < itemList2.length; i++) {
            if (itemList2[i][1] >= chance) {
                finalitem.push(itemList2[i]);
            }
        }
        if (finalitem.length != 0) {
                var item;
                var random = new java.util.Random();
                var finalchance = random.nextInt(finalitem.length);
                var itemId = finalitem[finalchance][0];
                var quantity = finalitem[finalchance][2];
                var notice = finalitem[finalchance][3];
                item = cm.gainGachaponItem(itemId, quantity, "余额抽奖宝箱", notice);
                if (item != -1) {
                    cm.addHyPay(cost);
                    cm.sendOk("你获得了 #b#z" + item + "##k " + quantity + "个。");
                } else {
                    cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
                }
                cm.safeDispose();
            } else {
                cm.sendOk("今天的运气可真差，什么都没有拿到");
                cm.safeDispose();
            }
        }
    }
}
function getRMB() {
	var ret = 0;
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("SELECT rmb FROM accounts WHERE id = ?");
    UpDateData.setInt(1, cm.getPlayer().getAccountID());
	var rs = UpDateData.executeQuery();
	if (rs.next())
	{
		ret = rs.getInt("rmb");
	}
	UpDateData.close();
	return ret;
}

function gainRMB(times) {
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("UPDATE accounts SET rmb = rmb + ? WHERE id = ?");
    UpDateData.setInt(1, times);
    UpDateData.setInt(2, cm.getPlayer().getAccountID());
	UpDateData.executeUpdate();
	UpDateData.close();
}
