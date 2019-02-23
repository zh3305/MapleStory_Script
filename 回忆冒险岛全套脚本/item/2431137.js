/* 
 * 2430297 - ×øÆï »ÃÁú ÓÀ¾Ã
 */
var period = -1;
var mountSkillId = 80001198;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);//, true);
    im.dispose();
}