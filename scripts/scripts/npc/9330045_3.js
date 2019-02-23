/*
垛垛
钓鱼领奖
2015.1.30
*/

var status = -1;
var ok = -1;
var ca = java.util.Calendar.getInstance();
var day = ca.get(java.util.Calendar.DATE);//获取日
var yesno;

function start() {
    return action(1, 0, 0);
}



function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        var str = "上个月钓鱼积分比赛活动已经结束了，现在开始颁发前20位获奖的玩家，点击领奖吧！恭喜恭喜！\r\n没有获奖的玩家也不要灰心，每个月都有机会哦!\r\n#r目前颁发的是：#b\r\n";
		str += "由于本月第一次开放钓鱼系统，暂时没有上月记录.\r\n";
		str += "#L1##b上月钓鱼积分领奖榜[#r点击领奖#k]#l\r\n\r\n";
		if (cm.getPlayer().getGMLevel() >= 6) {			
		    //str += "#L1##b上月钓鱼积分领奖榜[#r点击领奖#k]#l\r\n\r\n";
			str += "\r\n#L3##r我是管理员 清空缓存积分记录 刷新数据#l";
        }
        cm.sendSimple(str);
    } else if (status == 1) {
        if (selection == 1) {
			 var i = 0;
            var m ="钓鱼积分排行，注意保留空格，否则无法补偿！\r\n";
			 var pairs = cm.getConnection().prepareStatement("SELECT name,dyjf FROM dyjf order by dyjf desc limit 20").executeQuery();
			 var i = 0;
			 while (pairs.next()) {
                 i++;
                 m+="#L"+i+"##b第"+i+"名\t#r角色名:"+pairs.getString("name")+"\t\t#d积分:"+pairs.getString("dyjf")+"#l\r\n";
            }
		    if (i != 0) {
                   text = cm.sendOk(m);
            }else {
					text = cm.sendOk("请联系管理员刷新缓存！!");
			}
    //     } else if (selection == 2) {
				// if(getWanJiaZt(cm.getChar().getId()) != 0){
				// 	 cm.sendOk("你好 你已经领取过上月的钓鱼奖励了");
				// 	cm.dispose();
				// }else if(getWanJiaZt(cm.getChar().getId()) == -1){
				// 	cm.sendOk("你好 你在上月钓鱼中 未获得排名 无法领取奖励");
				// 	cm.dispose();
				// }else if (getWanJiaZt(cm.getChar().getId()) == 0){
				// 	cm.sendSimple("#L"+getMc(cm.getChar().getName())+"##e领取钓鱼奖励!#l");
				// }
		
    //             cm.sendOk(getWanJiaZt(cm.getChar().getId()));
				// //cm.sendOk("#L"+getMc(cm.getChar().getName())+"你好 亲爱的玩家 你在上月的钓鱼中获得第" +getMc(cm.getChar().getName())+"名 请点击确定后领取你的奖励#l"));
            
        } else if (selection == 3) {
			cm.sendYesNoS("确定要清空钓鱼积分吗？",2);
			yesno = 1;
        }

    } else if (status == 2) {
	if(yesno == 1){
	      clean();
	      cm.sendOk("钓鱼积分排行比赛缓存已经更新，积分已经清空！");
		  cm.dispose();
		return;
		}
	    var jpm = getpaiming();
	if(selection!=jpm){        
          cm.sendOk("对不起！您不是该排名获奖人");
          cm.dispose();
		return;
		}
	if(getLingqu() != 0){
					cm.sendOk("你好 你已经领取过上月的钓鱼奖励了");
					cm.dispose();
					return;
				}
    if(cm.getSpace(2) < 3 || cm.getSpace(3) < 1){
					cm.sendOk("你背包空格不足");
					cm.dispose();
					return;
				}
	//兑换奖励
		switch (selection) {
		case 1://第一名奖励
				// 		-第 1 名
				// 3994577,1  iPodtouch
				// 2430453,5  传说红宝石，突破武器攻击上限道具
				// 2340000,5  祝福卷轴
				// 2432971,2  夏季限量椅子箱
				cm.gainItem(3994577,1);
				cm.gainItem(2430453,5);
				cm.gainItem(2340000,5);
				cm.gainItem(2432971,2);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[钓鱼积分排行比赛]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！", 5121043);
				cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				/*cm.getPlayer().getMap().startMapEffect("[钓鱼积分排行比赛]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！", 5121043);
				cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.getPlayer().getMap().startMapEffect("[钓鱼积分排行比赛]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！", 5121043);
				cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.getPlayer().getMap().startMapEffect("[钓鱼积分排行比赛]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！", 5121043);
				cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第1名，恭喜恭喜！！");*/
				cm.sendOk("恭喜成功领取奖励");
				cm.dispose();
            break;
		case 2:
		case 3:
		case 4://2-4名奖励
				// 		-第 2-4 名
				// 99999点卷
				// 2430453,3   传说红宝石，突破武器攻击上限道具
				cm.gainNX(99999);
				cm.gainItem(2430453,3);
				cm.gainItem(2340000,3);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[钓鱼积分排行比赛]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第2-4名，恭喜恭喜！！", 5121043);
				cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第2-4名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第2-4名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第2-4名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第2-4名，恭喜恭喜！！");
				cm.sendOk("恭喜成功领取奖励");
				cm.dispose();
				break;
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10://5-10名奖励
			// -第 5-10 名
			// 58888点卷
			// 2430453,2   传说红宝石，突破武器攻击上限道具
			// 4001680,108 椅子币
				cm.gainNX(58888);
				cm.gainItem(2430453,2);
				cm.gainItem(2340000,2);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[钓鱼积分排行比赛]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第5-10名，恭喜恭喜！！", 5121043);
				cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第5-10名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第5-10名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第5-10名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第5-10名，恭喜恭喜！！");
				cm.sendOk("恭喜成功领取奖励");
				cm.dispose();
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
		case 20://11-20名奖励
			// -第 5-10 名
			// 9999点卷
			// 2430453,1   传说红宝石，突破武器攻击上限道具
			// 4001680,58 椅子币
				cm.gainNX(9999);
				cm.gainItem(2430453,1);
				cm.gainItem(2340000,1);
				setLingqu();
				cm.getPlayer().getMap().startMapEffect("[钓鱼积分排行比赛]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第11-20名，恭喜恭喜！！", 5121043);
				cm.worldMessage(1,"[全服公告]:【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第11-20名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第11-20名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第11-20名，恭喜恭喜！！");
				cm.worldMessage(0x19,"[钓鱼积分排行比赛]" + " : " + "【"+ cm.getChar().getName() +"】成功领取了钓鱼排行积分比赛第11-20名，恭喜恭喜！！");
                cm.sendOk("恭喜成功领取奖励");
                cm.dispose();
            break;
		default:
		   //设置无排名奖励 或提示信息输出
		   	cm.sendOk("抱歉，你没有跻身前20名，请下个月再努力！！");
		   	cm.dispose();
		}
      setLingqu();//重要：设置领取状态
    }
}

