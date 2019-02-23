importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.constants);


var status = 0;
var db;
var choose = -1;
var Job = new Array(

new nature("M-Z01", "白狼人猎杀", 999, 8140000, "mob1", 4000054, "贡献 1000 点.", "", ""), 
new nature("L-ZV001", "水灵水灵，蓝色？绿色？", 999, 1210103, "mob2", 4000037, "点卷 5 万点 \r\n贡献 1000 点", "", ""), 
new nature("M-Z02", "龙族捕杀计划！骷髅龙！", 1299, 8190003, "mob3", 4000274, "贡献 1000 点", "", ""), 
new nature("TM-01", "天空巢穴的通告1，清理哈维！", 299, 8140001, "mob4", 4000238, "点卷 2 万点\r\n贡献 500 点", "", ""), 
new nature("TM-02", "天空巢穴的通告2，血腥哈维！", 499, 8140002, "mob5", 4000239, "点卷 2.5 万点\r\n贡献 700 点", "mob4", "TM-01,天空巢穴的通告1，清理哈维！"), 
new nature("TM-03", "天空巢穴的通告3，恶魔绵羊！", 699, 8140111, "mob6", 4000242, "点卷 3 万点\r\n贡献 1000 点", "mob5", "TM-02,天空巢穴的通告2，血腥哈维！"), 
new nature("L-ZV002", "恒心？赏金猎人锻炼<耐性>！", 1999, 9600021, "mob7", 4000404, "贡献 1000 点\r\n#v1032139# 属性:(800).", "mob6", "TM-03,天空巢穴的通告3，恶魔绵羊！"), 
new nature("M-Z03-01", "老虎捕杀计划！小虎！", 399, 9800032, "mob8", 4000170, "贡献 300.", "", ""), 
new nature("M-Z03-02", "老虎捕杀计划！虎精！", 999, 9800034, "mob9", 4000171, "贡献 500.\r\n#v1142153# 属性:(999).", "mob8", "M-Z03-01,老虎捕杀计划！小虎！"), 
new nature("B-01", "[酷兽]僵尸蘑菇王!", 9, 9300426, "mob10", 4000176, "点卷 1 万\r\n贡献 100 点", "", ""), 
new nature("B-02", "[酷兽]火焰龙!", 19, 9600031, "mob11", 4000235, "点卷 2 万\r\n贡献 300 点", "mob10", "", "[酷兽]僵尸蘑菇王!"), 
new nature("B-03", "[酷兽]皮亚奴斯!", 1, 9500363, "mob12", 4000175, "#v1122148# 属性:(1500).\r\n贡献 500 点", "mob11", "[酷兽]火焰龙!")
);


