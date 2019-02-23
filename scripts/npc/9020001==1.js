importPackage(java.awt);

var status;
var curMap;
var playerStatus;
var chatState;
var questions = Array("���ȸ����һ�����⣡����ϸ���ã���Ϊһ��սʿ������1ת��ʱ����Ҫ�ﵽ�ĵȼ��Ƕ��٣���ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡ ����ϸ���ã���Ϊһ��սʿ������1ת��ʱ����Ҫ����������ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ��Ϊһ����ʦ������1ת��ʱ����Ҫ����������ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ��Ϊһ�������֣�����1ת��ʱ����Ҫ���ݵ�����ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ��Ϊһ������������1ת��ʱ����Ҫ���ݵ�����ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ����ְҵ��2ת��ʱ����Ҫ�ﵽ�ĵȼ��Ƕ��٣���ô�뽻����ͬ��������ͨ��֤��");
var qanswers = Array(10, 35, 20, 25, 25, 30);
var party;
var preamble;
var stage2rects = Array(Rectangle(-755,-132,4,218),Rectangle(-721,-340,4,166),
			Rectangle(-586,-326,4,150),Rectangle(-483,-181,4,222));
var stage2combos = Array(Array(0,1,1,1),Array(1,0,1,1),Array(1,1,0,1),Array(1,1,1,0));
var stage3rects = Array(Rectangle(608,-180,140,50),Rectangle(791,-117,140,45),
			Rectangle(958,-180,140,50),Rectangle(876,-238,140,45),
			Rectangle(702,-238,140,45));
var stage3combos = Array(Array(0,0,1,1,1),Array(0,1,0,1,1),Array(0,1,1,0,1),
			Array(0,1,1,1,0),Array(1,0,0,1,1),Array(1,0,1,0,1),
			Array(1,0,1,1,0),Array(1,1,0,0,1),Array(1,1,0,1,0),
			Array(1,1,1,0,0));
var stage4rects = Array(Rectangle(910,-236,35,5),Rectangle(877,-184,35,5),
			Rectangle(946,-184,35,5),Rectangle(845,-132,35,5),
			Rectangle(910,-132,35,5),Rectangle(981,-132,35,5));
var stage4combos = Array(Array(0,0,0,1,1,1),Array(0,0,1,0,1,1),Array(0,0,1,1,0,1),
			Array(0,0,1,1,1,0),Array(0,1,0,0,1,1),Array(0,1,0,1,0,1),
			Array(0,1,0,1,1,0),Array(0,1,1,0,0,1),Array(0,1,1,0,1,0),
			Array(0,1,1,1,0,0),Array(1,0,0,0,1,1),Array(1,0,0,1,0,1),
			Array(1,0,0,1,1,0),Array(1,0,1,0,0,1),Array(1,0,1,0,1,0),
			Array(1,0,1,1,0,0),Array(1,1,0,0,0,1),Array(1,1,0,0,1,0),
			Array(1,1,0,1,0,0),Array(1,1,1,0,0,0));
var eye = 9300002;
var necki = 9300000;
var slime = 9300003;
var monsterIds = Array(eye, eye, eye, 
			necki, necki, necki, necki, necki, necki,
			slime);
var prizeIdScroll = Array(2040502,2040505,2040514,2040517, 	// overall
			2040802, 2040805,			// glove 
			2040002, 2040402, 2040602, 2040902, 	// armor def (top/bottom/shield/hat)
			2044502, 2044702, 2044602, 2043302, 	// weapon atk
			2043102, 2043202, 2043002, 2044402,
			2044302, 2044102, 2044202, 2044002);
var prizeIdUse = Array( 2000001, 2000002, 2000003, 2000006,	// orange white blue manalixir pots
			2000004, 2000005, 2001000, 2001001,	// elix/p.elix, watermelon/sundae
			2002006, 2002007, 2002008, 2002010);	// warrior/sniper/magic/speed pills
var prizeQtyUse = Array(100, 75, 100, 45,
			20, 10, 35, 30,
			10, 10, 10, 10);
var prizeIdEquip = Array(1032000, 1032009, 1032004, 1032005, 	// 20-25 earrings
			1032006, 1032007, 1032010,		// 30 earrings
			1032002, 1032008,			// 35 earrings
			1002026, 1002089, 1002090);		// bamboo hats
