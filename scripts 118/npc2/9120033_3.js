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
            cm.sendSimple("你好，请选择回购种类：#b\r\n#L0#130级武器回购\r\n#L1#130级装备回购"); 
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
