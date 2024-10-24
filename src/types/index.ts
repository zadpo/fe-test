export interface Game {
  id: string;
  name: string;
  img: string;
  provider: string;
  category: string;
}

export type Category = "START" | "NEW" | "SLOTS" | "LIVE" | "JACKPOT";
