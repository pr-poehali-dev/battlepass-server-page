
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

// Импортируем типы
import { SeasonDataType, TopPlayerType, MissionType } from '@/types/battlepass';

// Импортируем компоненты
import SeasonHeader from '@/components/battlepass/SeasonHeader';
import PlayerProgress from '@/components/battlepass/PlayerProgress';
import TopPlayers from '@/components/battlepass/TopPlayers';

// Компонент для отображения миссии
const MissionItem: React.FC<{ mission: MissionType }> = ({ mission }) => {
  return (
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
  );
};

const BattlePass: React.FC = () => {
  // Данные сезона
  const seasonData: SeasonDataType = {
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

  return (
    <div className="container mx-auto py-6 px-4 max-w-6xl">
      {/* Заголовок и информация о сезоне */}
      <SeasonHeader seasonData={seasonData} />

      {/* Основные блоки */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Блок прогресса и уровня */}
        <PlayerProgress seasonData={seasonData} />

        {/* Блок TOP игроков */}
        <TopPlayers players={topPlayers} />
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
                <MissionItem key={mission.id} mission={mission} />
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
