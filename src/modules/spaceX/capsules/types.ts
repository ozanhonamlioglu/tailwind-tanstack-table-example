export interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: Mission[];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

export interface Mission {
  name: string;
  flight: number;
}
