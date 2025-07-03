import { Hero, Match, HeroStats, ItemTiming, Item } from '../types';

export const heroes: Hero[] = [
  {
    id: 1,
    name: "pudge",
    localized_name: "Pudge",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Support", "Initiator", "Disabler", "Durable"],
    img: "/app-static/img/heroes/pudge_full.png",
    icon: "/app-static/img/heroes/pudge_icon.png"
  },
  {
    id: 2,
    name: "crystal_maiden",
    localized_name: "Crystal Maiden",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler"],
    img: "/app-static/img/heroes/crystal_maiden_full.png",
    icon: "/app-static/img/heroes/crystal_maiden_icon.png"
  },
  {
    id: 8,
    name: "juggernaut",
    localized_name: "Juggernaut",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Pusher", "Escape"],
    img: "/app-static/img/heroes/juggernaut_full.png",
    icon: "/app-static/img/heroes/juggernaut_icon.png"
  },
  {
    id: 11,
    name: "shadow_fiend",
    localized_name: "Shadow Fiend",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker"],
    img: "/app-static/img/heroes/shadow_fiend_full.png",
    icon: "/app-static/img/heroes/shadow_fiend_icon.png"
  },
  {
    id: 16,
    name: "drow_ranger",
    localized_name: "Drow Ranger",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Pusher"],
    img: "/app-static/img/heroes/drow_ranger_full.png",
    icon: "/app-static/img/heroes/drow_ranger_icon.png"
  },
  {
    id: 5,
    name: "invoker",
    localized_name: "Invoker",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Disabler", "Escape", "Pusher"],
    img: "/app-static/img/heroes/invoker_full.png",
    icon: "/app-static/img/heroes/invoker_icon.png"
  },
  {
    id: 74,
    name: "anti-mage",
    localized_name: "Anti-Mage",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Nuker"],
    img: "/app-static/img/heroes/antimage_full.png",
    icon: "/app-static/img/heroes/antimage_icon.png"
  },
  {
    id: 129,
    name: "mars",
    localized_name: "Mars",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Disabler", "Durable"],
    img: "/app-static/img/heroes/mars_full.png",
    icon: "/app-static/img/heroes/mars_icon.png"
  }
];

export const items: Item[] = [
  {
    id: 1,
    name: "blink",
    display_name: "Blink Dagger",
    cost: 2250,
    secret_shop: false,
    side_shop: false,
    recipe: false,
    localized_name: "Blink Dagger"
  },
  {
    id: 46,
    name: "power_treads",
    display_name: "Power Treads",
    cost: 1400,
    secret_shop: false,
    side_shop: false,
    recipe: false,
    localized_name: "Power Treads"
  },
  {
    id: 102,
    name: "aghanims_scepter",
    display_name: "Aghanim's Scepter",
    cost: 4200,
    secret_shop: false,
    side_shop: false,
    recipe: false,
    localized_name: "Aghanim's Scepter"
  },
  {
    id: 116,
    name: "black_king_bar",
    display_name: "Black King Bar",
    cost: 4050,
    secret_shop: false,
    side_shop: false,
    recipe: false,
    localized_name: "Black King Bar"
  },
  {
    id: 36,
    name: "bottle",
    display_name: "Bottle",
    cost: 625,
    secret_shop: false,
    side_shop: false,
    recipe: false,
    localized_name: "Bottle"
  }
];

export const heroStats: HeroStats[] = [
  {
    hero_id: 1,
    localized_name: "Pudge",
    img: "/app-static/img/heroes/pudge_full.png",
    icon: "/app-static/img/heroes/pudge_icon.png",
    pro_ban: 543,
    pro_pick: 1204,
    pro_win: 652,
    turbo_ban: 12543,
    turbo_pick: 145623,
    turbo_win: 78543,
    ranked_ban: 234567,
    ranked_pick: 1456789,
    ranked_win: 756432,
    null_pick: 234567,
    null_win: 134567
  },
  {
    hero_id: 2,
    localized_name: "Crystal Maiden",
    img: "/app-static/img/heroes/crystal_maiden_full.png",
    icon: "/app-static/img/heroes/crystal_maiden_icon.png",
    pro_ban: 234,
    pro_pick: 876,
    pro_win: 398,
    turbo_ban: 8765,
    turbo_pick: 98765,
    turbo_win: 45432,
    ranked_ban: 123456,
    ranked_pick: 987654,
    ranked_win: 456789,
    null_pick: 123456,
    null_win: 76543
  },
  {
    hero_id: 8,
    localized_name: "Juggernaut",
    img: "/app-static/img/heroes/juggernaut_full.png",
    icon: "/app-static/img/heroes/juggernaut_icon.png",
    pro_ban: 456,
    pro_pick: 1543,
    pro_win: 834,
    turbo_ban: 15432,
    turbo_pick: 187654,
    turbo_win: 98765,
    ranked_ban: 345678,
    ranked_pick: 1765432,
    ranked_win: 987654,
    null_pick: 345678,
    null_win: 198765
  }
];

