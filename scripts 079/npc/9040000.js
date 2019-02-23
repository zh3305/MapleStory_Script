/* 
 * @ Maker By Red Hat
 * 
 * Shuang, Victoria Road: Excavation Site<Camp> (101030104)
 * 
 * Start of Guild Quest
 */

var status;
var GQItems = new Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);

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
			cm.sendSimple("你想干些什么呢?#b\r\n#L0#开启家族任务#l\r\n#L1#加入你家族的家族任务#l");						
		}
		else if (status == 1) {
			if (selection == 0) { //Start
				if (cm.getPlayer().getGuildId() == 0 || cm.getPlayer().getGuildRank() >= 3) { //no guild or not guild master/jr. master
					cm.sendNext("只有族长和副族长才能开启家族任务.");
					cm.dispose();
				}
				else {
                                        var em = cm.getEventManager("GuildQuest");
                                        if (em == null) {
                                                cm.sendOk("这个任务副本目前正在制作中..");
                                        } else {
                                                if (getEimForGuild(em, cm.getPlayer().getGuildId()) != null) {
                                                        cm.sendOk("你的家族已经开启了家族任务,请稍候再试..")
                                                }
                                                else {
                                                        //start GQ
                                                        var guildId = cm.getPlayer().getGuildId();
                                                        var eim = em.newInstance(guildId);
                                                        em.startInstance(eim, cm.getPlayer().getName());
                                                        
                                                        var map = eim.getMapInstance(990000000);
                                                        
                                                        map.getPortal(5).setScriptName("guildwaitingenter");
                                                        map.getPortal(4).setScriptName("guildwaitingexit");
                                                        
                                                        eim.registerPlayer(cm.getPlayer());
                                                        cm.guildMessage("家族已经进入了家族任务. 请通过修安(Shuang)进入挖掘通道在 " + cm.getC().getChannel() + "线.");
                            cm.sendOk("请不要在倒计时内下线,否则将会中断任务.请不要使用@市场 指令,否则将出现NPC无效错误.")

                                                        //remove all GQ items from player entering
                                                        for (var i = 0; i < GQItems.length; i++) {
                                                                cm.removeAll(GQItems[i]);
                                                        }
                                                }
                                        }
                                        cm.dispose();
				}
			}
			else if (selection == 1) { //entering existing GQ
				if (cm.getPlayer().getGuildId() == 0) { //no guild or not guild master/jr. master
					cm.sendNext("你必须加入一个家族,然后再进入!");
					cm.dispose();
				}
				else {
                                        var em = cm.getEventManager("GuildQuest");
                                        if (em == null) {
                                                cm.sendOk("这个任务副本目前正在制作中..");
                                        } else {
                                                var eim = getEimForGuild(em, cm.getPlayer().getGuildId());
                                                if (eim == null) {
                                                        cm.sendOk("你的家族目前没有登记任务!");
                                                }
                                                else {
                                                        if ("true".equals(eim.getProperty("canEnter"))) {
                                                                eim.registerPlayer(cm.getPlayer());
                                                                
                                                                //remove all GQ items from player entering
                                                                for (var i = 0; i < GQItems.length; i++) {
                                                                        cm.removeAll(GQItems[i]);
                                                                }
                                                        }
                                                        else {
                                                                cm.sendOk("很遗憾,因为这个家族已经把你踢出任务了.请稍候再试!");
                                                        }
                                                }
                                        }
                                        cm.dispose();
                                }
			}
		}
	}
}

function getEimForGuild(em, id) {
        var stringId = "" + id;
        return em.getInstance(stringId);
}