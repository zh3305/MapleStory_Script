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
            cm.sendSimple("你好，请选择兑换种类：#b\r\n#L0#8个正义币兑换130级血色武器\r\n#L1#5个正义币兑换130级血色装备\r\n#L2#5个正义币兑换绝版装备"); 
        } else if (status == 1) { 
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9000086, 3);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9000086, 4);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000086, 5);
            break;
            } 
        } 
    } 
}  
