import React from 'react';
import * as bin from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (command.trim() === '') {
    return;
  }

  const lowerCaseCommand = command.toLowerCase();
  const matchingCommands = Object.keys(bin).filter((entry) =>
    entry.toLowerCase().startsWith(lowerCaseCommand),
  );

  if (matchingCommands.length === 1) {
    setCommand(matchingCommands[0]);
  }
};
