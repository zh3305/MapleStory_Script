/*
 笔芯制作★回忆冒险岛所有
 完成时间：
 脚本功能: 累计充值礼包
 */

var a = 0;
var RMB = 0;
var ChoosenRMB = 0;
var item;
var toDrop;
var PayLevel = Array(
        Array(0, 1),
        Array(1, 30),
        Array(2, 50),
        Array(3, 100),
        Array(4, 200),
        Array(5, 300),
        Array(6, 500),
        Array(7, 1000),
        Array(8, 1500),
        Array(9, 2000),
        Array(10, 3000),
        Array(11, 5000),
        Array(12, 10000)
        );//序号  累计金额
var GiftList = Array(
        Array(1, 2049750, 1),
        Array(1, 2340000, 3),
        Array(1, 2049136, 1),
        Array(1, 3010145, 1), //                       1元礼包结束

        Array(30, 3010435, 1), //千年狐椅子
        Array(30, 5062002, 50), //高级神奇魔方
        Array(30, 2340000, 20), //祝福卷轴
        Array(30, 4310023, 200), //幸运的铜币
        Array(30, 4000858, 30), //中国心                 30元礼包结束

        Array(50, 5062002, 80), //高级神奇魔方
        Array(50, 2340000, 30), // 祝福卷轴
        Array(50, 4310023, 300), //幸运的铜币
        Array(50, 5064000, 30), //防暴卷轴
        Array(50, 4000858, 50), //中国心                 50元礼包结束

        Array(100, 5062002, 100), //高级神奇魔方
        Array(100, 2340000, 40), //祝福卷轴
        Array(100, 4310023, 400), //幸运的铜币
        Array(100, 5064000, 40), //防暴卷轴
        Array(100, 4000858, 80), //中国心
        Array(100, 3010417, 1), //巨无霸企鹅王
        Array(100, 3994417, 1), //红色蜡笔               100元礼包结束

        Array(200, 2431938, 1), //法弗纳武器箱
        Array(200, 5062002, 200), //高级神奇魔方
        Array(200, 2340000, 50), //祝福卷轴
        Array(200, 4310023, 500), //幸运的铜币
        Array(200, 5064000, 50), //防暴卷轴
        Array(200, 4000858, 100), // 中国心
        Array(200, 3012025, 1), // 思念小鸡双人椅 
        Array(200, 3994417, 1), // 红色蜡笔    
        Array(200, 3994418, 1), //  橙色蜡笔               200元礼包结束

        Array(300, 2432069, 1), //暴君防具交换卷
        Array(300, 5062002, 300), //高级神奇魔方
        Array(300, 2340000, 60), //祝福卷轴
        Array(300, 4310023, 600), //幸运的铜币
        Array(300, 5064000, 60), //防暴卷轴
        Array(300, 4000858, 150), //中国心
        Array(300, 3010826, 1), //地球椅子
        Array(300, 3994417, 1), //红色蜡笔 
        Array(300, 3994418, 1), // 橙色蜡笔
        Array(300, 3994419, 1), //黄色蜡笔               300元礼包结束



        Array(500, 5062002, 300), //高级神奇魔方
        Array(500, 2340000, 60), //祝福卷轴
        Array(500, 4310023, 600), //幸运的铜币
        Array(500, 5064000, 60), //防暴卷轴
        Array(500, 4000858, 200), //中国心
        Array(500, 3010826, 1), //地球椅子
        Array(500, 3994417, 1), //红色蜡笔 
        Array(500, 3994418, 1), // 橙色蜡笔
        Array(500, 3994419, 1), //黄色蜡笔    
        Array(500, 3994420, 1), //绿色蜡笔               500元礼包结束


        Array(1000, 5062002, 400), //高级神奇魔方
        Array(1000, 2340000, 100), //祝福卷轴
        Array(1000, 4310023, 1200), //幸运的铜币
        Array(1000, 5064000, 100), //防暴卷轴
        Array(1000, 4000858, 500), //中国心
        Array(1000, 3010829, 1), //土星椅子
        Array(1000, 3994417, 1), //红色蜡笔 
        Array(1000, 3994418, 1), // 橙色蜡笔
        Array(1000, 3994419, 1), //黄色蜡笔    
        Array(1000, 3994420, 1), //绿色蜡笔
        Array(1000, 3994421, 1), //青色蜡笔               1000元礼包结束


        Array(1500, 5062002, 500), //高级神奇魔方
        Array(1500, 2340000, 200), //祝福卷轴
        Array(1500, 4310023, 1500), //幸运的铜币
        Array(1500, 5064000, 200), //防暴卷轴
        Array(1500, 4000858, 800), //中国心
        Array(1500, 3010879, 1), //回忆椅子
        Array(1500, 3994417, 1), //红色蜡笔 
        Array(1500, 3994418, 1), // 橙色蜡笔
        Array(1500, 3994419, 1), //黄色蜡笔    
        Array(1500, 3994420, 1), //绿色蜡笔
        Array(1500, 3994421, 1), //青色蜡笔
        Array(1500, 3994422, 1), //蓝色蜡笔                1500元礼包结束


        Array(2000, 4000000, 1),
        Array(3000, 4000000, 1),
        Array(5000, 4000000, 1),
        Array(10000, 4000000, 1)
        );
