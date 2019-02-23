var a;
var destinyweapons;

function start() {
    destinyweapons = cm.getPlayer().getDestinyWeapons();
    a = 0;
    cm.sendSimple("你好，我可以为你做什么？\r\n#L0#告诉我关于#b命运武器#k的信息.#l");
}

function action(m, t, s) {
    if (m != 1) {
        cm.dispose();
        return;
    }
    a++;
    switch (a) {
        case 1:
            cm.sendSimple("#b命运武器#k是一般武器, 会随着你的等级而提高.\r\n\r\nTheir new stats are never known, and they may obtain stats which they do not have upon leveling. These stats will be enhanced as you level aswell. \r\n\r\n#bStat Enhancements Maximum#k:\r\n#gHp & Mp#k: If level is lower than 150, then 500 else, 1000.\r\n#gSpeed & Jump#k: If level is lower than 150, then 20 else, 40.\r\n#gAttack & Magic#k: If level is lower than 150, then 150 else, 200.\r\n#gOther Stats#k: If level is lower than 150, then 100 else, 150.\r\n\r\nYou may only hold one #bDestiny Weapon#k, and #rSecondary 命运武器#k are not found yet.\r\n\r\nThere is only one way to know if a weapon is a #bDestiny Weapon#k.\r\n#L0#How do I know if my weapon is a #bDestiny Weapon#k?#l\r\n");
            break;
        case 2:
            cm.sendSimple("There is an uncompleted list of #b命运武器#k which is being updated.\r\nHowever, the weapons look like regular weapons. The #b命运武器#k will have their crafter's name signed on it, and there is only one person who can craft them, which is the legendary #rShadow Knight#k.\r\n#L0#May I see the list?#l");
            break;
        case 3:
            var list = "是的，当然,";
            for (var i = 0; i < destinyweapons.length; i++)
                list += "\r\n#v" + destinyweapons[i] + "##t" + destinyweapons[i] + "#"
            list += "\r\n#L0#How can I obtain the #b命运武器#k?";
            cm.sendSimple(list);
            break;
        case 4:
            cm.sendSimple("Since these weapons are very unique, the only way to obtain them is to purchase them from the only seller who knows to craft them, #rThe Shadow Knight#k.\r\nHe can be found at the #rFree Market#k, since it is the best place to trade.\r\nThe Shadow Knight had been found to have some suspicious activities related to the #rBlack Mage#k, he was found trading #i4251202# with the Black Wings for some materials to craft the #b命运武器#k...\r\n#L0#What is the payment he accepts?#l");
            break;
        case 5:
            cm.sendSimple("He sells them for some old coins which was found to be hold by monsters. You shall go and see him yourself!\r\n#L0#Alright, thanks for you help.#l");
            cm.dispose();
            break;
        default:
            cm.dispose();
            return;
    }
}
