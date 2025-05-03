
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SeasonDataType } from '@/types/battlepass';

type PlayerProgressProps = {
  seasonData: SeasonDataType;
}

const PlayerProgress: React.FC<PlayerProgressProps> = ({ seasonData }) => {
  const levelProgressPercent = Math.round((seasonData.experience / seasonData.nextLevelExperience) * 100);
  const levelMarkers = [0, 20, 40, 60, 80, 100];

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Ваш прогресс</CardTitle>
        <CardDescription>Текущий уровень и награды</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                {seasonData.currentLevel}
              </div>
              <Badge className="absolute -bottom-1 -right-1 bg-amber-500">{seasonData.stars} ★</Badge>
            </div>
            <div>
              <p className="font-semibold">Уровень {seasonData.currentLevel}/{seasonData.maxLevel}</p>
              <p className="text-sm text-muted-foreground">
                {seasonData.experience} / {seasonData.nextLevelExperience} опыта
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-right">До следующего уровня:</p>
            <p className="text-xl font-bold text-right">
              {seasonData.nextLevelExperience - seasonData.experience} XP
            </p>
          </div>
        </div>
        
        <Progress value={levelProgressPercent} className="h-3" />
        
        {/* Шкала с уровнями */}
        <div className="mt-8 relative">
          <Separator />
          <div className="flex justify-between mt-2">
            {levelMarkers.map((level, i) => (
              <div key={i} className="text-center relative">
                <div 
                  className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center 
                    ${level <= seasonData.currentLevel ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                >
                  {level}
                </div>
                <div className="text-xs">Ур. {level}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerProgress;
