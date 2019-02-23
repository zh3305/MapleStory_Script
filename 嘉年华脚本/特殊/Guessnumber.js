/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：数字猜猜猜
 *  @Author Kent 
 */

var a = 0;
var randomNumber = Array();
var ca;
var year;
var month;
var day;
var hour;
var minute;
var second;
var n1;
var n2;
var n3;
var itemData = Array(
        2040008, //头盔防御诅咒卷轴
        2040009, //头盔防御诅咒卷轴
        2040010, //头盔体力诅咒卷轴
        2040011, //头盔体力诅咒卷轴
        2040014, //头盔命中诅咒卷轴70%
        2040015, //头盔命中诅咒卷轴30%
        2040103, //脸部装饰生命诅咒卷轴30%
        2040104, //脸部装饰生命诅咒卷轴70%
        2040108, //脸部装饰回避诅咒卷轴30%
        2040109, //脸部装饰回避诅咒卷轴70%
        2040203, //眼部装饰命中诅咒卷轴30%
        2040204, //眼部装饰命中诅咒卷轴70%
        2040208, //眼部装饰智力诅咒卷轴30%
        2040209, //眼部装饰智力诅咒卷轴70%
        2040304, //耳环智力诅咒卷轴
        2040305, //耳环智力诅咒卷轴
        2040308, //耳环防御力诅咒卷轴70%
        2040309, //耳环防御力诅咒卷轴30%
        2040404, //上衣防御诅咒卷轴
        2040405, //上衣防御诅咒卷轴
        2040410, //上衣运气诅咒卷轴70%
        2040411, //上衣运气诅咒卷轴30%
        2040508, //全身铠甲敏捷诅咒卷轴
        2040509, //全身铠甲敏捷诅咒卷轴
        2040510, //全身铠甲防御诅咒卷轴
        2040511, //全身铠甲防御诅咒卷轴
        2040604, //裤/裙防御诅咒卷轴
        2040605, //裤/裙防御诅咒卷轴
        2040606, //裤裙跳跃诅咒卷轴
        2040607, //裤裙跳跃诅咒卷轴
        2040608, //裤裙体力诅咒卷轴
        2040609, //裤裙体力诅咒卷轴
        2040610, //裤裙敏捷诅咒卷轴70%
        2040611, //裤裙敏捷诅咒卷轴30%
        2040712, //鞋子敏捷诅咒卷轴
        2040713, //鞋子敏捷诅咒卷轴
        2040714, //鞋子跳跃诅咒卷轴
        2040715, //鞋子跳跃诅咒卷轴
        2040716, //鞋子速度诅咒卷轴
        2040717, //鞋子速度诅咒卷轴
        2040807, //手套攻击诅咒卷轴
        2040808, //手套敏捷诅咒卷轴
        2040809, //手套敏捷诅咒卷轴
        2040810, //手套攻击诅咒卷轴
        2040811, //手套攻击诅咒卷轴
        2040814, //手套魔力诅咒卷轴70%
        2040815, //手套魔力诅咒卷轴30%
        2040878, //手套攻击诅咒卷轴
        2040904, //盾牌防御诅咒卷轴
        2040905, //盾牌防御诅咒卷轴
        2040916, //盾牌攻击诅咒卷轴70%
        2040917, //盾牌攻击诅咒卷轴30%
        2040921, //盾牌魔力诅咒卷轴70%
        2040922, //盾牌魔力诅咒卷轴30%
        2041026, //披风魔防诅咒卷轴
        2041027, //披风魔防诅咒卷轴
        2041028, //披风防御诅咒卷轴
        2041029, //披风防御诅咒卷轴
        2041030, //披风体力诅咒卷轴
        2041031, //披风体力诅咒卷轴
        2041032, //披风魔力诅咒卷轴
        2041033, //披风魔力诅咒卷轴
        2041034, //披风力量诅咒卷轴
        2041035, //披风力量诅咒卷轴
        2041036, //披风智力诅咒卷轴
        2041037, //披风智力诅咒卷轴
        2041038, //披风敏捷诅咒卷轴
        2041039, //披风敏捷诅咒卷轴
        2041040, //披风运气诅咒卷轴
        2041041, //披风运气诅咒卷轴
        2041204, //项链运气诅咒卷轴30%
        2041205, //项链运气诅咒卷轴70%
        2041209, //项链力量诅咒卷轴30%
        2041210, //项链力量诅咒卷轴70%
        2043004, //单手剑攻击诅咒卷轴
        2043005, //单手剑攻击诅咒卷轴
        2043006, //单手剑魔力诅咒卷轴70%
        2043007, //单手剑魔力诅咒卷轴30%
        2043104, //单手斧攻击诅咒卷轴
        2043105, //单手斧攻击诅咒卷轴
        2043204, //单手钝器攻击诅咒卷轴
        2043205, //单手钝器攻击诅咒卷轴
        2043304, //短剑攻击诅咒卷轴
        2043305, //短剑攻击诅咒卷轴
        2043704, //短杖魔力诅咒卷轴
        2043705, //短杖魔力诅咒卷轴
        2043804, //长杖魔力诅咒卷轴
        2043805, //长杖魔力诅咒卷轴
        2044004, //双手剑攻击诅咒卷轴
        2044005, //双手剑攻击诅咒卷轴
        2044104, //双手斧攻击诅咒卷轴
        2044105, //双手斧攻击诅咒卷轴
        2044204, //双手钝器攻击诅咒卷轴
        2044205, //双手钝器攻击诅咒卷轴
        2044304, //枪攻击诅咒卷轴
        2044305, //枪攻击诅咒卷轴
        2044404, //矛攻击诅咒卷轴
        2044405, //矛攻击诅咒卷轴
        2044504, //弓攻击诅咒卷轴
        2044505, //弓攻击诅咒卷轴
        2044604, //弩攻击诅咒卷轴
        2044605, //弩攻击诅咒卷轴
        2044704, //拳套攻击诅咒卷轴
        2044705, //拳套攻击诅咒卷轴
        1302128, //火柴
        3010124, //
        3010149,
        3010157,
        3010167,
        3010168,
        3010288,
        3010401,
        3010703,
        3015031,
        3010501,
        3015004,
        3015030,
        1042187, //, //粉红绒绒衫
        1042174, //, //野营服
        1042149, //, //灰条纹休闲衫
        1702371, //, //舞杖
        1702382, //, //中秋柿子树枝
        1702388, //, //熊宝宝是个能手巧匠
        1072437, //, //PB拖拖
        //1072348, //, //大象拖
        1003268, //, //粉嫩爱心帽
        1003237, //, //狮子宝宝帽
        1003038, //, //SD娃娃头
        1102488, //, //蛋糕杯气球
        1102549, //, //管家的猫咪
        1102450 //, //天使光芒之翼
        );
