var status = 0;
var choice;
var scrolls = Array(
Array("", 1322000, 0),
Array("", 1322001, 0),
Array("", 1322002, 0),
Array("", 1322003, 0),
Array("", 1322004, 0),
Array("", 1322005, 0),
Array("", 1322006, 0),
Array("", 1322007, 0),
Array("", 1322008, 0),
Array("", 1322009, 0),
Array("", 1322010, 0),
Array("", 1322011, 0),
Array("", 1322012, 0),
Array("", 1322013, 0),
Array("", 1322014, 0),
Array("", 1322015, 0),
Array("", 1322016, 0),
Array("", 1322017, 0),
Array("", 1322018, 0),
Array("", 1322019, 0),
Array("", 1322020, 0),
Array("", 1322021, 0),
Array("", 1322022, 0),
Array("", 1322023, 0),
Array("", 1322024, 0),
Array("", 1322025, 0),
Array("", 1322026, 0),
Array("", 1322027, 0),
Array("", 1322028, 0),
Array("", 1322029, 0),
Array("", 1322031, 0),
Array("", 1322032, 0),
Array("", 1322033, 0),
Array("", 1322034, 0),
Array("", 1322035, 0),
Array("", 1322036, 0),
Array("", 1322037, 0),
Array("", 1322038, 0),
Array("", 1322039, 0),
Array("", 1322040, 0),
Array("", 1322041, 0),
Array("", 1322042, 0),
Array("", 1322043, 0),
Array("", 1322044, 0),
Array("", 1322045, 0),
Array("", 1322046, 0),
Array("", 1322047, 0),
Array("", 1322048, 0),
Array("", 1322049, 0),
Array("", 1322050, 0),
Array("", 1322051, 0),
Array("", 1322052, 0),
Array("", 1322053, 0),
Array("", 1322054, 0),
Array("", 1322055, 0),
Array("", 1322056, 0),
Array("", 1322057, 0),
Array("", 1322058, 0),
Array("", 1322060, 0),
Array("", 1322061, 0),
Array("", 1322062, 0),
Array("", 1322065, 0),
Array("", 1322066, 0),
Array("", 1322067, 0),
Array("", 1322068, 0),
Array("", 1322069, 0),
Array("", 1322071, 0),
Array("", 1322073, 0),
Array("", 1322074, 0),
Array("", 1322076, 0),
Array("", 1322077, 0),
Array("", 1322080, 0),
Array("", 1322083, 0),
Array("", 1322084, 0),
Array("", 1322085, 0),
Array("", 1322086, 0),
Array("", 1322087, 0),
Array("", 1322088, 0),
Array("", 1322089, 0),
Array("", 1322090, 0),
Array("", 1322091, 0),
Array("", 1322095, 0),
Array("", 1322096, 0),
Array("", 1322097, 0),
Array("", 1322099, 0),
Array("", 1322100, 0),
Array("", 1322101, 0),
Array("", 1322102, 0),
Array("", 1322105, 0),
Array("", 1322106, 0),
Array("", 1322107, 0),
Array("", 1322108, 0),
Array("", 1322109, 0),
Array("", 1322110, 0),
Array("", 1322111, 0),
Array("", 1322112, 0),
Array("", 1322113, 0),
Array("", 1322114, 0),
Array("", 1322115, 0),
Array("", 1322116, 0),
Array("", 1322117, 0),
Array("", 1322118, 0),
Array("", 1322119, 0),
Array("", 1322120, 0),
Array("", 1322121, 0),
Array("", 1322122, 0),
Array("", 1322123, 0),
Array("", 1322124, 0),
Array("", 1322125, 0),
Array("", 1322126, 0),
Array("", 1322127, 0),
Array("", 1322128, 0),
Array("", 1322129, 0),
Array("", 1322130, 0),
Array("", 1322131, 0),
Array("", 1322132, 0),
Array("", 1322133, 0),
Array("", 1322134, 0),
Array("", 1322135, 0),
Array("", 1322136, 0),
Array("", 1322137, 0),
Array("", 1322138, 0),
Array("", 1322139, 0),
Array("", 1322141, 0),
Array("", 1322142, 0),
Array("", 1322143, 0),
Array("", 1322144, 0),
Array("", 1322145, 0),
Array("", 1322146, 0),
Array("", 1322150, 0),
Array("", 1322151, 0),
Array("", 1322153, 0),
Array("", 1322154, 0),
Array("", 1322155, 0),
Array("", 1322156, 0),
Array("", 1322157, 0),
Array("", 1322158, 0),
Array("", 1322159, 0),
Array("", 1322160, 0),
Array("", 1322161, 0),
Array("", 1322162, 0),
Array("", 1322163, 0),
Array("", 1322165, 0),
Array("", 1322166, 0),
Array("", 1322181, 0),
Array("", 1322182, 0),
Array("", 1322183, 0),
Array("", 1322184, 0),
Array("", 1332000, 0),
Array("", 1332001, 0),
Array("", 1332002, 0),
Array("", 1332003, 0),
Array("", 1332004, 0),
Array("", 1332005, 0),
Array("", 1332006, 0),
Array("", 1332007, 0),
Array("", 1332008, 0),
Array("", 1332009, 0),
Array("", 1332010, 0),
Array("", 1332011, 0),
Array("", 1332012, 0),
Array("", 1332013, 0),
Array("", 1332014, 0),
Array("", 1332015, 0),
Array("", 1332016, 0),
Array("", 1332017, 0),
Array("", 1332018, 0),
Array("", 1332019, 0),
Array("", 1332020, 0),
Array("", 1332021, 0),
Array("", 1332022, 0),
Array("", 1332023, 0),
Array("", 1332024, 0),
Array("", 1332025, 0),
Array("", 1332026, 0),
Array("", 1332027, 0),
Array("", 1332028, 0),
Array("", 1332029, 0),
Array("", 1332030, 0),
Array("", 1332031, 0),
Array("", 1332032, 0),
Array("", 1332033, 0),
Array("", 1332034, 0),
Array("", 1332035, 0),
Array("", 1332036, 0),
Array("", 1332037, 0),
Array("", 1332038, 0),
Array("", 1332039, 0)
);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n兔兔币余额：#r" + cm.getHyPay(1) + "#k个 (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d兔兔币#k#l";
            }
            cm.sendSimpleS("欢迎来到单手钝器,短刀店,你想买我们商店的物品么?请选择吧：." + choices,2);
        } else if (status == 1) {
            cm.sendYesNo("你确定需要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
		choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("抱歉，你没足够的兔兔币！");
                cm.dispose();
            } else {
                cm.addHyPay(money);
                cm.gainItem(scrolls[choice][1], 1);
                cm.sendOk("购买成功.");
                cm.dispose();
            }
        }
    }
}