var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var md1;
var md2;

var pas = 0;

var mx = 2500;
var nitem1 = 4021010;//ʱ��֮ʯ
var nitem2 = 4021022;//̫������

var nlv;
var nmaple;
var nitems1;
var nitems2;

var hlv;
var hmaple;
var hitem1;
var hitem2;
var hgx;

var beibao = 2;
var beibaokj = 1;

var jobs;

var njob = 0;

var setll = 4;
var setmj = 4;
var setzl = 4;
var setyq = 4;
var setlv = 1;

var setsx1;
var sersx2;

var mds;

var text1 = "";


var chongxiu1 = Array(
1, 200, 100, 1, 1,
2, 202, 200, 2, 2,
3, 204, 30, 3, 3,
4, 206, 400, 4, 4,
5, 208, 500, 5, 5,
6, 210, 600, 6, 6,
7, 212, 700, 7, 7,
8, 214, 800, 8, 8,
9, 216, 900, 9, 9,
10, 218, 1000, 10, 10,
11, 220, 1100, 11, 11,
12, 222, 1200, 13, 13,
13, 224, 1300, 15, 15,
14, 226, 1400, 17, 17,
15, 228, 1500, 20, 20,
16, 230, 1600, 26, 26,
17, 232, 1700, 30, 30,
18, 234, 1800, 38, 38,
19, 236, 1900, 59, 59,
20, 238, 2000, 70, 70,
21, 240, 2100, 91, 91,
22, 243, 2200, 122, 212,
23, 246, 2300, 163, 163,
24, 249, 2400, 200, 200,
25, 252, 2500, 252, 252);



var cx1d = Array(
1, 150, 100, 0,
2, 325, 200, 0,
3, 525, 300, 0,
4, 750, 400, 0,
5, 1000, 500, 0,
6, 1250, 600, 0,
7, 1525, 700, 0,
8, 1825, 800, 0,
9, 2150, 900, 0,
10, 2500, 1000, 0,
11, 2850, 1100, 0,
12, 3225, 1200, 0,
13, 3625, 1300, 0,
14, 4050, 1400, 0,
15, 4500, 1500, 0,
16, 4950, 1600, 0,
17, 5425, 1700, 0,
18, 5925, 1800, 0,
19, 6450, 1900, 0,
20, 7000, 2000, 0,
21, 7550, 2100, 0,
22, 8125, 2200, 0,
23, 8725, 2300, 0,
24, 9350, 2400, 0,
25, 9999, 3333, 0);

var xjob = Array(
//����
0, 1,
//Ԥ����
3000, 1,
//ս��
2000, 1,
//����
2001, 1,
//������
501, 2,
//˫��
2002, 3,
//��ħ����
3001, 4,
//���Ĵ���
508, 5,
//��Ӱ
2003, 6);