var WeaponList = Array(
        Array(0, 1, 1422066, 0, 0, 0), //恶魔猎手
        Array(1, 1, 1232014, 0, 0, 0), //恶魔复仇者
        Array(2, 1, 1402095, 0, 0, 0), //英雄
        Array(3, 1, 1402095, 0, 0, 0), //狂龙战士
        Array(4, 1, 1432086, 0, 0, 0), //黑骑士
        Array(5, 1, 1442116, 0, 0, 0), //战神 2000 战神
        Array(6, 1, 1302152, 0, 0, 0), //圣骑士
        Array(7, 1, 1212014, 0, 0, 0), //2004 夜光法师
        Array(8, 1, 1382104, 0, 0, 0), //法师
        Array(9, 1, 1382104, 0, 0, 0), //法师
        Array(10, 1, 1382104, 0, 0, 0), //法师
        Array(11, 1, 1452111, 0, 0, 0), //弓箭手
        Array(12, 1, 1462099, 0, 0, 0), //弩手
        Array(13, 1, 1522018, 0, 0, 0), //双弩
        Array(14, 1, 1242042, 0, 0, 0), //尖兵
        Array(15, 1, 1332130, 0, 0, 0), //暗影双刀
        Array(16, 1, 1332130, 0, 0, 0), //侠客
        Array(17, 1, 1362019, 0, 0, 0), //幻影
        Array(18, 1, 1472122, 0, 0, 0), //标飞
        Array(19, 1, 1482084, 0, 0, 0), //拳手
        Array(20, 1, 1482084, 0, 0, 0), //2005 隐月
        Array(21, 1, 1492085, 0, 0, 0), //船长
        Array(22, 1, 1532018, 0, 0, 0), //501 火炮手
        Array(23, 1, 1492085, 0, 0, 0), //508 龙的传人
        Array(24, 1, 1372084, 0, 0, 0), //龙神
        Array(100, 50, 1102466, 10, 10, 10), //高贵之神(全属性+10包含攻击魔功10点)
        Array(100, 100, 1702368, 10, 10, 10), //黑暗蝴蝶魔棒(全属性+10包含攻击魔功10点)
        Array(100, 100, 1112793, 10, 10, 10), //快乐指环(全属性+10包含攻击魔功10点)
        Array(100, 500, 1112164, 30, 30, 30), //夏日甜心名片戒指(全属性+30包含攻击魔功30点)
        Array(100, 500, 1112276, 30, 30, 30), //夏日甜心聊天戒指(全属性+30包含攻击魔功30点)
        Array(100, 500, 1102630, 50, 50, 50), //浪漫四翼天使(全属性+50包含攻击魔功50点)
        Array(101, 1000, 1082543, 0, 0, 0), // 战士系列 暴君西亚戴斯手套(无描述)
        Array(102, 1000, 1082544, 0, 0, 0), // 法师系列 暴君赫尔梅斯手套(无描述)
        Array(103, 1000, 1082545, 0, 0, 0), // 弓手系列 暴君凯伦手套(无描述)
        Array(104, 1000, 1082546, 0, 0, 0), // 飞侠系列 暴君利卡昂手套(无描述)
        Array(105, 1000, 1082547, 0, 0, 0), //  海盗系列 暴君阿尔泰手套(无描述)
        Array(101, 1500, 1132174, 0, 0, 0), // 战士系列 暴君西亚戴斯腰带(无描述)
        Array(102, 1500, 1132175, 0, 0, 0), // 法师系列 暴君赫尔梅斯腰带(无描述)
        Array(103, 1500, 1132176, 0, 0, 0), // 弓手系列 暴君凯伦腰带(无描述)
        Array(104, 1500, 1132177, 0, 0, 0), // 飞侠系列 暴君利卡昂腰带(无描述)
        Array(105, 1500, 1132178, 0, 0, 0) //  海盗系列 暴君阿尔泰腰带(无描述)
        );//jobtype,paylevel,weaponid,全属性,物攻,魔攻


