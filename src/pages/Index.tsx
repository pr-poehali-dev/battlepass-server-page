
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BattlePassNavigation from '@/components/BattlePassNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark-blue bg-gradient-to-b from-cyber-dark-purple/20 to-cyber-dark-blue">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-cyber-neon-pink">Игровой портал</h1>
          <p className="text-xl text-cyber-neon-blue mb-6">Добро пожаловать в мир игровых приключений</p>
          
          {/* Добавляем компонент навигации к BattlePass */}
          <div className="flex justify-center">
            <BattlePassNavigation />
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="cyber-card border-t-cyber-neon-blue border-l-cyber-neon-blue border-r-cyber-neon-pink border-b-cyber-neon-pink">
            <CardHeader>
              <CardTitle className="text-cyber-neon-green">Новости</CardTitle>
              <CardDescription className="text-cyber-neon-blue/70">Последние обновления игры</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">Новый сезон «Космическая одиссея» уже доступен! Не пропустите возможность получить уникальные награды.</p>
              <Link to="/battlepass">
                <Button variant="outline" className="w-full border-cyber-neon-green text-cyber-neon-green hover:bg-cyber-neon-green/20">
                  Открыть Батл Пасс
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="cyber-card border-t-cyber-neon-blue border-l-cyber-neon-purple border-r-cyber-neon-pink border-b-cyber-neon-purple">
            <CardHeader>
              <CardTitle className="text-cyber-neon-purple">Быстрый доступ</CardTitle>
              <CardDescription className="text-cyber-neon-blue/70">Популярные разделы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/battlepass">
                <Button className="w-full bg-cyber-neon-purple hover:bg-cyber-neon-purple/80 text-white flex items-center gap-2">
                  <Icon name="Trophy" />
                  Батл Пасс
                </Button>
              </Link>
              <Button variant="outline" className="w-full border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue/20 flex items-center gap-2" disabled>
                <Icon name="Users" />
                Друзья
              </Button>
              <Button variant="outline" className="w-full border-cyber-neon-pink text-cyber-neon-pink hover:bg-cyber-neon-pink/20 flex items-center gap-2" disabled>
                <Icon name="Ticket" />
                Сезонные события
              </Button>
            </CardContent>
          </Card>
          
          <Card className="cyber-card border-t-cyber-neon-purple border-l-cyber-neon-pink border-r-cyber-neon-purple border-b-cyber-neon-blue">
            <CardHeader>
              <CardTitle className="text-cyber-neon-pink">Прогресс сезона</CardTitle>
              <CardDescription className="text-cyber-neon-blue/70">Ваши текущие достижения</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="cyber-border inline-block p-5 mb-2">
                  <div className="text-4xl font-bold text-cyber-neon-yellow">24</div>
                </div>
                <p className="text-sm text-cyber-neon-blue/80">Текущий уровень</p>
              </div>
              <p className="text-sm text-center mb-4 text-cyber-neon-green">До конца сезона осталось 26 дней</p>
              <Link to="/battlepass">
                <Button className="w-full bg-cyber-neon-pink hover:bg-cyber-neon-pink/80 text-white">
                  Посмотреть подробности
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
