var status = 0; 
var mh ="#fUI/Basic/BtHide3/mouseOver/0#";

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
            cm.sendSimple("你好，请选择分解的武器种类：\r\n#b#L0#"+ mh +"布莱克缤武器#r【有几率获取#v4001191#】#l#k\r\n#b#L1#"+ mh +"140级系列武器#r【有几率获取#v4001191#和#v4031988#】#l#k"); 
        } else if (status == 1) { 
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9120033, 4);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9120033, 5);
            break;
            } 
        } 
    } 
}  
