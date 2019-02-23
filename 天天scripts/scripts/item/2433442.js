var status = -1;
var typed;
var pot = new Array();
var EquipStat = Array();
var position;
var EquipStat = new Array();
var toDrop;
var Already = false;
var keep = Array(false, false, false);
var itemid;
var ii;
var PotList = Array(
        1, // "力量" +#incSTR
        2, // "敏捷" +#incDEX
        3, // "智力" +#incINT
        4, // "运气" +#incLUK
        5, // "MaxHP" +#incMHP
        6, // "MaxMP" +#incMMP
        7, // "命中值" +#incACC
        8, // "回避值" +#incEVA
        9, // "移动速度" +#incSpeed
        10, // "跳跃力" +#incJump
        11, // "攻击力" +#incPAD
        12, // "魔法攻击力" +#incMAD
        13, // "物理防御力" +#incPDD
        14, // "魔法防御力" +#incMDD
        901, // "受到攻击时，有#prop%的概率在#time秒内感觉到愤怒。 
        902, // "受到攻击时，有#prop%的概率在#time秒内感觉到幸福。 
        903, // "受到攻击时，有#prop%的概率在#time秒内感觉到爱情。 
        904, // "受到攻击时，有#prop%的概率在#time秒内感觉到愤怒。 
        905, // "受到攻击时，有#prop%的概率在#time秒内感觉到感动。 
        10001, // "力量" +#incSTR
        10002, // "敏捷" +#incDEX
        10003, // "智力" +#incINT
        10004, // "运气" +#incLUK
        10005, // "MaxHP" +#incMHP
        10006, // "MaxMP" +#incMMP
        10007, // "命中值" +#incACC
        10008, // "回避值" +#incEVA
        10009, // "移动速度" +#incSpeed
        10010, // "跳跃力" +#incJump
        10011, // "攻击力" +#incPAD
        10012, // "魔法攻击力" +#incMAD
        10013, // "物理防御力" +#incPDD
        10014, // "魔法防御力" +#incMDD
        10041, // "力量" +#incSTRr%
        10042, // "敏捷" +#incDEXr%
        10043, // "智力" +#incINTr%
        10044, // "运气" +#incLUKr%
        10045, // "MaxHP" +#incMHPr%
        10046, // "MaxMP" +#incMMPr%
        10047, // "命中值" +#incACCr%
        10048, // "回避值" +#incEVAr%
        10051, // "攻击力" +#incPADr%
        10052, // "魔法攻击力" +#incMADr%
        10053, // "物理防御力" +#incPDDr%
        10054, // "魔法防御力" +#incMDDr%
        10055, // "爆击率" +#incCr%
        10070, // "总伤害" +#incDAMr%
        10081, // "所有属性" +#incSTR
        10151, // "每4秒恢复#RecoveryHP的HP 
        10156, // "每4秒恢复#RecoveryMP的MP 
        10201, // "攻击时，有#prop%的概率恢复#HP的HP 
        10206, // "攻击时，有#prop%的概率恢复#MP的MP 
        10221, // "攻击时，有#prop%的概率造成#level级中毒效果 
        10226, // "攻击时，有#prop%的概率造成#level级眩晕效果 
        10231, // "攻击时，有#prop%的概率造成#level级减速效果 
        10236, // "攻击时，有#prop%的概率造成#level级暗黑效果 
        10241, // "攻击时，有#prop%的概率造成#level级冰冻效果 
        10246, // "攻击时，有#prop%的概率造成#level级封印效果 
        10291, // "攻击时，无视怪物的防御力#ignoreTargetDEF% 
        20001, // "力量" +#incSTR
        20002, // "敏捷" +#incDEX
        20003, // "智力" +#incINT
        20004, // "运气" +#incLUK
        20005, // "MaxHP" +#incMHP
        20006, // "MaxMP" +#incMMP
        20007, // "命中值" +#incACC
        20008, // "回避值" +#incEVA
        20009, // "移动速度" +#incSpeed
        20010, // "跳跃力" +#incJump
        20011, // "攻击力" +#incPAD
        20012, // "魔法攻击力" +#incMAD
        20013, // "物理防御力" +#incPDD
        20014, // "魔法防御力" +#incMDD
        20041, // "力量" +#incSTRr%
        20042, // "敏捷" +#incDEXr%
        20043, // "智力" +#incINTr%
        20044, // "运气" +#incLUKr%
        20045, // "MaxHP" +#incMHPr%
        20046, // "MaxMP" +#incMMPr%
        20047, // "命中值" +#incACCr%
        20048, // "回避值" +#incEVAr%
        20051, // "攻击力" +#incPADr%
        20052, // "魔法攻击力" +#incMADr%
        20053, // "物理防御力" +#incPDDr%
        20054, // "魔法防御力" +#incMDDr%
        20055, // "爆击率" +#incCr%
        20070, // "总伤害" +#incDAMr%
        20086, // "所有属性" +#incSTRr%
        20201, // "攻击时，有#prop%的概率恢复#HP的HP 
        20206, // "攻击时，有#prop%的概率恢复#MP的MP 
        20291, // "攻击时，无视怪物的防御力#ignoreTargetDEF% 
        20351, // "受到攻击时，有#prop%的概率无视#ignoreDAM的伤害 
        20352, // "受到攻击时，有#prop%的概率无视#ignoreDAM的伤害 
        20353, // "受到攻击时，有#prop%的概率无视#ignoreDAM的伤害 
        20366, // "受到攻击后无敌时间")//+#time秒
        40603, //攻击BOSS时伤害：+40%
        40292, //无视怪物40%的防御率
        42051, //攻击力：+12%
        40055 //爆击率 12%
        )
