import React from 'react';
import Card from './Card';

import { useGameContext } from './GameProvider';

export default function ExecutePassButton({ passCard }) {
  const { from, to, selectedCard } = useGameContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
