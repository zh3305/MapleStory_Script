/* @Author Lerk
 *
 * Guardian Statue - Sharenian: Fountain of the Wiseman (990000500)
 * 
 * Guild Quest Stage 3
 */

function start() {
    var eim = cm.getEventInstance();
    if (eim == null) {
        cm.warp(990001100);
    } else {
        if (eim.getProperty("leader").equals(cm.getName())) {
            if (cm.getMap().getReactorByName("watergate").getState() > 0) {
                cm.sendOk("现在你可以进入下一个关卡了。");
            } else {
                var currentCombo = eim.getProperty("stage3combo");
                if (currentCombo == null || currentCombo.equals("reset")) {
                    var newCombo = makeCombo();
                    eim.setProperty("stage3combo", newCombo);
                    //cm.playerMessage("Debug: " + newCombo);
                    eim.setProperty("stage3attempt", "1");
                    cm.sendOk("欢迎来到第三关，我是通往秘密房间的守护人。 请贡献出祭品放在石像前面， 石像会告诉你们它们会接受什么祭品，如果放了错误的祭品，石像会发怒的。 你一共有7次机会来摆放这些祭品。祝你好运！")
                } else {
                    var attempt = parseInt(eim.getProperty("stage3attempt"));
                    var combo = parseInt(currentCombo);
                    var guess = getGroundItems();
                    if (guess != null) {
                        if (combo == guess) {
                            cm.getMap().getReactorById(9208013).forceHitReactor(1);
                            cm.sendOk("现在你可以进入下一个关卡了。");
                            cm.showEffect(true, "quest/party/clear");
                            cm.playSound(true, "Party1/Clear");
                            var prev = eim.setProperty("stage3clear", "true", true);
                            if (prev == null) {
                                cm.gainGP(1500);
                            }
                        } else {
                            if (attempt < 7) {
                                //cm.playerMessage("Combo : " + combo);
                                //cm.playerMessage("Guess : " + guess);
                                var parsedCombo = parsePattern(combo);
                                var parsedGuess = parsePattern(guess);
                                var results = compare(parsedCombo, parsedGuess);
                                var string = "";
                                //cm.playerMessage("Results - Correct: " + results[0] + " | Incorrect: " + results[1] + " | Unknown: " + results[2]);
                                if (results[0] != 0) {
                                    if (results[0] == 1) {
                                        string += "1 个石像觉得祭品正确。\r\n";
                                    } else {
                                        string += results[0] + " 个石像觉得祭品正确。\r\n";
                                    }
                                }
                                if (results[1] != 0) {
                                    if (results[1] == 1) {
                                        string += "1 个石像收到了错误的祭品。\r\n";
                                    } else {
                                        string += results[1] + " 个石像收到了错误的祭品。\r\n";
                                    }
                                }
                                if (results[2] != 0) {
                                    if (results[2] == 1) {
                                        string += "1 个石像收到了不认识的祭品。\r\n";
                                    } else {
                                        string += results[2] + " 个石像收到了不认识的祭品。\r\n";
                                    }
                                }
                                string += "这是你的第 ";
                                switch (attempt) {
                                    case 1:
                                        string += "1次";
                                        break;
                                    case 2:
                                        string += "2次";
                                        break;
                                    case 3:
                                        string += "3次";
                                        break;
                                    default:
                                        string += attempt + " 次";
                                        break;
                                }
                                string += "尝试。";


                                cm.spawnMob(9300036, -350, 150);
                                cm.spawnMob(9300037, 400, 150);

                                cm.sendOk(string);
                                eim.setProperty("stage3attempt", attempt + 1);
                            } else {
                                eim.setProperty("stage3combo", "reset");
                                cm.sendOk("你没有通过此项测试，请做好准备后再跟我谈话吧。");

                                for (var i = 0; i < 5; i++) {
                                    cm.spawnMob(9300036, randX(), 150);
                                    cm.spawnMob(9300037, randX(), 150);
                                }
                            }
                        }
                    } else {
                        cm.sendOk("请确保所有的祭品都摆放在正确的位置后再试。");
                    }
                }
            }
        } else {
            cm.sendOk("请让你的队长跟我谈话。");
        }
    }
    cm.dispose();
}

function action(mode, type, selection) {
}

