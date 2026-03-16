"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Sector = 'medicos' | 'club' | 'pilotos' | 'fondo';

interface SectorContextType {
  sector: Sector;
  setSector: (sector: Sector) => void;
}

const SectorContext = createContext<SectorContextType | undefined>(undefined);

export function SectorProvider({ children }: { children: React.ReactNode }) {
  const [sector, setSector] = useState<Sector>('medicos');

  useEffect(() => {
    const savedSector = localStorage.getItem('demo_sector') as Sector;
    if (savedSector && ['medicos', 'club', 'pilotos', 'fondo'].includes(savedSector)) {
      setSector(savedSector);
    }
  }, []);

  const handleSetSector = (newSector: Sector) => {
    setSector(newSector);
    localStorage.setItem('demo_sector', newSector);
  };

  return (
    <SectorContext.Provider value={{ sector, setSector: handleSetSector }}>
      {children}
    </SectorContext.Provider>
  );
}

export function useSector() {
  const context = useContext(SectorContext);
  if (context === undefined) {
    throw new Error('useSector must be used within a SectorProvider');
  }
  return context;
}
