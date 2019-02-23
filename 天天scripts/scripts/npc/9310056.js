/*
 脚本功能：英语村组队任务相关。
 */

var status = -1;
var letter = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var item;
var count = Array();//计算储存

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("你好，我是英语村的大卫先生！\r\n#b#L0#我要回答问题。#l\r\n#L1#离开英语村。#l");
    } else if (status == 1) {
        if (selection == 0) {
            var letters = cm.getPlayer().getEventInstance().getProperty("answer");//得到答案
            var needed = Array(letters.length);//得到答案的数组长度（1个答案有很多字母）
            var done = 0;
            if (!cm.isLeader() || cm.getPlayer().getEventInstance() == null) {
                cm.sendOk("请让你的组队长和我谈话。");
            } else {
                // 计算字母需要开始
                for (var i = 0; i < letters.length(); i++) {
                    for (var x = 0; x < letter.length; x++) {
                        if (letters.substring(i, i + 1).equals(letter[x])) {//配对答案道具ID
                            needed[i] = 3994059 + x;//创建需要物品的数组
                            //cm.playerMessage(needed[i]);//管理员测试用
                            //cm.gainItem(needed[i], 1)
                            break;
                        }
                    }
                }
                //计算答案数组内 重复的英文字母 并且判断，把次数加载到done 然后后面利用done来和答案数组的维数比较 如果一样 就通过
                for (var i = 0; i < needed.length; i++) {
                    var num = 0;
                    for (var x = 0; x < needed.length; x++) {
                        if (needed[x] == needed[i]) {
                            num++;//每个字母的个数
                        }
                    }
                    //开始判断物品 done是记载是否附合数组个数
                    if (cm.haveItem(needed[i], num)) {//如果角色有这个ID的话，done++
                        done++;
                    }
                    count.push(parseInt((cm.itemQuantity(needed[i]) / num)));//将所除得的储存起来，之后用冒泡法来排序
                }
                //冒泡排序法开始，取最小就是相应的组数！
                for (var i = 0; i < count.length; i++) {
                    for (var j = 0; j < count.length; j++) {
                        var temp;
                        if (count[i] < count[j]) {
                            temp = count[j];
                            count[j] = count[i];
                            count[i] = temp;
                        }
                    }
                }
                item = count[0];//最小的组数
                var lettersNot = 0;
                for (var i = 3994059; i < 3994085; i++) {
                    var aa = 0;
                    for (var x = 0; x < needed.length; x++) {
                        if (needed[x] == i) {
                            aa++;
                            break;
                        }
                    }
                    if (num == 0 && cm.haveItem(i, 1)) { //如果字母不在答案数组，且这个道具角色拥有
                        lettersNot++;
                    }
                }
                if (lettersNot > 0) {
                    cm.playerMessage("你身上的英语字母不附合答案的要求，请重试！");
                    cm.showEffect(true, "englishSchool/wrong/wrong_kor");
                    cm.playSound(true, "Party1/Failed");
					cm.dispose();
                } else if (done != needed.length) {
                    cm.playerMessage("有没有搞错？你是不是没有拿够我想要的单词？！");
                    cm.showEffect(true, "quest/party/wrong_kor");
                    cm.playSound(true, "Party1/Failed");
					cm.dispose();
                } else { //如果正确
                    cm.sendSimple("不错吗~！这么难的题目你都回答正确了！#b\r\n#L0# 领取奖励退出英语村。");
                }
            }
        } else if (selection == 1) {
            for (var i = 3994059; i < 3994085; i++) {
                cm.removeAll(i);
            }
            cm.warp(702090400, 0);
            cm.dispose();
        }
    } else if (status == 2) {
        for (var i = 3994059; i < 3994085; i++) {
            cm.givePartyItems(i, 0, true);
        }//删除组队字母物品
        cm.givePartyItems(4001137, item);
        cm.warpParty(702090400, 0);
    }
}