function getJJPM() {
    var getjj = cm.getConnection().prepareStatement("SELECT id FROM dyjf WHERE name = ?");
    getjj.setString(1, cm.getName());
    getjj.executeQuery();
    var gg = 999;
    if (getjj.next()) {
        gg = getjj.getInt("id");
    }
    return gg;
}
function getpaiming() {
    var rs = 999;
    var getLQ = cm.getConnection().prepareStatement("SELECT id FROM dyjf where name = ?");
    getLQ.setString(1, cm.getName());
    getLQ = getLQ.executeQuery();
    if (getLQ.next()) {
        rs = getLQ.getInt("id");
    }
    return rs;
}


function getLingqu() {
    var rs = 999;
    var getLQ = cm.getConnection().prepareStatement("SELECT lingqu FROM dyjf where name = ?");
    getLQ.setString(1, cm.getName());
    getLQ = getLQ.executeQuery();
    if (getLQ.next()) {
        rs = getLQ.getInt("lingqu");
    }
    return rs;
}

function setLingqu() {
    var getLQ = cm.getConnection().prepareStatement("Update dyjf set lingqu = 1 where name = ?");
    getLQ.setString(1, cm.getName());
    getLQ = getLQ.executeUpdate();
}

function clean() {
    var qingkong = cm.getConnection().prepareStatement("TRUNCATE TABLE dyjf").executeUpdate();
    var baocun = cm.getConnection().prepareStatement("insert into dyjf (name,dyjf,lingqu) select name,dyjf,0 as lingqu from characters where gm<6 order by characters.dyjf desc limit 20").executeUpdate();
    var cleanmonth = cm.getConnection().prepareStatement("update characters set dyjf = 0").executeUpdate();
}