function makeCombo() {
    var combo = 0;

    for (var i = 0; i < 4; i++) {
        combo += Math.floor(Math.random() * 4) * Math.pow(10, i);
    }

    return combo;
}

function getGroundItems() {
    var items = cm.getMap().getItemsInRange(cm.getPlayer().getPosition(), java.lang.Double.POSITIVE_INFINITY);
    var itemInArea = new Array(-1, -1, -1, -1);

    if (items.size() != 4) {
        cm.playerMessage("请正确摆放好摆放的祭品。");
        return null;
    }

    var iter = items.iterator();
    while (iter.hasNext()) {
        var item = iter.next();
        var id = item.getItem().getItemId();
        if (id < 4001027 || id > 4001030) {
            cm.playerMessage("除了祭品之外不能摆放其它物品。");
            return null;
        } else {
            //检查道具位置
            for (var i = 0; i < 4; i++) {
                if (cm.getMap().getArea(i).contains(item.getPosition())) {
                    itemInArea[i] = id - 4001027;
                    break;
                }
            }
        }
    }

    //guaranteed four items that are part of the stage 3 item set by this point, check to see if each area has an item
    if (itemInArea[0] == -1 || itemInArea[1] == -1 || itemInArea[2] == -1 || itemInArea[3] == -1) {
        cm.playerMessage("请摆放好在 " + (itemInArea[0] == -1 ? "第1， " : "") + (itemInArea[1] == -1 ? "第2, " : "") + (itemInArea[2] == -1 ? "第3, " : "") + (itemInArea[3] == -1 ? "第4. " : "个石像面前的祭品。"));
        /*  for (var i = 0; i < 4; i++) {
         cm.playerMessage("Item in area "+i+": " + itemInArea[i]);
         }*/
        return null;
    }

    return (itemInArea[0] * 1000 + itemInArea[1] * 100 + itemInArea[2] * 10 + itemInArea[3]);
}

//convert an integer for answer or guess into int array for comparison
function parsePattern(pattern) {
    var tempPattern = pattern;
    var items = new Array(-1, -1, -1, -1);
    for (var i = 0; i < 4; i++) {
        items[i] = Math.floor(tempPattern / Math.pow(10, 3 - i));
        tempPattern = tempPattern % Math.pow(10, 3 - i);
    }
    return items;
}

function compare(answer, guess) {
    var correct = 0;
    var incorrect = 0;
    /*var debugAnswer = "Combo : ";
     var debugGuess = "Guess : ";
     
     for (var d = 0; d < answer.length; d++) {
     debugAnswer += answer[d] + " ";
     debugGuess += guess[d] + " ";
     }
     
     cm.playerMessage(debugAnswer);
     cm.playerMessage(debugGuess);*/

    for (var i = 0; i < answer.length; i) {
        if (answer[i] == guess[i]) {
            correct++;
            //cm.playerMessage("Item match : " + answer[i]);

            //pop the answer/guess at i
            if (i != answer.length - 1) {
                answer[i] = answer[answer.length - 1];
                guess[i] = guess[guess.length - 1];
            }

            answer.pop();
            guess.pop();

            /*/debugAnswer = "Combo : ";
             debugGuess = "Guess : ";
             
             for (var d = 0; d < answer.length; d++) {
             debugAnswer += answer[d] + " ";
             debugGuess += guess[d] + " ";
             }
             
             cm.playerMessage(debugAnswer);
             cm.playerMessage(debugGuess);*/
        }
        else {
            i++;
        }
    }

    //check remaining answers for "incorrect": correct item in incorrect position
    var answerItems = new Array(0, 0, 0, 0);
    var guessItems = new Array(0, 0, 0, 0);

    for (var j = 0; j < answer.length; j++) {
        var aItem = answer[j];
        var gItem = guess[j]
        answerItems[aItem]++;
        guessItems[gItem]++;
    }

    /*for (var d = 0; d < answer.length; d++) {
     cm.playerMessage("Item " + d + " in combo: " + answerItems[d] + " | in guess: " + guessItems[d]);
     }*/

    for (var k = 0; k < answerItems.length; k++) {
        var inc = Math.min(answerItems[k], guessItems[k]);
        //cm.playerMessage("Incorrect for item " + k + ": " + inc);
        incorrect += inc;
    }

    return new Array(correct, incorrect, (4 - correct - incorrect));
}

function randX() {
    return -350 + Math.floor(Math.random() * 750);
}