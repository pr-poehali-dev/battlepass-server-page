
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BattlePassNavigation = () => {
  return (
    <Link to="/battlepass" className="inline-block">
      <Button className="group relative overflow-hidden cyber-glow bg-gradient-to-r from-cyber-neon-purple to-cyber-neon-blue hover:from-cyber-neon-blue hover:to-cyber-neon-purple border-none">
        <span className="relative z-10 flex items-center gap-2">
          <Icon name="Star" className="text-cyber-neon-yellow" />
          <span>Открыть Батл Пасс</span>
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </Link>
  );
};

export default BattlePassNavigation;
