/* 
 * ×øÆï 2430406
 */
var period = 90;
var mountSkillId = 80001924;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}