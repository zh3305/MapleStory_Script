importPackage(net.sf.odinms.server.maps);

var status = 0;
var qty = -1;
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var jl = java.lang.Math.floor(Math.random() * 100);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);//获得星期（星期天是 1 ，依次下去，星期六是 7）
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var min = ca.get(java.util.Calendar.MINUTE);//获得分钟
var sec = ca.get(java.util.Calendar.SECOND); //获得秒
var xq = "";

var item = new Array(2046825,//红河饰品力量
                     2046826,//红河饰品敏捷
					 2046827,//红河饰品智力
					 2046828,//红河饰品运气
					 2046817,//饰品攻击卷
					 2046818,//饰品魔力卷
					 2046852,//剧烈暴风饰品力量
					 2046853,//剧烈暴风饰品敏捷
					 2046854,//剧烈暴风饰品智力
					 2046855//剧烈暴风饰品运气
                    );

var thing = new Array(

Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 30),Array(4021033, 2)),
Array(Array(4001136, 30),Array(4021033, 2)),
Array(Array(4001136, 50),Array(4021034, 2)),
Array(Array(4001136, 50),Array(4021034, 2)),
Array(Array(4001136, 50),Array(4021034, 2)),
Array(Array(4001136, 50),Array(4021034, 2))

);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (weekday == 1){
	xq = "星期天";
	}
	if (weekday == 2){
	xq = "星期一";
	}
	if (weekday == 3){
	xq = "星期二";
	}
	if (weekday == 4){
	xq = "星期三";
	}
	if (weekday == 5){
	xq = "星期四";
	}
	if (weekday == 6){
	xq = "星期五";
	}
	if (weekday == 7){
	xq = "星期六";
	}
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
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 1000000) {
                prompt += "对不起，你没有满足条件，请仔细检查背包。\r\n1.确认是否满足制作需求的材料。\r\n2.确认背包是否有足够的空间。\r\n3.确认是否有100W手续费。";
            } else if (jl >= 0 && jl <= 25){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 1000000);
                prompt += "制作结果 >> #r#e成功#n#k\r\n\r\n你获得了：#b#v" + item[qty] + "##z" + item[qty] + "#。";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 1000000);
			    prompt += "制作结果 >> #e失败#n\r\n\r\n损坏了一半材料。";
			}
            cm.sendOk(prompt);
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
		
        if (status == 0) {
		    if(weekday == 7 || weekday == 1){
            var smed = "";
            for (var i = 0; i < item.length; i++) {
                smed += "\r\n#L" + i + "##b#v" + item[i] + "##z" + item[i] + "##l";
            }
            cm.sendSimple("HI！~大家周末好，我是炼金术士。只要各位有足够的材料，就可以在我这里炼出所需要的卷轴和其他好东西哦！~怎么样，心动的话就赶紧看看能制作什么卷轴吧！~" + smed +"\r\n\r\n（#r注：制作卷轴有一定几率失败，从而损耗一部分材料！#k）");
			}else{
			cm.sendOk("对不起，此任务只在周末开放。今天是#r"+ xq +"#k。");
			cm.dispose();
			}
        } else if (status == 1) {
            var prompt = "";
            prompt += "#v" + item[selection] + "##b#z" + item[selection] + "##k制作需要：\r\n";
            for (var m = 0; m < thing[selection].length; m++) {
                prompt += "#v" + thing[selection][m][0] + "##z" + thing[selection][m][0] + "# #b" + thing[selection][m][1] + " #k个\r\n";
            }
            prompt += "#r#v4001832##z4001832##k，用它可以提升装备制作的成功率！";
            qty = selection;
            cm.sendYesNo(prompt);
		} else if (status == 2) {
		    qty = qty;
		    if (cm.haveItem(4001832)) {
            cm.sendYesNo("检测到你拥有#r#e#v4001832##z4001832##n#k，你是否要使用它？");
	    } else {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 1000000) {
                prompt += "对不起，你没有满足条件，请仔细检查背包。\r\n1.确认是否满足制作需求的材料。\r\n2.确认背包是否有足够的空间。\r\n3.确认是否有100W手续费。";
            } else if (jl >= 0 && jl <= 25){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
				cm.gainMeso( - 1000000);
                cm.gainItem(item[qty], 1);
                prompt += "制作结果 >> #r#e成功#n#k\r\n\r\n你获得了：#b#v" + item[qty] + "##z" + item[qty] + "#。";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 1000000);
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
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 1000000) {
                prompt += "对不起，你没有满足条件，请仔细检查背包。\r\n1.确认是否满足制作需求的材料。\r\n2.确认背包是否有足够的空间。\r\n3.确认是否有100W手续费。";
            } else if (jl >= 0 && jl <= 50){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 1000000);
				cm.gainItem(4001832,-1);
                prompt += "制作结果 >> #r#e成功#n#k\r\n\r\n你获得了：#b#v" + item[qty] + "##z" + item[qty] + "#。";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 1000000);
				cm.gainItem(4001832,-1);
			    prompt += "制作结果 >> #e失败#n\r\n\r\n损坏了一半材料。";
			}
            cm.sendOk(prompt);
            cm.dispose();
        }
    }
}