//自行设定部分
var salaryList = Array(1000, 1000, 1000); //点卷，金币，元宝
var WeaponLimit = 1000; //武器突破上限
var EvResetList = Array(
        Array("品克斌", "pinkebin"),
        Array("玩具城", "pinkebin"),
        Array("扎昆", "LudiPQ")
        ); //显示名，bosslog字符串
var npcid = 9900000; //专属副本的NPCID
var mode = 0; //专属副本的npcmode
var Ringitemid = 1112785; //钻石戒指
var Allstats = 100; //赠送的装备全属性
var upgradeTimes = 1; //装备升级的次数
var upgradeNeedItem = 4310104; //装备升级所需要的道具
var needNX = 1000;//洗潜能所需要的点券
var PotNeedItem = 4001485;//元宝
var PotNeedItemQty = 3;//保留潜能需要的元宝数量



function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        im.sendOk("祝您游戏愉快!!!");
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "#e#r#h0##n#d，尊敬的钻石玩家你好！\r\n在这里可以体验到所有本服务器的#r最高优惠#d！你想做什么？\r\n#b"
        text += "#L0# 每日工资 #L1# 每日突破 #L2# 重置副本\r\n";
        text += "#L3# 专属副本 #L4# 专属戒指 #L5# 装备升级\r\n"
        text += "#L6# 一键潜能 "
        im.sendSimple(text);
    } else if (status == 1) {
        typed = selection;
        switch (selection) {
            case 6://一键潜能
                im.sendYesNo("该功能使用一次需要1000点券，您确认吗？\r\n #r - 所选道具必须是SS级才能显示。\r\n - 洗完之后可选择保留或者放弃，放弃可继续花费1000点券继续执行。")
                break;
            case 0://每日工资
                if (im.getBossLog("钻石每日工资") >= 1) {
                    im.sendOk("不好意思，今天您已经领取过工资了！");
                    status = -1;
                } else {
                    im.sendYesNo("您确定您要领取今天的工资吗？")
                }
                break;
            case 1:
                if (im.getBossLog("钻石每日突破") >= 1) {
                    im.sendOk("不好意思，今天您已经为您的武器突破上限了！");
                    status = -1;
                } else {
                    im.sendYesNo("您确定想为您的武器提升#r" + WeaponLimit + "#k点的突破上限吗？")
                }
                break;
            case 2:
                if (im.getBossLog("钻石每日重置") >= 1) {
                    im.sendOk("不好意思，今天您已经重置了副本次数。");
                    status = -1;
                } else {
                    im.sendYesNo("您确定想重置副本次数吗？")
                }
                break;
            case 3:
                im.openNpc(npcid, mode);
                break;
            case 4:
                if (im.getBossLogAcc("钻石专属戒指") == -1) {
                    im.sendOk("钻石专属戒指只能领取一次！请确认。")
                    status = -1;
                } else {
                    im.sendYesNo("现在你想领取钻石VIP独有的全属性100的戒指吗？\r\n #r- 确认领取后，将不能再次领取了！");
                }
                break;
            case 5:
                if (im.getItemQuantity(upgradeNeedItem) >= 1) {
                    var i = 0;
                    var list = im.getInventory(1).list();
                    var itemList = list.iterator();
                    var text = "请选择你想要进行装备升级的武器！\r\n #r- 选中即可进行升级次数提升，提升数量为:" + upgradeTimes + "。#b\r\n";
                    position = -1;
                    newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (im.isCash(item.getItemId()) == false) {
                            newItemList[item.getPosition()] = item.getItemId();
                            i++;
                        }

                    }
                    if (i == 0) {
                        im.sendOk("对不起，您所选背包栏目现在没有物品，无法操作。");
                        im.dispose();
                    } else {
                        for (var key in newItemList) {
                            text += "#L" + key + "# #v" + newItemList[key] + "# #t" + newItemList[key] + "#\r\n";
                        }
                        im.sendSimple(text);
                    }
                } else {
                    im.sendOk("提升装备次数需要1个#i" + upgradeNeedItem + "# #t" + upgradeNeedItem + "#，请确认。")
                    status = -1;
                }
                break;
        }
    } else if (status == 2) {
        switch (typed) {
            case 6:
                var i = 0;
                var list = im.getInventory(1).list();
                var itemList = list.iterator();
                var text = "请选择您要进行一键潜能的道具： \r\n#r - 只显示具有SS级或以上的道具。#b\r\n";
                position = -1;
                newItemList = Array();
                while (itemList.hasNext()) {
                    var item = itemList.next();
                    if (item.getState() <= 20) {//必须要SS级以上
                        if (im.isCash(item.getItemId()) == false) {
                            newItemList[item.getPosition()] = item.getItemId();
                            i++;
                        }
                    }

                }
                if (i == 0) {
                    im.sendOk("您所选背包栏目现在没有物品或者没有#bSS级#k或以上的道具，无法操作。");
                    im.dispose();
                } else {
                    for (var key in newItemList) {
                        text += "#L" + key + "# #v" + newItemList[key] + "# #t" + newItemList[key] + "#\r\n";
                    }
                    im.sendSimple(text);
                }
                break;
            case 5:
                if (position == -1) {
                    position = selection;
                }
                if (im.getEquipBySlot(position).getExpiration() > 0) {
                    im.sendOk("对不起，有时间限制的道具不能提升升级次数！");
                    im.dispose();
                    return;
                }
                getEquipStatToArray(); //记录原有数据
                var ii = im.getItemInfo();
                toDrop = ii.randomizeStats(ii.getEquipById(im.getEquipBySlot(position).getItemId())).copy(); // 生成一个Equip类(生成这个装备)
                for (var i = 0; i < EquipStat.length; i++) {
                    setEquipStatRandom(i, EquipStat[i]); //批量载入武器属性
                }
                im.removeSlot(1, position, 1); //删除掉原始道具
                im.addFromDrop(im.getC(), toDrop, false);
                im.sendOk("提升道具升级次数成功了！\r\n - 消耗了1个#i" + upgradeNeedItem + "# #t" + upgradeNeedItem + "#");
                im.gainItem(upgradeNeedItem, -1);
                status = -1;
                break;
            case 0:
                im.gainNX(1, salaryList[0]);
                im.gainMeso(salaryList[1]);
                im.gainItem(4001485, salaryList[2]);
                im.setBossLog("钻石每日工资");
                im.sendOk("恭喜您领取今天的工资成功！!");
                //im.getPlayer().dropMessage(-1, "获得" + salaryList[0] + " 点券。");
                im.getPlayer().dropMessage(-1, "获得" + salaryList[1] + " 金币。");
                im.getPlayer().dropMessage(-1, "获得" + salaryList[2] + " 元宝。");
                status = -1;
                break;
            case 1:
                if (im.changeLimitBreak(WeaponLimit)) {
                    im.setBossLog("钻石每日突破");
                    im.sendOk("恭喜您武器突破上限" + WeaponLimit + "点成功！！");
                    im.getPlayer().dropMessage(-1, "获得" + WeaponLimit + " 点武器突破上限。");
                    status = -1;
                } else {
                    im.sendOk("对不起，提升失败！请您确认：\r\n1）您是否装备了武器。\r\n2）您的武器突破上限是否超出了最大值。")
                    im.dispose();
                }
                break;
            case 2:
                var text = "恭喜你！已经成功为您重置了以下副本： \r\n#r "
                for (var i = 0; i < EvResetList.length; i++) {
                    im.resetBossLog(EvResetList[i][1]);
                    text += EvResetList[i][0] + "、"
                }
                im.setBossLog("钻石每日重置");
                im.sendOk(text);
                status = -1;
                break;
            case 4:
                MakeEquip(Ringitemid, Allstats);
                im.setBossLogAcc("钻石专属戒指", -2);
                im.sendOk("恭喜您！领取钻石专属戒指成功了！");
                status = -1;
                break;
        }
    } else if (status == 3) {
        switch (typed) {
            case 6:
                if (position == -1) {
                    position = selection;
                }
                if (im.getEquipBySlot(position).getExpiration() > 0) {
                    im.sendOk("对不起，有时间限制的道具不能进行一键洗潜能。");
                    im.dispose();
                    return;
                }
                /* if (im.getEquipBySlot(position).getState() != 0x14 || im.getEquipBySlot(position) == null) {
                 im.sendOk("对不起，您选择的道具没有SS级或者选择的武器为空。")
                 im.dispose();
                 return;
                 }*/
                if (im.getNX(1) < needNX) {
                    im.sendOk("对不起，您的点券不足！请检查您是否有1000点券。")
                    im.dispose();
                    return;
                }

                //处理部分
                if (!keep[0]) {
                    pot[0] = Math.floor(Math.random() * PotList.length);
                }
                if (!keep[1]) {
                    pot[1] = Math.floor(Math.random() * PotList.length);
                }
                if (!keep[2]) {
                    pot[2] = Math.floor(Math.random() * PotList.length);
                }
                if (!Already) {
                    im.gainNX(2, -2000);//扣除2000抵用券
                    Already = true;
                    itemid = im.getEquipBySlot(position).getItemId();
                }
                var text = "#e#d恭喜你随机潜能成功！#n#k\r\n您随机到的潜能属性为：\r\n#b";
                ii = im.getItemInfo();
                if (keep[0]) {//如果保留了潜能属性
                    text += "#r 1）" + ii.resolvePotentialId(itemid, PotList[pot[0]]) + " \r\n（ - 已经保留)\r\n#b";
                } else {
                    text += "#L0# 1）" + ii.resolvePotentialId(im.getEquipBySlot(position).getItemId(), PotList[pot[0]]) + " \r\n（保留此条，继续随机 - 花费1000点券)#l\r\n";
                }
                if (keep[1]) {//如果保留了潜能属性
                    text += "#r\r\n\r\n 2）" + ii.resolvePotentialId(itemid, PotList[pot[1]]) + "\r\n（ - 已经保留)\r\n#b";
                } else {
                    text += "#L1# 2）" + ii.resolvePotentialId(im.getEquipBySlot(position).getItemId(), PotList[pot[1]]) + " \r\n（保留此条，继续随机 - 花费1000点券)#l\r\n";
                }
                if (keep[2]) {//如果保留了潜能属性
                    text += "#r\r\n\r\n 3）" + ii.resolvePotentialId(itemid, PotList[pot[2]]) + "\r\n（ - 已经保留)\r\n#b";
                } else {
                    text += "#L2# 3）" + ii.resolvePotentialId(im.getEquipBySlot(position).getItemId(), PotList[pot[2]]) + "\r\n（保留此条，继续随机 - 花费1000点券)#l\r\n";
                }
                text += "#b#r#e#L4# 确定以上潜能！！\r\n#d#L5# 放弃所有，并花费2000抵用券重新随机。\r\n#l"
                im.sendSimple(text);
                break;
        }
    } else if (status == 4) {//保留潜能属性
        switch (selection) {
            case 4://确认部分
                if (im.changePotential(position, 1, PotList[pot[0]], true) && im.changePotential(position, 2, PotList[pot[1]], true) && im.changePotential(position, 3, PotList[pot[2]], true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                    im.sendOk("恭喜你！一键潜能成功！");
                    im.dispose();
                }
                break;
            case 5:
                Already = false;
                keep = Array(false, false, false);
                status = 2;
                im.sendNext("操作成功，请点击下一步继续。")
                break;
            case 0://
            case 1:
            case 2:
                if (im.getNX(1) < 1000) {
                    status = 2;
                    im.sendNext("对不起，你没有足够的元宝。\r\n点击下一步返回潜能保留界面。")
                } else {
                    keep[selection] = true;
                    im.gainNX(1, -1000)
                    im.sendNextNoESC("保留成功！请按下一步继续选择。");
                    status = 2;
                }
                break;
        }
    }
}

