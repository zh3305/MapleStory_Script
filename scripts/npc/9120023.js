// NPC: YokoYoko
// Used for: Warps people to 109050000
// Found at the top of the Chimney map
// MrDk/Useless

var status = 0;  

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
       
    if (mode == -1) {  
        cm.dispose();  
    }  
    else {   
        if (status >= 2 && mode == 0) {   
            cm.sendOk("下次再见!");   
            cm.dispose();   
            return;   
        }   
          
        if (mode == 1) {  
            status++;  
        }      
        else {  
            status--;  
        }  
          
        if (status == 0) { 
                cm.sendOk("我不想帮助你!");  
	cm.dispose(); 
         }
    }
}