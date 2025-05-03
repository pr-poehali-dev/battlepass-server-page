
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BattlePassNavigation from '@/components/BattlePassNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Игровой портал</h1>
          <p className="text-xl text-gray-600 mb-6">Добро пожаловать в мир игровых приключений</p>
          
          {/* Добавляем компонент навигации к BattlePass */}
          <div className="flex justify-center">
            <BattlePassNavigation />
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Новости</CardTitle>
              <CardDescription>Последние обновления игры</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Новый сезон «Космическая одиссея» уже доступен! Не пропустите возможность получить уникальные награды.</p>
              <Link to="/battlepass">
                <Button variant="outline" className="w-full">Открыть Батл Пасс</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Быстрый доступ</CardTitle>
              <CardDescription>Популярные разделы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/battlepass">
                <Button variant="default" className="w-full flex items-center gap-2">
                  <Icon name="Trophy" />
                  Батл Пасс
                </Button>
              </Link>
              <Button variant="outline" className="w-full flex items-center gap-2" disabled>
                <Icon name="Users" />
                Друзья
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2" disabled>
                <Icon name="Ticket" />
                Сезонные события
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Прогресс сезона</CardTitle>
              <CardDescription>Ваши текущие достижения</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold mb-2">24</div>
                <p className="text-sm text-gray-500">Текущий уровень</p>
              </div>
              <p className="text-sm text-center mb-4">До конца сезона осталось 26 дней</p>
              <Link to="/battlepass">
                <Button className="w-full">Посмотреть подробности</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