function start() {
    status = -1;
    db = new dataBaseOperate();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            var str = "";
            for (var i = 0; i < Job.length; i++) {
                str += "#L" + i + "##b代号" + Job[i].code + "," + Job[i].name + "#r( " + db.CalculationOfcompletion(Job[i].mobIdSql, Job[i].maxQuanlitys, Job[i].needSqlFirst) + " )#l" + "\r\n";
            }
            cm.sendSimple("#b#e<简单模式>#n#k\r\n我是追杀全冒险岛怪物的赏金猎人，为了钱，我需要你的帮助！" + "#b我有下列任务给你选择，你可以同时进行N个任务，但是部分高级任务需要完成前面的任务才能解锁喔！" + "#r越高级的任务我给你的赏金也会越多！\r\n" +
            //"#b请注意，所有任务都会在每天晚上12点被清空，请抓紧时间！\r\n"+
            "#e<任务列表>#n\r\n" + str + "");
        } else if (status == 1) {
            choose = selection;
            var firstCode = "";
            if (Job[choose].needSqlFirst != "") {
                firstCode += "#d>>前置任务>>  代号" + Job[choose].needSqlFirstCode;
            }
            cm.sendSimple("想要完成该项任务，我需要你去击败#r" + Job[choose].maxQuanlitys + //需要最大怪物数量
            "只" + //怪物单位
            "#o" + Job[choose].mobId + "#" + 　 //怪物名称
            "#k,然后收回怪物宝物#b" + "#z" + Job[choose].mobNeedItem + "# " + //需要怪物掉落物品名称
            Job[choose].maxQuanlitys + "个，Ta的样子是:#v" + Job[choose].mobNeedItem + "# " + //需要最大怪物数量
            "\r\n" + "当前你有:" + "#r" + cm.itemQuantity(Job[choose].mobNeedItem) + "#b个可以上交" + "\r\n" + "#d>>任务进度>>  #e#r" + db.CalculationOfcompletion(Job[choose].mobIdSql, Job[choose].maxQuanlitys, Job[choose].needSqlFirst) + "#n\r\n" + firstCode + "#n\r\n" + "#L0##b交差#l\r\n" + "#L1##r领取赏金#l\r\n" + "#L2##b查看悬赏奖励#l\r\n"

            );
        } else if (status == 2) {
            if (selection < 2) {
                //确定是否有资格
                if (Job[choose].needSqlFirst != "" && db.getMobQuantitys(Job[choose].needSqlFirst) >= 0) {
                    cm.sendOk("抱歉，你需要先完成前置任务:#b\r\n" + Job[choose].needSqlFirstCode);
                    cm.dispose();
                    return;
                }
            }
            if (selection == 0) {
                //上交物品
                if (db.getMobQuantitys(Job[choose].mobIdSql) >= Job[choose].maxQuanlitys) {
                    cm.sendOk("抱歉，该项任务你已经#b#e完成#n#k了，请领取赏金!");
                    cm.dispose();
                    return;
                }
                if (db.getMobQuantitys(Job[choose].mobIdSql) < 0) {
                    cm.sendOk("抱歉，该项任务你已经#b#e完成#n#k了,该项任务不能重复!");
                    cm.dispose();
                    return;
                }
                cm.sendGetText("当前你有:" + "#r" + cm.itemQuantity(Job[choose].mobNeedItem) + "#k个可以上交." + "\r\n" + "请输入个数,当前#d任务进度#k>> #e#r(" + db.CalculationOfcompletion(Job[choose].mobIdSql, Job[choose].maxQuanlitys, Job[choose].needSqlFirst) + ")");
            } else if (selection == 1) {
                //领取赏金
                if (db.getMobQuantitys(Job[choose].mobIdSql) >= Job[choose].maxQuanlitys) {
                    gainReword(choose);
                } else if (db.getMobQuantitys(Job[choose].mobIdSql) < 0) {
                    cm.sendOk("抱歉，该项任务你已经#b#e完成#n#k了,该项任务不能重复!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("现在还不能领取喔！还差那么一点点.");
                }
                cm.dispose();
            } else if (selection == 2) {
                //查看悬赏奖励
                cm.sendOk("#e#b<代号-" + Job[choose].code + ">#n#k \r\n\r\n" + Job[choose].reword + "\r\n\r\n\t\t\t\t");
                cm.dispose();
            }
        } else if (status == 3) {
            var input_num = parseInt(cm.getText());
            if (isNaN(input_num)) {
                cm.sendOk("请输入数字！");
                cm.dispose();
                return;
            }
            if (cm.haveItem(Job[choose].mobNeedItem, input_num)) {
                cm.gainItem(Job[choose].mobNeedItem, -input_num);
                db.gainMobQuantitys(Job[choose].mobIdSql, input_num);
                cm.sendOk("上交成功！请继续努力！");
            } else {
                cm.sendOk("输入错误！");
            }
            cm.dispose();
        }

    } //mode
} //function

function nature(code, name, mq, mobid, sql, item, wd, nd, ndcd) {
    this.code = code;
    this.name = name;
    this.maxQuanlitys = mq;
    this.mobId = mobid;
    this.mobIdSql = sql;
    this.mobNeedItem = item;
    this.reword = wd;
    //需要前提任务
    this.needSqlFirst = nd;
    //需要前提任务code
    this.needSqlFirstCode = ndcd;
}

