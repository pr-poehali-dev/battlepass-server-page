
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { TopPlayerType } from '@/types/battlepass';

type TopPlayersProps = {
  players: TopPlayerType[];
}

const TopPlayers: React.FC<TopPlayersProps> = ({ players }) => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>ТОП опыта БП</CardTitle>
        <CardDescription>Лидеры сезона</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.map((player, index) => (
            <div key={player.id} className="flex items-center gap-3">
              <div className="text-xl font-bold text-muted-foreground w-6">#{index + 1}</div>
              <Avatar className="h-12 w-12">
                <img src={player.avatar} alt={player.name} />
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{player.name}</p>
                <p className="text-sm text-muted-foreground">Уровень {player.level}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{player.experience.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">опыта</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPlayers;
