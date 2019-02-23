var status = 0; 


var name;
var cname = "灰卡";
var caid;

var gpms;

var md1;
var md2;
var md3;

var mds;
var mes;

var wmose;
var emose;

var samose;
var savrtime;
var gainmose;

var fybs;


var gxs;

var mima;
var cardlv = 0;

var fengye;

var items = 4021004;


var jxd = 10;//捐献金币获得贡献ggx

var ggx = 1;//捐献金币后获得的贡献

var jbs;
var shul;
var nwmose;
var dsd;

var nwmose2;
var njbs2;

var jjbs = 0;
var jwmose = 0;

var shuru;
var ggxss = 0;

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





function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 

            mds = "#r ┈┈┈━═☆#i4251202##r  金融专区  #i4251202# #r☆═━┈┈┈ \r\n#r";
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



        rategp1 = cm.getMaplewinggp("rate", 1);

        pgp1 = cm.getMaplewinggp("point", 1);

        lpgp1 = cm.getMaplewinggp("lastpoint", 1);


            fyb = cm.getMaplewing("mapleb");


           gpms = "#d倍率：#e#r" + rategp1 + " #n#b 当前点数：#e#r" + pgp1 + " #n#d 上一点数：#e#r" + lpgp1 + " #n\r\n#k注意：股票信息30秒刷新一次！请以最新的为准！" ;


                    for (var i = 0; i <= kaitem.length; i++)
                    if (i % 2 == 0 && (kaitem[i] == cardlv)) {
                        items = kaitem[i + 1];
                    }


                    for (var ii = 0; ii <= kaitem.length; ii++)
                    if (i % 2 == 0 && (kaitem[i] == cardlv)) {
                        items = kaitem[i + 1];
                    }


            mes = mds + "#r" + name + " #k欢迎您进入金融专区！我将为您服务！\r\n#b以下是您在 #rMaplewingBank #b的账户信息：\r\n#d账 户 ID：#e#r " + caid + "     #n#d账户类别：  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "# \r\n#b贡献余额：#e#r" + gxs + "#n  #b万级余额：#e#r " + wmose + "#n#b  亿级余额：#r#e" + emose + "#n#b \r\n#d债券数量：#e#r" + samose + "  #d#n剩余时间：#e#r" + satime + "  #d#n获得利息：#e#r" + gamose + "\r\n#L100500#储蓄投资服务#l  #L100501#股票证劵市场#l  #L100503#资住慈善事业#l\r\n#L100502#刷新账户信息#l\r\n\r\n#n#b以下是 #rMaplewingBank#b 股票上市信息：\r\n" + gpms;


            cm.sendSimple(mes); 


        } else if (status == 1) { 
        switch (selection) {

        case 100500:

            cm.dispose();
            cm.openNpc(9000086, 100500);

            break;
        case 100501:
            cm.dispose();
            cm.openNpc(9000086, 100501);
            break;
        case 100502:
            cm.dispose();
            cm.openNpc(9000086, 1005);
            break;

        case 100503:

           dsd = 300;

           //jbs = cm.getMeso();
           nwmose = cm.getMaplewing("wmose");
           shul = (nwmose - nwmose%jxd)/jxd;

           md1 = mds +  "欢迎您进入慈善捐赠事业！\r\n\#b只要您为慈善事业捐赠就能获得贡献点哦！\r\n#d每捐献#e#r" + jxd + "#nW金币 #d就能获得 #e#r" + ggx + " #n#d 贡献点！\r\n#r心动么？心动不如行动！赶快捐献吧！！\r\n注意：本服务暂时只支持MaplWingBank的转账！\r\n#d目前您MaplewingBank内的万级账户余额为：#e#r" + cm.getMaplewing("wmose") +"#n#b\r\n\r\n请输入您需要捐献的金币数量：\r\n#b(注：您当前能够输入的最大值为：#e#r" + shul +"#n#b)";

                cm.sendGetNumber(md1, 1, 1, shul);
            //cm.dispose();
           // cm.openNpc(9000086, 1005);
            break;



            } //switch 



        } else if (status == 2) { 


          shuru = selection;

           njbs2 = cm.getMeso();
           nwmose2 = cm.getMaplewing("wmose");

         if (dsd == 300) {

         dsd = 30010;

         if (shuru <= (nwmose - nwmose%jxd)/jxd) {

            ggxss = shuru;

            md2 = mds +  "\r\n捐献成功！获得贡献点：#e#r" + shuru + "#n#b\r\n目前您万级余额为：#e#r";

          } else {

            ggxss = 0;

            md2 = mds +  "\r\n捐献错误！请重新操作！\r\n#b目前您万级余额为：#e#r";

          }
          cm.addMaplewing("maple", ggxss);
          cm.addMaplewing("wmose", -ggxss*jxd);
          
          cm.sendSimple(md2 + cm.getMaplewing("wmose") + "#n\r\n#b您的贡献点余额为：#e#r" + cm.getMaplewing("maple") + "#n#d\r\n\r\n#L0#返回金融专区#l     #L1#结束对话#l ");



          }//dsd

        } else if (status == 3) {


           if (dsd == 30010) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 1005);


                } else if (selection == 1) {

                  cm.dispose();
                }


            }  


        } //status == 3





    } 
}  
