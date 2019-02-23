var status = -1;

var selectedType = 0;
var selectedMeso = 0;

var moneyMeso = 1;

var youxibi = 100000000;
var dianjuan = 10000;

var sxf = 1;//转账需要的手续费


var dsd = 1;//对话专用
var md1;
var md2;
var md3;
var md4;
var md5;
var md6;

var zhs;

var hmose;


var name;
var cname = "灰卡";
var caid;

var gpms;


var mds;
var mes;

var wmose;
var emose;

var samose;
var savrtime;
var gainmose;
var huoyue;
var fengyb;

var fybs;


var gxs;

var mima;
var cardlv = 0;

var fengyz;

var items = 4021004;

var zjlxs



var kaitem = Array(
//心卡
11, 4021010,
//金卡
10, 4021007,
//红卡
9, 4021021,
//黑卡
8, 4005004,
//紫卡
7, 4005001,
//蓝卡
6, 4005003,
//青卡
5, 4011008,
//绿卡
4, 4005002,
//黄卡
3,4021006,
//橙卡
2, 4005000,
//白卡
1, 4021007,
//灰卡
0, 4021004);



var kaitems = Array(
//心卡
11, 4021010,
//金卡
10, 4021007,
//红卡
9, 4021021,
//黑卡
8, 4005004,
//紫卡
7, 4005001,
//蓝卡
6, 4005003,
//青卡
5, 4011008,
//绿卡
4, 4005002,
//黄卡
3,4021006,
//橙卡
2, 4005000,
//白卡
1, 4021007,
//灰卡
0, 4021004);

var kg1;
var kg2;
var kg3;
var kg4;
var kg5;
var kg6;


var gp1;
var gp2;
var gp3;

var namegp1 = "";
var namegp2 = "";
var namegp3 = "";

var rategp1 = 1;
var rategp2 = 1;
var rategp3 = 1;

var pgp1;
var pgp2;
var pgp3;

var lpgp1;
var lpgp2;
var lpgp3;

var jbss;

var cmose;
var qmose;

var shuru;

var amose;

var nowjb;
var das;

var zhid;
var zhms = "";

var trzhlv;
var trzhcl;
var trzhna;

var newitems;

var shuru1;
var shuru2;
var shuru3;
var shuru4;
var shuru5;
var shuru6;

var jbs1;

var zjsj = 999;//债券购买最大时间(分钟)
var zjlx;
var zjbl = 1;//债券每分钟刷新后消耗的量和倍率

var weiyj = 10;//债券未到约定时间领取 需要的违约金 单位为万