var Newhand = Array(0, 2000, 2001, 2004, 100, 200, 300, 400, 500, 3000);//需要转职才能操作的职业
var pass = true;
var Weaponid = Array();


var slot = 0;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            im.dispose();
        } else if (a == 0) {
            RMB = im.getRMB();
            var TEMP;
            var Times = 0;
            var Text = "充点小钱玩一下吧。：\r\n现在您累计充值金额为： #r" + RMB + "#b\r\n\r\n#b"
            for (var i = 0; i < PayLevel.length; i++) {
                if (RMB >= PayLevel[i][1]) {
                    TEMP = im.getPQLog("累计" + (parseInt(PayLevel[i][1])) + "元礼包") >= 1 ? "#g(已领取)#b" : "#r(未领取)#b";
                    Text += "#L" + i + "# 累计" + PayLevel[i][1] + "元奖励。" + TEMP + "\r\n";
                    Times = i;
                }
            }
            if (RMB == 0) {
                Text += "#L" + (Times) + "#  >>> 累计" + PayLevel[Times][1] + "元奖励。 #r(下一阶段奖励)#b";
            } else if (RMB < 10000) {
                Text += "#L" + (Times + 1) + "#  >>> 累计" + PayLevel[Times + 1][1] + "元奖励。 #r(下一阶段奖励)#b";
            }
            im.sendSimple(Text);
        } else if (a == 1) {
            for (var i = 0; i < Newhand.length; i++) {
                if (im.getJobId() == Newhand[i]) {
                    pass = false;
                }
            }
            if (pass) {
                Times = selection;
                ChoosenRMB = PayLevel[Times][1];
                if (im.getPQLog("累计" + ChoosenRMB + "元礼包") == -1) {
                    im.sendOk("你不能重复领取礼包哟！\r\n 一个帐号只能领取一次！");
                    im.dispose();
                } else {
                    var Text = "累计充值满 #r" + ChoosenRMB + "#k 元您就可以获得：\r\n\r\n";
                    for (var i = 0; i < WeaponList.length; i++) {
                        if (ChoosenRMB == 1) {//Level 1
                            if (getJobType(im.getJobId()) == WeaponList[i][0]) {//职业类型 = 装备需要的
                                if (ChoosenRMB == WeaponList[i][1]) {//选择的等级 = 装备需要的
                                    Text += "#i" + WeaponList[i][2] + "# #t" + WeaponList[i][2] + "# x1 (独特)\r\n\r\n";//获取装备ID
                                }
                            }
                        } else {//其他Level
                            //im.playerMessage(1, getJobFamily(getJobType(im.getJobId())));
                            if (getJobFamily(getJobType(im.getJobId())) == WeaponList[i][0]) {//职业类型 = 装备需要的
                                if (ChoosenRMB == WeaponList[i][1]) {//选择的等级 = 装备需要的
                                    if (WeaponList[i][3] != 0) {
                                        Text += "#i" + WeaponList[i][2] + "# #t" + WeaponList[i][2] + "# x1(属性加强版)\r\n\r\n";//获取装备ID
                                    } else {
                                        Text += "#i" + WeaponList[i][2] + "# #t" + WeaponList[i][2] + "# x1 (独特)\r\n\r\n";//获取装备ID
                                    }
                                }
                            }
                        }
                    }
                    for (var i = 0; i < GiftList.length; i++) {
                        if (ChoosenRMB == GiftList[i][0]) {
                            if (GiftList[i][1] == 4310023) {
                                Text += "#i" + GiftList[i][1] + "#  #t" + GiftList[i][1] + "# （强化装备专用） x" + GiftList[i][2] + "\r\n\r\n"//获取装备ID
                            }else if (GiftList[i][1] == 4000858) {
                                Text += "#i" + GiftList[i][1] + "#  #t" + GiftList[i][1] + "# （强化保护专用） x" + GiftList[i][2] + "\r\n\r\n"//获取装备ID
                            }else{
                                Text += "#i" + GiftList[i][1] + "#  #t" + GiftList[i][1] + "# x" + GiftList[i][2] + "\r\n\r\n"//获取装备ID
                            }
                        }
                    }
                    im.sendNext(Text);
                }
            } else {
                im.sendOk("你必须得转职到2转才能查看或者领取累计充值奖励包哦~");
                im.dispose();
            }
        } else if (a == 2) {
            var SpaciousWeapon = new Array();
            var WeaponI = -1;
            if (RMB < ChoosenRMB) {
                im.sendOk("现在暂时不能领取哦！\r\n #d>> 您必须累计充值" + ChoosenRMB + "元，现在还差#r" + (ChoosenRMB - RMB) + " #d元。")
                im.dispose();
            } else if (im.getPQLog("累计" + ChoosenRMB + "元礼包") == -1) {
                im.sendOk("你不能重复领取礼包哟！\r\n 一个帐号只能领取一次！");
                im.dispose();
            } else {
                for (var i = 0; i < WeaponList.length; i++) {
                    if (ChoosenRMB == 1) {
                        if (getJobType(im.getJobId()) == WeaponList[i][0]) {//职业类型 = 装备需要的
                            if (ChoosenRMB == WeaponList[i][1]) {//选择的等级 = 装备需要的
                                Weaponid.push(WeaponList[i][2]);
                            }
                        }
                    } else {
                        if (getJobFamily(getJobType(im.getJobId())) == WeaponList[i][0]) {//职业类型 = 装备需要的
                            if (ChoosenRMB == WeaponList[i][1]) {//选择的等级 = 装备需要的
                                Weaponid.push(WeaponList[i][2]);
                                if (WeaponList[i][3] != 0) {
                                    SpaciousWeapon.push(true);
                                    WeaponI = i;
                                }
                            }
                        }
                    }
                }
                var getspace = Array(0, 0, 0, 0, 0, 0);
                //1 - 装备
                //2 - 消耗栏
                //3 - 设置栏
                //4 - 其他栏
                //5 - 特殊栏
                for (var i = 0; i < GiftList.length; i++) {
                    if (ChoosenRMB == GiftList[i][0]) {
                        if (GiftList[i][1] == 4000858 || GiftList[i][1] == 5062002 || GiftList[i][1] == 2340000 || GiftList[i][1] == 5064000) {//如果是中国心 高级神奇魔方 100个一组
                            getspace[parseInt(GiftList[i][1] / 1000000)] += Math.ceil(GiftList[i][2] / 100);
                            getspace[parseInt(GiftList[i][1] / 1000000)]--;
                        }
                        if (GiftList[i][1] == 4310023) {//幸运的铜币 1000个一组
                            getspace[parseInt(GiftList[i][1] / 1000000)] += Math.ceil(GiftList[i][2] / 1000);
                            getspace[parseInt(GiftList[i][1] / 1000000)]--;
                        }
                        getspace[parseInt(GiftList[i][1] / 1000000)]++;
                    }
                }
                getspace[1] += Weaponid.length;//加上武器的空间
                var CheckSpace = true;
                for (var i = 1; i < 6; i++) {
                    if (im.getSpace(i) < getspace[i]) {
                        CheckSpace = false;
                    }
                    //im.playerMessage(5, "" + i + " 要求" + getspace[i] + " 有 "+im.getSpace(i)+"");
                }
                if (CheckSpace == false) {
                    im.sendOk("背包的空间不足，请让您的背包:\r\n\r\n1、装备栏腾出" + getspace[1] + "格。\r\n2、消耗栏腾出" + getspace[2] + "格。\r\n3、设置栏腾出" + getspace[3] + "格。\r\n4、其他栏腾出" + getspace[4] + "格。\r\n5、特殊栏腾出" + getspace[5] + "格。");
                    im.dispose();
                } else {//获取道具部分
                    for (var i = 0; i < Weaponid.length; i++) {
                        if (SpaciousWeapon[i] == true) {
                            var ii = im.getItemInfo();
                            toDrop = ii.randomizeStats(ii.getEquipById(Weaponid[i])).copy(); // 生成一个Equip类(生成这个装备)
                            var j = 3;
                            for (var k = 0; k < 3; k++) {
                                setEquipStat(k, WeaponList[WeaponI][j]);
                                j++;
                            }
                            toDrop.setEquipOnlyId(cm.getMapleEquipOnlyId());
                            im.addFromDrop(im.getC(), toDrop, false);
                        } else {
                            im.gainItem(Weaponid[i], 1);
                        }
                    }
                    for (var i = 0; i < GiftList.length; i++) {
                        if (ChoosenRMB == GiftList[i][0]) {
                            im.gainItem(GiftList[i][1], GiftList[i][2]);//获取礼包内的物品
                        }
                    }
                    im.setPQLog("累计" + ChoosenRMB + "元礼包", -2);
                    im.playerMessage(1, "领取" + ChoosenRMB + "元礼包成功！");
                    im.worldSpouseMessage(0x18, "『累计充值奖励』" + " : " + "玩家 " + im.getChar().getName() + " 领取了累计充值" + ChoosenRMB + "元礼包！");
                    im.dispose();
                }
            }
        }//a
    }//mode
}//f

