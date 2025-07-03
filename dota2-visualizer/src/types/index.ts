export interface Player {
  id: string;
  name: string;
  steam_id: string;
  avatar?: string;
  rank: string;
  mmr: number;
}

export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: 'str' | 'agi' | 'int' | 'all';
  attack_type: 'Melee' | 'Ranged';
  roles: string[];
  img: string;
  icon: string;
}

export interface Item {
  id: number;
  name: string;
  display_name: string;
  cost: number;
  secret_shop: boolean;
  side_shop: boolean;
  recipe: boolean;
  localized_name: string;
}

export interface PlayerPerformance {
  player_slot: number;
  account_id: number;
  player_name: string;
  hero_id: number;
  kills: number;
  deaths: number;
  assists: number;
  last_hits: number;
  denies: number;
  gold_per_min: number;
  xp_per_min: number;
  level: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  gold: number;
  gold_spent: number;
  scaled_hero_damage: number;
  scaled_tower_damage: number;
  scaled_hero_healing: number;
  items: number[];
  backpack: number[];
  item_neutral: number;
  item_usage: {
    [itemId: string]: number;
  };
  gold_t: number[];
  xp_t: number[];
  times: number[];
  lane: number;
  lane_role: number;
  is_roaming: boolean;
  purchase_log: {
    time: number;
    key: string;
    charges?: number;
  }[];
  kills_log: {
    time: number;
    key: string;
  }[];
  buyback_log: {
    time: number;
    slot: number;
    player_slot: number;
  }[];
  runes_log: {
    time: number;
    key: number;
  }[];
  connection_log: {
    time: number;
    event: string;
  }[];
  lane_pos: {
    [key: string]: {
      [key: string]: number;
    };
  };
  obs_log: {
    time: number;
    type: string;
    key: string;
    slot: number;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }[];
  sen_log: {
    time: number;
    type: string;
    key: string;
    slot: number;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }[];
  obs_left_log: {
    time: number;
    type: string;
    key: string;
    slot: number;
    attackername: string;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }[];
  sen_left_log: {
    time: number;
    type: string;
    key: string;
    slot: number;
    attackername: string;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }[];
}

export interface Match {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  cluster: number;
  dire_score: number;
  duration: number;
  engine: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_seq_num: number;
  negative_votes: number;
  positive_votes: number;
  radiant_score: number;
  radiant_win: boolean;
  start_time: number;
  tower_status_dire: number;
  tower_status_radiant: number;
  version: number;
  replay_salt: number;
  series_id: number;
  series_type: number;
  radiant_team?: {
    team_id: number;
    name: string;
    tag: string;
    logo_url: string;
  };
  dire_team?: {
    team_id: number;
    name: string;
    tag: string;
    logo_url: string;
  };
  league?: {
    leagueid: number;
    ticket: string;
    banner: string;
    tier: string;
    name: string;
  };
  skill?: number;
  players: PlayerPerformance[];
  patch: number;
  region: number;
  replay_url: string;
}

export interface HeroStats {
  hero_id: number;
  localized_name: string;
  img: string;
  icon: string;
  pro_ban: number;
  pro_pick: number;
  pro_win: number;
  turbo_ban: number;
  turbo_pick: number;
  turbo_win: number;
  ranked_ban: number;
  ranked_pick: number;
  ranked_win: number;
  null_pick: number;
  null_win: number;
}

export interface ItemTiming {
  item: string;
  time: number;
  match_id: number;
  hero_id: number;
  player_name: string;
}

export interface FilterOptions {
  hero?: string;
  player?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  gameMode?: string;
  result?: 'win' | 'loss' | 'all';
}