function gainReword(choose) {
    /*
		player.GainMoney(-骑宠技能[choice][2]); 
		cm.gainNX(购买点卷[choice][1]);
		giveItem(id,shuxing,txt)
		cm.gainItem();
		cm.getPlayer().setDojoPoints(cm.getPlayer().getDojoPoints() -cost);
	*/
    switch (choose) {
    case 0:
        cm.addMaplewing("maple", 100);
        break;
    case 1:
        cm.gainNX(50000);
        cm.addMaplewing("maple", 100);
        break;
    case 2:
        cm.addMaplewing("maple", 100);
        break;
    case 3:
        cm.gainNX(20000);
        var add = 500;
        cm.addMaplewing("maple", 100+add);
        break;
    case 4:
        cm.gainNX(25000);
        var add = 700;
        cm.addMaplewing("maple", 100+add);
        break;
    case 5:
        cm.gainNX(30000);
        var add = 1000;
        cm.addMaplewing("maple", 100+add);
        break;
    case 6:
        giveItem(1032139, 2000, "从赏金猎人“耐性”锻炼中得到！");
        var add = 1000;
        cm.addMaplewing("maple", 100+add);
        break;
    case 7:
        var add = 300;
        cm.addMaplewing("maple", 100+add);
        break;
    case 8:
        giveItem(1142153, 999, "从赏金猎人“老虎捕杀计划！虎精！”锻炼中得到！");
        var add = 500;
        cm.addMaplewing("maple", 100+add);
        break;
    case 9:
        cm.gainNX(10000);
        var add = 100;
        cm.addMaplewing("maple", 100+add);
        break;
    case 10:
        cm.gainNX(20000);
        var add = 300;
        cm.addMaplewing("maple", 100+add);
        break;
    case 11:
        giveItem(1122148, 1500, "从赏金猎人“[酷兽]皮亚奴斯!”锻炼中得到！");
        var add = 500;
        cm.addMaplewing("maple", 100+add);
        break;
    default:
        break;
    }
    db.gainMobQuantitys(Job[choose].mobIdSql, -(db.getMobQuantitys(Job[choose].mobIdSql) + 1));
    cm.sendOk("恭喜你完成了任务，获得了奖励！");
    cm.getC().getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(0x13, cm.getC().getChannel(), "[赏金任务]" + " : " + "恭喜\"" + cm.getChar().getName() + "\"完成了代号:" + Job[choose].code + "<" + Job[choose].name + ">任务！"));
}

function giveItem(id, shuxing, txt) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = GameConstants.getInventoryType(id);
    var toDrop = ii.randomizeStats(ii.getEquipById(id)).copy(); // 生成一个Equip类
    //toDrop.setLocked(1);
    toDrop.setLevel(0);
    toDrop.setStr(shuxing);
    toDrop.setDex(shuxing);
    toDrop.setInt(shuxing);
    toDrop.setLuk(shuxing);
    toDrop.setHp(shuxing);
    toDrop.setMp(shuxing);
    toDrop.setMatk(shuxing);
    toDrop.setWatk(shuxing);
    cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
    cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //刷新背
    cm.getC().getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(0x13, cm.getC().getChannel(), "『赏金任务』" + " : " + "恭喜" + cm.getChar().getName() + ",完成赏金任务获得奖励."));
}

var dataBaseOperate = function() {
    this.db = Packages.database.DatabaseConnection.getConnection();
    /* 获取值*/
    this.getMobQuantitys = function(mobid) {
        var ps = this.db.prepareStatement("SELECT * FROM kill_mob WHERE character_id = ?");
        ps.setInt(1, cm.getPlayer().getId());
        var rs = ps.executeQuery();
        if (!rs.next()) {
            this.addNewCharacter(); //增加新数据
            return 0;
        }
        var quantitys = rs.getInt(mobid);
        rs.close();
        ps.close();
        return quantitys;
    }
    /* 创建新数据*/
    this.addNewCharacter = function() {
        var ps = this.db.prepareStatement("INSERT INTO kill_mob (character_id) VALUES (?)");
        ps.setInt(1, cm.getPlayer().getId());
        ps.executeUpdate();
        ps.close();
    }
    /* 增加怪物数量*/
    this.gainMobQuantitys = function(mobid, quantity) {
        var ps = this.db.prepareStatement("UPDATE kill_mob SET " + mobid + " = ? WHERE character_id = ?");
        ps.setInt(1, this.getMobQuantitys(mobid) + quantity);
        ps.setInt(2, cm.getPlayer().getId());
        ps.executeUpdate();
        ps.close();
    }
    /* 完成情况计算*/
    this.CalculationOfcompletion = function(mobid, max, needSqlFirst) {
        if (needSqlFirst != "" && this.getMobQuantitys(needSqlFirst) >= 0) {
            return "#k!前置任务#r";
        }
        if (this.getMobQuantitys(mobid) >= max) {
            return "#d领赏金#r";
        } else if (this.getMobQuantitys(mobid) < 0) {
            return "已完成";
        } else if (this.getMobQuantitys(mobid) == 0) {
            return "可开始";
        } else {
            return this.getMobQuantitys(mobid) + " / " + max;
        }
    }

}