function MakeEquip(Ringitemid, v) {//制作装备
    var ii = im.getItemInfo();
    toDrop = ii.randomizeStats(ii.getEquipById(Ringitemid)).copy(); // 生成一个Equip类(生成这个装备)
    toDrop.setStr(v);
    toDrop.setDex(v);
    toDrop.setInt(v);
    toDrop.setLuk(v);
    toDrop.setWatk(v);
    toDrop.setMatk(v);
    im.addFromDrop(im.getC(), toDrop, false);
}


function getEquipStatToArray() {//得到装备数据
    EquipStat[0] = im.getEquipBySlot(position).getStr(); //力量
    EquipStat[1] = im.getEquipBySlot(position).getDex(); //敏捷
    EquipStat[2] = im.getEquipBySlot(position).getInt(); //智力
    EquipStat[3] = im.getEquipBySlot(position).getLuk(); //运气
    EquipStat[4] = im.getEquipBySlot(position).getHp();
    EquipStat[5] = im.getEquipBySlot(position).getMp();
    EquipStat[6] = im.getEquipBySlot(position).getWatk();
    EquipStat[7] = im.getEquipBySlot(position).getMatk();
    EquipStat[8] = im.getEquipBySlot(position).getWdef();
    EquipStat[9] = im.getEquipBySlot(position).getMdef();
    EquipStat[10] = im.getEquipBySlot(position).getAcc();
    EquipStat[11] = im.getEquipBySlot(position).getAvoid();
    EquipStat[12] = im.getEquipBySlot(position).getSpeed();
    EquipStat[13] = im.getEquipBySlot(position).getJump();
    EquipStat[14] = im.getEquipBySlot(position).getUpgradeSlots();
    EquipStat[15] = im.getEquipBySlot(position).getLimitBreak();
    EquipStat[16] = im.getEquipBySlot(position).getPotential1();
    EquipStat[17] = im.getEquipBySlot(position).getPotential2();
    EquipStat[18] = im.getEquipBySlot(position).getPotential3();
    EquipStat[19] = im.getEquipBySlot(position).getPotential4();
    EquipStat[20] = im.getEquipBySlot(position).getPotential5();
    EquipStat[21] = im.getEquipBySlot(position).getPotential6();
    EquipStat[22] = im.getEquipBySlot(position).getEnhance();
    EquipStat[23] = im.getEquipBySlot(position).getReqLevel();
    EquipStat[24] = im.getEquipBySlot(position).getYggdrasilWisdom();
    EquipStat[25] = im.getEquipBySlot(position).getBossDamage();
    EquipStat[26] = im.getEquipBySlot(position).getIgnorePDR();
    EquipStat[27] = im.getEquipBySlot(position).getTotalDamage();
    EquipStat[28] = im.getEquipBySlot(position).getAllStat();
    // EquipStat[29] = im.getEquipBySlot(1).getFinalStrike();
    EquipStat[29] = im.getEquipBySlot(position).getKarmaCount();
    //新增属性部分
    EquipStat[30] = im.getEquipBySlot(position).getHands();
    EquipStat[31] = im.getEquipBySlot(position).getViciousHammer();
    EquipStat[32] = im.getEquipBySlot(position).getItemEXP();
    EquipStat[33] = im.getEquipBySlot(position).getSealedLevel();
    EquipStat[34] = im.getEquipBySlot(position).getSealedExp();
    EquipStat[35] = im.getEquipBySlot(position).getOwner();
    EquipStat[36] = im.getEquipBySlot(position).getLevel();
    EquipStat[37] = im.getEquipBySlot(position).getExpiration();
    EquipStat[38] = im.getEquipBySlot(position).getFlag();
}