function start() {
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
        if (mode == 1) {
            status++;
        } else {
            cm.dispose();
           // status--;
        }

        if (status == 0) {



            mds = "#r ┈┈┈━═☆#i4251202##r  金融储蓄  #i4251202# #r☆═━┈┈┈ \r\n#r";
            name = cm.getVipname();
            cname = cm.getColor();
            cardlv = cm.getMaplewing("cardlevel");
            caid = cm.getMaplewing("cardid");
            gxs = cm.getMaplewing("maple");
            wmose = cm.getMaplewing("wmose");
            emose = cm.getMaplewing("emose");
            samose = cm.getMaplewing("savemose");
            satime = cm.getMaplewing("havetime");
            gamose = cm.getMaplewing("gainmoses");
            fengyz = cm.getMaplewing("maplez");
            huoye = cm.getMaplewing("mapley");
            fengyb = cm.getMaplewing("mapleb");

            jbss = cm.getMeso();

            zjlx = cm.getPlayer().getMaplewingZJS(samose, 1);

        rategp1 = cm.getMaplewinggp("rate", 1);

        pgp1 = cm.getMaplewinggp("point", 1);

        lpgp1 = cm.getMaplewinggp("lastpoint", 1);


            fyb = cm.getMaplewing("mapleb");


           gpms = "#d倍率：#e#r" + rategp1 + " #n#b 当前点数：#e#r" + pgp1 + " #n#d 上一点数：#e#r" + lpgp1 + " #n\r\n#k注意：股票信息30秒刷新一次！请以最新的为准！" ;


                    for (var i = 0; i <= kaitem.length; i++)
                    if (i % 2 == 0 && (kaitem[i] == cardlv)) {
                        items = kaitem[i + 1];
                    }


            mes = mds + "#r尊敬的 " + name + "，#k欢迎您使用储蓄投资服务！！\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + gxs + " #n #b万级余额：#e#r " + wmose + "#n#b    亿级余额：#r#e" + emose + "#n#b \r\n#d债券数量：#e#r" + samose + "  #d#n剩余时间：#e#r" + satime + "  #d#n获得利息：#e#r" + gamose + "\r\n#n#b枫叶储量：#e#r" + fengyz + "  #b#n枫币储量：#e#r" + fengyb + "  #b#n活跃点数：#e#r" + huoye + " \r\n#n目前您购买的债券数量每次刷新获得利息 = #e" + zjlx + "#n 金币\r\n#n#L10050001#万级存款服务#l  #L10050002#亿级存款服务#l  #L10050003#购买世界债券#l\r\n#L10050004#万级取款服务#l  #L10050005#亿级取款服务#l  #L10050006#获得债券利息#l\r\n#L10050007#在线转账服务#l  #L10050008#刷新账户信息#l  #L10050009#结束对话服务#l\r\n\r\n#n#b以下是 #rMaplewingBank#b 股票上市信息：\r\n" + gpms;


            cm.sendSimple(mes); 



//PlayerToNpc 发送一个玩家对话框。



        } else if (status == 1) {


        switch (selection) {

        case 10050001:

             dsd = 1;

             cmose = jbss/10000;

             if (cmose > (2100000000 - wmose)) {
                amose = (2100000000 - wmose);
             } else {
                 amose = cmose;
             }

             md1 = mds + "\r\n#d目前您选择的是#r 万级存款服务 #d！\r\n#b您账户内的 #r万级余额#b 为：#r#e" + wmose + "#n  \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbss + "#n \r\n\r\n#d注意：存款的数量的单位为： #r万 \r\n#b现在请输入您需要存入#r 万级账目 #b的数量：\r\n(注：输入值不要超过您所能存入的数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050002:

             dsd = 2;

             cmose =  (wmose - wmose%10000)/10000;

             // cmose = (jbss - jbss%100000000)/100000000;

             if (cmose > (2100000000 - emose)) {
                amose = (2100000000 - emose);
             } else {
                 amose = cmose;
             }

             md1 = mds + "\r\n#d目前您选择的是#r 亿级存款服务 #d！\r\n#b您账户内的 #r亿级余额#b 为：#r#e" + emose + "#n  #r万级余额#b 为：#r#e" + wmose + "#n \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbss + "#n \r\n\r\n#d注意：存款的数量的单位为： #r亿 \r\n#b现在请输入您需要存入#r 亿级账目 #b的数量：\r\n(注：输入值不要超过您所能存入的数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050003:


             dsd = 8;

             qmose = (2100000000 - jbss)/10000;

             jbs1 = jbss/10000;

             amose = wmose + jbs1;

             if (cm.getMaplewing("savemose") == 0) {

             md1 = mds + "\r\n#d目前您选择的是#r 购买债券服务 #d！以下是您的债券信息：\r\n#b债券数量#b ：#r#e" + cm.getMaplewing("savemose") + "#n  #b剩余时间#b ：#r#e" + cm.getMaplewing("havetime") + "#n  #b获得利息#b ：#r#e" + cm.getMaplewing("gainmoses") + "#n \r\n#b您账户内的 #r万级余额#b 为：#r#e" + wmose + "#n \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbss + " = " + jbs1 + "#n 万\r\n#d注意：债券的金币单位为： #r万#d\r\n最大购买数量为背包金币与万级余额总和！\r\n#b现在请输入您需要购买 #r债券#b 数量：\r\n(注：输入值不要超过您所能购买的最大数量：#r#e" + amose + "#n#b )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

               } else {

                dsd = 55554;

                cm.sendSimple(mds + "#r操作失败！您目前已经购买了债券了！\r\n#d如果您想重新购买，请先领取目前的债券收益和本金！\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + gxs + " #n #b万级余额：#e#r " + wmose + "#n#b    亿级余额：#r#e" + emose + "#n#b \r\n#d债券数量：#e#r" + samose + "  #d#n剩余时间：#e#r" + satime + "  #d#n获得利息：#e#r" + gamose + "#n\r\n目前您购买的债券数量每次刷新获得利息 = #e" + zjlx + "#n 金币\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");

               }



           // cm.dispose();

            

          // cm.sendOk("敬请期待!!");

            break;



        case 10050004:

             dsd = 3;

             qmose = (2100000000 - (jbss - jbss%10000))/10000;

             if (wmose > qmose) {
                amose = qmose;
             } else {
                 amose = wmose;
             }

             md1 = mds + "\r\n#d目前您选择的是#r 万级取款服务 #d！\r\n#b您账户内的 #r万级余额#b 为：#r#e" + wmose + "#n  \r\n#b您背包的 #r金币数量#b 为：#e#r" + jbss + "#n \r\n\r\n#d注意：取款的数量的单位为：#r万 \r\n您背包还能装下#e#r " + qmose + " #n 万金币 ！\r\n#k现在请输入您需要从#r 万级账目 #b取款的数量：\r\n(注：输入值不要超过您账户内的 #r取款限额#b ：#r#e" + amose + "#n 万#b )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050005:

             dsd = 4;

             qmose = (2100000000 - (jbss - jbss%100000000))/100000000;

             if (emose > qmose) {
                amose = qmose;
             } else {
                 amose = emose;
             }

             md1 = mds + "\r\n#d目前您选择的是#r 亿级取款服务 #d！\r\n#b您账户内的 #r亿级余额#b 为：#r#e" + emose + "#n  \r\n#b您背包的 #r金币数量#b 为：#e#r" + jbss + "#n \r\n\r\n#d注意：取款的数量的单位为：#r亿 \r\n您背包还能装下#e#r " + qmose + " #n 亿金币 ！\r\n#k现在请输入您需要从#r 亿级账目 #b取款的数量：(注：输入值不要超过账户内的 #r取款限额#b ：#r#e" + amose + "#n 亿#b )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050006:

               dsd = 9;

            if ((cm.getMaplewing("gainmoses") > 0) || (cm.getMaplewing("savemose") > 0)) {


             md1 = mds + "\r\n#d目前您选择的是#r获得债券利息服务#d！以下是您的的债券信息:#b债券数量：#r#e" + cm.getMaplewing("savemose") + "#n  #b剩余时间：#r#e" + cm.getMaplewing("havetime") + "#n  #b获得利息：#r#e" + cm.getMaplewing("gainmoses") + "#n\r\n";


           if (cm.getMaplewing("havetime") == 0) {

              weiyj = 0;

             md2 = "#r您与#eMapleWingBank#n约定的债券时间已经到期！\r\n#d在本次约定 #e#r" + cm.getMaplewing("savetime") +"#n分钟#d内您获得的利息为：#r#e"  + cm.getMaplewing("gainmoses") +" #n金币\r\n#b领取后您将获得本金#r#e" + cm.getMaplewing("savemose") + "#n万金币#d+#b利息：#e#r" + cm.getMaplewing("gainmoses") +"#n金币";

           } else {

              if (cm.getMaplewing("savemose") < 10) {
                   weiyj = 0;
              }

             md2 = "#r您与#eMapleWingBank#n约定的债券时间还未到期！\r\n#r如果您现在就领取系统将会收取您 #e#r" + weiyj + "W #n的违约金！\r\n#d在本次约定 #e#r" + cm.getMaplewing("savetime") +"#n分钟#d内您获得的利息为：#r#e"  + cm.getMaplewing("gainmoses") +"#n金币\r\n#b领取后您将获得本金#r#e" + cm.getMaplewing("savemose") + "#n万金币#d+#b利息：#e#r" + cm.getMaplewing("gainmoses") +"#n金币";

           }
                   jbs1 = jbss/10000;

               md2 += "\r\n#n目前您购买的债券数量每次刷新获得利息 = #e" + zjlx + "#n 金币\r\n#b您账户内的 #r万级余额#b 为：#r#e" + wmose + "#n \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbss + " = " + jbs1 + "#n 万\r\n#b#L1#领取本金与利息(整万部分存入万级账目)#l  \r\n#L2#领取本金与利息到背包#l";


           cm.sendSimple(md1 + md2);

          } else {
 
          dsd = 55554;

          md2 = mds + "\r\n#r对不起！您还为购买债券，无法使用本服务！#d\r\n\r\n#L0#返回金融储蓄#l     #L1#结束对话#l ";

           cm.sendSimple(md2);

          }


           // cm.dispose();
        //   cm.sendOk("敬请期待!!");

            break;


        case 10050007:

             dsd = 7;

           md1 = mds + "\r\n#d请输入您要转账的 #r#e账户ID#n：\r\n(请不要输入您自己的ID！)";

                cm.sendGetNumber(md1, 1, 1, 999999);

            break;


        case 10050008:


                  cm.dispose();
                  cm.openNpc(9000086, 100500);
            break;

        case 10050009:

                  cm.dispose();

            break;




            }  //switch



         } else if (status == 2) {

            shuru = selection;

            md2 = mds + "\r\n#b您确定要";

            if (dsd == 1) {

                dsd = 100;

                cm.sendYesNo(md2 + " 存入 #r#e " + shuru + " #n万金币 #b到 万级账目？");

            } else if (dsd == 2) {

                dsd = 200;

                cm.sendYesNo(md2 + " 存入 #r#e " + shuru + " #n亿金币 #b到 亿级账目？");

            } else if (dsd == 3) {

                dsd = 300;

                cm.sendYesNo(md2 + " 取出 #r#e " + shuru + " #n万金币 #b到 您的背包？");

            } else if (dsd == 4) {

                dsd = 400;

                cm.sendYesNo(md2 + " 取出 #r#e " + shuru + " #n亿金币 #b到 您的背包？");



            } else if (dsd == 9) {

                dsd = 55553;

                var zjgainmose = cm.getMaplewing("gainmoses");
                var zjsavemose = cm.getMaplewing("savemose");

                var gbbjb = zjgainmose%10000;
                var cwjch = (zjgainmose - gbbjb)/10000;

                var nowjb = cm.getMeso();
                var tjbs;
                var lastjb;
                var lastcw;

                 if ((nowjb <= weiyj*10000) || (zjsavemose < 10)) {
                     weiyj = 0;
                 }


                if (selection == 2) {

                    tjbs = nowjb + zjgainmose + zjsavemose*10000;
                    lastjb = zjgainmose + zjsavemose*10000;

                    if (tjbs > 2100000000) {

                    lastjb = 2100000000 - nowjb;
                    
                    lastcw = (zjgainmose + zjsavemose*10000 - gbbjb)/10000;

                    } else {
                     lastcw = 0;

                    }

                } else if (selection == 1) {
                    tjbs = nowjb + gbbjb;
                    lastjb = gbbjb;
                    lastcw = cwjch + zjsavemose;

                }

                if (tjbs < 2100000000) {

                 cm.setMaplewing("savemose", 0);
                 cm.setMaplewing("savetime", 0);
                 cm.setMaplewing("havetime", 0);
                 cm.addMaplewing("gainmoses", -zjgainmose);
                 cm.addMaplewing("wmose", lastcw);
                 cm.gainMeso(lastjb - weiyj*10000);

                 md4 = mds + "#g领取成功！";
                 } else {
                 md4 = mds + "#g领取失败！#r你的背包无法装下#e#r" + lastjb +" #n金币！\r\n请换第一种领取方式！";
                 }

                zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";


                md4 += "\r\n#b#L0#返回主页面#l     #L1#结束对话#l\r\n\r\n";
                cm.sendSimple(md4 + zhs);



            } else if (dsd == 55554) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }


            } else if (dsd == 7) {

                dsd = 700;

           if ((cm.getMaplewing("cardid", shuru) != -1) &&(shuru != caid)) {


            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhid = shuru;

             trzhlv = cm.getMaplewing("cardlevel", zhid);

             trzhcl = cm.getColor(zhid);
             trzhna = cm.getMaplewings("cardname", zhid);

                    for (var ii = 0; ii <= kaitems.length; ii++)
                    if (ii % 2 == 0 && (kaitems[ii] == trzhlv)) {
                        newitems = kaitems[ii + 1];
                    }

           if (cm.getChar().getAccountID()==1) {

              zhms = "\r\n#b以下是 #e#r" + trzhna + "#n 的 #rMaplewingBank #b信息：\r\n#d账 户 ID：#e#r " + zhid + "   #n#d账户类别：  #i" + newitems + "# #e#r" + trzhcl + " #n#d #i" + newitems + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple", zhid) + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose", zhid) + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose", zhid) + "#n#b \r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez", zhid) + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb", zhid) + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley", zhid) + " \r\n";

           } else {

             zhms = "\r\n#b以下是 #e#r" + trzhna + "#n 的 #rMaplewingBank #b的一些信息：\r\n#d账 户 ID：#e#r " + zhid + "   #n#d账户类别：  #i" + newitems + "# #e#r" + trzhcl + " #n#d #i" + newitems + "#   \r\n";

           }

           md1 = mds + "\r\n#d目前您选择的是 #r在线转账服务#d ！" + zhs + "#n#d请选择你需要的转账服务：\r\n#r#L1#万级在线转账#l  #L2#亿级在线转账#l  #L3#贡献在线转账#l \r\n#L4#活跃在线转账#l  #L5#枫叶在线转账#l  #L6#枫币在线转账#l\r\n " + zhms;

           cm.sendSimple(md1);

          } else {

           cm.sendSimple(mds + " 您输入的 账户ID  不存在(错误)！\r\n请不要输入您自己的ID！\r\n请返回重新输入！！\r\n#b#L99#返回主页面#l     #L98#结束对话#l");

          }



            } else if (dsd == 8) {

                dsd = 800;

            zjlxs = cm.getPlayer().getMaplewingZJS(shuru, 1);



           md1 = mds + "\r\n当前您输入需要购买的债券数量为：#e#r" + shuru + "#n\r\n#b目前债券刷新时间间隔为：#e#r " + zjbl + " #n分钟\r\n#d现在请输入您要购买债券的时间(单位：分) ：\r\n#r(注：目前您购买的债券数量每次刷新获得利息 = #e" + zjlxs + "#n 金币 )";

                cm.sendGetNumber(md1, 1, 1, zjsj);






            } //dsd = 8
           






         } else if (status == 3) {



            md2 = mds + "\r\n#g操作成功！\r\n#b系统已经将#e#r " + shuru;

             nowjb = cm.getMeso();

             das = "目前您的背包金币余额为： #e#r" + nowjb + " #n";

           zhs = das + zhs;


            if (dsd == 100) {

            dsd = 55555;

            wmose += shuru;

            cm.gainMeso(-shuru*10000);
            cm.addMaplewing("wmose", shuru);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n万金币 #b打入您的 #rMaplewingBank#b 账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");
      //      cm.dispose();

            } else if (dsd == 200) {

            dsd = 55555;

            var nwmose = cm.getMaplewing("wmose");
          //  var nmeso = cm.getMeso();

            var ewmose = (nwmose -nwmose%10000)/10000;
        //    var emeso = (nmeso - nmeso%100000000)/100000000;

            var jwmose = 0;
         //   var jmeso= 0;
            var tsmose = 0;

            if (shuru < ewmose) {
                jwmose = ewmose;
          //      jmeso = shuru - emeso;
                tsmoes = shuru;

            } else {

                jwmose = ewmose;
              //  jmeso = emeso;
                tsmoes = jwmose;
            }



           // cm.gainMeso(-jmeso*100000000);
            cm.addMaplewing("wmose", -jwmose*10000);
            cm.addMaplewing("emose", tsmoes);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n亿金币 #b打入您的 #rMaplewingBank#b 账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");
     //       cm.dispose();

            } else if (dsd == 300) {

            dsd = 55555;

            cm.gainMeso(shuru*10000);
            cm.addMaplewing("wmose", -shuru);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n万金币 #b放入您的 #r背包#b 账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");
   //         cm.dispose();

            } else if (dsd == 400) {

            dsd = 55555;

            cm.gainMeso(shuru*100000000);
            cm.addMaplewing("emose", -shuru);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n亿金币 #b放入您的 #r背包#b 账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");

 //           cm.dispose();




            } else if (dsd == 700) {


                if (selection == 99) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 98) {

                  cm.dispose();


                } else if (selection == 1) {

                     dsd = 70010;


                 md1 = mds + "\r\n#k当前你选择的是 #e#r万级在线转账#n #k！\r\n#b转入账户ID为：#e#r" + zhid +  " #n 户主名称：#e#r" + trzhna + " \r\n#d#n目前您的 万级余额：#e#r " + cm.getMaplewing("wmose") + "#n\r\n#d请输入您要将您账户内的#r万级余额#d转出的数目：\r\n#b(手续费：1贡献点)\r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, wmose);

                } else if (selection == 2) {

                     dsd = 70020;


                 md1 = mds + "\r\n#k当前你选择的是 #e#r亿级在线转账#n #k！\r\n#b转入账户ID为：#e#r" + zhid +  " #n 户主名称：#e#r" + trzhna + " \r\n\n#d#n目前您的 亿级余额：#e#r " + cm.getMaplewing("emose") + "#n\r\n#d#n请输入您要将您账户内的#r亿级余额#d转出的数目：\r\n#b((手续费：1贡献点) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, emose);


                } else if (selection == 3) {

                     dsd = 70030;


                 md1 = mds + "\r\n#k当前你选择的是 #e#r贡献在线转账#n #k！\r\n#b转入账户ID为：#e#r" + zhid +  " #n 户主名称：#e#r" + trzhna + " \r\n\n#d#n目前您的 贡献余额：#e#r " + cm.getMaplewing("maple") + "#n\r\n#d#n请输入您要将您账户内的#r贡献余额#d转出的数目：\r\n#b((手续费：1贡献点) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, gxs);


                } else if (selection == 4) {

                     dsd = 70040;


                 md1 = mds + "\r\n#k当前你选择的是 #e#r活跃在线转账#n #k！\r\n#b转入账户ID为：#e#r" + zhid +  " #n 户主名称：#e#r" + trzhna + " \r\n\n#d#n目前您的 活跃余额：#e#r " + cm.getMaplewing("mapley") + "#n\r\n#d#n请输入您要将您账户内的#r活跃余额#d转出的数目：\r\n#b((手续费：1贡献点) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, huoye);


                } else if (selection == 5) {

                     dsd = 70050;


                 md1 = mds + "\r\n#k当前你选择的是 #e#r枫叶在线转账#n #k！\r\n#b转入账户ID为：#e#r" + zhid +  " #n 户主名称：#e#r" + trzhna + " \r\n\n#d#n目前您的 枫叶余额：#e#r " + cm.getMaplewing("maplez") + "#n\r\n#d#n请输入您要将您账户内的#r枫叶余额#d转出的数目：\r\n#b((手续费：1贡献点) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, fengyz);


                } else if (selection == 6) {

                     dsd = 70060;


                 md1 = mds + "\r\n#k当前你选择的是 #e#r枫币在线转账#n #k！\r\n#b转入账户ID为：#e#r" + zhid +  " #n 户主名称：#e#r" + trzhna + " \r\n\n#d#n目前您的 枫币余额：#e#r " + cm.getMaplewing("mapleb") + "#n\r\n#d#n请输入您要将您账户内的#r枫币余额#d转出的数目：\r\n#b((手续费：1贡献点) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, fengyb);


                }  


                
            } else if (dsd == 55553) {



                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }



            } else if (dsd == 800) {


             shuru3 = selection;


                dsd = 80010;

               md1 = mds + "\r\n#d当前输入的购买债券信息为：\r\n#b购买债券数量：#e#r " + shuru + " #n#b   债券约定时间：#r#e " + shuru3 +" #n#b分钟\r\n每次债券信息刷新所获得的收益：#r#e" + zjlxs + " 金币\r\n\r\n您确定与 MapleWingBank 签订该债券订单？";


                cm.sendYesNo(md1);


             




            }// 3 dsd =800











         } else if (status == 4) {

            if (dsd == 55555) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }


              } else if (dsd == 70010) {

                shuru1 = selection;

                dsd = 70011;

                md4 = mds + "您确定将#r";

                cm.sendYesNo(md4 + " 万级账目的余额 #r#e " + shuru1 + " #n  #b转账到 #r " + trzhna + "#b 万级账目？");

              } else if (dsd == 70020) {

                shuru1 = selection;

                dsd = 70021;

                md4 = mds + "您确定将#r";

                cm.sendYesNo(md4 + " 亿级账目的余额 #r#e " + shuru1 + " #n  #b转账到 #r " + trzhna + "#b 亿级账目？");

              } else if (dsd == 70030) {

                shuru1 = selection;

                dsd = 70031;

                md4 = mds + "您确定将#r";

                cm.sendYesNo(md4 + " 贡献账目的余额 #r#e " + shuru1 + " #n  #b转账到 #r " + trzhna + "#b 贡献账目？");

              } else if (dsd == 70040) {

                shuru1 = selection;

                dsd = 70041;

                md4 = mds + "您确定将#r";

                cm.sendYesNo(md4 + " 活跃账目的余额 #r#e " + shuru1 + " #n  #b转账到 #r " + trzhna + "#b 活跃账目？");

              } else if (dsd == 70050) {

                shuru1 = selection;

                dsd = 70051;

                md4 = mds + "您确定将#r";

                cm.sendYesNo(md4 + " 枫叶账目的余额 #r#e " + shuru1 + " #n  #b转账到 #r " + trzhna + "#b 枫叶账目？");

              } else if (dsd == 70060) {

                shuru1 = selection;

                dsd = 70061;

                md4 = mds + "您确定将#r";

                cm.sendYesNo(md4 + " 枫币账目的余额 #r#e " + shuru1 + " #n  #b转账到 #r " + trzhna + "#b 枫币账目？");



              } else if (dsd == 80010) {



            dsd = 55557;

            var zjwmose;
            var zjbbjb;

            if (shuru > wmose) {

                 zjwmose = wmose;
                 zjbbjb = (shuru - wmose)*10000;

             } else {

                 zjwmose = shuru;
                 zjbbjb = 0;

             }

            cm.gainMeso(-zjbbjb);
            cm.addMaplewing("wmose", -zjwmose);

            cm.setMaplewing("savemose", shuru);
            cm.setMaplewing("savetime", shuru3);
            cm.setMaplewing("havetime", shuru3);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

           md2 = mds + "#g操作成功！\r\n#d我已成功为您购买到：#e#r" + shuru + " #n#d债券  约定时间：#e#r" + shuru3 +" #n分钟\r\n#n目前您购买的债券数量每次刷新获得利息 = #e" + zjlxs + "#n 金币\r\n"

            cm.sendSimple(md2 + "#b①系统自动扣除您#r万级账目内的余额 #e" + zjwmose + "#n#b #b\r\n②系统自动扣除背包内的 #r" + zjbbjb + " 金币 \r\n" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");







            }// dsd 












         } else if (status == 5) {



            md5 = mds + "\r\n#g操作成功！";

             nowjb = cm.getMeso();

             das = "\r\n目前您的背包金币余额为： #e#r" + nowjb + " #n";

           zhs = das + zhs;


            if (dsd == 70011) {

            dsd = 55556;


            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("wmose") >= shuru1)) {

            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("wmose", -shuru1);
            cm.addMaplewing("wmose", shuru1, zhid);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#b系统已经将您#r万级账目内的余额#e" + shuru1 + "#n#b #b转入 #r" + trzhna + "#b 的账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "您账户内的贡献余额 不足以进行转账或者您转出的资金错误！请稍后再试！\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");

            }



            } else if (dsd == 70021) {

            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("emose") >= shuru1)) {

            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("emose", -shuru1);
            cm.addMaplewing("emose", shuru1, zhid);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#b系统已经将您#r亿级账目内的余额#e" + shuru1 + "#n#b #b转入 #r" + trzhna + "#b 的账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "您账户内的贡献余额 不足以进行转账或者您转出的资金错误！请稍后再试！\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");

            }



            } else if (dsd == 70031) {

            dsd = 55556;


            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("maple") >= shuru1 + sxf)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("maple", -shuru1);
            cm.addMaplewing("maple", shuru1, zhid);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#b系统已经将您#r贡献账目内的余额#e" + shuru1 + "#n#b #b转入 #r" + trzhna + "#b 的账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "您账户内的贡献余额 不足以进行转账或者您转出的资金错误！请稍后再试！\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");

            }



            } else if (dsd == 70041) {

            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("mapley") >= shuru1)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("mapley", -shuru1);
            cm.addMaplewing("mapley", shuru1, zhid);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#b系统已经将您#r活跃账目内的余额#e" + shuru1 + "#n#b #b转入 #r" + trzhna + "#b 的账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "您账户内的贡献余额 不足以进行转账或者您转出的资金错误！请稍后再试！\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");

            }



            } else if (dsd == 70051) {

            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("maplez") >= shuru1)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("maplez", -shuru1);
            cm.addMaplewing("maplez", shuru1, zhid);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#b系统已经将您#r枫叶账目内的余额#e" + shuru1 + "#n#b #b转入 #r" + trzhna + "#b 的账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            } else {
              dsd = 55556;
             cm.sendOk(mds + "您账户内的贡献余额 不足以进行转账或者您转出的资金错误！请稍后再试！\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            }



            } else if (dsd == 70061) {



            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("mapleb") >= shuru1)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("mapleb", -shuru1);
            cm.addMaplewing("mapleb", shuru1, zhid);

            zhs = "\r\n#b以下是您的 #rMaplewingBank #b账户信息：\r\n#d账 户 ID：#e#r " + caid + "   #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#d债券数量：#e#r" + cm.getMaplewing("savemose") + "  #d#n剩余时间：#e#r" + cm.getMaplewing("havetime") + "  #d#n获得利息：#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#b系统已经将您#r枫币账目内的余额#e" + shuru1 + "#n#b #b转入 #r" + trzhna + "#b 的账户内！" + zhs + "\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "您账户内的贡献余额 不足以进行转账或者您转出的资金错误！请稍后再试！\r\n#k#n#L0#返回金融储蓄#l     #L1#结束对话#l ");


            }


            } else if (dsd == 55557) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }





            }//dsd








         } else if (status == 6) {


            if (dsd == 55556) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }


              }




        } //status == 6








    }
}


