/*
var chongxiu2 = Array(
1, 200, 10, 1, 0,
2, 202, 20, 0,
3, 204, 30, 0,
4, 206, 40, 0,
5, 208, 50, 0,
6, 210, 60, 0,
7, 212, 70, 0,
8, 214, 80, 0,
9, 216, 90, 0,
10, 218, 100, 0,
11, 220, 110, 0,
12, 222, 120, 0,
13, 224, 130, 0,
14, 226, 140, 0,
15, 228, 150, 0,
16, 230, 160, 0,
17, 232, 170, 0,
18, 234, 180, 0,
19, 236, 190, 0,
20, 238, 10, 0,
21, 240, 10, 0,
22, 243, 20, 0,
23, 246, 30, 0,
24, 249, 40, 0,
25, 252, 50, 0);
*/


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
            cm.dispose();
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
    
        } else if (status == 0) {

          jobs = cm.getJob();

          mds = "#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n";
          texts += mds;

          vipname = cm.getVipname();
          reborns = cm.getPlayer().getReborns();

          hlv = cm.getPlayer().getLevel();
          hmaple = cm.getMaplewing("maple");
          hitem1 = cm.getPlayer().getItemQuantity(nitem1);
          hitem2 = cm.getPlayer().getItemQuantity(nitem2);

          for (var i = 0; i <= chongxiu1.length; i++)
          if (i % 5 == 0 && (chongxiu1[i] == (reborns + 1))) {

             nlv = chongxiu1[i + 1];
             nmaple = chongxiu1[i + 2];
             nitems1 = chongxiu1[i + 3];
             nitems2 = chongxiu1[i + 4];

         }



          for (var i = 0; i <= xjob.length; i++)
          if (i % 2 == 0 && (xjob[i + 1] <= (reborns + 1))) {
            var pps = 1;

            text1 += "#d#L" + xjob[i] +"#" + cm.getJobNameById(xjob[i]) +"#l    ";

            if (pps % 3 != 0) { 
               text1 += "\r\n";
            }
            pps++;

         }


            texts += "#b��Ŀǰ�ĵȼ�Ϊ: #e#r" + hlv + "#n \r\n#bӵ��#i" + nitem1 + ":# #e#r" + hitem1 + " #n#b�� || #i" + nitem2 + ":# #e#r" + hitem2 + " #n#b�� ���׵㣺#e#r" + hmaple +"#n\r\n\r\n#d�������޾���Ϊ:#r��#e" + reborns + "#n����#d��������#r��#e" + (reborns +1) + "#n���� #d������Ϊ:\r\n#r�ȼ��ﵽ #r#e" + nlv + " #n ���׵�#e " + nmaple + "#n #i" + nitem1 + ":# #e#r" + nitems1 + " #n�� || #i" + nitem2 + ":# #e#r" + nitems2 + " #n�� \r\n";




//||(cm.getChar().getAccountID() == 1)

         if ((hlv >= nlv)&&(hmaple >= nmaple)&&(hitem1 >= nitems1)&&(hitem2 >= nitems2)&&(cm.getPlayer().hasEquipped(1302000) || cm.getPlayer().hasEquipped(1312004) || cm.getPlayer().hasEquipped(1322005))) {


            texts += "\r\n#e#r���Ѿ���������Ҫ��! ��ѡ��������֮��ĳ�ʼְҵ��#n" + text1;


           // texts += "\r\n\r\n#n#k#L99999#������һҳ#l        #L99998#�����Ի�#l";

            cm.sendSimple(texts);



         } else {
             texts += "\r\n#r#e�㻹����������Ҫ�������û�д���#i1302000:#��#i1312004:#��#i1322005:#���޷�����ʱ���ϴ��!";
             cm.sendOk(texts);
             cm.dispose();
         }
            

/*

          texts += "#e#r���޶�ʮ�����죬��ת����!#n\r\n#d" + vipname + " , Ŀǰ������޾���Ϊ��  #e#r" + reborns + "#n  ����\r\n#b�����Ƿ���������������:\r\n";


                    for (var i = 0; i <= chongxiu1.length; i++)
                    if (i % 5 == 0 && (chongxiu1[i + 3] >= 0)) {
                        texts += "\r\n#r�������� #d��#e#r " + chongxiu1[i] + "#n #d���� #g����Ҫ��:\r\n#b�ȼ� #e#r" + chongxiu1[i + 1] + " #n#b���� || ���׵�#r#e " + chongxiu1[i + 2] + "#n #b||#i" + nitem1 + ":##e#r" + chongxiu1[ i + 3] + "#n#b�� ||#i" + nitem2 + ":##e#r" + chongxiu1[i + 4] + "#n#b��\r\n";
                    }

             texts += "\r\n#k#L1#������һҳ#l"


          cm.sendSimple(texts);
         // cm.dispose();
          
*/


     } else if (status == 1) {

         pas += selection;

         if (((pas != 99999) || (pas != 99998)) && (pas != null)) {


          for (var i = 0; i <= cx1d.length; i++)
          if (i % 4 == 0 && (cx1d[i] == (reborns + 1))) {
              setsx1 = cx1d[i + 1];
              setsx2 = cx1d[i + 2];
          }



               if ((hlv >= nlv)&&(hmaple >= nmaple)&&(hitem1 >= nitems1)&&(hitem2 >= nitems2)) {

                    if ((jobs >= 100) && (jobs <200) || (jobs >= 3000)&&(jobs <=3112) || (jobs >= 3500)&&(jobs <=3512) || (jobs >= 2000)&&(jobs <=2112) || (jobs >= 530)&&(jobs <=532)) {

                    setll = setsx1;
                    setmj = setsx2;

                     } else if ((jobs >= 200) && (jobs <300) || (jobs >= 3200)&&(jobs <=3212) || (jobs >= 2000)&&(jobs <=2112)) {
 
                     setzl = setsx1;
                     setyq = setsx2;

                      } else if ((jobs >= 300) && (jobs <400) || (jobs >= 3300)&&(jobs <=3312) || (jobs >= 2300)&&(jobs <=2312) || (jobs >= 570) && (jobs <572)) {
 
                     setmj = setsx1;
                     setll = setsx2;

                      } else if ((jobs >= 400) && (jobs <500) || (jobs >= 2400)&&(jobs <=2412)) {
 
                     setyq = setsx1;
                     setmj = setsx2;

                      } else if ((jobs >= 580) && (jobs <600)) {
 
                     setll = setsx2;
                     setmj = setsx1;

                      }

                     if ((cm.getLevel() >= 252) && (reborns >= 24)) {
                          setlv = 252;
                     }

               md1 = mds + "#r" + vipname + " ��ϲ�㣡ʱ��ϴ��ʮ�ֳɹ���\r\n#b��������Ϊ��#e#r" + setll + "#n  #b��������Ϊ��#e#r" + setmj + " #n \r\n#b��������Ϊ��#e#r" + setzl +"#n  #b��������Ϊ��#e#r" + setyq + " #n#d\r\n����ﵽ��һ�������������������Ұɣ�";


                  // md1 += "setll = " + setll + " setmj = " +setmj + "  setzl = " + setzl + "  setyq = " + setyq;

                   cm.gainItem(nitem1, -nitems1);
                   cm.gainItem(nitem2, -nitems2);
                   cm.addMaplewing("maple", -nmaple);

                   cm.getPlayer().resetStats(setll, setmj, setzl, setyq);
                   cm.changeJob(pas);
                   cm.setLevel(setlv);
                   cm.getPlayer().gainReborns(1);

                   cm.getPlayer().resetAPSP();
                   md2 = "<ʱ��Ů��>���ȣ�" + vipname + "�������޵� " + cm.getPlayer().getReborns() + "���죡���һ��Ϊ��(��)��ף�ɣ���";
                   cm.Maplewingx(md2, 5121009);
                   cm.worldMessage(md2);

                   md1 += "\r\nĿǰ������޵ȼ�Ϊ��#e#r" + cm.getPlayer().getReborns() + "#n\r\nע�����޳ɹ��������ߺ���������ƺ���Ϣ���������һ��ʱ�����ߣ������ϴ�����Щ�߼�װ�����·ŵ������\r\n\r\nMaplewing ����ķ�������";
                      cm.sendOk(md1);
                   cm.getPlayer().resetAPSP();

                   cm.addMaplewing("maple", mx*(cm.getPlayer().getReborns()));

               } else {

                    md1 = mds + "����ʧ�ܣ������²�����";
                      cm.sendOk(md1);
               }


                 //     cm.sendOk(md1);

                      cm.dispose();



               } else if (pas == 99999) {
                      cm.dispose();
                      cm.openNpc(2144000, 101);

               } else if (pas == 99998) {
                      cm.dispose();
                   //   cm.openNpc(2144000, 102);
               }




       }//status == 1




  }