function getJobType(Jobid) {
    var JobList = Array(
            Array(0, 3100, 3110, 3111, 3112), //恶魔猎手
            Array(1, 3101, 3120, 3121, 3122), //恶魔复仇者
            Array(2, 100, 110, 111, 112), //英雄
            Array(3, 6000, 6100, 6110, 6112), //狂龙战士
            Array(4, 100, 130, 131, 132), //黑骑士
            Array(5, 2100, 2110, 2111, 2112), //战神 2000 战神
            Array(6, 100, 120, 121, 122), //圣骑士
            Array(7, 2700, 2710, 2711, 2712), //2004 夜光法师
            Array(8, 200, 210, 211, 212), //法师
            Array(9, 200, 220, 221, 222), //法师
            Array(10, 200, 230, 231, 232), //法师
            Array(11, 300, 310, 311, 312), //弓箭手
            Array(12, 300, 320, 321, 322), //弩手
            Array(13, 2300, 2310, 2311, 2312), //双弩
            Array(14, 3600, 3610, 3611, 3612), //尖兵
            Array(15, 430, 431, 432, 434), //暗影双刀
            Array(16, 400, 420, 421, 422), //侠客
            Array(17, 2400, 2410, 2411, 2412), //幻影
            Array(18, 400, 410, 411, 412), //标飞
            Array(19, 500, 510, 511, 512), //拳手
            Array(20, 2500, 2510, 2511, 2512), //2005 隐月
            Array(21, 500, 520, 521, 522), //船长
            Array(22, 501, 530, 531, 532), //501 火炮手
            Array(23, 570, 571, 572, 573)////508 龙的传人
            );
// 0,1,2,3,4,5,6 战士族
// 7,8,9,10,24 法师族
// 11,12,13 弓箭
// 14,15,16,17,18 飞侠族
// 19,20,21,22,23 海盗族

    var jobtype = 99;//默认为无效的类型
    for (var i = 0; i < JobList.length; i++) {
        for (var j = 1; j < 5; j++) {
            if (Jobid == JobList[i][j]) {
                jobtype = JobList[i][0];//得到职业的类型
            }
        }
    }
    if (Jobid == 2200 || Jobid == 2210 || Jobid == 2211 || Jobid == 2212 || Jobid == 2213 || Jobid == 2214 || Jobid == 2215 || Jobid == 2216 || Jobid == 2217 || Jobid == 2218) {
        jobtype = 24;//龙神的Type另外判断
    }
    return jobtype;
}

