var status = 0;
var selStr;
var sel;
var selitem;
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var vvv = "#fUI/UIWindow2.img/ValuePack/button/complete/0#"; //领取完成
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getChar().getMapId() == 744000000) {
            selStr = "还再等什么？去决战枫之高校吧#k.#b\r\n";
			//selStr += "进入要求1.转生次数必须达到30次(Vip6不需要).\r\n";
			//selStr += "进入要求2.Vip3~Vip5每天能进入2次,Vip6每天能进入4次.#k\r\n";
			selStr += "你今天已经进入： #r" + cm.getBossLog("高校") + "#k 次\r\n";
			//selStr += "你目前转生： #r" + cm.getChar().getReborns() + "#k 次\r\n";
            //selStr += "#L2#" + aaa + " 什么是精力？什么是枫叶高校#l\r\n";
			selStr += "#L1#" + aaa + " #r 进入高校#k#l\r\n";
			//selStr += "#L3#" + aaa + "  #r使用2000圣诞币进入枫之高校（无限制）#l#k\r\n";
			//selStr += "#L777#" + aaa + "  #r使用万能门票进入枫之高校（无限制）#l#k\r\n";
			//selStr += "#L2#" + aaa + "  什么是枫之高校#l\r\n";

            
            cm.sendSimple(selStr);
        } else {
            cm.dispose();
            cm.openNpc(9330192, 1);
        }
    } else if (status == 1) {
        sel = selection;
        if (sel == 1) {
            //if (cm.haveItem(5252017)) {
                var em = cm.getEventManager("fzgx");
                if (em == null) {
                    cm.sendOk("副本出错,请联系管理员!");
                } else {
					if(cm.getBossLog("高校") >= 5){
						cm.sendOk("每天只能上5次课哦！不然会闷死的！");
						cm.dispose();
						return;
					}
                    var prop = em.getProperty("started");
                    if (prop == null || prop.equals("false")) { //prop.equals("false") || 
                        em.startInstance_CharID(cm.getPlayer());
                        cm.resetBossLog("haogan" + 744000001);
                        cm.resetBossLog("haogandt");
                        for (var i = 4; i <= 15; i++) {
                            cm.resetBossLog("haogan" + (744000000 + i));
                        }
                        //cm.gainItem(5252017, -1);
						cm.setBossLog("高校");
                        //cm.laba(-3,cm.getChar().getName()+" began to challenge HighSchool in "+cm.getC().getChannel()+" channel.");
                        cm.worldSpouseMessage(0x15,"『枫之高校』: 玩家<" + cm.getChar().getName() + ">热血沸腾的进入了枫之高校");
						//cm.startTimeByStudy(cm.getChar());
                    } else {
                        cm.sendOk("这个频道已经有人在挑战了，请等会吧");
                    }
                }
            //} else {
                //cm.sendOk("你没有#z5252017#");
            //}
            cm.dispose();
        }
        if (sel == 2) {//#r#e<精力>#n#k\r\n每天在会员工资里面（市场3洞门口的NPC领取会员工资）每天不同会员等级领取的精力值不一样，详情请看市场二层会计小姐精力介绍\r\n
            cm.sendOk("#r#e<枫之高校>#k#n\r\n分为12关，和官方几乎一样，有的关卡完成后还需要等待1-2分钟（等的时间全看运气）\r\n每通过一关都会有4种不同的奖励（#r邮票，金牙，幸运币，彩虹枫叶#k）可选择\r\n#r#z4310023##k可以在4大天王保管箱换取到（椅子，巨人药水，点装）\r\n通过12关还可以获得一把130的武器（随机获得属性150-300）<所有新职业的武器已加入>");
            cm.dispose();
        }
		if (sel == 777) {
                var em = cm.getEventManager("Gxfb");
                if (em == null) {
                    cm.sendOk("副本出错,请联系管理员!");
                } else {
					if (!cm.haveItem(4033235,1)) {
				cm.sendOk("抱歉，你没有万能门票#v4033235#!");
                cm.dispose();
                return;
                }
					cm.gainItem(4033235,-1);
					cm.playerMessage(1, "         已消费一张万能门票");
                    var prop = em.getProperty("started");
                    if (prop == null || prop.equals("false")) { //prop.equals("false") || 
                        em.startInstance_CharID(cm.getPlayer());
                        cm.resetBossLog("haogan" + 744000001);
                        cm.resetBossLog("haogandt");
                        for (var i = 4; i <= 15; i++) {
                            cm.resetBossLog("haogan" + (744000000 + i));
                        }
                       // cm.gainItem(5252017, -1);
						//cm.setBossLog("高校");
                        //cm.laba(-3,cm.getChar().getName()+" began to challenge HighSchool in "+cm.getC().getChannel()+" channel.");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "『枫之高校』" + " : " + "玩家<" + cm.getChar().getName() + ">用圣诞币热血沸腾的进入了枫之高校"));
						cm.startTimeByStudy(cm.getChar());
                    } else {
                        cm.sendOk("这个频道已经有人在挑战了，请等会吧");
                    }
                }
            cm.dispose();
			}
        if (sel == 3) {
                var em = cm.getEventManager("Gxfb");
                if (em == null) {
                    cm.sendOk("副本出错,请联系管理员!");
                } else {
					if (cm.getHyPay(1) <= 2000) {
					cm.sendOk("对不起您没有2000圣诞币无法进入.");
					cm.dispose();
					return;
					}
					cm.addHyPay(2000,true);
					cm.playerMessage(1, "         已消费2000圣诞币          剩余:" + cm.getHyPay(1) + "圣诞币");
                    var prop = em.getProperty("started");
                    if (prop == null || prop.equals("false")) { //prop.equals("false") || 
                        em.startInstance_CharID(cm.getPlayer());
                        cm.resetBossLog("haogan" + 744000001);
                        cm.resetBossLog("haogandt");
                        for (var i = 4; i <= 15; i++) {
                            cm.resetBossLog("haogan" + (744000000 + i));
                        }
                       // cm.gainItem(5252017, -1);
						//cm.setBossLog("高校");
                        //cm.laba(-3,cm.getChar().getName()+" began to challenge HighSchool in "+cm.getC().getChannel()+" channel.");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "『枫之高校』" + " : " + "玩家<" + cm.getChar().getName() + ">用圣诞币热血沸腾的进入了枫之高校"));
						cm.startTimeByStudy(cm.getChar());
                    } else {
                        cm.sendOk("这个频道已经有人在挑战了，请等会吧");
                    }
                }
            cm.dispose();
			}
        cm.dispose();
    }
}
