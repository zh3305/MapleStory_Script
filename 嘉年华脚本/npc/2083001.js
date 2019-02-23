//副本开关 开启、true 关闭、false
var open = true;
//副本脚本名
var name = ["HorntailBattle", "ChaosHorntail"];
//等级限制
var minLevel = [120, 120];
var maxLevel = [255, 255];
//次数限制
var maxenter = 50;
//记录次数名称
var PQName = '暗黑龙王';
var status = -1;

function start() {
    if (!cm.isLeader()) {
		cm.sendOk("只有队长才可以申请入场。");
		cm.dispose();
		return;
	}
	cm.sendSimple("暗黑龙王复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(暗黑龙王洞穴的入场次数为#e每天" + maxenter + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b等一下!!你想要移动到哪个暗黑龙王洞穴呢?#b\r\n#L0#普通暗黑龙王#l\r\n#L1#进阶暗黑龙王#l");

}
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {

		if (!cm.isAllPartyMembersAllowedLevel(minLevel[selection], maxLevel[selection])) {
			cm.sendNext("组队成员等级 "+ minLevel[selection] +" 以上 "+ maxLevel[selection] +" 以下才可以入场。");
		} else if (!cm.isAllPartyMembersAllowedPQ(PQName, maxenter)) {
			cm.sendNext("你的队员\"" + cm.getNotAllowedPQMemberName(PQName, maxenter) +"\"次数已经达到上限了。");
		} else {
			var em = cm.getEventManager(name[selection]);
			if (em == null || open == false) {
					cm.sendSimple("配置文件不存在,请联系管理员。");
			} else {
				var prop = em.getProperty("state");
				if (prop == null || prop.equals("0")) {    
  					//em.startInstance_Party("" + 240060000 , cm.getPlayer());
					em.startInstance(cm.getParty(), cm.getMap(), 255);
					cm.gainMembersPQ(PQName, 1);
				} else {
					cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
				}
			}
		}
		cm.dispose();
	}else if (status == 1) {
		if (!cm.isAllPartyMembersAllowedLevel(minLevel[selection], maxLevel[selection])) {
			cm.sendNext("组队成员等级 "+ minLevel[selection] +" 以上 "+ maxLevel[selection] +" 以下才可以入场。");
		} else if (!cm.isAllPartyMembersAllowedPQ(PQName, maxenter)) {
			cm.sendNext("你的队员\"" + cm.getNotAllowedPQMemberName(PQName, maxenter) +"\"次数已经达到上限了。");
		} else {
			var em = cm.getEventManager(name[selection]);
			if (em == null || open == false) {
					cm.sendSimple("配置文件不存在,请联系管理员。");
			} else {
				var prop = em.getProperty("state");
				if (prop == null || prop.equals("0")) {  
					//em.startInstance_Party("" + 240060001 , cm.getPlayer());    
					em.startInstance(cm.getParty(), cm.getMap(), 255);
					cm.gainMembersPQ(PQName, 1);
				} else {
					cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
				}
			}
		}
		cm.dispose();
	}else {
		cm.dispose();
	}
}
