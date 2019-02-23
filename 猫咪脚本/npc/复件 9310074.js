/*
 笔芯制作★风云工作室所有
 完成时间：2013年8月22日 15:18:33
 更新时间：2014年8月7日 16:23:21
 脚本功能：拍卖系统
 后期可增加一个 玩家加价时候的留言 之后存在数据库

BUG:  
     如果一个人重复出价，前面的出价价格 回不来，如果竞拍失败的时候 只能返还最后一次出价的金额，竞拍成功的话也不能领取前面轻拍的价格。
 */
;


//
//   时间控制部分
var time = new Date();
var day = time.getDay();
switch (day) {
    case 0:
        var d = "星期日";
        break;
    case 1:
        var d = "星期一";
        break;
    case 2:
        var d = "星期二";
        break;
    case 3:
        var d = "星期三";
        break;
    case 4:
        var d = "星期四";
        break;
    case 5:
        var d = "星期五";
        break;
    case 6:
        var d = "星期六";
        break;
    default:
}
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
if (hour > 12) {
    hour -= 12;
    var apm = "下午";
} else {
    var apm = "上午";
}
if (hour < 10) {
    hour = "0" + hour;
}
if (min < 10) {
    min = "0" + min;
}
if (sec < 10) {
    sec = "0" + sec;
}
//时间控制部分结束




var a = 0;
var meso;
var Char;
var BuyType = 0;
var PaiMaiIdOnly;
//0 冒险币
//1 点券
//2 自定币 暂无
var pass = true;
var MaxPrice = 0
var CharStatus;
var itemid;

/*
 Status:
 -1 默认
 0  进行中
 1  是最大的角色
 2  竞拍失败，等待领回物品
 3  竞拍成功。
 */
//领取部分的变量
var PaiMaiIdOnlyArray = Array();
var boughtArray = Array();
var ItemArray = Array();
var member = Array();
var Allmember = Array();
var insertItem = Array();
var insertItemAll = Array();
var ItemDataBase;
var linkItem;
var toDrop;


function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    ItemDataBase = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM PaiMaiNpc WHERE Bought = 0 LIMIT 1").executeQuery(); //查询拍卖数据库  未拍卖成功的道具都显示
    var insert = DatabaseConnection.getConnection().prepareStatement("INSERT INTO PaiMaiNpcRecord(id,PaiMaiId,CharName,Price,PriceType,Status,Date,CharId) VALUES(?,?,?,?,?,?,?,?)"); // 载入数据
    var Record = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM PaiMaiNpcRecord").executeQuery();
    var RecordMax = DatabaseConnection.getConnection().prepareStatement("select PaiMaiId,CharName,Price,status from PaiMaiNpcRecord where Price=(select max(Price) from PaiMaiNpcRecord)").executeQuery(); //取最大
    // var UpDateData = cm.getDataSelectFromDB("update PaiMaiNpc set Bought=? where Bought=0 LIMIT 1")
