/* 
 * Shuang, Victoria Road: Excavation Site<Camp> (101030104)
 * Start of Guild Quest
 */

var status;
var GQItems = Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().hasEquipped(1032033)) {
            cm.sendOk("请把#b守护石耳环#k扔掉后再继续！");
            cm.dispose();
        } else {
            if (cm.getPlayer().getClient().getChannel() != 2) {
                cm.sendSimple("通往圣瑞尼亚城堡的城门就在前面了，你想做什么呢？ #b\r\n#L0#开始一个家族任务。#l\r\n#L1#加入家族任务。#l");
            } else {
                cm.sendOk("对不起，只能在除了第二频道以外才可以进行家族版的家族任务！！");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        if (selection == 0) { //开始
            if (cm.getPlayerStat("GID") == 0 || cm.getPlayerStat("GRANK") >= 3) { //不是族长副族长或者没有家族
                cm.sendNext("只有族长或者副族长才可以开始家族任务。");
                cm.dispose();
            } else {
                var em = cm.getEventManager("GuildQuest");
                if (em == null) {
                    cm.sendOk("现在家族任务还没有开放，请稍后再试。");
                } else {
                    var prop = em.getProperty("started");
                    if ((prop.equals("false") || prop == null) && em.getInstance("GuildQuest") == null) {
                        for (var i = 0; i < GQItems.length; i++) {
                            cm.removeAll(GQItems[i]);
                        }
                        em.startInstance(cm.getPlayer(), cm.getPlayer().getName());
                        em.setProperty("state", "0");
                        cm.guildMessage("家族任务已经创建，请家族成员前往" + cm.getClient().getChannel() + "频道的遗迹发掘地进入家族任务！");
                    } else {
                        cm.sendOk("已经有人在执行家族任务了，请换一个频道后再试。")
                    }
                }
                cm.dispose();
            }
        } else if (selection == 1) { //进入一个家族任务
            if (cm.getPlayerStat("GID") == 0) { //没家族
                cm.sendNext("如果你想进入家族任务的话，你必须要加入一个家族。");
                cm.dispose();
            } else {
                var em = cm.getEventManager("GuildQuest");
                if (em == null) {
                    cm.sendOk("现在家族任务还没有开放，请稍后再试。");
                } else {
                    var eim = em.getInstance("GuildQuest");
                    if (eim == null) {
                        cm.sendOk("现在家族任务还没有开始，请稍后再试。");
                    } else {
                        if (em.getProperty("guildid") != null && em.getProperty("guildid").equalsIgnoreCase("" + cm.getPlayerStat("GID"))) {
                            if (cm.getPlayer().isGM()) {
                                cm.sendOk("正在举行家族任务的不是您的家族，请检查后再试。\r\n 正在举行任务的家族： " + em.getProperty("guildid") + "，\r\n 你的家族： " + cm.getPlayerStat("GID"));
                            } else {
                                cm.sendOk("正在举行家族任务的不是您的家族，请检查后再试。");
                            }
                        } else if (em.getProperty("started").equals("false")) {
                            for (var i = 0; i < GQItems.length; i++) {
                                cm.removeAll(GQItems[i]);
                            }
                            eim.registerPlayer(cm.getPlayer());
                        } else {
                            cm.sendOk("对不起，您的家族任务已经开始了。\r\n你不能进入！");
                        }
                    }
                }
                cm.dispose();
            }
        }
    }
}