var prizeIdEtc = Array( 4010000, 4010001, 4010002, 4010003,	// Mineral ores
			4010004, 4010005, 4010006,		// Mineral ores + gold
			4020000, 4020001, 4020002, 4020003,	// Jewel ores
			4020004, 4020005, 4020006,		// Jewel ores
			4020007, 4020007, 4003000);		// Diamond/BC/screws	
var prizeQtyEtc = Array(15, 15, 15, 15,
			15, 15, 8,
			15, 15, 15, 15,
			15, 15, 15,
			8, 5, 20);
			

function start() {
    status = -1;
    mapId = cm.getMapId();
    if (mapId == 910340100) {
        curMap = 1;
    } else if (mapId == 910340200) {
        curMap = 2;
    } else if (mapId == 910340300) {
        curMap = 3;
    } else if (mapId == 910340400) {
        curMap = 4;
    } else if (mapId == 910340500) {
        curMap = 5;
    }
    playerStatus = cm.isLeader();
    preamble = null;
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
		if (curMap == 1) { // First Stage.
			if (playerStatus) { // party leader
				if (status == 0) {
					var eim = cm.getChar().getEventInstance();
					party = eim.getPlayers();
					preamble = eim.getProperty("leader1stpreamble");
					if (preamble == null) {
						cm.sendNext("Hello,��ӭ���ĵ�һ�׶Ρ��������ܣ���ῴ���ܶ������ε������������ǣ����Ǿͻ������#bpasses#k�ӳ�Ӧ�ö���˵�����ռ�����ͬ������#bpasses#kΪ�ش���������Ҹ����ǡ�\r\n������ռ�������#bpasses#k���Ҹ���#bpass#k�ó�Ա�������еĶ�Ա�ۼ���#bpasses#k�͸����ǵĶӳ����ӳ�������#bpasses#k������˵�������׶εĽ��̡��������չ˵Ľ׶Σ�����Ľ׶ξͿ�����ս����ˣ��ҽ������չ˿��ٺ�Ѹ�١���ô����õ�����ˡ�");
						eim.setProperty("leader1stpreamble","done");
						cm.dispose();
					}
					else { // check how many they have compared to number of party members
                        			// check for stage completed
                        			var complete = eim.getProperty(curMap.toString() + "stageclear");
                        			if (complete != null) {
                        				cm.sendNext("��Ͻ�ȥ��һ��,���Ѿ�����");
                        				cm.dispose();
                        			}
                        			else {
							var numpasses = party.size()-1;
							var passes = cm.haveItem(4001008,numpasses);
							var strpasses = "#b" + numpasses.toString() + " passes#k";
							if (!passes) {
								cm.sendNext("�Բ������ͨ��֤û�дﵽָ������Ŀ������Ҫ��ָ����ͨ��֤��Ŀ����;Ӧ���Ķ�Ա��Ŀ��ȥ��Ķӳ��� " + strpasses + " ������ȷ�Ľ׶Ρ��������Ķ�Ա������⣬�ռ���ͨ��֤���������Ǹ���.");
								cm.dispose();
							}
							else {
								cm.sendNext("�����Ѿ�ͨ�� " + strpasses + "! ��ϲ�����ɱ��׶ε���ս! �ҽ��򿪴����ţ�����ҽ��뵽��һ�ص���ս. ��Ϊ����������ʱ�����ƣ�����ץ��ʱ�䣬ף��Һ���!");
								clear(1,eim,cm);
								cm.givePartyExp(100, party);
								cm.gainItem(4001008,-numpasses);
								cm.dispose();
								// TODO: make the shiny thing flash
							}
						}
					}
				}
				/*debug
				cm.sendNext("��ã������ֻ��һ������.");
				cm.dispose();*/
			}
			else { // non leader
				var eim = cm.getChar().getEventInstance();
				pstring = "member1stpreamble" + cm.getChar().getId().toString();
				preamble = eim.getProperty(pstring);
				if (status == 0 && preamble == null) {
					var qstring = "member1st" + cm.getChar().getId().toString();
					var question = eim.getProperty(qstring);
					if (question == null) {
						// Select a random question to ask the player.
						var questionNum = Math.floor(Math.random() * questions.length);
						eim.setProperty(qstring, questionNum.toString());
					}
					cm.sendNext("���������Ҫ�ռ�#bcoupons#k����ͬ����Ŀ��Ligators��Ϊ�ش����ʸ���");
					
				}
				else if (status == 0) {// otherwise
                        		// check for stage completed
                        		var complete = eim.getProperty(curMap.toString() + "stageclear");
                        		if (complete != null) {
                        			cm.sendNext("��Ͻ�ȥ��һ��,���Ѿ�����");
                        			cm.dispose();
                        		}
                        		else {
						// else correct/incorrect response to question here
						var qstring = "member1st" + cm.getChar().getId().toString();
						var numcoupons = qanswers[parseInt(eim.getProperty(qstring))];
						var qcorr = cm.haveItem(4001007,(numcoupons+1));
						var enough = false;
						if (!qcorr) { // not too many
							qcorr = cm.haveItem(4001007,numcoupons);
							if (qcorr) { // just right
								cm.sendNext("������ȷ�Ĵ𰸣�������ղ��յ���#bpass#k�뽻����Ķӳ���");
								cm.gainItem(4001007,-numcoupons);
								cm.gainItem(4001008,1);
								enough = true;
							}
						}
						if (!enough) {
							cm.sendNext("�ܱ�Ǹ������������! ����ϸ�������⣬����������ȷ������ͨ��֤��.");
						}
						cm.dispose();
					}
				}
				else if (status == 1) {
					if (preamble == null) {
						var qstring = "member1st" + cm.getChar().getId().toString();
						var question = parseInt(eim.getProperty(qstring));
						cm.sendNextPrev(questions[question]);
					}
					else { // shouldn't happen, if it does then just dispose
						cm.dispose();
					}
						
				}
				else if (status == 2) { // preamble completed
					eim.setProperty(pstring,"done");
					cm.dispose();
				}
				else { // shouldn't happen, but still...
					eim.setProperty(pstring,"done"); // just to be sure
					cm.dispose();
				}
			}
		} // end first map scripts
		
		else if (2 <= curMap && 4 >= curMap) {
			rectanglestages(cm);
		}
		else if (curMap == 5) { // Final stage
			var eim = cm.getChar().getEventInstance();
			var stage5done = eim.getProperty("5stageclear");
			if (stage5done == null) {
				if (playerStatus) { // Leader
					var map = eim.getMapInstance(cm.getChar().getMapId());
					var passes = cm.haveItem(4001008,10);
					if (passes) {
						// clear
						cm.sendNext("���Ǹ����񣬵������ڹ�ȥ������׶Ρ�����һ���׶Σ���������ܹ��ﾭ����ø����ɡ�������һ�״�����ʱ����Ѱ�Ҿ����ܶ�ģ�������ʱ�����뿪�ý׶��С�ͬ����ף�ؽ�������н׶Ρ�");
						party = eim.getPlayers();
						cm.gainItem(4001008,-10);
						clear(5,eim,cm);
						cm.givePartyExp(1500, party);
						cm.dispose();
					}
					else { // not done yet
						cm.sendNext("��ӭ������5�κ����׶Ρ�����������ͼ��������ҵ�һЩ���������е��ˣ��ռ���#bthe passes#k�����������ҡ��ڶӳ��½��ռ���Ȼ�������Ǹ���һ��#bpasses#k�ۼ��ˡ������������Ϥ���㣬�����ǿ��ܻ�ԶԶ��������ã�������С�ġ�ף�����ˣ�����Ͷ�ߣ�������ǿ���Ե�Ҫɱ�����е��࣡������һ�㣡 ");
					}
					cm.dispose();
				}
				else { // Members
					cm.sendNext("��ӭ������5�κ����׶Ρ�����������ͼ���㽫�ܹ��ҵ�һЩ�������������У��ռ���#bpasses#k�����������ǵ����Ķӳ���һ�������ʱ�����ظ��ң��ռ����Ľ����� ");
					cm.dispose();
				}
			}
			else { // give rewards and warp out
				if (status == 0) {
					cm.sendNext("�������ţ���ͨ�������н׶ν�������һ�㡣������һ��С��Ϊ�������ĳ�ɫ���������������������ǣ���ȷ������ʹ�õ���Ʒ��Ҫ�пո� \r\n#b�㽫�޷��յ���Ʒ���������û�пո�!#k");
				}
				if (status == 1) {
					getPrize(eim,cm);
					cm.dispose();
				}
			}
		}
		// etc
                else { // no map found
                        cm.sendNext("��Ч�ļƻ�������ζ�����ֽ׶��ǲ�������.");
                        cm.dispose();
                }
	}
}