// - 附加功能（领取拍卖成功的道具之类的变量）
    var ItemDataHistory = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM PaiMaiNpc WHERE Bought = 1").executeQuery(); //查询历史拍卖记录
    var ItemDataHistory2 = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM PaiMaiNpc").executeQuery(); //查询历史拍卖记录
    var insertPaiMai = DatabaseConnection.getConnection().prepareStatement("INSERT INTO PaiMaiNpc(PaiMaiId,Bought,itemid,itemName,upgradeslots,level,str,dex,int,luk,hp,mp,watk,matk,wdef,mdef,acc,avoid,hands,speed,jump,locked,vicious,jd_level,jd_xlevel,jd_times,jd_v1,jd_v2,jd_v3,ItemLevel,ItemExp,ItemSkill,Durability,pvpWatk,hpR,mpR) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"); // 载入数据
    
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var text = "欢迎来到拍卖商店。\r\n在这里你可以用竞拍的方式获得一些独特的道具！#b\r\n\r\n"
            text += "#L0# 查看介绍。\r\n"
            text += "#r#L1# 我想查看今天拍卖的道具。\r\n#b"
            text += "#L2# 查看历史拍卖。\r\n"
            text += "#L3# 查看我的拍卖记录。\r\n"
            text += "#L4# 领取加价时保存的金币&点券。\r\n"
            text += "#L5# 领取拍卖成功道具。\r\n"
            // if (cm.getChar().isGM()) {// 只有管理员才有此选项（后台设置）
            //    text += "#L99##r [管理员系统操作] 后台设置。"
            // }
            cm.sendSimple(text)
        } else if (a == 1) {
            if (selection == 0) {//查看介绍。
                a = -1;
                cm.sendNext("#e<拍卖商店介绍>#n#d\r\n\r\n - 拍卖道具中，加价价格最高者可以获得竞拍的道具。\r\n - 竞拍成功后，必须等到系统刷新时间后才能到拍卖NPC领取竞拍的道具。\r\n - 参与加价的角色必须先提交自定的竞拍价格到NPC。\r\n - 竞拍失败的岛民，可在系统刷新后，到拍卖NPC领回游戏币或者点券。\r\n - 系统刷新时间为每日的0点。")
            } else if (selection == 1) {//我想查看今天拍卖的道具。
                var i = 0;
                var string = "#e<今日拍卖的道具是>：#n#d\r\n\r\n加价成功时，必须将竞拍的价格提交到拍卖系统保管。#b\r\n#L0# #e我要加价下面的这个道具！#l#n\r\n\r\n\r\n#b"
                while (ItemDataBase.next()) {
                    PaiMaiIdOnly = ItemDataBase.getString("PaiMaiId");
                    string += "#i" + ItemDataBase.getString("itemid") + "#   #t" + ItemDataBase.getString("itemid") + "#\r\n\r\n";
                    for (var i = 0; i < 16; i++) {
                        string += "#d" + getEquipStatInfomation(i) + "\r\n"
                    }
                    i++;
                }
                var x = 0;
                while (RecordMax.next()) {//得到最高价格
                    if (RecordMax.getString("PaiMaiId") == PaiMaiIdOnly) {
                        MaxPrice = RecordMax.getString("Price");
                    }
                    x++;
                }
                if (x == 0) {
                    insert.setString(1, null); //载入记录ID
                    insert.setString(2, PaiMaiIdOnly); //载入拍卖ID
                    insert.setString(3, "防止报错"); //载入名字  如果是数字 就证明是系统加的 防止报错
                    insert.setString(4, 0); //载入加价的价格
                    insert.setString(5, BuyType);
                    insert.setString(6, 0); //正在进行
                    insert.setString(7, "" + year + "-" + month + "-" + date + "  " + d + " " + apm + "" + hour + ":" + min + ":" + sec + "");
                    insert.setString(8, 0); //载入ID
                    insert.executeUpdate(); //更新
                }
                if (i != 0) {
                    cm.sendSimple(string); //显示拍卖的道具。
                } else {
                    cm.sendOk("对不起，现在暂时没有拍卖的道具。");
                    cm.dispose();
                }
            } else if (selection == 2) {//查看历史拍卖
                var i = 0;
                var text = "目前" + cm.getServerName() + "一共开放了拍卖：\r\n\r\n#b"
                while (ItemDataHistory2.next()) {// 得到历史拍卖道具讯息
                    if (ItemDataHistory2.getString("Bought") > 2) {
                        text += "第" + ItemDataHistory2.getString("paimaiid") + "期\r\n道具名称：#i" + ItemDataHistory2.getString("itemid") + "#  #t" + ItemDataHistory2.getString("itemid") + "# \r\n=======================================\r\n\r\n"
                    }
                }
                cm.sendOk(text)
                cm.dispose();
            } else if (selection == 3) {//查看我的拍卖记录
                var text = "下列是我的拍卖记录：\r\n#b"
                var i = 0;
                var Pricetype;
                while (Record.next()) {//得到记录数据
                    if (Record.getString("CharName") == cm.getPlayer().getName()) {
                        if (Record.getString("PriceType") == 0) {
                            Pricetype = "金币"
                        } else {
                            Pricetype = "点券"
                        }
                        text += "第" + Record.getString("paimaiid") + "期\r\n出价：" + Record.getString("Price") + "\r\n出价类型：" + Pricetype + "\r\n最后出价时间：" + Record.getString("Date") + "\r\n==================================\r\n"
                        i++;
                    }
                }
                if (i == 0) {
                    cm.sendOk("暂时没有您的拍卖记录。")
                } else {
                    cm.sendNextS(text, 3)
                }
                cm.dispose();
            } else if (selection == 4) {//领取加价时保存的金币&点券。
                var i = 0;
                while (Record.next()) {//得到记录数据
                    if (Record.getString("Status") == 0 && Record.getString("CharName") == cm.getPlayer().getName()) {//如果自己拍卖正在进行
                        member.push(Record.getString("paimaiid"))//载入玩家附合领取的拍卖ID
                        member.push(Record.getString("price"))//载入玩家的价格
                        member.push(Record.getString("PriceType"))//载入玩家的价格类型 0 金币 1点券
                        member.push(Record.getString("CharName"))//载入玩家名字
                        member.push(Record.getString("Status"))//载入玩家拍卖状态
                        Allmember.push(member);
                        i++;
                    }
                }
                var BoughtData;
                for (var i = 0; i < Allmember.length; i++) {
                    BoughtData = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM PaiMaiNpc WHERE paimaiid = " + Allmember[i][0] + "").executeQuery();
                    while (BoughtData.next()) {
                        if (BoughtData.getString("bought") != 0) {
                            boughtArray.push(true)
                        } else {
                            boughtArray.push(false)
                        }
                    }
                }
                var text = "您可以领回的物品有:\r\n#b"
                for (var i = 0; i < Allmember.length; i++) {
                    if (Allmember[i][2] == 0) {//如果是金币
                        text += "#L" + i + "# #r[拍卖第" + Allmember[i][0] + "期]#b   " + Allmember[i][1] + "[金币]";
                    } else if (Allmember[i][2] == 1) {
                        text += "#L" + i + "# #r[拍卖第" + Allmember[i][0] + "期]#b   " + Allmember[i][1] + "[点券]";
                    }
                }
                while (RecordMax.next()) {//得到最高价格
                    if (RecordMax.getString("PaiMaiId") == PaiMaiIdOnly) {
                        MaxPrice = RecordMax.getString("Price");
                    }
                    x++;
                }
                if (i == 0) {
                    cm.sendOk("对不起,拍卖数据中没有符合您领取的道具.")
                    cm.dispose();
                } else {
                    a = 5;
                    cm.sendSimple(text);
                }
            } else if (selection == 5) {//领取拍卖成功的道具
                while (Record.next()) {///获取最大的拍卖ID 
                    if (Record.getString("Status") == 1 && Record.getString("CharName") == cm.getPlayer().getName()) {
                        PaiMaiIdOnlyArray.push(Record.getString("PaiMaiId"));
                    }
                }//得到可以领取的数据
                var text = "目前你可以领取的道具有：\r\n#b"
                var i = 0
                while (ItemDataHistory.next()) {// 得到可领取的道具ID
                    if (ItemDataHistory.getString("PaiMaiId") == PaiMaiIdOnlyArray[i]) {
                        ItemArray.push(ItemDataHistory.getString("itemid")); //存入数组 方便运算
                        i++;
                    }
                }
                for (var i = 0; i < ItemArray.length; i++) {//格式输出
                    member.push(PaiMaiIdOnlyArray[i])
                    member.push(ItemArray[i])
                    Allmember.push(member)//2维数组
                    text += "#L" + Allmember[i][1] + "#  第" + Allmember[i][0] + "期  #t" + Allmember[i][1] + "#\r\n"
                }
                if (i == 0 || PaiMaiIdOnlyArray.length == 0) {
                    cm.sendOk("对不起，目前没有您可以领取的道具。");
                    cm.dispose();
                } else {
                    a = 4;
                    cm.sendSimple(text);
                }
            } else if (selection == 99) {//管理员后台
                a = 99;
                cm.sendSimple("亲爱的管理员，请问你想做什么？\r\n#b#L0# 我想添加拍卖数据。\r\n#L2# 查看拍卖记录(可查看该期玩家竞拍记录)。")
            }
        } else if (a == 2) {//竞价部分开始
             while (RecordMax.next()) {//得到最高价格
                    if (RecordMax.getString("PaiMaiId") == PaiMaiIdOnly) {
                        MaxPrice = RecordMax.getString("Price");
                    }
                }
            cm.sendGetNumber("请输入你要加价的价格：\r\n < 目前的拍卖价格为：" + MaxPrice + " > \r\n 您必须大于" + MaxPrice + "", MaxPrice, MaxPrice, 2100000000)
        } else if (a == 3) {
            meso = selection;
            if (meso == 0) {
                cm.sendOk("0以上的数字可以输入。")
                cm.dispose();
            } else {
                cm.sendNext("现在要为此道具加价：#b" + selection + "#k金币吗？\r\n#r - 加价成功后，您的金币将会被扣除。\r\n如果您上次有加价，本次加价的价格为：本次投注-上次投注。")
            }
        } else if (a == 4) {
            var MineLastPrice=0;
            var PaimaiMinePrice = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM paimainpcrecord WHERE paimaiid = "+PaiMaiIdOnly+"").executeQuery(); 
            while (PaimaiMinePrice.next()) {
                if(PaimaiMinePrice.getString("CharName") ==  cm.getPlayer().getName()){
                    MineLastPrice = PaimaiMinePrice.getString("Price");
                }
            }
            if (cm.getMeso() < meso-MineLastPrice) {
                cm.sendOk("你确定你的金币足够此次加价的价格？")
            } else {
                while (Record.next()) {
                    if (Record.getString("Price") >= (meso-MineLastPrice) && PaiMaiIdOnly == Record.getString("PaiMaiId")) {
                        pass = false;
                    }
                    i++;
                }
                if (pass) {
                    cm.gainMeso(-(meso-MineLastPrice));
                    var delectData;
                    delectData = DatabaseConnection.getConnection().prepareStatement("delete from paimainpcrecord where CharId = " + cm.getPlayer().getId() + " and paimaiid = " + PaiMaiIdOnly + "")
                    delectData.executeUpdate(); //每一次都删除掉前面
                    insert.setString(1, null); //载入记录ID
                    insert.setString(2, PaiMaiIdOnly); //载入拍卖ID
                    insert.setString(3, cm.getPlayer().getName()); //载入名字
                    insert.setString(4, meso); //载入加价的价格
                    insert.setString(5, BuyType);
                    insert.setString(6, 0); //正在进行
                    insert.setString(7, "" + year + "-" + month + "-" + date + "- " + d + " " + apm + "" + hour + ":" + min + ":" + sec + "");
                    insert.setString(8, cm.getPlayer().getId()); //载入ID
                    insert.executeUpdate(); //更新
                    ////cm.sendY("delete from paimainpcrecord where CharId = " + cm.getPlayer().getId() + " and paimaiid = " + PaiMaiIdOnly + "")
                    cm.sendOk("加价成功，系统已经将您的竞拍资料录入数据中。\r\n每日的0点，拍卖系统都会刷新。如果那时您的竞拍价格仍是最高，你就竞拍成功啦！")
                } else {
                    cm.sendOk("对不起，加价的价格不能比前面加价的低。")
                }
            }
            cm.dispose();
        } else if (a == 5) {//领取竞拍成功道具部分
            var ii = cm.getItemInfo();
            toDrop = ii.randomizeStats(ii.getEquipById(selection)).copy(); // 生成一个Equip类(生成这个装备)
            if (cm.getSpace(1) < 1) { //判断装备栏是否有空格
                cm.sendOk("请确认你的装备栏是否有空格.你当前装备只有" + cm.getSpace(1) + "个空格!");
                cm.dispose();
                return;
            }
            linkItem = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM PaiMaiNpc WHERE Bought = 1").executeQuery();
            //cm.getC().dropMessage(selection);//
            while (linkItem.next()) {// 得到可领取的数据
                if (linkItem.getString("itemid") == selection) {
                    for (var i = 0; i < 16; i++) {
                        setEquipStat(i, getEquipStatToMakeWeapon(i));//Error
                    }
                }
            }
            toDrop.setEquipOnlyId(cm.getMapleEquipOnlyId());
            //cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).addItem(toDrop); //将这个装备放入包中
            //cm.setLock(toDrop); //锁定装备
            //cm.getChar().getClient().getSession().write(Packages.tools.MaplePacketCreator.addInventorySlot(Packages.client.inventory.MapleInventoryType.EQUIP, toDrop)); //刷新背包
            im.addFromDrop(im.getC(), toDrop, false);
            //更新数据部分
            var UpDateBought;
            var UpDateStatus;
            for (var i = 0; i < Allmember.length; i++) {
                UpDateBought = DatabaseConnection.getConnection().prepareStatement("update paimainpc set Bought=? where PaiMaiId = " + Allmember[i][0] + "")
                UpDateBought.setString(1, cm.getPlayer().getId())//竞拍成功购买字段变成角色ID
                UpDateStatus = DatabaseConnection.getConnection().prepareStatement("update paimainpcrecord set status=? where PaiMaiId = " + Allmember[i][0] + " and Status = 1")
                UpDateStatus.setString(1, 3)//竞拍成功状态变成3
                UpDateBought.executeUpdate(); //更新;
                UpDateStatus.executeUpdate(); //更新;
            }
            cm.sendOk("领取好了。")
            cm.dispose();
        } else if (a == 6) {//领回道具
            for (var i = 0; i < boughtArray.length; i++) {
                if (boughtArray[i] == false) {
                    pass = false;
                }
            }//得到拍卖道具是否领取符合条件
            if (pass) {
                if (Allmember[selection][4] != 0) {
                    cm.sendOk("目前暂时没有您的数据。")
                } else if (Allmember[selection][2] == 0) {//如果是金币
                    cm.gainMeso(Allmember[selection][1]);
                    cm.sendOk("已经领回的金币。")
                } else if (Allmember[i][2] == 1) {//如果是点券
                    cm.sendOk("暂无点券交易。")
                }
                var UpDateStatus;
                for (var i = 0; i < Allmember.length; i++) {
                    UpDateStatus = DatabaseConnection.getConnection().prepareStatement("update paimainpcrecord set status=? where PaiMaiId = " + Allmember[selection][0] + " and CharId =  " + cm.getPlayer().getId() + "")
                    UpDateStatus.setString(1, 2)//竞拍失败状态变成2
                    UpDateStatus.executeUpdate(); //更新;
                }
                cm.dispose();
            } else {
                cm.sendNext("您选中的这期拍卖暂时还没有结束！")
                cm.dispose();
            }
        } else if (a == 100) {//我想添加拍卖数据
            if (selection == 0) {
                cm.sendGetNumber("请输入您要添加的道具ID：", 0, 0, 2100000000)
            } else {
                var text = "下列是历来的拍卖记录，您可以点击进行操作：\r\n"
                while (ItemDataHistory2.next()) {//得到历史记录
                    text += " #L" + ItemDataHistory2.getString("paimaiid") + "# 第" + ItemDataHistory2.getString("paimaiid") + "期  " + ItemDataHistory2.getString("itemid") + ""
                }
                a = 200;
                cm.sendSimple(text);
            }
        } else if (a == 101) {
            //cm.sendY(selection)
            cm.sendGetNumber("请输入道具ID的名字（一定要真实！）", 0, 0, 2100000000)
            insertItem.push("系统设定")//PaimaiId
            insertItem.push("拍卖ID")//PaimaiId

////cm.sendY(insertItemAll[0][2])


            insertItem.push(0)//bought
            insertItem.push("拍卖状态")//bought



            insertItem.push(selection)//itemid
            insertItem.push("道具ID")//itemid

        } else if (a == 102) {
            //cm.sendY(selection)

            insertItem.push(selection)//itemName
            insertItem.push("道具名字")//itemName

            cm.sendGetNumber("可升级数", 0, 0, 100);
        } else if (a == 103) {
            //cm.sendY(selection)

            insertItem.push(selection)//可升级数
            insertItem.push("可升级次数")

            cm.sendGetNumber("道具等级", 0, 0, 5)
        } else if (a == 104) {

            //cm.sendY(selection)
            insertItem.push(selection)//level
            insertItem.push("道具等级")

            cm.sendGetNumber("请输入力量", 0, 0, 30000)
        } else if (a == 105) {

            insertItem.push(selection)//str
            insertItem.push("力量")

            cm.sendGetNumber("请输入敏捷", 0, 0, 30000)
        } else if (a == 106) {

            insertItem.push(selection)//dex
            insertItem.push("敏捷")

            cm.sendGetNumber("请输入智力", 0, 0, 30000)
        } else if (a == 107) {

            insertItem.push(selection)//int
            insertItem.push("智力")

            cm.sendGetNumber("请输入运气", 0, 0, 30000)
        } else if (a == 108) {

            insertItem.push(selection)//luk
            insertItem.push("运气")

            cm.sendGetNumber("请输入HP", 0, 0, 30000)
        } else if (a == 109) {

            insertItem.push(selection)//hp
            insertItem.push("hp")

            cm.sendGetNumber("请输入MP", 0, 0, 30000)
        } else if (a == 110) {
            insertItem.push(selection)//mp
            insertItem.push("mp")

            cm.sendGetNumber("#r请输入物理攻击力#", 0, 0, 30000)
        } else if (a == 111) {
            insertItem.push(selection)//物理攻击力
            insertItem.push("物理攻击力")

            cm.sendGetNumber("#r请输入魔法攻击力(一般和物理攻击力相同)#", 0, 0, 30000)
        } else if (a == 112) {
            insertItem.push(selection)//魔法攻击力
            insertItem.push("魔法攻击力")

            cm.sendGetNumber("请输入物理防御力", 0, 0, 30000)
        } else if (a == 113) {
            insertItem.push(selection)//物理防御力
            insertItem.push("物理防御力")

            cm.sendGetNumber("魔法防御力", 0, 0, 30000)
        } else if (a == 114) {
            insertItem.push(selection)//魔法防御力
            insertItem.push("魔法防御力")

            cm.sendGetNumber("请输入命中率", 0, 0, 30000)
        } else if (a == 115) {
            insertItem.push(selection)//命中率
            insertItem.push("命中率")

            cm.sendGetNumber("请输入回避率", 0, 0, 30000)
        } else if (a == 116) {
            insertItem.push(selection)//回避率
            insertItem.push("回避率")

            cm.sendGetNumber("请输入手技", 0, 0, 30000)
        } else if (a == 117) {
            insertItem.push(selection)//手技
            insertItem.push("手技")

            cm.sendGetNumber("请输入移动速度", 0, 0, 100)
        } else if (a == 118) {
            insertItem.push(selection)//移动速度
            insertItem.push("移动速度")
            cm.sendGetNumber("请输入跳跃力", 0, 0, 100)
        } else if (a == 119) {
            insertItem.push(selection)//跳跃力
            insertItem.push("跳跃力")

            cm.sendGetNumber("是否锁定装备?\r\n0 - 不锁定\r\n1 - 锁定", 0, 0, 1)
        } else if (a == 120) {
            insertItem.push(selection)//锁定
            insertItem.push("是否锁定装备?")

            cm.sendGetNumber("vicious", 0, 0, 0);
        } else if (a == 121) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("vicious")

            cm.sendGetNumber("jd_level", 0, 0, 0)
        } else if (a == 122) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("jd_level")

            cm.sendGetNumber("jd_xlevel", 0, 0, 0)
        } else if (a == 123) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("jd_xlevel")

            cm.sendGetNumber("jd_times", 0, 0, 0)
        } else if (a == 124) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("jd_times")

            cm.sendGetNumber("jd_v1", 0, 0, 0)
        } else if (a == 125) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("jd_v1")

            cm.sendGetNumber("jd_v2", 0, 0, 0)
        } else if (a == 126) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("jd_v2")

            cm.sendGetNumber("jd_v3", 0, 0, 0)
        } else if (a == 127) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("jd_v3")

            cm.sendGetNumber("ItemLevel", 0, 0, 0)
        } else if (a == 128) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("ItemLevel")

            cm.sendGetNumber("ItemExp", 0, 0, 0)
        } else if (a == 129) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("ItemExp")

            cm.sendGetNumber("ItemSkill", 0, 0, 0)
        } else if (a == 130) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("ItemSkill")

            cm.sendGetNumber("Durability", 0, 0, 0)
        } else if (a == 131) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("Durability")

            cm.sendGetNumber("pvpWatk", 0, 0, 0)
        } else if (a == 132) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("pvpWatk")

            cm.sendGetNumber("hpR", 0, 0, 0)
        } else if (a == 133) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("hpR")

            cm.sendGetNumber("mpR", 0, 0, 0)
        } else if (a == 134) {
            insertItem.push(selection)//未知 直接下一步
            insertItem.push("mpR")

            //cm.sendY(insertItemAll.length)
            var text = "再确认一下刚才的输入:\r\n#b";
            for (var i = 0; i < insertItem.length; i++) {
                if (i % 2 == 0) {
                    if (i != 0) {
                        text += "" + insertItem[i - 1] + " : " + insertItem[i - 2] + "\r\n"
                    }
                }
            }
            cm.sendNextS(text, 3)
        } else if (a == 135) {
            cm.sendNext("确定好了要将 #i" + insertItem[4] + "#  #t" + insertItem[4] + "# 添加到数据库了吗？")
        } else if (a == 136) {
            for (var i = 0; i < insertItem.length; i++) {
                if (i % 2 != 0) {
                    if (i != 0) {
                        insertItemAll.push(insertItem[i - 1])
                    }
                }
            }//批量载入数据

            for (var i = 0; insertItemAll.length; i++) {
                insertPaiMai.setString(i + 1, insertItemAll[i])
                //cm.sendY(insertItemAll[i])
            }
            insertPaiMai.executeUpdate(); //更新
            cm.sendOk("已经将您的数据载入到数据库中。\r\n填入的数据未必立即生效。\r\n每次拍卖的道具永远只能一个\r\n必须等前面的拍卖结束后才能进行下一个拍卖。\r\n您可以在查看拍卖中删除拍卖。")
            cm.dispose();
        } else if (a == 201) {
            var text = "一共有下列玩家参与该期的拍卖(您选择的是第" + selection + "期)：\r\n#b"
            var i = 0;
            while (Record.next()) {//得到历史讯息
                if (Record.getString("paimaiid") == selection) {
                    text += "玩家名字：" + Record.getString("CharName") + " \r\n出价：" + Record.getString("Price") + "\r\n出价时间：" + Record.getString("Date") + "\r\n================================\r\n"
                    i++;
                }
            }
            if (i == 0) {
                cm.sendOk("没有查到该期的玩家竞拍信息。")
            } else {
                cm.sendOk(text)
            }
            cm.dispose();
        }//a
    }//mode
}//


