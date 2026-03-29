import { useEffect } from 'react';
import io from 'socket.io-client';
export const useSocket = () => { useEffect(() => { const socket = io('http://localhost:8080/ws'); return () => socket.disconnect(); }, []); };