export const mockMatches: Match[] = [
  {
    match_id: 7234567890,
    barracks_status_dire: 51,
    barracks_status_radiant: 63,
    cluster: 135,
    dire_score: 38,
    duration: 2145,
    engine: 1,
    first_blood_time: 142,
    game_mode: 22,
    human_players: 10,
    leagueid: 0,
    lobby_type: 7,
    match_seq_num: 5234567890,
    negative_votes: 0,
    positive_votes: 0,
    radiant_score: 45,
    radiant_win: true,
    start_time: 1703251200,
    tower_status_dire: 1796,
    tower_status_radiant: 1974,
    version: 21,
    replay_salt: 123456789,
    series_id: 0,
    series_type: 0,
    skill: 3,
    patch: 54,
    region: 2,
    replay_url: "http://replay135.valve.net/570/7234567890_123456789.dem.bz2",
    players: [
      {
        player_slot: 0,
        account_id: 123456789,
        player_name: "ProPlayer1",
        hero_id: 8,
        kills: 12,
        deaths: 3,
        assists: 18,
        last_hits: 245,
        denies: 23,
        gold_per_min: 542,
        xp_per_min: 634,
        level: 25,
        hero_damage: 34567,
        tower_damage: 8765,
        hero_healing: 1234,
        gold: 2567,
        gold_spent: 18432,
        scaled_hero_damage: 34567,
        scaled_tower_damage: 8765,
        scaled_hero_healing: 1234,
        items: [46, 116, 102, 1, 36, 0],
        backpack: [0, 0, 0],
        item_neutral: 0,
        item_usage: {},
        gold_t: Array.from({length: 36}, (_, i) => 200 + i * 15),
        xp_t: Array.from({length: 36}, (_, i) => 150 + i * 18),
        times: Array.from({length: 36}, (_, i) => i * 60),
        lane: 1,
        lane_role: 1,
        is_roaming: false,
        purchase_log: [
          { time: 0, key: "tango" },
          { time: 127, key: "boots" },
          { time: 345, key: "power_treads" },
          { time: 892, key: "blink" },
          { time: 1234, key: "black_king_bar" },
          { time: 1567, key: "aghanims_scepter" }
        ],
        kills_log: [],
        buyback_log: [],
        runes_log: [],
        connection_log: [],
        lane_pos: {},
        obs_log: [],
        sen_log: [],
        obs_left_log: [],
        sen_left_log: []
      },
      {
        player_slot: 1,
        account_id: 234567890,
        player_name: "Support1",
        hero_id: 2,
        kills: 2,
        deaths: 8,
        assists: 24,
        last_hits: 45,
        denies: 12,
        gold_per_min: 234,
        xp_per_min: 345,
        level: 18,
        hero_damage: 12345,
        tower_damage: 2345,
        hero_healing: 8765,
        gold: 567,
        gold_spent: 8765,
        scaled_hero_damage: 12345,
        scaled_tower_damage: 2345,
        scaled_hero_healing: 8765,
        items: [36, 1, 0, 0, 0, 0],
        backpack: [0, 0, 0],
        item_neutral: 0,
        item_usage: {},
        gold_t: Array.from({length: 36}, (_, i) => 80 + i * 6),
        xp_t: Array.from({length: 36}, (_, i) => 60 + i * 9),
        times: Array.from({length: 36}, (_, i) => i * 60),
        lane: 5,
        lane_role: 4,
        is_roaming: true,
        purchase_log: [
          { time: 0, key: "observer_ward" },
          { time: 67, key: "boots" },
          { time: 234, key: "tranquil_boots" },
          { time: 567, key: "blink" }
        ],
        kills_log: [],
        buyback_log: [],
        runes_log: [],
        connection_log: [],
        lane_pos: {},
        obs_log: [],
        sen_log: [],
        obs_left_log: [],
        sen_left_log: []
      }
      // Add more players as needed
    ]
  },
  {
    match_id: 7234567891,
    barracks_status_dire: 63,
    barracks_status_radiant: 51,
    cluster: 135,
    dire_score: 42,
    duration: 3456,
    engine: 1,
    first_blood_time: 89,
    game_mode: 22,
    human_players: 10,
    leagueid: 0,
    lobby_type: 7,
    match_seq_num: 5234567891,
    negative_votes: 0,
    positive_votes: 0,
    radiant_score: 28,
    radiant_win: false,
    start_time: 1703337600,
    tower_status_dire: 1974,
    tower_status_radiant: 1796,
    version: 21,
    replay_salt: 123456790,
    series_id: 0,
    series_type: 0,
    skill: 3,
    patch: 54,
    region: 2,
    replay_url: "http://replay135.valve.net/570/7234567891_123456790.dem.bz2",
    players: [
      {
        player_slot: 128,
        account_id: 345678901,
        player_name: "MidPlayer",
        hero_id: 11,
        kills: 15,
        deaths: 4,
        assists: 12,
        last_hits: 312,
        denies: 18,
        gold_per_min: 623,
        xp_per_min: 728,
        level: 25,
        hero_damage: 45678,
        tower_damage: 12345,
        hero_healing: 567,
        gold: 3456,
        gold_spent: 23456,
        scaled_hero_damage: 45678,
        scaled_tower_damage: 12345,
        scaled_hero_healing: 567,
        items: [116, 102, 1, 46, 0, 0],
        backpack: [0, 0, 0],
        item_neutral: 0,
        item_usage: {},
        gold_t: Array.from({length: 58}, (_, i) => 180 + i * 11),
        xp_t: Array.from({length: 58}, (_, i) => 140 + i * 12),
        times: Array.from({length: 58}, (_, i) => i * 60),
        lane: 2,
        lane_role: 2,
        is_roaming: false,
        purchase_log: [
          { time: 0, key: "tango" },
          { time: 156, key: "boots" },
          { time: 423, key: "power_treads" },
          { time: 987, key: "blink" },
          { time: 1456, key: "black_king_bar" },
          { time: 2123, key: "aghanims_scepter" }
        ],
        kills_log: [],
        buyback_log: [],
        runes_log: [],
        connection_log: [],
        lane_pos: {},
        obs_log: [],
        sen_log: [],
        obs_left_log: [],
        sen_left_log: []
      }
      // Add more players as needed
    ]
  }
];

