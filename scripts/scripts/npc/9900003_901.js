/* 
	
*/
var status = -1;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;36140
    }
    if (status == 0) {
        cm.sendSimple("��á����Ǵ�ͷ����#b#p1012117##k���������#b#t05150040##k���ҿ���Ϊ�����һ�����͡���ô����\r\n#b#L0#��������(ʹ�ûʼ�����ȯ)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [35430,35290,35510,35460,35555,33440,36510,30710,35470,33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33970, 33980, 33990, 30780, 30560, 30860, 36680, 36100, 36180, 36220, 36230, 36300, 36310, 36350, 36360, 36370, 36410, 36430, 36510, 36580, 36520, 36590, 36680, 36700, 36340, 36730, 30550, 32440, 32500, 37310];
            } else {
                hair_Colo_new = [38010,38580,38640,38610,38680,37990,31200,38420,37700, 38390, 34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34660, 34670, 34680, 34690, 34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34780, 34790, 34800, 34810, 34820, 34830, 34840, 34850, 34860, 34870, 34880, 34890, 34900, 34910, 34940, 34950, 34960, 34970, 34990, 31990, 37000, 37060, 31760, 31610, 31240, 31560, 36140, 37440, 37230, 31900, 37320, 36560, 37540, 37020, 37210, 31950, 37300, 37100, 37310, 37680, 37090, 37310, 34940, 37520, 37680, 37710, 37510, 37530, 36720, 37760, 37350, 37040, 37880, 30240, 31680, 34670, 37030, 37610, 37630, 38071, 36980];
            }
            for (var i = 30000; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("ʹ�ûʼ�����ȯ����������������͡������Ҫʹ��#b#t05150040##k������������");
        }
    } else if (status == 2) {
	    //cm.gainItemPeriod(5150040,1,1);
        if (cm.setRandomAvatar(5150040, hair_Colo_new) == 1) {
            cm.sendOk("����,����������̾����·��Ͱ�!");
        } else {
            cm.sendOk("����Ҫ�лʼ�����ȯ���Ҳ���Ϊ��������");
        }
        cm.safeDispose();
    }
}