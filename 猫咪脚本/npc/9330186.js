/* 
	枫之校园高手答题
*/
var questions = new Array("目前猫岛是同步盛大版本，是吗？",//是 true,
 "猫岛的网址是不是http://www.baidu.com？",//否 false,
"猫岛的论坛网址是不是http://360.972sf.com？",//是 true,
"猫岛中的“BOSS地图”传送是免费的吗？",//否 false,
"猫岛游戏中任何职业转职都不需要做任务，是么？",//是 true,
"目前冒险岛职业是不是只有五种？",//否 false,
"猫岛中，宠物系统已经修复了？",//是 true,
"法师职业是唯一一个有全屏攻击技能的职业，是么？",//否 false,
"扎昆是不是只有10只手？",//否 false,
"心跳停止糖是不是1分钟内加40物理攻击力？",//否 false,
"扎昆BOSS是不是有5只手指头？",//是 true,
"人物等级上限是250级么？",//是 true,
"打扎需要D片，打闹钟需要火眼是么？",//否 false,
"每个人每天打扎的次数限制为1次是么？",//否 false,
"猫岛游戏中，潜能卷可以在怪物获得，是吗？",//是 true,
"猫岛游戏中，清晨之露是不是补HP4000？",//否 是补MP false,
"猫岛游戏中，鸡腿是不是蜗牛掉的？",//否 false,
"猫岛游戏中的人物等级上限是250级么？",//是 true,
"猫岛中的人物具有全屏捡物功能，是么？",//否 false,
"猫岛中商城内的点装不能交易，是么？",//是 true,
"猫岛游戏中，不能在拍卖进行快速转职，是吗？",//否 false,
"猫岛游戏中，客服QQ号是不是：360361045？",//是 true,
"猫岛目前没有开放每日签到，是真的吗？",//否 false,
"猫岛游戏中，是否开放了VIP系统？",//否 false,
"强化卷轴怪物能爆出吗？",//是 true,
"点卷只有赞助才能获得吗？",//否 false,
"160级漩涡装备能吃吗？",//否 false,
"150级装备能吃吗？",//否 false,
"猫岛中的女人都是人妖吗？",//否 false,
"目前猫岛是否已经正式开放？"//是 true,
);
var answers = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
var rOutput = new Array("目前猫岛是同步盛大版本的。",
    "猫岛的网址是：http://360.972sf.com",
    "猫岛的网址是：http://360.972sf.com",
	"猫岛中的“BOSS地图”需要冒险币才能使用。可以通过怪物获得。",
	"猫岛任何职业都可进行快速转职，不需要做额外的任务。",
	"目前冒险岛的职业不只五种。",
	"猫岛已经全面修复了宠物系统。",
	"法师不是唯一一个只能使用全屏攻击的职业。",
	"扎昆只有八只手。",
	"心跳停止糖一分钟内可以增加60物理攻击力。",
	"扎昆BOSS只有五个手指头",
	"猫岛中，人物等级上限是250级。",
	"挑战扎昆需要使用火焰的眼，挑战闹钟需要D片才可以。",
	"挑战普通扎昆每天限制为五次。",
	"猫岛中，潜能卷是可以从怪物中获得的。",
	"清晨之露只能补充MP4000，并不能补充HP。",
	"蜗牛是不暴鸡腿的。",
	"人物等级上限为250级。",
	"游戏中人物不具有全屏捡物功能。",
	"商城中的物品是不能交易的。",
	"猫岛游戏中，可以在万能NPC进行快速转职。",
	"猫岛的唯一客服QQ是：360361045",
	"猫岛目前可以在万能NPC处可以进行每日签到。",
	"猫岛目前还没有开放VIP系统只有理财。",
	"猫岛中可以在怪物中获取强化卷轴。",
	"点券并非只有在赞助中获得，还可以参加活动、市场泡点中获得。",
	"你傻吧？",
	"这你都答不对？",
	"不一定，看你运气好不好咯。",
	"目前猫岛已经正式开放了。"
	);
var asked = new Array();
var currentQuestion;
var junk = new Array;
var junkWeap = new Array;
var goodEqWeap = new Array;
var useable = new Array;
var Rare = new Array;
var Select;
var openEvent = 0;


function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
   if (a == 3 && mode == 1) {
        a = 2;
        selection = 0;
    } else if (mode == 1 || (mode == 0 && type == 1))
        a++;
    else {
        if (type == 12 && mode == 0)
            cm.sendOk("有别的事情吗？如果你想继续参加的话可以跟我对话。");
        cm.dispose();
        return;
    }
	if(cm.getPlayer().getParty() != null || cm.isLeader()){
	if (a == 0){//
				cm.sendNext("参加考试答题，#b答对10个问题#k就可以获取奖杯，#b答对可以进入下一题#k，#r打错了的话就得重新来过#k，。继续吗？");
	}else if (a == 1){
				cm.sendSimple("同学你准备好了吗？那就让我们开始吧！#b\r\n#L0# 开始参加考试答题。");
	}else if (a == 2){
		  if (asked.length == 10 ) {//回答完成部分
                			cm.sendSimple("恭喜你答对了所有问题。看来你的头脑不错，我将颁发奖杯给你。#b\r\n\r\n1、领取到了#v4001137#优秀印章。\r\n2、你可以带领你的同学们通往下一个教室。");
							cm.gainItem(4001137,1);
							cm.dispose();
            			} else {
               				currentQuestion = -1;
                			while (contains(currentQuestion) || currentQuestion == -1) {
                    		currentQuestion = Math.floor(Math.random() * questions.length);
                		}
                			asked.push(currentQuestion);
                			cm.sendSimple("第 "+asked.length+" 题\r\n\r\n"+questions[currentQuestion]+"#b\r\n#L0# 是。\r\n#L1# 否。");
            			}//全部回答完成，和提问题部分
	}else if (a == 3){
						var answer = selection == 0 ? false : true;
       					    if (answers[currentQuestion] == answer) {
                            cm.sendNext("恭喜你，回答正确。#r\r\n\r\n"+rOutput[currentQuestion]);
                            } else {
            				cm.sendOk("很遗憾，回答错误。#b\r\n\r\n"+rOutput[currentQuestion]+"\r\n回答错误之后就重新开始再答题了。");
           				    cm.dispose();
        					}
		}//status
	} else {
		cm.sendOk("请队长来答题，他可是你们的代表！");
		cm.dispose();
	}
}


function contains(quest) {
    for (var i = 0; i < asked.length; i++) {
        if (asked[i] == quest)
            return true;
    }
    return false;
}
