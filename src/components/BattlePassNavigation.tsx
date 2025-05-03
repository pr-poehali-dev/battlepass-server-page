
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from '@/components/ui/icon';

const BattlePassNavigation = () => {
  return (
    <div className="my-4">
      <Link to="/battlepass">
        <Button variant="outline" className="gap-2">
          <Icon name="Trophy" />
          БатлПас
        </Button>
      </Link>
    </div>
  );
};

export default BattlePassNavigation;
