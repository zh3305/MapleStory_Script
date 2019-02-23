/*
 * 斯乌11关超级副本
 * 菜菜制作 天天冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 */

var status = 0;
var minLevel = 200;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var maxPlay = 1;//每天能进行的组队任务数量
var MapList = Array(
        350050100, //黑色天堂拱门 - 进入通道1 10分钟
        350050200, //黑色天堂拱门 - 进入通道2 10分钟
        350050300, //电梯，之后出现怪物，消灭掉它们直接进入下一关 -162,-25|183,-25   |8250014
        350051000, //电梯到达 代码 D1 Z05 001
        350051050, //进入地图后消灭怪物，进入下一关 参考坐标 -66,61|314,61|634,61|1025,61|1349,61|950,-153
        350051100, //消灭怪物，获取证明：4009159，4009160 各50个进到第二个传送口，判断。
        350051150, //进来消除怪物，回到350051100，之后bh_1100_check1.js 判断是否350051150 没怪了，没怪的话允许前进！进入下一个地图
        350051200, //进来消除怪物，之后点击1540752，开放入口，之后NPC消失，允许前进，之后进入下一个地图
        350051250, //就是管道，之后直接破除障碍进入下一个地图
        350060000, //进入地图后消灭怪物，进入下一关
        350060160//BOSS地图
        );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMap().getId() == 350050000 || cm.getMap().getId() == 910000000)
            {
                cm.sendSimple("#e<斯乌副本>#n\r\n\r\n#d你想要带领队友进入挑战斯乌BOSS首领集团? 你们准备好了吗? 如果准备好了，请让你们的队长和我谈话……\r\n\r\n#b#L0#我想执行<斯乌>组队任务。#l\r\n#L1#我想了解一下该副本说明。#l\r\n ")
            } else {
                cm.sendSimple("你想放弃挑战离开这里吗？#b\r\n#L99# 离开这里。");
            }
        } else if (status == 1) {
            if (selection == 99) {
                cm.warp(910000000);
                cm.dispose();
            } else if (selection == 0) {
                if (cm.getBossLog("斯乌") >= maxPlay) {
                    cm.sendOk("今天你已经参与了" + maxPlay + "次，不能再参与该副本了！请明天赶早~");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("请叫队长和我谈话。");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    var idx = Array();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                        idx.push(cPlayer.getId());
                    }
                    if (getBossLog(idx) >= maxPlay) {
                        cm.sendOk("队伍中有玩家已经参与过该副本" + maxPlay + "次，无法再进入，请踢出该玩家。");
                        cm.dispose();
                        return;
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("siwu");
                        //cm.worldMessage(cm.getChar().getName() + "   带领他的队伍进入了玩具城101副本挑战任务.想去的快去组织队伍吧！");
                        if (em == null) {
                            cm.sendOk("目前正在整理该副本。等待开放。。");
                        } else {
                            var pass = true;
                            for (var keys in MapList) {
                                if (cm.getPlayerCount(MapList[keys]) != 0) {
                                    pass = false;
                                    break;
                                }
                            }
                            if (pass) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.setPartyBossLog("斯乌");
                                cm.spouseMessage(0x25, "" + cm.getPlayer().getName() + " 带领着他的队伍去挑战黑暗之翼斯乌了！大家一起为他们祈祷！");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("目前该频道已经有人在挑战，请换个频道重新进入。");
                                cm.dispose();
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                        cm.dispose();
                    }
                } //判断组队
            } else if (selection == 1) {
                cm.sendOk("副本总共有九个关卡，每天可进行一次，如果火力不足够，是很难完成任务的。击败最后关卡的就能开启#e#b神秘宝箱#n#k，里面有传说中的#b各种系列装备#k，还有各种新奇的椅子和装备，等等很多稀有物品哟！\r\n进入副本前，请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            }
            /*  } else if (status == 2) {
             if (cm.getPlayer().getCSPoints(1) >= 50000) {
             cm.gainNX(1,-50000);
             cm.resetBossLog("森兰丸");
             cm.sendOk("重置成功！");
             cm.dispose();
             } else {
             cm.sendOk("你的点卷不够，无法重置。");
             cm.dispose();
             }*/
        }
    }
}


function getBossLog(idx) {
    // var idStr = "";
    // for (var key in idx) {
    //     if (key == 0)
    //         idStr += idx[key];
    //     else
    //         idStr += "," + idx[key];
    // }
    // var sql = "SELECT max(count) as maxcount FROM bosslog where bossid = '斯乌' and characterid in (" + idStr + ") and to_days(time) = to_days(now());";
    // //java.lang.System.out.println(sql);
    // var conn = cm.getConnection();
    // var pstmt = .prepareStatement(sql);
    // bosslogSql = pstmt.executeQuery();
    // if (bosslogSql.next()) {
    //     return bosslogSql.getString("maxcount") * 1;
    // }
    // bosslogSql.close();
    // pstmt.close();
    // //conn.close();
    return 0;
}