function clear(stage, eim, cm) {
	eim.setProperty(stage.toString() + "stageclear","true");
	var packetef = MaplePacketCreator.showEffect("quest/party/clear");
	var packetsnd = MaplePacketCreator.playSound("Party1/Clear");
	var packetglow = MaplePacketCreator.environmentChange("gate",2);
	var map = eim.getMapInstance(cm.getChar().getMapId());
	map.broadcastMessage(packetef);
	map.broadcastMessage(packetsnd);
	map.broadcastMessage(packetglow);
	var mf = eim.getMapFactory();
	map = mf.getMap(103000800 + stage);
	var nextStage = eim.getMapInstance(103000800 + stage);
	var portal = nextStage.getPortal("next00");
	if (portal != null) {
		portal.setScriptName("kpq" + (stage+1).toString());
	}
	else { // into final stage
		//cm.sendNext("Initiating final stage monsters...");
		// spawn monsters - removed since lerks patch makes -1 monsters spawn ONCE anyway
		// var map = eim.getMapInstance(103000804);
		// map.spawnMonsters(monsterIds);
	}
}

function failstage(eim, cm) {
	var packetef = MaplePacketCreator.showEffect("quest/party/wrong_kor");
	var packetsnd = MaplePacketCreator.playSound("Party1/Failed");
	var map = eim.getMapInstance(cm.getChar().getMapId());
	map.broadcastMessage(packetef);
	map.broadcastMessage(packetsnd);
}