var pass = true;
var correct = 0;
var NumberPosition = Array();


function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            cm.dispose();

        updateDate();
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            for (var i = 1; i < 5; i++) {
                if (cm.getSpace(i) < 5) {
                    pass = false;
                }
            }
            if (cm.getPQLog('数字猜猜猜') >= 5) {
                cm.sendOk("对不起，数字猜猜猜活动一天只能进行#e#r5#n#k次。");
                cm.dispose();
            } else if (minute >= 30 && minute <= 40) {
                cm.sendSimple("万众期待的HOTTIME时间又到了！亲爱的冒险家，请问你要做什么呢？\r\n#b#L0# 我要玩数字猜猜猜活动！\r\n#L1# 介绍一下此活动。");
            } else {
                cm.sendOk("对不起,活动未开启，数字猜猜猜活动只在每小时的 #r30分 - 40分#k 开放。");
                cm.dispose();
            }
        } else if (a == 1) {
            if (selection == 0) {//我要玩数字猜猜猜活动！
                if (pass) {
                    cm.sendNextS("系统将随机产生10个数字，请您做好准备记录下这10个数字。\r\n#r -- 点击下一步开始产生。\r\n #r-- 如果切断对话，参加活动所需的物品不归还。", 3);
                } else {
                    cm.sendOk("请让你的所有背包栏空出5个格子。");
                    cm.dispose();
                }
            } else if (selection == 1) {//介绍一下此活动。
                a = -1;
                cm.sendNext("#e数字猜猜猜活动游戏规则：#n#d\r\n\r\n1）系统会随机给出10个数字，并且公示。\r\n2）这10个数字将被打乱，且隐藏。\r\n3）玩家会被随机提问第N个数字是什么\r\n如果回答正确即可得到奖励！\r\n4）玩家一共有3次提问的机会。#e\r\n\r\n5）奖池中有随机5个道具 \r\n - 回答正确1次，随机从里面得到1个道具。\r\n - 回答正确2次，随机从里面得到3个道具。\r\n - 回答正确3次，奖池内所有道具都带走！#n\r\n\r\n 参加活动的时候切记您的所有背包空格都有5格以上的空间。");
            }//selection
        } else if (a == 2) {
            var temp;
            var i = 0;
            while (i < 10) {
                temp = Math.floor(Math.random() * 40);
                if (checkid(temp)) {
                    randomNumber.push(temp);//随机0~39
                    i++;
                }
            }
            var text = "这10个随机数字依次为：\r\n #r- 请拿起您的笔记下这随机的数字！\r\n\r\n#d";
            for (var i = 0; i < randomNumber.length; i++) {
                text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + "\r\n";
            }
            cm.sendNextS(text, 3);
        } else if (a == 3) {
            cm.sendNextS("正在打乱这10个数字，请点击下一步……。", 3);
        } else if (a == 4) {
            randomNumber.sort(function () {
                return 0.5 - Math.random();
            });//随机打乱
            var temp = Math.floor(Math.random() * 10) + 1;
            var i = 0;
            while (i < 3) {
                temp = Math.floor(Math.random() * 10) + 1;
                //cm.sendY(temp)
                if (checkNumberPosition(temp)) {
                    NumberPosition.push(temp);//随机1~10
                    i++;
                }
            }//随机位数的数字猜
            cm.sendGetNumber("现在请您输入第" + NumberPosition[0] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999);
        } else if (a == 5) {
            n1 = selection; //记录玩家第一次输入
            cm.sendGetNumber("现在请您输入第" + NumberPosition[1] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999);
        } else if (a == 6) {
            n2 = selection;
            cm.sendGetNumber("现在请您输入第" + NumberPosition[2] + "个数字：\r\n #r-- 如果切断对话，参加活动所需的物品不归还。\r\n", 0, 0, 999);
        } else if (a == 7) {
            n3 = selection;
            cm.sendNextS("你所输入的数字为：\r\n\r\n 第" + NumberPosition[0] + "个数字 -- " + n1 + "\r\n 第" + NumberPosition[1] + "个数字 -- " + n2 + "\r\n 第" + NumberPosition[2] + "个数字 -- " + n3 + ".", 3);
        } else if (a == 8) {
            var text = "现在我来公布结果：\r\n 经过打乱后的10个数字为：\r\n\r\n#b";
            for (var i = 0; i < randomNumber.length; i++) {
                if (i == (NumberPosition[0] - 1)) {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + " #r( 您的答案为：" + n1 + ")#b\r\n";
                } else if (i == (NumberPosition[1] - 1)) {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + " #r( 您的答案为：" + n2 + ")#b\r\n";
                } else if (i == (NumberPosition[2] - 1)) {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + " #r( 您的答案为：" + n3 + ")#b\r\n";
                } else {
                    text += "第" + (i + 1) + "个数字为： - " + randomNumber[i] + "\r\n";
                }
            }
            cm.sendNextS(text, 3);
        } else if (a == 9) {//判断是否答对部分
            if (randomNumber[NumberPosition[0] - 1] == n1) {
                correct += 1;
            }
            if (randomNumber[NumberPosition[1] - 1] == n2) {
                correct += 1;
            }
            if (randomNumber[NumberPosition[2] - 1] == n3) {
                correct += 1;
            }
            var text = "系统判断您一共答对了" + correct + "次。\r\n\r\n现在奖池里面有下列的道具(随机5个)：\r\n\r\n#b";

            itemData.sort(function () {
                return 0.5 - Math.random();
            });//随机打乱道具池
            for (var i = 0; i < 5; i++) {//拿前5个
                text += "#i" + itemData[i] + "#   #z" + itemData[i] + "#\r\n\r\n";
            }
            cm.sendNextS(text + "#d\r\n\r\n - 回答正确1次，随机从里面得到1个道具。\r\n - 回答正确2次，随机从里面得到2个道具。\r\n - 回答正确3次，奖池里面刀客i全部带走！", 3);
        } else if (a == 10) {
            if (correct == 0) {//没回答正确
                cm.sendOk("对不起，你没有回答正确。\r\n领取物品的必要条件是必须至少回答一个正确。");
                cm.dispose();
            } else if (correct == 3) {//全部回答正确
                var text = "恭喜你！回答3个全部正确！你将获取奖池内的所有物品！\r\n\r\n#b";
                for (var i = 0; i < 5; i++) {//拿前5个
                    text += "#i" + itemData[i] + "#   #z" + itemData[i] + "#\r\n\r\n";
                }
                cm.sendNextS(text + "#d\r\n\r\n请妥善保管哦！", 3);
            } else if (correct == 1) {//正确1个
                cm.gainItem(itemData[0], 1);
                cm.sendOk("赠送成功！ 喜欢奖池里面的道具吗？");
                cm.dispose();
            } else if (correct == 2) {//2个正确
                var text = "恭喜你！回答正确" + correct + "次，按照规则，你将获取奖池内的：\r\n\r\n#b";
                for (var i = 0; i < 2; i++) {
                    text += "#i" + itemData[i] + "#   #z" + itemData[i] + "#\r\n\r\n";
                }
                a = 11;
                cm.sendNextS(text + "#d\r\n\r\n请妥善保管哦！", 3);
            } else {
                cm.sendOk("错误！请和管理员联系。\r\n错误代码：" + correct);
            }
            cm.setPQLog('数字猜猜猜');
        } else if (a == 11) {//全部正确
            for (var i = 0; i < 3; i++) {//拿前5个
                cm.gainItem(itemData[i], 1);
            }
            cm.sendOk("赠送成功！ 喜欢奖池里面的道具吗？");
            cm.dispose();
        } else if (a == 12) {//2题
            for (var i = 0; i < 2; i++) {
                cm.gainItem(itemData[i], 1);
            }
            cm.sendOk("赠送成功！ 喜欢奖池里面的道具吗？");
            cm.dispose();
        }//a
    }//mode
}//f


function checkid(number) {//检查是否重复
    var i = 0;
    while (randomNumber.length >= i) {
        if (randomNumber[i] == number) {
            return false;
        }
        i++;
    }
    return true;
}

function updateDate() {//更新时间
    ca = java.util.Calendar.getInstance();
    year = ca.get(java.util.Calendar.YEAR); //获得年份
    month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
    day = ca.get(java.util.Calendar.DATE);//获取日
    hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
    minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
    second = ca.get(java.util.Calendar.SECOND); //获得秒
}

function checkNumberPosition(number) {//检查是否重复
    var i = 0;
    while (NumberPosition.length >= i) {
        if (NumberPosition[i] == number) {
            return false;
        }
        i++;
    }
    return true;
}