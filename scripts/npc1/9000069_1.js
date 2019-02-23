var status = -1;
var newJob;
var newJobName;
var possibleJobs = new Array();

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 1) {
                cm.sendNext("如果您需要进行转职操作的话，那么请下次来找我！");
                cm.dispose();
                return;
            }
            status--;
        }
        if (status == 0) {
            /*
             * 判断职业ID: 
             * 0 - 新手 
             * 1000 - 骑士团 
             * 2000 - 战童 
             * 3000 - 预备兵
             */
            if (cm.getPlayer().getJob() == 0 || cm.getPlayer().getJob() == 1000 || cm.getPlayer().getJob() == 2000 || cm.getPlayer().getJob() == 3000) {
                for (var i = 1; i < 5; i++) {
                    possibleJobs.push(0 + 100 * i); //职业ID: 100 200 300 400
                }
                possibleJobs.push(430); // 见习刀客
                possibleJobs.push(501); // 海盗炮手
                possibleJobs.push(508); // 龙的传人
                possibleJobs.push(509); // 海盗(新)
                for (var i = 1; i < 6; i++) {
                    possibleJobs.push(1000 + 100 * i); // 职业ID: 1100 1200 1300 1400 1500
                }
                for (var i = 1; i < 4; i++) {
                    possibleJobs.push(2000 + 100 * i); // 职业ID: 2100 2200 2300
                }
                for (var i = 1; i < 4; i++) {
                    possibleJobs.push(3000 + 100 * i); // 职业ID: 3100 3200 3300
                }
                possibleJobs.push(3500); // 机械师
            /*
             * 等级大于69级
             * isValidJob 是检测当前职业ID + 2 这个职业在服务端是否存在
             */
            } else if (cm.getPlayer().getLevel() > 69 && cm.isValidJob(cm.getPlayer().getJob() + 2)) {
                possibleJobs.push(cm.getPlayer().getJob() + 1); // 添加当前职业ID的编号上面 + 1
            /*
             * 等级大于119级
             * isValidJob 是检测当前职业ID + 1 这个职业在服务端是否存在
             */
            } else if (cm.getPlayer().getLevel() > 119 && cm.isValidJob(cm.getPlayer().getJob() + 1)) {
                possibleJobs.push(cm.getPlayer().getJob() + 1); // 添加当前职业ID的编号上面 + 1
            /*
             * 等级大于29级
             */
            } else if (cm.getPlayer().getLevel() > 29) {
                switch (cm.getPlayer().getJob()) {
                    case 100: // 战士
                    case 200: // 魔法师
                        possibleJobs.push(cm.getPlayer().getJob() + 10);
                        possibleJobs.push(cm.getPlayer().getJob() + 20);
                        possibleJobs.push(cm.getPlayer().getJob() + 30);
                        break;
                    case 300: // 弓箭手
                    case 400: // 飞侠
                        possibleJobs.push(cm.getPlayer().getJob() + 10);
                        possibleJobs.push(cm.getPlayer().getJob() + 20);
                        break;
                    case 430: // 见习刀客
                        possibleJobs.push(cm.getPlayer().getJob() + 2);
                        break;
                    case 501: // 海盗炮手
                        possibleJobs.push(cm.getPlayer().getJob() + 30);
                        break;
                    case 508: // 龙的传人1转
                        possibleJobs.push(570);
                        break;
                    case 509: // 海盗 新职业ID
                        possibleJobs.push(580);
                        possibleJobs.push(590);
                        break;
                    case 1100: // 魂骑士
                    case 1200: // 炎术士
                    case 1300: // 风灵使者
                    case 1400: // 夜行者
                    case 1500: // 奇袭者
                    case 2100: // 战神
                    case 2200: // 龙神
                    case 2300: // 双弩精灵:
                    case 3100: // 恶魔猎手
                    case 3200: // 幻灵斗师
                    case 3300: // 弩豹游侠
                    case 3500: // 机械师
                        possibleJobs.push(cm.getPlayer().getJob() + 10);
                        break;
                    default:
                        break;
                }
            }
            if (possibleJobs.length == 0) { // 检测职业列表是否存在可以转职的选项
                cm.sendOk("好像你已经通过了全部的转职了，你的冒险生活怎么样？如果遇到不开心的事，笑笑就过了。以后还有很多事情等着你去面对。");
                cm.dispose();
            } else {
                var text = "你确定要转职？(恶魔/双弩/等.../自动转职业.)\r\n请慎重选择...#b";
                for (var j = 0; j < possibleJobs.length; j++) {
                    text += "\r\n#L" + j + "#" + cm.getJobNameById(possibleJobs[j]) + "#l";
                }
                cm.sendSimple(text);
            }
        } else if (status == 1) {
            newJob = possibleJobs[selection]; // 保存当前选择转职的ID
            newJobName = cm.getJobNameById(possibleJobs[selection]); // 获取选择转职的ID的名字
            if (cm.isValidJob(newJob)) { // 检测职业是否存在
                cm.sendYesNo("你确定想好要转职成为 #b" + newJobName + "#k 吗？");
            } else {
                cm.sendNext("当前选择的职业ID: " + newJob + " 错误。");
                cm.dispose();
            }
        } else if (status == 2) {
            cm.worldMessage("[转职公告] 恭喜玩家 " + cm.getName() + " 转职为 " + newJobName + " 。");
            cm.changeJob(newJob);
            cm.dispose();
        }
    }
}