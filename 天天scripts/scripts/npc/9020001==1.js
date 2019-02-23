importPackage(java.awt);

var status;
var curMap;
var playerStatus;
var chatState;
var questions = Array("首先给你出一个问题！请仔细听好：作为一名战士，他在1转的时候需要达到的等级是多少，那么请交给我同样数量的通行证。",
			"首先给你出一个问题！ 请仔细听好：作为一名战士，他在1转的时候需要力量的能力值最小是多少点，那么请交给我同样数量的通行证。",
			"首先给你出一个问题！请仔细听好： 作为一名法师，他在1转的时候需要智力的能力值最小是多少点，那么请交给我同样数量的通行证。",
			"首先给你出一个问题！请仔细听好： 作为一名弓箭手，他在1转的时候需要敏捷的能力值最小是多少点，那么请交给我同样数量的通行证。",
			"首先给你出一个问题！请仔细听好： 作为一名飞侠，他在1转的时候需要敏捷的能力值最小是多少点，那么请交给我同样数量的通行证。",
			"首先给你出一个问题！请仔细听好： 所有职业在2转的时候需要达到的等级是多少，那么请交给我同样数量的通行证。");
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
						cm.sendNext("Hello,欢迎您的第一阶段。环顾四周，你会看到很多鳄鱼游荡。当你打败他们，他们就会咳嗽了#bpasses#k队长应该对我说话，收集了相同数量的#bpasses#k为回答这个问题我给他们。\r\n如果你收集的数额#bpasses#k，我给了#bpass#k该成员。当所有的队员聚集了#bpasses#k和给他们的队长，队长将交出#bpasses#k对我来说，清理阶段的进程。更快你照顾的阶段，更多的阶段就可以挑战。因此，我建议你照顾快速和迅速。那么，最好的你好运。");
						eim.setProperty("leader1stpreamble","done");
						cm.dispose();
					}
					else { // check how many they have compared to number of party members
                        			// check for stage completed
                        			var complete = eim.getProperty(curMap.toString() + "stageclear");
                        			if (complete != null) {
                        				cm.sendNext("请赶紧去下一关,们已经打开了");
                        				cm.dispose();
                        			}
                        			else {
							var numpasses = party.size()-1;
							var passes = cm.haveItem(4001008,numpasses);
							var strpasses = "#b" + numpasses.toString() + " passes#k";
							if (!passes) {
								cm.sendNext("对不起，你的通行证没有达到指定的数目。你需要给指定的通行证数目给我;应当的队员数目减去你的队长， " + strpasses + " ，以明确的阶段。告诉您的队员解决问题，收集了通行证，并让他们给你.");
								cm.dispose();
							}
							else {
								cm.sendNext("你们已经通过 " + strpasses + "! 恭喜大家完成本阶段的挑战! 我将打开传送门，带大家进入到下一关的挑战. 因为本次任务有时间限制，请大家抓紧时间，祝大家好运!");
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
				cm.sendNext("你好，这仅仅只是一个测试.");
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
					cm.sendNext("在这里，你需要收集#bcoupons#k击败同样数目的Ligators作为回答提问个别。");
					
				}
				else if (status == 0) {// otherwise
                        		// check for stage completed
                        		var complete = eim.getProperty(curMap.toString() + "stageclear");
                        		if (complete != null) {
                        			cm.sendNext("请赶紧去下一关,们已经打开了");
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
								cm.sendNext("这是正确的答案！对于你刚才收到了#bpass#k请交给你的队长。");
								cm.gainItem(4001007,-numcoupons);
								cm.gainItem(4001008,1);
								enough = true;
							}
						}
						if (!enough) {
							cm.sendNext("很抱歉，你数量错误! 请仔细对照问题，再来给我正确数量的通行证吧.");
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
						cm.sendNext("这是个任务，导致您在过去，奖金阶段。这是一个阶段，可让您打败怪物经常变得更轻松。您可以一套大量的时间来寻找尽可能多的，但您随时可以离开该阶段中。同样，祝贺结算的所有阶段。");
						party = eim.getPlayers();
						cm.gainItem(4001008,-10);
						clear(5,eim,cm);
						cm.givePartyExp(1500, party);
						cm.dispose();
					}
					else { // not done yet
						cm.sendNext("欢迎您到第5次和最后阶段。步行游览地图，你可以找到一些怪物。打败所有的人，收集了#bthe passes#k，并请您给我。在队长下将收集，然后让他们给我一旦#bpasses#k聚集了。怪物可能是熟悉的你，但他们可能会远远超出你觉得，所以请小心。祝您好运！由于投诉，现在是强制性的要杀死所有的泥！做到这一点！ ");
					}
					cm.dispose();
				}
				else { // Members
					cm.sendNext("欢迎您到第5次和最后阶段。步行游览地图，你将能够找到一些怪物。打败他们所有，收集了#bpasses#k，并给予他们到您的队长。一旦您完成时，返回给我，收集您的奖励。 ");
					cm.dispose();
				}
			}
			else { // give rewards and warp out
				if (status == 0) {
					cm.sendNext("难以置信！您通过了所有阶段进入了这一点。这里有一个小奖为您所做的出色工作。在您接受它，但是，请确保您的使用等物品栏要有空格 \r\n#b你将无法收到奖品，如果您有没有空格!#k");
				}
				if (status == 1) {
					getPrize(eim,cm);
					cm.dispose();
				}
			}
		}
		// etc
                else { // no map found
                        cm.sendNext("无效的计划，这意味着在现阶段是不完整的.");
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
                                cm.sendNext("嗨。欢迎您到" + nthtext + " 的阶段。我旁边，你会看到一些" + nthobj + ". 在这些" + nthobj + ",  #b第3关，向您发送到下一阶段#k所有您需要做的是有#b的队员找到正确的" + nthobj + "和" + nthverb + "上.#k\r\nBUT ，但这不能作为答案如果您" + nthobj + ";请靠近中间的" + nthobj + "算作一个正确的答案。此外，只有3名队员是不被允许的" + nthobj + " 。一旦" + nthverb + "技术对他们来说，队长必须双击我来检查，看看答案的正确与否＃k现在，找到正确的" + nthobj + "到" + nthverb + "对！");
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
							cm.sendNext("看来你还没有发现3个" + nthobj + "呀。请考虑一个不同的组合" + nthpos + "  。只有3个可以" + nthverb + "上" + nthobj + " ，如果你“ + nthpos + ”它可能不能算作一个答案，所以请记住这一点。继续下去！");
                        	                
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
        	        	cm.sendNext("请赶紧到下一阶段，门已经开通！");
        	        }
        	        else {
        	        	cm.sendNext("请队长对我说话。");
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