function getEquipStatInfomation(i) {
    switch (i) {
        case 0:
            return "力量：" + ItemDataBase.getString("str")//力量
        case 1:
            return "敏捷：" + ItemDataBase.getString("dex")//敏捷
        case 2:
            return "智力：" + ItemDataBase.getString("int")//智力
        case 3:
            return "运气：" + ItemDataBase.getString("luk")//运气
        case 4:
            return "HP：" + ItemDataBase.getString("hp")
        case 5:
            return "MP：" + ItemDataBase.getString("mp")
        case 6:
            return "物理攻击力：" + ItemDataBase.getString("watk")
        case 7:
            return "魔法攻击力：" + ItemDataBase.getString("matk")
        case 8:
            return "物理防御力：" + ItemDataBase.getString("wdef")
        case 9:
            return "魔法防御力：" + ItemDataBase.getString("mdef")
        case 10:
            return "回避率：" + ItemDataBase.getString("avoid")
        case 11:
            return "手技：" + ItemDataBase.getString("hands")
        case 12:
            return "移动速度：" + ItemDataBase.getString("speed")
        case 13:
            return "跳跃力：" + ItemDataBase.getString("jump")
        case 14:
            return ItemDataBase.getString("locked") == 0 ? "是否锁定（不允许丢弃&交易）：否" : "是否锁定（不允许丢弃&交易）：是"
        case 15:
            return "升级次数：" + ItemDataBase.getString("upgradeslots")
    }
}

