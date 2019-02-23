/* 
   这里可以添加注释
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendOk("欢迎来到回忆冒险岛\r\n本服设置如下：\r\n经验倍率为:200.(开双和1.5倍经验=600)\r\n专业技能、

学院系统、跟随、进阶BOSS等已经修复.\r\n转职请找市场的彪鲁.抽奖请到转蛋屋.\r\n本服的交流群为

221978957.网站:mxdhy.com\r\n如果你有好的建议可以联系管理员.发现BUG提交给管理员有好的奖励哟.

最后祝你游戏愉快.谢谢支持回忆冒险岛!");
			cm.dispose();
		}
	}
}