/* 
 * @Author Lerk
 * 
 * Bulletin Board, Victoria Road: Excavation Site<Camp> (101030104) AND Sharenian: Excavation Site (990000000)
 * 
 * Start of Guild Quest
 */


function action(mode, type, selection) {
    cm.sendOk("<公告事项> \r\n 如果你是家族公会的一员，并且拥有智慧和勇气的话，就来接受属于你的挑战吧！\r\n\r\n#b参加条件：#k\r\n1. 在任务执行过程中，人数必须维持在6人以上！\r\n2. 只有副族长和族长才可以发起任务。\r\n3. 如果参与任务的人数少于6人，或者发起人掉线等，里面的人员将会全部自动退出挑战！");
    cm.safeDispose();
}
