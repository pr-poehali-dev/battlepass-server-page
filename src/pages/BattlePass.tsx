
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

type TopPlayerType = {
  id: number;
  name: string;
  avatar: string;
  level: number;
  experience: number;
}

type MissionType = {
  id: number;
  title: string;
  description: string;
  reward: number;
  progress: number;
  total: number;
  completed: boolean;
}

const BattlePass = () => {
  // Данные сезона
  const seasonData = {
    name: "Космическая одиссея",
    endDate: "30 июня 2025",
    currentLevel: 24,
    maxLevel: 100,
    experience: 12500,
    nextLevelExperience: 15000,
    stars: 85,
    hasVipPass: false
  };

  // Данные для топа игроков
  const topPlayers: TopPlayerType[] = [
    { id: 1, name: "КосмоБро", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", level: 78, experience: 245600 },
    { id: 2, name: "СтарКрафтер", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", level: 72, experience: 230400 },
    { id: 3, name: "НебоХод", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", level: 69, experience: 218700 }
  ];

  // Миссии
  const [missions] = useState<MissionType[]>([
    { id: 1, title: "Захватчик", description: "Захватите 5 вражеских баз", reward: 10, progress: 3, total: 5, completed: false },
    { id: 2, title: "Снайпер", description: "Выполните 10 дальних убийств", reward: 15, progress: 10, total: 10, completed: true },
    { id: 3, title: "Медик", description: "Вылечите союзников на 1000 HP", reward: 20, progress: 450, total: 1000, completed: false },
    { id: 4, title: "Инженер", description: "Постройте 3 турели", reward: 5, progress: 1, total: 3, completed: false }
  ]);

  // Расчет процента прогресса для уровня
  const levelProgressPercent = Math.round((seasonData.experience / seasonData.nextLevelExperience) * 100);

  return (
    <div className="container mx-auto py-6 px-4 max-w-6xl">
      {/* Заголовок и информация о сезоне */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{seasonData.name}</h1>
          <p className="text-muted-foreground">Сезон заканчивается: {seasonData.endDate}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant={seasonData.hasVipPass ? "outline" : "default"} size="lg" className="gap-2">
            <Icon name="Star" className="text-yellow-400" />
            {seasonData.hasVipPass ? "VIP-пропуск активирован" : "Купить VIP-пропуск"}
          </Button>
        </div>
      </div>

      {/* Основные блоки */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Блок прогресса и уровня */}
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
                  <p className="text-sm text-muted-foreground">{seasonData.experience} / {seasonData.nextLevelExperience} опыта</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-right">До следующего уровня:</p>
                <p className="text-xl font-bold text-right">{seasonData.nextLevelExperience - seasonData.experience} XP</p>
              </div>
            </div>
            <Progress value={levelProgressPercent} className="h-3" />
            
            {/* Шкала с уровнями */}
            <div className="mt-8 relative">
              <Separator />
              <div className="flex justify-between mt-2">
                {[0, 20, 40, 60, 80, 100].map((level, i) => (
                  <div key={i} className="text-center relative">
                    <div className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center ${level <= seasonData.currentLevel ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      {level}
                    </div>
                    <div className="text-xs">Ур. {level}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Блок TOP игроков */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>ТОП опыта БП</CardTitle>
            <CardDescription>Лидеры сезона</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPlayers.map((player, index) => (
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
      </div>

      {/* Блок миссий */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Миссии</CardTitle>
          <CardDescription>Выполняйте задания и получайте звезды</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="daily">
            <TabsList className="mb-4">
              <TabsTrigger value="daily">Ежедневные</TabsTrigger>
              <TabsTrigger value="weekly">Еженедельные</TabsTrigger>
              <TabsTrigger value="season">Сезонные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="space-y-4">
              {missions.map(mission => (
                <div key={mission.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold">{mission.title}</h3>
                      <p className="text-sm text-muted-foreground">{mission.description}</p>
                    </div>
                    <Badge variant={mission.completed ? "default" : "outline"} className="gap-1">
                      <Icon name="Star" size={14} className="text-yellow-400" />
                      {mission.reward}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span>{mission.progress} / {mission.total}</span>
                    </div>
                    <Progress value={(mission.progress / mission.total) * 100} className="h-2" />
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="weekly">
              <p className="text-center py-8 text-muted-foreground">Еженедельные миссии обновятся через 2 дня</p>
            </TabsContent>
            
            <TabsContent value="season">
              <p className="text-center py-8 text-muted-foreground">Выполните все еженедельные миссии, чтобы открыть сезонные испытания</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BattlePass;
