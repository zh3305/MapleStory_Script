var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(3010832,500), // 太阳椅子 
Array(3010788,450), // 巨无霸年夜饭 
Array(3010658,450), // 夏日西瓜冰椅子 
Array(3010621,450), // 蛤蛤仙人椅 

Array(3010842,260), // 猫猫郊游房车 
Array(3010843,260), // 兔兔郊游房车 
Array(3010876,260), // 冒险岛行星椅子 
Array(3010936,260), // 青蛙跳楼机
Array(3012025,260), // 小鸡弹簧床椅子 
Array(3010696,230), // 大黄鸭 
Array(3010718,200), // 初恋云朵朵沙发 
Array(3010519,200), // 巨大白雪人椅子 // 
Array(3010520,200), // 巨大企鹅王椅子 
Array(3010070,200),
Array(3012011,100), // 我爱巧克力火锅 
Array(3012019,100), // 爱琴海椅子 
Array(3012010,100), // 巧克力蛋糕恋人
Array(3012001,100), // 篝火 
Array(3012025,100), // 小鸡弹簧床椅子 
Array(3010736,100), // 萌萌育婴摇篮 
Array(3012024,100), // 沙滩排球椅子 
Array(3012020,100), // 紫藤花吊篮椅 
Array(3010528,50), // 跑步机椅子 
Array(3010877,20), // 人鱼珊瑚礁 
Array(3010813,20), // 爱情水晶球的回忆 
Array(3010660,20), // 梦幻公主城堡椅子 
Array(3010661,20), // 欢乐相框椅子 // 
Array(3010715,20), // 幸福9周年蛋糕气球椅 
Array(3010716,20), // 
Array(3010717,20),// Marry me // 
Array(3010527,20) // 深海章鱼 // MP1000
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#,您可以在这里兑换#e#b稀有椅子#r(试用模式)#n#k,所购买物品#r试用时间为5分钟#k，请选择你想要购买的物品\r\n";  //#b#L0#点我进入到永久模式#l\r\n\r\n#b
			for (var i=1; i<=itemlist.length; i++) {
				text += "#L" + (i) + "##i" + itemlist[i-1] + ":##t" + itemlist[i-1] + "# - #r"+(itemlist[i-1][1]*10)+"#b抵用券  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        
			
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9000069, 2);

				return;
			}  else {
			selects = (selection-1);
           // cm.sendGetNumber("请输入你请你输入想要购买的数量#v"+itemlist[selects]+"#\r\n\r\n#r1个需要" + (itemlist[selects][1]*10) + "个#b抵用券#k", 0, 0, 999999);
			}
            buynum = 1;
            cm.sendYesNo("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]*10) + "抵用券。");
        } else if (a == 2) {
            if (cm.getPlayer().getCSPoints(2) >= buynum * itemlist[selects][1] * 10) {
                cm.gainNX(2, -buynum * itemlist[selects][1]*10);
                cm.gainItemPeriod(itemlist[selects][0], buynum, 5*60*1000);
                cm.sendOk("购买成功了！#r试穿时间为5分钟#k");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的抵用券。");
                cm.dispose();
            }
        }
    }//mode
}//f