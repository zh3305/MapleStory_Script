var status = 0; 

var type = 9;
var mms;


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

              mms = cm.Î¯ÍÐÐÅÏ¢(type, 2);


              cm.sendPlayerToNpc(mms);

              cm.dispose(); 

        } else if (status == 1) { 


        cm.dispose(); 

        }

     }

  }