function setEquipStatRandom(i, v) {//设置装备属性
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
            toDrop.setUpgradeSlots(v + upgradeTimes); //升级次数+1
            break;
        case 15:
            toDrop.setLimitBreak(v);
            break;
        case 16:
            toDrop.setPotential1(v);
            break;
        case 17:
            toDrop.setPotential2(v);
            break;
        case 18:
            toDrop.setPotential3(v);
            break;
        case 19:
            toDrop.setPotential4(v);
            break;
        case 20:
            toDrop.setPotential5(v);
            break;
        case 21:
            toDrop.setPotential6(v);
            break;
        case 22:
            toDrop.setEnhance(v);
            break;
        case 23:
            toDrop.setReqLevel(v);
            break;
        case 24:
            toDrop.setYggdrasilWisdom(v);
            break;
        case 25:
            toDrop.setBossDamage(v);
            break;
        case 26:
            toDrop.setIgnorePDR(v);
            break;
        case 27:
            toDrop.setTotalDamage(v);
            break;
        case 28:
            toDrop.setAllStat(v);
            break;
        case 29:
            toDrop.setKarmaCount(v);
            break;
        case 30:
            toDrop.setHands(v);
            break;
        case 31:
            toDrop.setViciousHammer(v);
            break;
        case 32:
            toDrop.setItemEXP(v);
            break;
        case 33:
            toDrop.setSealedLevel(v);
            break;
        case 34:
            toDrop.setSealedExp(v);
            break;
        case 35:
            toDrop.setOwner(v);
            break;
        case 36:
            toDrop.setLevel(v);
            break;
        case 37:
            toDrop.setExpiration(v);
            break;
        case 38:
            toDrop.setFlag(v);
            break;
    }
}