export const itemTimings: ItemTiming[] = [
  {
    item: "blink",
    time: 892,
    match_id: 7234567890,
    hero_id: 8,
    player_name: "ProPlayer1"
  },
  {
    item: "black_king_bar",
    time: 1234,
    match_id: 7234567890,
    hero_id: 8,
    player_name: "ProPlayer1"
  },
  {
    item: "aghanims_scepter",
    time: 1567,
    match_id: 7234567890,
    hero_id: 8,
    player_name: "ProPlayer1"
  },
  {
    item: "blink",
    time: 567,
    match_id: 7234567890,
    hero_id: 2,
    player_name: "Support1"
  },
  {
    item: "blink",
    time: 987,
    match_id: 7234567891,
    hero_id: 11,
    player_name: "MidPlayer"
  },
  {
    item: "black_king_bar",
    time: 1456,
    match_id: 7234567891,
    hero_id: 11,
    player_name: "MidPlayer"
  }
];

// Generate more sample data
export const generateMoreMatches = (count: number): Match[] => {
  const baseTime = 1703251200;
  const additionalMatches: Match[] = [];
  
  for (let i = 0; i < count; i++) {
    const matchId = 7234567892 + i;
    const duration = 1800 + Math.random() * 3600; // 30-90 minutes
    const radiantWin = Math.random() > 0.5;
    
    additionalMatches.push({
      match_id: matchId,
      barracks_status_dire: Math.floor(Math.random() * 64),
      barracks_status_radiant: Math.floor(Math.random() * 64),
      cluster: 135,
      dire_score: Math.floor(Math.random() * 60),
      duration: Math.floor(duration),
      engine: 1,
      first_blood_time: Math.floor(Math.random() * 600),
      game_mode: 22,
      human_players: 10,
      leagueid: 0,
      lobby_type: 7,
      match_seq_num: 5234567892 + i,
      negative_votes: 0,
      positive_votes: 0,
      radiant_score: Math.floor(Math.random() * 60),
      radiant_win: radiantWin,
      start_time: baseTime + (i * 86400), // One match per day
      tower_status_dire: Math.floor(Math.random() * 2000),
      tower_status_radiant: Math.floor(Math.random() * 2000),
      version: 21,
      replay_salt: 123456790 + i,
      series_id: 0,
      series_type: 0,
      skill: Math.floor(Math.random() * 4) + 1,
      patch: 54,
      region: Math.floor(Math.random() * 8) + 1,
      replay_url: `http://replay135.valve.net/570/${matchId}_${123456790 + i}.dem.bz2`,
      players: [] // Simplified for mock data
    });
  }
  
  return additionalMatches;
};

export const allMatches = [...mockMatches, ...generateMoreMatches(50)];