function rectanglestages (cm) {
	// debug makes these stages clear without being correct
	var debug = false;
	var eim = cm.getChar().getEventInstance();
	if (curMap == 2) {
		var nthtext = "2nd";
		var nthobj = "ropes";
		var nthverb = "hang";
		var nthpos = "hang on the ropes too low";
		var curcombo = stage2combos;
		//var curtestcombo = [0,0,0,1];
		var currect = stage2rects;
		var objset = [0,0,0,0];
	}
	else if (curMap == 3) {
		var nthtext = "3rd";
		var nthobj = "platforms";
		var nthverb = "stand";
		var nthpos = "stand too close to the edges";
		var curcombo = stage3combos;
		//var curtestcombo = [0,0,1,0,0];
		var currect = stage3rects;
		var objset = [0,0,0,0,0];
	}
	else if (curMap == 4) {
		var nthtext = "4th";
		var nthobj = "barrels";
		var nthverb = "stand";
		var nthpos = "stand too close to the edges";
		var curcombo = stage4combos;
		//var curtestcombo = [0,1,0,0,0,0];
		var currect = stage4rects;
		var objset = [0,0,0,0,0,0];
	}
        if (playerStatus) { // leader
                if (status == 0) {
                        // check for preamble
                     
                        party = eim.getPlayers();
                        preamble = eim.getProperty("leader" + nthtext + "preamble");
                        if (preamble == null) {
                                cm.sendNext("�ˡ���ӭ����" + nthtext + " �Ľ׶Ρ����Աߣ���ῴ��һЩ" + nthobj + ". ����Щ" + nthobj + ",  #b��3�أ��������͵���һ�׶�#k��������Ҫ��������#b�Ķ�Ա�ҵ���ȷ��" + nthobj + "��" + nthverb + "��.#k\r\nBUT �����ⲻ����Ϊ�������" + nthobj + ";�뿿���м��" + nthobj + "����һ����ȷ�Ĵ𰸡����⣬ֻ��3����Ա�ǲ���������" + nthobj + " ��һ��" + nthverb + "������������˵���ӳ�����˫��������飬�����𰸵���ȷ���k���ڣ��ҵ���ȷ��" + nthobj + "��" + nthverb + "�ԣ�");
                                eim.setProperty("leader" + nthtext + "preamble","done");
                                var sequenceNum = Math.floor(Math.random() * curcombo.length);
                                eim.setProperty("stage" + nthtext + "combo",sequenceNum.toString());
                                cm.dispose();
                        }
                        else {
                        	// otherwise
                        	// check for stage completed
                        	var complete = eim.getProperty(curMap.toString() + "stageclear");
                        	if (complete != null) {	
                        		var mapClear = curMap.toString() + "stageclear";
                        		eim.setProperty(mapClear,"true"); // Just to be sure
                        		cm.sendNext("Please hurry on to the next stage, the portal opened!");
                        	}
                        	// check for people on ropes
                        	else { 
                        	        // check for people on ropes(objset)
                        	        var totplayers = 0;
                        	        for (i = 0; i < objset.length; i++) {
                        	                for (j = 0; j < party.size(); j++) {
                        	                        var present = currect[i].contains(party.get(j).getPosition());
                        		                        if (present) {
                        	                                objset[i] = objset[i] + 1;
                        	                                totplayers = totplayers + 1;
                        	                        }
                        	                }
                        	        }
                        	        // compare to correct
                        	        // first, are there 3 players on the objset?
                        	        if (totplayers == 3 || debug) {
                        	                var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        	                // debug
                        	                // combo = curtestcombo;
                        	                var testcombo = true;
                        	                for (i = 0; i < objset.length; i++) {
                        	                	if (combo[i] != objset[i])
                        	                		testcombo = false;
                        	                }
                        	                if (testcombo || debug) {
                        	                        // do clear
                        	                        clear(curMap,eim,cm);
                        	                        var exp = (Math.pow(2,curMap) * 50);
                        	                        cm.givePartyExp(exp, party);
                        	                        cm.dispose();
                        	                }
                        	                else { // wrong
                        	                        // do wrong
                        	                        failstage(eim,cm);
                        	                        cm.dispose();
                        	                }
                        	        }
                        	        else {
                        	                // oops, it doesn't display fail if you're not on the ropes
                        	                // failstage(eim,cm);
                        	                if (debug) {
                        	               		var outstring = "Objects contain:"
                        	               		for (i = 0; i < objset.length; i++) {
                        	               			outstring += "\r\n" + (i+1).toString() + ". " + objset[i].toString();
                        	               		}
                        	                	cm.sendNext(outstring); 
                        	                }
                        	                else
							cm.sendNext("�����㻹û�з���3��" + nthobj + "ѽ���뿼��һ����ͬ�����" + nthpos + "  ��ֻ��3������" + nthverb + "��" + nthobj + " ������㡰 + nthpos + �������ܲ�������һ���𰸣��������ס��һ�㡣������ȥ��");
                        	                
                        	                cm.dispose();
                        	        }
                        	}
                        }
                        // just in case.
                }
                else {
                	var complete = eim.getProperty(curMap.toString() + "stageclear");
                       	if (complete != null) {	
                		var target = eim.getMapInstance(103000800 + curMap);
				var targetPortal = target.getPortal("st00");
                		cm.getChar().changeMap(target, targetPortal);
                	}
                	cm.dispose();
                }
        }
        else { // not leader
        	if (status == 0) {
        	        var complete = eim.getProperty(curMap.toString() + "stageclear");
        	        if (complete != null) {
        	        	cm.sendNext("��Ͻ�����һ�׶Σ����Ѿ���ͨ��");
        	        }
        	        else {
        	        	cm.sendNext("��ӳ�����˵����");
        	        	cm.dispose();
        	        }
        	}
		else {
                	var complete = eim.getProperty(curMap.toString() + "stageclear");
		       	if (complete != null) {	
				var target = eim.getMapInstance(103000800 + curMap);
				var targetPortal = target.getPortal("st00");
                		cm.getChar().changeMap(target, targetPortal);
			}
                	cm.dispose();
                }
        }
}

function getPrize(eim,cm) {
	var itemSetSel = Math.random();
	var itemSet;
	var itemSetQty;
	var hasQty = false;
	if (itemSetSel < 0.3)
		itemSet = prizeIdScroll;
	else if (itemSetSel < 0.6)
		itemSet = prizeIdEquip;
	else if (itemSetSel < 0.9) {
		itemSet = prizeIdUse;
		itemSetQty = prizeQtyUse;
		hasQty = true;
	}
	else { 
		itemSet = prizeIdEtc;
		itemSetQty = prizeQtyEtc;
		hasQty = true;
	}
	var sel = Math.floor(Math.random()*itemSet.length);
	var qty = 1;
	if (hasQty)
		qty = itemSetQty[sel];
	cm.gainItem(itemSet[sel],qty);
	var map = eim.getMapInstance(103000805);
	var portal = map.getPortal("sp");
	cm.getPlayer().changeMap(map,portal);
}