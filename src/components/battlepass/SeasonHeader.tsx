
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { SeasonDataType } from '@/types/battlepass';

type SeasonHeaderProps = {
  seasonData: SeasonDataType;
}

const SeasonHeader: React.FC<SeasonHeaderProps> = ({ seasonData }) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">{seasonData.name}</h1>
        <p className="text-muted-foreground">Сезон заканчивается: {seasonData.endDate}</p>
      </div>
      <div className="mt-4 md:mt-0">
        <Button 
          variant={seasonData.hasVipPass ? "outline" : "default"} 
          size="lg" 
          className="gap-2"
        >
          <Icon name="Star" className="text-yellow-400" />
          {seasonData.hasVipPass ? "VIP-пропуск активирован" : "Купить VIP-пропуск"}
        </Button>
      </div>
    </div>
  );
};

export default SeasonHeader;
