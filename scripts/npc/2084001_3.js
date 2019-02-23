var status = 0;
var music = Array("Bgm00/SleepyWood", "Bgm00/FloralLife", "Bgm00/GoPicnic", "Bgm00/Nightmare", "Bgm00/RestNPeace",
"Bgm01/AncientMove", "Bgm01/MoonlightShadow", "Bgm01/WhereTheBarlogFrom", "Bgm01/CavaBien", "Bgm01/HighlandStar", "Bgm01/BadGuys",
"Bgm02/MissingYou", "Bgm02/WhenTheMorningComes", "Bgm02/EvilEyes", "Bgm02/JungleBook", "Bgm02/AboveTheTreetops",
"Bgm03/Subway", "Bgm03/Elfwood", "Bgm03/BlueSky", "Bgm03/Beachway", "Bgm03/SnowyVillage",
"Bgm04/PlayWithMe", "Bgm04/WhiteChristmas", "Bgm04/UponTheSky", "Bgm04/ArabPirate", "Bgm04/Shinin'Harbor", "Bgm04/WarmRegard",
"Bgm05/WolfWood", "Bgm05/DownToTheCave", "Bgm05/AbandonedMine", "Bgm05/MineQuest", "Bgm05/HellGate",
"Bgm06/FinalFight", "Bgm06/WelcomeToTheHell", "Bgm06/ComeWithMe", "Bgm06/FlyingInABlueDream", "Bgm06/FantasticThinking",
"Bgm07/WaltzForWork", "Bgm07/WhereverYouAre", "Bgm07/FunnyTimeMaker", "Bgm07/HighEnough", "Bgm07/Fantasia",
"Bgm08/LetsMarch", "Bgm08/ForTheGlory", "Bgm08/FindingForest", "Bgm08/LetsHuntAliens", "Bgm08/PlotOfPixie",
"Bgm09/DarkShadow", "Bgm09/TheyMenacingYou", "Bgm09/FairyTale", "Bgm09/FairyTalediffvers", "Bgm09/TimeAttack",
"Bgm10/Timeless", "Bgm10/TimelessB", "Bgm10/BizarreTales", "Bgm10/TheWayGrotesque", "Bgm10/Eregos",
"Bgm11/BlueWorld", "Bgm11/Aquarium", "Bgm11/ShiningSea", "Bgm11/DownTown", "Bgm11/DarkMountain",
"Bgm12/AquaCave", "Bgm12/DeepSee", "Bgm12/WaterWay", "Bgm12/AcientRemain", "Bgm12/RuinCastle", "Bgm12/Dispute",
"Bgm13/CokeTown", "Bgm13/Leafre", "Bgm13/Minar'sDream", "Bgm13/AcientForest", "Bgm13/TowerOfGoddess",
"Bgm14/DragonLoad", "Bgm14/HonTale", "Bgm14/CaveOfHontale", "Bgm14/DragonNest", "Bgm14/Ariant", "Bgm14/HotDesert",
"Bgm15/MureungHill", "Bgm15/MureungForest", "Bgm15/WhiteHerb", "Bgm15/Pirate", "Bgm15/SunsetDesert",
"BgmEvent/FunnyRabbit", "BgmEvent/FunnyRabbitFaster",
"BgmGL/amoria", "BgmGL/chapel", "BgmGL/cathedral", "BgmGL/Amorianchallenge",
"BgmJp/Feeling", "BgmJp/BizarreForest", "BgmJp/Hana", "BgmJp/Yume", "BgmJp/Bathroom", "BgmJp/BattleField", "BgmJp/FirstStepMaster");


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {

if(cm.getChar().getAccountID()==1){
var jukebox = "#r#e\r\n┈┈┈┈┈┈━═☆音乐点播☆═━┈┈┈┈┈\r\n#n#d你想要播放什么音乐?\r\n";
for (var i = 0; i < music.length; i++)
jukebox += "\r\n#L" + i + "# " +music[i]+ "#l";
cm.sendSimple(jukebox);

 } else {

cm.sendOk("对不起，我不能为你服务！"); 
cm.dispose();

}

        } else if (status == 1) {
cm.changeMusic(music[selection]);
cm.sendOk("成功播放.");
cm.dispose();




        }
    }
}