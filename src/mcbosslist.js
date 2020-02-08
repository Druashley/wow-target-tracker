import { bossFactory } from "./bossfactory.js"


const lucifronBoss = bossFactory({tankCount: '2/3', ccNeeded: 'N/A', dispelNeeded: true, decurseNeeded: true, description: 'Kill adds then boss. Dispel low life targets first.'});
const magmadarBoss = bossFactory({tankCount: '1', ccNeeded: 'N/A', dispelNeeded: false, decurseNeeded: false, description: 'Tank and Spank. Hunters must use Tranquilizing Shot. Dont stand in fire. Drop Tremor Totems.' });
const gehennasBoss = bossFactory({tankCount: '2/3', ccNeeded: 'N/A', dispelNeeded: false, decurseNeeded: true, description: 'Get out of fire. Decurse tanks first. Kill adds then boss.'});
const garrBoss = bossFactory({tankCount: '3/4/5', ccNeeded: 'Warlocks', dispelNeeded: false, decurseNeeded: false, description: 'CC as many targets with warlocks and tank the rest. Tank & Kill any adds that are not CCd by warlocks then kill boss.'});
const baronGeddonBoss = bossFactory({tankCount: '1', ccNeeded: 'N/A', dispelNeeded: true, decurseNeeded: false, description: 'Living Bomb - Person with this debuff needs to move to assigned area. Ignite mana must be dispeled on mana users ASAP, this can be line of sighted around the corner. Melee need to get out of firewave.'});
const shazzrahBoss = bossFactory({tankCount: '1+', ccNeeded: 'N/A', dispelNeeded: false, decurseNeeded: true, description: 'All members spread out in an arc. Extra tanks will pick up Shazzrah when he teleports and return him to maintank. Decurse tank asap and other people when possible. Purge Shazzrah when needed.'}); 
const sulfuronHarbingerBoss = bossFactory({tankCount: '4/5', ccNeeded: 'N/A', dispelNeeded: true, decurseNeeded: false, description: 'Group mobs together and AOE down. Assign kick rotation to each enemy healer. Set one healer to dispels and the rest should dispel when possible.'});
const golemaggBoss = bossFactory({tankCount: '3', ccNeeded: 'N/A', dispelNeeded: false, decurseNeeded: false, description: ' DPS boss not adds. Off tanks should take targets to the side at a far distance. If the adds horns are glowing, the offtanks are too close to the boss.'});
const majordomoBoss = bossFactory({tankCount: '4/5', ccNeeded: 'Mages', dispelNeeded: false, decurseNeeded: false, description: 'Assign someone to lead guild on which target to focus. Watch damage reflections. Do not break sheeps with AOE.'});
const ragnarosBoss = bossFactory({tankCount: '1/2', ccNeeded: 'N/A', dispelNeeded: false, decurseNeeded: false, description: 'Assign a melee to call in or out. Make sure there are at least 3 healers near tanks. Ranged dps can go hard right away. If phase 2 comes - Group up at pride rock. Drop hunter traps. Warlock CC. AOE down the adds.'});

const mcBossList = [lucifronBoss, magmadarBoss, gehennasBoss, garrBoss, baronGeddonBoss, shazzrahBoss, sulfuronHarbingerBoss, golemaggBoss, majordomoBoss, ragnarosBoss ]

export { mcBossList } 