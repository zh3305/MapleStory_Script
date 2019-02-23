var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
        qm.forceCompleteQuest();
    }
    

function end(mode, type, selection) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
		qm.dispose();
    }
    