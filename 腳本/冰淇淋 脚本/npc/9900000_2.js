/*
 * 玩家贩卖点装 装备 后台系统
 * 奇幻冒险岛工作室制作
 * 备份数据库 cashtradesystemStore
 */
var status = 0;
var tradetype;
var itemid;
var ItemPrice;
var insertItem = Array();//存储管理员输入的道具属性
var insertItemName = Array();//存储管理员输入的道具属性名称

var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";
var xxx = "#fUI/UIWindow.img/Shop/meso#";
var eff4 = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.sendOk("祝您游戏愉快!!!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendGetNumber("请输入您要添加的道具ID：", 0, 0, 2100000000);
    } else if (status == 1) {
        itemid = selection;
        insertItem.push(itemid)//itemid
        insertItemName.push("道具ID")//备注
        cm.sendGetNumber("请输入力量", 0, 0, 30000);
    } else if (status == 2) {
        insertItem.push(selection)
        insertItemName.push("力量")
        cm.sendGetNumber("请输入敏捷", 0, 0, 30000)
    } else if (status == 3) {
        insertItem.push(selection)//dex
        insertItemName.push("敏捷")
        cm.sendGetNumber("请输入智力", 0, 0, 30000)
    } else if (status == 4) {
        insertItem.push(selection)//int
        insertItemName.push("智力")
        cm.sendGetNumber("请输入运气", 0, 0, 30000)
    } else if (status == 5) {
        insertItem.push(selection)//luk
        insertItemName.push("运气")
        cm.sendGetNumber("请输入HP", 0, 0, 30000)
    } else if (status == 6) {
        insertItem.push(selection)//hp
        insertItemName.push("hp")
        cm.sendGetNumber("请输入MP", 0, 0, 30000)
    } else if (status == 7) {
        insertItem.push(selection)//mp
        insertItemName.push("mp")
        cm.sendGetNumber("#r请输入物理攻击力", 0, 0, 30000)
    } else if (status == 8) {
        insertItem.push(selection)//物理攻击力
        insertItemName.push("物理攻击力")
        cm.sendGetNumber("#r请输入魔法攻击力", 0, 0, 30000)
    } else if (status == 9) {
        insertItem.push(selection)//魔法攻击力
        insertItemName.push("魔法攻击力")
        cm.sendGetNumber("请输入物理防御力", 0, 0, 30000)
    } else if (status == 10) {
        insertItem.push(selection)//物理防御力
        insertItemName.push("物理防御力")
        cm.sendGetNumber("魔法防御力", 0, 0, 30000)
    } else if (status == 11) {
        insertItem.push(selection)//魔法防御力
        insertItemName.push("魔法防御力")
        cm.sendGetNumber("请输入命中率", 0, 0, 30000)
    } else if (status == 12) {
        insertItem.push(selection)//命中率
        insertItemName.push("命中率")
        cm.sendGetNumber("请输入回避率", 0, 0, 30000)
    } else if (status == 13) {
        insertItem.push(selection)//回避率
        insertItemName.push("回避率")
        cm.sendGetNumber("移动速度", 0, 0, 30000)
    } else if (status == 14) {
        insertItem.push(selection)//移动速度
        insertItemName.push("移动速度")
        cm.sendGetNumber("请输入跳跃力", 0, 0, 100)
    } else if (status == 15) {
        insertItem.push(selection)//跳跃力
        insertItemName.push("跳跃力")
        //cm.sendSimple("是否锁定装备?#b\r\n#L0#不锁定#l\r\n#L1#锁定#l");
        cm.sendGetNumber("可升级次数", 0, 0, 100);
    } else if (status == 16) {
        insertItem.push(selection)//跳跃力
        insertItemName.push("可升级次数");
        cm.sendGetNumber("突破上限", 0, 0, 99999999);
    } else if (status == 17) {
        insertItem.push(selection)//突破上限
        insertItemName.push("突破上限");
        cm.sendGetNumber("潜能1（详细代码请索要，不知写0）", 0, 0, 99999999);
    } else if (status == 18) {
        insertItem.push(selection)//潜能
        insertItemName.push("潜能1");
        cm.sendGetNumber("潜能2（详细代码请索要，不知写0）", 0, 0, 99999999);
    } else if (status == 19) {
        insertItem.push(selection)//潜能
        insertItemName.push("潜能2");
        cm.sendGetNumber("潜能3（详细代码请索要，不知写0）", 0, 0, 99999999);
    } else if (status == 20) {
        insertItem.push(selection)//潜能
        insertItemName.push("潜能3");
        cm.sendGetNumber("附加潜能1（详细代码请索要，不知写0）", 0, 0, 99999999);
    } else if (status == 21) {
        insertItem.push(selection)//潜能
        insertItemName.push("附加潜能1");
        cm.sendGetNumber("附加潜能2（详细代码请索要，不知写0）", 0, 0, 99999999);
    } else if (status == 22) {
        insertItem.push(selection)//潜能
        insertItemName.push("附加潜能2");
        cm.sendGetNumber("附加潜能3（详细代码请索要，不知写0）", 0, 0, 99999999);
    } else if (status == 23) {
        insertItem.push(selection)//潜能
        insertItemName.push("附加潜能3");
        cm.sendGetNumber("星级", 0, 0, 20);
    } else if (status == 24) {
        insertItem.push(selection)//星级
        insertItemName.push("星级");
        cm.sendGetNumber("要求等级", 0, 0, 250);
    } else if (status == 25) {
        insertItem.push(selection)//要求等级
        insertItemName.push("要求等级");
        cm.sendGetNumber("卷轴效果（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 26) {
        insertItem.push(selection)//卷轴效果
        insertItemName.push("卷轴效果");
        cm.sendGetNumber("BOSS百分比伤害（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 27) {
        insertItem.push(selection)//BOSS百分比伤害
        insertItemName.push("BOSS百分比伤害");
        cm.sendGetNumber("总伤害百分比（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 28) {
        insertItem.push(selection)//总伤害百分比
        insertItemName.push("总伤害百分比");
        cm.sendGetNumber("全属性加成（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 29) {
        insertItem.push(selection)//全属性加成
        insertItemName.push("全属性加成");
        cm.sendGetNumber("可用剪刀次数（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 30) {
        insertItem.push(-1)//剪刀额外升级次数
        insertItemName.push("可用剪刀次数");
        cm.sendGetNumber("手技", 0, 0, 30000);
    } else if (status == 31) {
        insertItem.push(selection)//手技
        insertItemName.push("手技");
        cm.sendGetNumber("道具经验值（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 32) {
        insertItem.push(selection)//道具经验值
        insertItemName.push("道具经验值");
        cm.sendGetNumber("封印道具等级", 0, 0, 3);
    } else if (status == 33) {
        insertItem.push(selection)//封印道具等级
        insertItemName.push("封印道具等级");
        cm.sendGetNumber("封印道具经验值（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 34) {
        insertItem.push(0)//封印道具经验值
        insertItemName.push("封印道具经验值");
        cm.sendGetText("道具所有权人：");
    } else if (status == 35) {
        insertItem.push(cm.getText())//道具所有权人
        insertItemName.push("道具所有权人");
        cm.sendGetNumber("已经升级次数（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 36) {
        insertItem.push(selection)//已经升级次数
        insertItemName.push("已经升级次数");
        cm.sendGetNumber("其它（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 37) {
        insertItem.push(selection)//其它
        insertItemName.push("其它");
        cm.sendGetNumber("防御百分比（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 38) {
        insertItem.push(selection)//防御百分比
        insertItemName.push("防御百分比");
        cm.sendGetNumber("金锤子次数（这个写0即可，不要写其它）", 0, 0, 0);
    } else if (status == 39) {
        insertItem.push(selection)//金锤子次数
        insertItemName.push("金锤子次数");
        var text = "再确认一下您定制的装备属性:\r\n#b";
        for (var i = 0; i < insertItem.length; i++) {
            text += "" + insertItemName[i] + " : " + insertItem[i] + "\r\n"
        }
        text += insertItem.length + "\r\n#e#r您确定以上的装备属性正确吗？"
        cm.sendNextS(text, 3)
    } else if (status == 40) {
        cm.sendSimple("请选择交易的类型：\r\n#L0# " + xxx + " #e#r 金币#n#k#l    #L1# " + xxx + " #e#r 点券#n#k#l    #L2# " + xxx + " #e#d 余额#n#k#l");
    } else if (status == 41) {//存入数据库
        tradetype = selection;
        cm.sendGetNumber("请输入您想要贩卖的价格：", 0, 0, 2100000000);
    } else if (status == 42) {
        ItemPrice = selection;
        var insertEquipData = cm.getConnection().prepareStatement("INSERT INTO cashtradesystem(id,cid,itemid,itemtype,tradeType,itemPrice,str,dex,ints,luk,hp,mp,watk,matk,wdef,mdef,acc,avoid,speed,jump,upgradeSlots,limitBreak,potential1,potential2,potential3,potential4,potential5,potential6,enhance,reqLevel,yggdrasilWisdom,bossDamage,totalDamage,allStat,karmaCount,hands,ItemEXP,sealedlevel,sealedExp,Owner,level,expiredate,ignorePDR,ViciousHammer) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"); // 载入数据
        insertEquipData.setString(1, null);//id自动递增
        insertEquipData.setString(2, -1);//如果cid是-1就是管理员增加的
        insertEquipData.setString(3, itemid);//
        insertEquipData.setString(4, 0);//itemtype
        insertEquipData.setString(5, tradetype);//tradeType
        insertEquipData.setString(6, selection);//itemPrice
        insertEquipData.setString(7, insertItem[1]);
        insertEquipData.setString(8, insertItem[2]);
        insertEquipData.setString(9, insertItem[3]);
        insertEquipData.setString(10, insertItem[4]);
        insertEquipData.setString(11, insertItem[5]);
        insertEquipData.setString(12, insertItem[6]);
        insertEquipData.setString(13, insertItem[7]);
        insertEquipData.setString(14, insertItem[8]);
        insertEquipData.setString(15, insertItem[9]);
        insertEquipData.setString(16, insertItem[10]);
        insertEquipData.setString(17, insertItem[11]);
        insertEquipData.setString(18, insertItem[12]);
        insertEquipData.setString(19, insertItem[13]);
        insertEquipData.setString(20, insertItem[14]);
        insertEquipData.setString(21, insertItem[15]);
        insertEquipData.setString(22, insertItem[16]);
        insertEquipData.setString(23, insertItem[17]);
        insertEquipData.setString(24, insertItem[18]);
        insertEquipData.setString(25, insertItem[19]);
        insertEquipData.setString(26, insertItem[20]);
        insertEquipData.setString(27, insertItem[21]);
        insertEquipData.setString(28, insertItem[22]);
        insertEquipData.setString(29, insertItem[23]);
        insertEquipData.setString(30, insertItem[24]);
        insertEquipData.setString(31, insertItem[25]);
        insertEquipData.setString(32, insertItem[26]);
        insertEquipData.setString(33, insertItem[27]);
        insertEquipData.setString(34, insertItem[28]);
        insertEquipData.setString(35, insertItem[29]);
        insertEquipData.setString(36, insertItem[30]);
        insertEquipData.setString(37, insertItem[31]);
        insertEquipData.setString(38, insertItem[32]);
        insertEquipData.setString(39, insertItem[33]);
        insertEquipData.setString(40, insertItem[34]);
        insertEquipData.setString(41, insertItem[35]);
        insertEquipData.setString(42, insertItem[36]);
        insertEquipData.setString(43, insertItem[37]);
        insertEquipData.setString(44, insertItem[38]);
        insertEquipData.executeUpdate(); //更新
        cm.sendOk("恭喜您添加成功！")
        cm.dispose();
    }
}
    