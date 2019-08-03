var roleUpgrader = require('role.upgrader');


var upgraderId = 'upgrader' 
var maxUpgraderCount = 1;
function manage(spawner){
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == upgraderId);
    if(upgraders.length < maxUpgraderCount) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new ' + upgraderId + ': ' + newName);
        Game.spawns[spawner].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: upgraderId}});
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == upgraderId) {
            roleUpgrader.run(creep);
        }
    }
}

module.exports = {
    manage: manage,
    upgraderId: upgraderId,
    maxUpgraderCount: maxUpgraderCount
};