/*


            selectedType = selection;

            if (selectedType == 0) {
                cm.sendGetNumber("请输入您要增加的Maplewing贡献点数:\r\n", 1, 1, 9999999);
            } else if (selectedType == 1) {
                cm.sendGetNumber("请输入您要兑换的金额(单位: 亿 ):\r\n", 1, 1, 10);
            } else if (selectedType == 2) {
                cm.sendGetNumber("请输入您要领取的#e#r点卷#n#k(单位: #r万#k ):\r\n", 1, 1, 100);
            } else if (selectedType == 3) {
                cm.sendGetNumber("请输入您要领取的#e#r金币#n#k(单位: #r亿#k ):\r\n", 1, 1, 10);
            }



        } else if (status == 2) {



            selectedMeso = selection;

            if (selectedType == 0) {
                cm.sendYesNo("您是否要增加的Maplewing贡献点数#r " + selectedMeso + " #k。");
            } else if (selectedType == 1) {
                cm.sendYesNo("您是否要取出#r " + selectedMeso + " #k金币？");
            } else if (selectedType == 2) {
                cm.sendYesNo("您是否要领取#r#e " + selectedMeso * dianjuan + " #n#k点卷？");
            } else if (selectedType == 3) {
                cm.sendYesNo("您是否要领取#r#e " + selectedMeso * youxibi + " #n#k金币？");
            }


        } else if (status == 3) {

            if (selectedType == 0) {

                //if (cm.getMeso() >= selectedMeso * moneyMeso) {
                   // cm.sendNext("您的金币不够。"); //}else //判断是否符合条件

                if (cm.addMaplewing1(selectedMeso, 0) > 0) {
                    //cm.gainMeso( - selectedMeso * moneyMeso);
                    cm.sendOk("好的，已经增加Maplewing贡献点数！\r\n您的Maplewing贡献点数为#r " + cm.getMaplewing() + " #k点");
                } else {
                    cm.sendOk("增加Maplewing贡献点数出现错误，请反馈给管理员！");
                }
                cm.dispose();

            } else if (selectedType == 1) {

                if (cm.getMaplewing1() < selectedMeso) {
                    cm.sendOk("您没有存那么多钱。");
                } else if (cm.getMeso() > 1000000000) {
                    cm.sendOk("您身上的金币超过了 10 亿，领取失败。请将金币存入仓库后来找我领取吧！");
                } else if (cm.addMaplewing1( - selectedMeso, 1) > 0) {
                    cm.gainMeso(selectedMeso * youxibi);
                    cm.sendOk("好的，请收好您的钱！");
                } else {
                    cm.sendOk("取款出现错误，请反馈给管理员！");
                }
                cm.dispose();

                } else if (selectedType == 2) {

                    cm.gainNX(selectedMeso * dianjuan);
                    cm.sendOk("好的，#r#e " + selectedMeso * dianjuan + " #n#k点卷 已经打到了您的账户！\r\n现在您的#e#r点卷余额#n为：#r #e" + cm.getPlayer().getCSPoints(1) + " #n#k点");

                cm.dispose();

            } else if (selectedType == 3) {

                if (cm.getMeso() > 1000000000) {
                    cm.sendOk("您身上的金币超过了 10 亿，领取失败。请将金币存入仓库后来找我领取吧！");

                } else {
                    cm.gainMeso(selectedMeso * youxibi);
                    cm.sendOk("好的，#r#e " + selectedMeso * youxibi + " #n#k金币 已经打到了您的账户！\r\n现在您的#e#r金币余额#n为：#r #e" + cm.getMeso() + " #n#k点");
                }
                cm.dispose();

            }




        } else {
            cm.dispose();
        }

*/