function getEquipStatToMakeWeapon(i) {
    switch (i) {
        case 0:
            return linkItem.getString("str")//力量
        case 1:
            return linkItem.getString("dex")//敏捷
        case 2:
            return linkItem.getString("int")//智力
        case 3:
            return linkItem.getString("luk")//运气
        case 4:
            return linkItem.getString("hp")
        case 5:
            return linkItem.getString("mp")
        case 6:
            return linkItem.getString("watk")
        case 7:
            return linkItem.getString("matk")
        case 8:
            return linkItem.getString("wdef")
        case 9:
            return linkItem.getString("mdef")
        case 10:
            return linkItem.getString("avoid")
        case 11:
            return linkItem.getString("hands")
        case 12:
            return linkItem.getString("speed")
        case 13:
            return linkItem.getString("jump")
        case 14:
            return linkItem.getString("upgradeslots")
        case 15:
            return "拍卖系统"
    }
}

function setEquipStat(i, v) {//设置装备属性
    //linkItem = cm.getDataSelectFromDB("SELECT * FROM PaiMaiNpc WHERE Bought = 1");
    switch (i) {
        case 0:
            toDrop.setStr(v);
            break;
        case 1:
            toDrop.setDex(v);
            break;
        case 2:
            toDrop.setInt(v);
            break;
        case 3:
            toDrop.setLuk(v);
            break;
        case 4:
            toDrop.setHp(v);
            break;
        case 5:
            toDrop.setMp(v);
            break;
        case 6:
            toDrop.setWatk(v);
            break;
        case 7:
            toDrop.setMatk(v);
            break;
        case 8:
            toDrop.setWdef(v);
            break;
        case 9:
            toDrop.setMdef(v);
            break;
        case 10:
            toDrop.setAcc(v);
            break;
        case 11:
            toDrop.setAvoid(v);
            break;
        case 12:
            toDrop.setSpeed(v);
            break;
        case 13:
            toDrop.setJump(v);
            break;
        case 14:
            toDrop.setUpgradeSlots(v);
            break;
        case 15:
            toDrop.setOwner("拍卖系统");
            break;
    }
}