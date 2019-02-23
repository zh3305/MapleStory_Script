var status = -1;
function start(mode, type, selection) {
	end(mode,type,selection);
}

function end(mode, type, selection) {
    qm.forceStartQuest();
	qm.forceCompleteQuest();
}