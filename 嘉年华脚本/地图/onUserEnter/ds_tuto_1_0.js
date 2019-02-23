/*
 Made by Wubin
 */

importPackage(Packages.scripting);
importPackage(java.lang);

var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 30);
        ms.getDirectionStatus(true);
        Thread.sleep(1000);
    } else if (status == 1) {
        ms.getDirectionInfo(3, 0);
        ms.sendSelfTalk(1, 2159310, "除了出去外勤的军团长，大家都到齐了吗…那就开始开会吧。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/0");
    } else if (status == 2) {
        ms.sendSelfTalk(1, 2159308, "在伟大的大人——黑魔法师办完事情之前，我们也要做好我们分内的事情。不能因为他没监督我们，就偷懒，不是吗？话说回来#h0#……我听说你搞到了有趣的情报？");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/1");
    } else if (status == 3) {
        ms.sendSelfTalk(3, 2159308, "我收到了抵抗军们正在集结的情报。");
    } else if (status == 4) {
        ms.sendSelfTalk(1, 2159308, "抵抗军……一群乌合之众能做什么，咳咳咳……听说人们叫他们#r英雄#k？可笑至极。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/2");
    } else if (status == 5) {
        ms.sendSelfTalk(1, 2159339, "我还很期待呢，这也算是垂死挣扎吧？真好奇他们会怎么反抗我们。上次的圣地占领战他们不也败北了吗~消灭那个被称为女皇的家伙太容易了，我都觉得无聊了呢。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/3");
    } else if (status == 6) {
        ms.sendSelfTalk(1, 2159308, "那次的战斗能够轻松获胜，全靠黑魔法师的实力，跟你的能力没啥关系吧。#p2159339#？别那么嚣张。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/4");
    } else if (status == 7) {
        ms.sendSelfTalk(1, 2159339, "唔…可是我都没什么可做的啊！");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/5");
    } else if (status == 8) {
        ms.sendSelfTalk(3, 2159339, "斯乌大人好像很忙的样子，奥尔卡，您在这里没问题吗？");
    } else if (status == 9) {
        ms.sendSelfTalk(1, 2159339, "斯乌他是认真过了头，总会找些没用的事来做！不过我也正打算去一趟斯乌那里！哼！军团长都太刻板了，无聊。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/6");
    } else if (status == 10) {
        ms.sendSelfTalk(1, 2159310, "…那会议呢？");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/7");
    } else if (status == 11) {
        ms.sendSelfTalk(1, 2159308, "真是的，#p2159339#一吵起来，会都进行不下去了。啧啧…刚才是在说英雄们的事情，对吧？英雄啊…哼，自然会有高贵的#h0#来收拾他们吧。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/8");
    } else if (status == 12) {
        ms.sendSelfTalk(1, 2159308, "连时间女神都能战胜的人，那么点英雄算什么啊？不是吗？哈哈哈哈…");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/9");
    } else if (status == 13) {
        ms.sendSelfTalk(3, 2159308, "…不能小看了他们。勇于拼命的人总会发挥出超长的能量的。而且我只是让时间女神陷入了无法行动的状态…而最终抓住敌人的还是那一位。");
    } else if (status == 14) {
        ms.sendSelfTalk(1, 2159308, "哎哟，哎哟，这么谦虚啊。不过你也因此在大人那里记了一个大功，不是吗？跟这件事比起来，之前我在神殿里展开的无数地下工作都羞于启齿了。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/10");
    } else if (status == 15) {
        ms.getDIRECTION_INFO(2000, -100, "Effect/Direction6.img/effect/tuto/balloonMsg0/10");
        ms.getDirectionInfo(1, 1500);
    } else if (status == 16) {
        ms.sendSelfTalk(1, 2159310, "…你们两个够了吧。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/11");
    } else if (status == 17) {
        ms.sendSelfTalk(1, 2159339, "为什么？不是很有意思吗？继续啊。#p2159309#。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/12");
    } else if (status == 18) {
        ms.sendSelfTalk(1, 2159308, "我只是在称颂我们军团最高功臣#h0#而已啊，咳咳咳……");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/13");
    } else if (status == 19) {
        ms.getDIRECTION_INFO(2000, -100, "Effect/Direction6.img/effect/tuto/balloonMsg0/10");
        ms.getDirectionInfo(1, 1500);
    } else if (status == 20) {
        ms.sendSelfTalk(1, 2159310, "#p2159309#。自从占领了神殿，一切都快要结束了…在这件事情上，能把时间女神困住，确实是#h0#的一大功劳啊。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/14");
    } else if (status == 21) {
        ms.sendSelfTalk(1, 2159310, "而且你蒙住女神的眼睛那件事，不是已经得到了相应的报酬了吗？你还想干什么，#p2159309#?");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/15");
    } else if (status == 22) {
        ms.sendSelfTalk(1, 2159308, "我能想干什么…哼，那这个话题就到此为止，我们继续开会吧。那些无聊的英雄就不要再说了，说说其他的抵抗势力现在怎么样了？");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/16");
    } else if (status == 23) {
        ms.sendSelfTalk(1, 2159310, "…按照命令，已经确认过了，他们全部都已经破坏殆尽了。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/17");
    } else if (status == 24) {
        ms.sendSelfTalk(1, 2159308, "哦哦，这样啊。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/18");
    } else if (status == 25) {
        ms.sendSelfTalk(1, 2159339, "不过啊~黑魔法师他为什么会突然改变计划了呢？不是说好占领神殿就结束的吗？我当然无所谓了，可是全都破坏干净了，以后就没什么可玩儿的了，不是吗？");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/19");
    } else if (status == 26) {
        ms.sendSelfTalk(3, 2159339, "…破坏？那又是…什么命令？我都没听说过。");
    } else if (status == 27) {
        ms.sendSelfTalk(1, 2159308, "啊哈，对了，我是看你之前和女神战斗太辛苦，所以没告诉你。你想知道是什么命令啊？很简单。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/20");
    } else if (status == 28) {
        ms.sendSelfTalk(1, 2159308, "伟大的那一位希望我们把这一切战争都结束掉。我们接到了命令，要把那些拖拖拉拉的抵抗势力全都消灭干净。所以除了你之外的所有军团长都出发了。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/21");
    } else if (status == 29) {
        ms.getDIRECTION_INFO(2000, -100, "Effect/Direction6.img/effect/tuto/balloonMsg1/18");
        ms.getDirectionInfo(1, 1500);
    } else if (status == 30) {
        ms.sendSelfTalk(1, 2159310, "…对神木村不要留一棵草、一棵树，全都被消灭干净了…");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/22");
    } else if (status == 31) {
        ms.getDIRECTION_INFO(2000, -100, "Effect/Direction6.img/effect/tuto/balloonMsg1/3");
        ms.getDirectionInfo(1, 1500);
    } else if (status == 32) {
        ms.sendSelfTalk(3, 2159310, "(神木村所处的南部地区还有我的家人啊…！)");
    } else if (status == 33) {
        ms.sendSelfTalk(1, 2159308, "黑魔法师所希望的事情，也许能为抵抗军树立榜样…所以这次的事情办得有些过于彻底了。这也算是好事一桩啊，不是吗？");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/23");
    } else if (status == 34) {
        ms.sendSelfTalk(1, 2159310, "是啊…那个叫龙的种族估计现在已经所剩无几了。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/24");
    } else if (status == 35) {
        ms.sendSelfTalk(3, 2159308, "…等等，我们不是说好不攻击南部地区的吗？现在南部地区都破坏到哪里了？请告诉我…！");
    } else if (status == 36) {
        ms.sendSelfTalk(1, 2159308, "破坏到哪里了…那位大人的命令应该不会被草草执行吧？如果接到的命令是彻底毁灭，那应该就是斩草除根了吧，咳咳咳…你干嘛要这么敏感啊？有什么心事吗？");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/25");
    } else if (status == 37) {
        ms.getDIRECTION_INFO(2000, -100, "Effect/Direction6.img/effect/tuto/balloonMsg0/11");
        ms.getDirectionInfo(1, 1500);
    } else if (status == 38) {
        ms.sendSelfTalk(3, 2159308, "我有事要确认一下，先行告辞了…！");
    } else if (status == 39) {
        ms.sendSelfTalk(1, 2159308, "哎哟~就算你再受黑魔法师的宠爱，也不能这么随便啊。我不是说了我们要做份内的事情吗？你现在离开，就是违抗命令。");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/26");
    } else if (status == 40) {
        ms.getDirectionInfo(3, 2);
        ms.sendSelfTalk(3, 2159308, "(戴米安，妈妈…但愿你们平安无事...)");
    } else if (status == 41) {
        ms.sendSelfTalk(1, 2159308, "他听都不听我说的。哼…不过你是有#r家人#k在那里吗？咳咳咳…祝你好运了！");
        ms.showWZEffect(30, "Voice.img/DemonSlayertutorial_A/27");
    } else if (status == 42) {
        ms.getDirectionStatus(true);
        ms.enableActions();
        ms.sendchangeMap(924020010);
        ms.enableActions();
        ms.dispose();
    } else {
        ms.dispose();
    }
}

