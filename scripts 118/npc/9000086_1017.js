var status = 0;

var name;
var lvs;
var talks;

var mds;
var md1;
var md2;
var md3;

var jbs;

var dj1 = 1; //金币购买点卷的单位数量
var dj2 = 1; //金币购买抵用卷的单位数量

var gdj1 = 10; //贡献购买点卷的单位数量
var gdj2 = 15; //枫叶购买点卷的单位数量

var jbhdj1 = 12000; //金币购买数量dj1的点卷价格

var gxhdj1 = 1; //贡献购买数量dj1的点卷价格
var fyhdj1 = 1; //枫叶购买数量dj1的点卷价格

var jbhdj2 = 10000; //金币购买数量dj2的点卷价格
var gxhdj2 = 1; //贡献购买数量dj2的点卷价格
var fyhdj2 = 1; //枫叶购买数量dj2的点卷价格

var fengye = 4001126; //枫叶

var titems = 4251202;

var dsd = 0;

var fengyz;
var wmose;
var gxs;
var tmeso;
var amose;

var njbs;
var nwmose;
var ngxs;
var nfengyz;

var shuru;

var djs;

var djtype = 2;

var jjbss = 0;
var jwmoses = 0;
var jgxss = 0;
var jfengyzs = 0;


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


            name = cm.getVipname();
            lvs = cm.getPlayer().getLevel();



            cname = cm.getColor();
            fengyz = cm.getMaplewing("maplez");

            jbs = cm.getMeso();
            wmose = cm.getMaplewing("wmose");

            gxs = cm.getMaplewing("maple");


          talks = "#r ┈┈┈━═☆#i" + titems + "##r   点卷中介   #i" + titems + "# #r☆═━┈┈┈ \r\n";

          mds = "#r" + name + " 欢迎您进入点卷中介！！！\r\n在这里您可以进行点卷兑换！#d以下是兑换比率：\r\n\r\n#g金币兑换：#e#r" + jbhdj1 + "#n金币 = #e" + dj1 + "#n点卷  #e#r" + jbhdj2 + "#n金币 = #e" + dj2 + "#n抵用卷\r\n#g贡献兑换：#e#r" + gxhdj1 + "#n 点  = #e" + gdj1 + "#n点卷  #e#r" + gxhdj2 + "#n 点  = #e" + gdj2 + "#n抵用卷\r\n#g枫叶兑换：#e#r" + fyhdj1 + "#n#i" + fengye + ":# = #e" + gdj1 + "#n点卷  #e#r" + fyhdj2 + "#n#i" + fengye + ":# = #e" + gdj2 + "#n抵用卷\r\n#b您账号内的点卷余额：#e#r" + cm.getPlayer().getCSPoints(1) + "#n  抵用卷余额：#e#r" + cm.getPlayer().getCSPoints(2) + "#n\r\n#d请选择您需要的兑换服务：#b\r\n#L101701#金币兑换抵用卷#l #L101702#贡献兑换抵用卷#l #L101703#枫叶兑换抵用卷#l \r\n#L101704#金币兑换 点 卷#l #L101705#贡献兑换 点 卷#l #L101706#枫叶兑换 点 卷#l\r\n\r\n";


            cm.sendSimple(talks + mds); 



        } else if (status == 1) { 

        switch (selection) {

        case 101701:

              tmeso = (jbs - jbs%jbhdj2)/jbhdj2 + wmose*10000/jbhdj2;
              amose = tmeso;

              dsd = 100;

             md1 = talks + "\r\n#d目前您选择的是#r 金币兑换抵用卷服务 #d！\r\n兑换比率：#e#r" + jbhdj1 + "#n金币 = #e" + dj1 + "#n点卷  #e#r" + jbhdj2 + "#n金币 = #e" + dj2 + "#n抵用卷\r\n#b您账户内的 #r万级余额#b 为：#r#e" + cm.getMaplewing("wmose") + "#n  \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n 万\r\n\r\n#b现在请输入您需要兑换#r 抵用卷 #b的数量：\r\n(注：输入值不要超过您所能兑换的最大数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);


          //  cm.dispose();
            //cm.openNpc(9000086, 3);
            break;


        case 101702:

              amose = gxs;


              dsd = 200;

             md1 = talks + "\r\n#d目前您选择的是#r 贡献兑换抵用卷服务 #d！\r\n兑换比率：#e#r" + gxhdj1 + "#n 点  = #e" + gdj1 + "#n点卷  #e#r" + gxhdj2 + "#n 点  = #e" + gdj2 + "#n抵用卷\r\n#b您账户内的 #r贡献余额#b 为：#r#e" + cm.getMaplewing("maple") + "#n  \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n 万\r\n\r\n#b现在请输入您需要兑换#r 抵用卷 #b的数量：\r\n(注：输入值不要超过您所能兑换的最大数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;

        case 101703:

              amose = fengyz;

              dsd = 300;

             md1 = talks + "\r\n#d目前您选择的是#r 枫叶兑换抵用卷服务 #d！\r\n兑换比率：#e#r" + fyhdj1 + "#n#i" + fengye + ":# = #e" + gdj1 + "#n点卷  #e#r" + fyhdj2 + "#n#i" + fengye + ":# = #e" + gdj2 + "#n抵用卷\r\n#b您账户内的 #r枫叶储量#b 为：#r#e" + cm.getMaplewing("maplez") + "#n  \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n 万\r\n\r\n#d注意：存款的数量的单位为： #r万 \r\n#b现在请输入您需要兑换#r 抵用卷 #b的数量：\r\n(注：输入值不要超过您所能兑换的最大数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;



        case 101704:


              tmeso = (jbs - jbs%jbhdj1)/jbhdj1 + wmose*10000/jbhdj1;
              amose = tmeso;

              dsd = 400;

             md1 = talks + "\r\n#d目前您选择的是#r 金币兑换点卷服务 #d！\r\n兑换比率：#e#r" + jbhdj1 + "#n金币 = #e" + dj1 + "#n点卷  #e#r" + jbhdj2 + "#n金币 = #e" + dj2 + "#n抵用卷\r\n#b您账户内的 #r万级余额#b 为：#r#e" + cm.getMaplewing("wmose") + "#n  \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n 万\r\n\r\n#b现在请输入您需要兑换#r 抵用卷 #b的数量：\r\n(注：输入值不要超过您所能兑换的最大数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 10, amose);


          //  cm.dispose();
            //cm.openNpc(9000086, 3);
            break;


        case 101705:

              amose = gxs;


              dsd = 500;

             md1 = talks + "\r\n#d目前您选择的是#r 贡献兑换点卷服务 #d！\r\n兑换比率：#e#r" + gxhdj1 + "#n 点  = #e" + gdj1 + "#n点卷  #e#r" + gxhdj2 + "#n 点  = #e" + gdj2 + "#n抵用卷\r\n#b您账户内的 #r贡献余额#b 为：#r#e" + cm.getMaplewing("maple") + "#n  \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n 万\r\n\r\n#b现在请输入您需要兑换#r 抵用卷 #b的数量：\r\n(注：输入值不要超过您所能兑换的最大数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;

        case 101706:

              amose = fengyz;

              dsd = 600;

             md1 = talks + "\r\n#d目前您选择的是#r 枫叶兑换点卷服务 #d！\r\n兑换比率：#e#r" + fyhdj1 + "#n#i" + fengye + ":# = #e" + gdj1 + "#n点卷  #e#r" + fyhdj2 + "#n#i" + fengye + ":# = #e" + gdj2 + "#n抵用卷\r\n#b您账户内的 #r枫叶储量#b 为：#r#e" + cm.getMaplewing("maplez") + "#n  \r\n#b您背包里的 #r金币数量#b 为：#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n 万\r\n\r\n#d注意：存款的数量的单位为： #r万 \r\n#b现在请输入您需要兑换#r 抵用卷 #b的数量：\r\n(注：输入值不要超过您所能兑换的最大数量： #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;







            } // switch



        } else if (status == 2) { 

                shuru =selection;

            nfengyz = cm.getMaplewing("maplez");

            njbs = cm.getMeso();
            nwmose = cm.getMaplewing("wmose");

            ngxs = cm.getMaplewing("maple");

            tmeso = (njbs - njbs%10000)/10000 + nwmose;

             if (dsd == 100) {

                 if ((shuru*jbhdj2 < tmeso) && (nwmose*10000/jbhdj2 > (njbs - njbs%jbhdj2)/jbhdj2)) {
                     
                   djs = shuru * dj2;


                 jwmoses = shuru * jbhdj2 / 10000;

                 jjbss = (shuru - jwmoses)*jbhdj2;

              

                 } else if ((shuru*jbhdj2 < tmeso) && (nwmose*10000/jbhdj2 < (njbs - njbs%jbhdj2)/jbhdj2)) {

                 jjbss = shuru * jbhdj2 * jbhdj2;

                 jwmoses = shuru - jjbss;

                 } else {

                 djs = tmeso * dj2;


                 jwmoses = nwmose * jbhdj2;

                 jjbss = (tmeso - jwmoses)*jbhdj2;

                 }
            md2 = "\r\n#g操作成功！\r\n#d系统已经将 #e#r" + djs +" #n 点卷已经打入您的账户！\r\n";

             } else if (dsd == 200) {


                 if (shuru < ngxs) {
                     
                   djs = shuru * gdj2;

                   jgxss = shuru*gxhdj2;

                 
                 } else  {

                 jgxss = ngxs*gxhdj2;

                 djs = ngxs;
                 }


            md2 = "\r\n#g操作成功！\r\n#d系统已经将 #e#r" + djs +" #n 点卷已经打入您的账户！\r\n";

             } else if (dsd == 300) {


                 if (shuru < nfengyz) {
                     
                   djs = shuru * gdj2;

                   jfengyzs = shuru*fyhdj2;


                 } else  {
                   jfengyzs = nfengyz*fyhdj2;
                 djs = nfengyz;
                 }
            md2 = "\r\n#g操作成功！\r\n#d系统已经将 #e#r" + djs +" #n 点卷已经打入您的账户！\r\n";

             } else if (dsd == 400) {

                 djtype = 1;

                 if ((shuru*jbhdj1 < tmeso) && (nwmose*10000/jbhdj1 > (njbs - njbs%jbhdj1)/jbhdj1)) {
                     
                   djs = shuru * dj1;


                 jwmoses = shuru * jbhdj1 / 10000;

                 jjbss = (shuru - jwmoses)*jbhdj1;

              

                 } else if ((shuru*jbhdj1 < tmeso) && (nwmose*10000/jbhdj1 < (njbs - njbs%jbhdj1)/jbhdj1)) {

                 jjbss = shuru * jbhdj1 * jbhdj1;

                 jwmoses = shuru - jjbss;

                 } else {

                 djs = tmeso * dj1;


                 jwmoses = nwmose * jbhdj1;

                 jjbss = (tmeso - jwmoses)*jbhdj1;

                 }

                   md2 = "\r\n#g操作成功！\r\n#d系统已经将 #e#r" + djs +" #n 点卷已经打入您的账户！\r\n";

             } else if (dsd ==500) {

                 djtype = 1;
                 if (shuru < ngxs) {
                     
                   djs = shuru * gdj1;

                   jgxss = shuru*gxhdj1;

                 
                 } else  {

                 jgxss = ngxs*gxhdj1;

                 djs = ngxs;
                 }


                   md2 = "\r\n#g操作成功！\r\n#d系统已经将 #e#r" + djs +" #n 点卷已经打入您的账户！\r\n";

             } else if (dsd == 600) {

                 djtype = 1;
                 if (shuru < nfengyz) {
                     
                   djs = shuru * gdj1;

                   jfengyzs = shuru*fyhdj1;

                   

                 } else  {
                   jfengyzs = nfengyz*fyhdj1;
                 djs = nfengyz;
                 }


                   md2 = "\r\n#g操作成功！\r\n#d系统已经将 #e#r" + djs +" #n 点卷已经打入您的账户！\r\n";


             }// dsd


              cm.gainMeso(-jjbss);
              cm.addMaplewing("wmose", -jwmoses);
              cm.addMaplewing("maple", -jgxss);
              cm.addMaplewing("maple", -jfengyzs);


              cm.getPlayer().modifyCSPoints(djtype, djs);
             // cm.gainNX(djtype, djs);


              var zhs = "\r\n#b以下是您的 #rMaplewingBank #b一些账户信息：\r\n#b贡献余额：#e#r" + cm.getMaplewing("maple") + " #n #b万级余额：#e#r " + cm.getMaplewing("wmose") + "#n#b    亿级余额：#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#n#b枫叶储量：#e#r" + cm.getMaplewing("maplez") + "  #b#n枫币储量：#e#r" + cm.getMaplewing("mapleb") + "  #b#n活跃点数：#e#r" + cm.getMaplewing("mapley") + " \r\n";


              cm.sendOk(talks + md2 + "#b您账号内的点卷余额：#e#r" + cm.getPlayer().getCSPoints(1) + "#n  #b抵用卷余额：#e#r" + cm.getPlayer().getCSPoints(2) + "#n\r\n#b背包内金币数量：#e#r" + cm.getMeso() + "#n" + zhs);

             cm.dispose();


        } //status == 2




    } 
}  