function getJobFamily(jobtype) {
// 0,1,2,3,4,5,6 战士族
// 7,8,9,10,24 法师族
// 11,12,13 弓箭手
// 14,15,16,17,18 飞侠族
// 19,20,21,22,23 海盗族
    var jobFamily = 100;//100 全职业 101 战士 102法师 103 弓箭手 104飞侠 105海盗
    for (var i = 0; i < 6; i++) {
        if (jobtype == i) {
            jobFamily = 101;
        }
    }
    if (jobtype == 7 || jobtype == 8 || jobtype == 9 || jobtype == 10 || jobtype == 24) {
        jobFamily = 102;
    }
    for (var i = 11; i < 13; i++) {
        if (jobtype == i) {
            jobFamily = 103;
        }
    }
    for (var i = 14; i < 18; i++) {
        if (jobtype == i) {
            jobFamily = 104;
        }
    }
    for (var i = 19; i < 23; i++) {
        if (jobtype == i) {
            jobFamily = 105;
        }
    }
    return jobFamily;
}


function setEquipStat(i, v) {//设置装备属性;
    switch (i) {
        case 0:
            toDrop.setStr(v);
            toDrop.setDex(v);
            toDrop.setInt(v);
            toDrop.setLuk(v);
            break;
        case 1:
            toDrop.setWatk(v);
            break;
        case 2:
            toDrop.setMatk(v);
            break;
    }
}