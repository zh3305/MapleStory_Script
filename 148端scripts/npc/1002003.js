/* Dawnveil
    Buddy List Admin
	Mr. Goldstein
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("I see. More of a loner-type, huh? Going your own way?\r\nFollowing nobody's rules but your own?");
            cm.safeDispose();
            return;
        } else if (status >= 1) {
            cm.sendNext("Are you broke, or just lonely?");
            cm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("I'm hoping for lots of business today! Friendly business from people looking to expand their Buddy List! You look like you might be... mildly popular. Give me some mesos and you can have even MORE friends? Just you though, not anybody else on your account.");
    } else if (status == 1) {
        cm.sendYesNo("You're lucky! I'm giving you a #rmassive discount#k. #bIt'll be 50,000 Mesos to permanently add 5 slots to your Buddy List#k. That's a deal for somebody as popular as you are! What do you say?");
    } else if (status == 2) {
        var capacity = cm.getBuddyCapacity();
        if (capacity >= 100 || cm.getMeso() < 50000) {
            cm.sendNext("Uh, you sure you got the money? It's #b50,000 Mesos#k. Or maybe your Buddy List has already been fully expanded? No amount of money will make that list longer than #b100#k.");
        } else {
        var newcapacity = capacity + 5;
            cm.gainMeso(-50000);
            cm.updateBuddyCapacity(newcapacity);
            cm.sendOk("You just got room for five more friends. I'll be here if you need to add more, but I'm not giving these things out for free.");
        }
        cm.safeDispose();
    }
}