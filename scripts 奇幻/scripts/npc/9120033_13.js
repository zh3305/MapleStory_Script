importPackage(net.sf.odinms.server.maps);

var status = 0;
var qty = -1;
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var jl = java.lang.Math.floor(Math.random() * 100);


var item = new Array(1162019,
                     1162020,
					 1162021,
					 1162022,
					 1162011,
					 1162006,
					 1162007,
					 1162013,
					 1162023,
					 1162010,
					 1162016,
					 1190300,
					 1190301,
					 1190302);

var thing = new Array(

Array(Array(4001191, 20)),
Array(Array(4001191, 20)),
Array(Array(4001191, 20)),
Array(Array(4001191, 20)),
Array(Array(4001191, 30)),
Array(Array(4001191, 50)),
Array(Array(4001191, 70)),
Array(Array(4001191, 40)),
Array(Array(4001191, 80)),
Array(Array(4001191, 100)),
Array(Array(4001191, 120)),
Array(Array(4001191, 100)),
Array(Array(4001191, 150)),
Array(Array(4001191, 200))

);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
		    cm.sendOk("请慎重考虑好再决定!");
            cm.dispose();
            return;
        } else if (status <= 2 && mode == 0) {
            cm.sendOk("下次如果需要制作装备请来找我哦!");
            cm.dispose();
			return;
		} else if (status == 3 && mode == 0) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 10000000) {
                prompt += "对不起，你没有满足条件，请仔细检查背包。\r\n1.确认是否满足制作需求的材料。\r\n2.确认背包是否有足够的空间。\r\n3.确认是否有1000W手续费。";
            } else if (jl >= 0 && jl <= 44){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 10000000);
                prompt += "制作结果 >> #r#e成功#n#k\r\n\r\n你获得了：#b#v" + item[qty] + "##z" + item[qty] + "#。";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 10000000);
			    prompt += "制作结果 >> #e失败#n\r\n\r\n损坏了一半材料。";
			}
            cm.sendOk(prompt);
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
		
        if (status == 0) {
            var smed = "";
            for (var i = 0; i < item.length; i++) {
                smed += "\r\n#L" + i + "##b#v" + item[i] + "##z" + item[i] + "##l";
            }
            cm.sendSimple("每件装备收取制作费#r1000W#k，以下是我能为你制作的装备:" + smed);
        } else if (status == 1) {
            var prompt = "";
            prompt += "#v" + item[selection] + "##b#z" + item[selection] + "##k制作需要：\r\n";
            for (var m = 0; m < thing[selection].length; m++) {
                prompt += "#v" + thing[selection][m][0] + "##z" + thing[selection][m][0] + "# #b" + thing[selection][m][1] + " #k个\r\n";
            }
            prompt += "#r#v4031988##z4031988##k，用它可以提升装备制作的成功率！";
            qty = selection;
            cm.sendYesNo(prompt);
		} else if (status == 2) {
		    qty = qty;
		    if (cm.haveItem(4031988)) {
            cm.sendYesNo("检测到你拥有#r#e#v4031988##z4031988##n#k，你是否要使用它？");
	    } else {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 10000000) {
                prompt += "对不起，你没有满足条件，请仔细检查背包。\r\n1.确认是否满足制作需求的材料。\r\n2.确认背包是否有足够的空间。\r\n3.确认是否有1000W手续费。";
            } else if (jl >= 0 && jl <= 44){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
				cm.gainMeso( - 10000000);
                cm.gainItem(item[qty], 1);
                prompt += "制作结果 >> #r#e成功#n#k\r\n\r\n你获得了：#b#v" + item[qty] + "##z" + item[qty] + "#。";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 10000000);
			    prompt += "制作结果 >> #e失败#n\r\n\r\n损坏了一半材料。";
			}
            cm.sendOk(prompt);
            cm.dispose();
			}
        } else if (status == 3) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 10000000) {
                prompt += "对不起，你没有满足条件，请仔细检查背包。\r\n1.确认是否满足制作需求的材料。\r\n2.确认背包是否有足够的空间。\r\n3.确认是否有1000W手续费。";
            } else if (jl >= 0 && jl <= 90){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 10000000);
				cm.gainItem(4031988,-1);
                prompt += "制作结果 >> #r#e成功#n#k\r\n\r\n你获得了：#b#v" + item[qty] + "##z" + item[qty] + "#。";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 10000000);
				cm.gainItem(4031988,-1);
			    prompt += "制作结果 >> #e失败#n\r\n\r\n损坏了一半材料。";
			}
            cm.sendOk(prompt);
            cm.dispose();
        }
    }
}