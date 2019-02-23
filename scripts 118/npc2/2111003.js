/* Author: aaroncsn(MapleSea Like)(Incomplete)
	NPC Name: 		Humanoid A
	Map(s): 		Sunset Road: Magatia(2610000000)
	Description: 		Unknown
*/

function start() {
    if (cm.isQuestActive(3335)) {
        cm.sendNext("Quest complete.");
        cm.forceCompleteQuest(3335);
    } else {
        cm.sendNext("想变成人类。想变成拥有温暖心脏的人类...  那样的话，也许可以握住她的手。但现在不能...");
    }
    cm.dispose();
}