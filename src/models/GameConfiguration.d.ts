
export interface GameConfiguration {
  speed: number;
  start: {
    planet: {
      name: string;
      diameter: number;
      fields: number;
      resources: ResourceCollection;
      position: Position;
    };
  };
  units: UnitConfiguration;
}

export interface ResourceCollection {
  metal: number;
  crystal: number;
  deuterium: number;
}

export interface Position {
  galaxy: number;
  system: number;
  planet: number;
}

export interface Costs extends ResourceCollection {
  energy: number;
  factor: number;
}

export interface UnitConfiguration {
  buildings: Building[];
  ships: Unit[];
  requirements: Requirements;
}

export type ID = number;

export interface Unit {
  unitID: ID;
  costs: Costs;
}

export interface ShipProperties {
  consumption: number;
  speed: number;
  capacity: number;
}

export interface RapidFireAgainst {
  unitID: ID;
  amount: number;
}

export interface Building extends Unit {}
export interface Ship extends Unit {
  stats: ShipProperties;
  rapidfire: RapidFireAgainst[];
}
export interface Defense extends Unit {}
export interface Technology extends Unit {}

export interface Requirements {
  // An index signature parameter type cannot be a type alias.
  // IDs are currently numbers, we could use strings too
  [unitID: number]: {
    unitID: ID;
    level: number;
  }[]
}
