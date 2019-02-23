var status = 0; 

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
               cm.sendYesNo("#r" + cm.getVipname() + " #r#h # #k你确定要选择 成为一名 #r海盗 #k#n 么？\r\n#b如果是我将会送你到 #r海盗#b 的转职之地！"); 
        } else if (status == 1) { 
            cm.warp(120000101);
            cm.sendOk("我已经把你送到了目的地！\r\n请去找 转职教官 完成你的转职吧！ ");
            cm.dispose();
//       switch (selection) {
 //       case 0:
//            cm.dispose();
 //           cm.openNpc(9000086, 3);
 //           break;
  //          } 


        } 
    } 
}  
