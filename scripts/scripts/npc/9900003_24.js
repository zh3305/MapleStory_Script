
var status = 0;

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
        	var text="您好，在这里可以制作各种装备，请选择您需要制作的装备类型：\r\n";
			text+="#b#L259#制作S级竞技场徽章#l\r\n";
			text+="#b#L258#制作真·伊坤图腾#l\r\n";
			text+="#b#L250#制作100级副手<10周年黑色>#l\r\n";
			text+="#b#L252#制作120级防具<死灵法师>#l\r\n";
			text+="#b#L253#制作120级武器<死灵法师>#l\r\n";
			text+="#b#L256#制作130级防具<皇家>#l\r\n";
			text+="#b#L257#制作130级武器<皇家>#l\r\n";
			text+="#b#L246#制作130级防具<君主>#l\r\n";
			text+="#b#L245#制作130级武器<君主>#l\r\n";
			text+="#b#L254#制作130级防具<豪华>#l\r\n";
			text+="#b#L255#制作130级武器<豪华>#l\r\n";
			text+="#b#L248#制作135级武器<布莱克缤>#l\r\n";
			text+="#b#L241#制作140级防具<狮心、龙尾、鹰翼、渡鸦、鲨齿、金标>#l\r\n";
			text+="#b#L242#制作140级武器<狮心、龙尾、鹰翼、渡鸦、鲨齿>#l\r\n";
			text+="#b#L251#制作140级副手<银河>#l\r\n";
			text+="#b#L249#制作145级武器<真红>#l\r\n";
			text+="#b#L247#制作145级武器<巨匠>#l\r\n";
			text+="#b#L244#制作150级防具<高贵、鹰眼、魔法师>#l\r\n";text+="#b#L243#制作150级武器<法弗纳>#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1){
			cm.dispose();
			cm.openNpc(9900003, selection);
		}
	}
}