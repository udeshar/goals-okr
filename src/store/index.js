import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { useAppStore, appStore } from './appStore'
import { useUserStore } from './userStore';

const useBoundStore = create(
  persist((...a) => ({
  ...useAppStore(...a),
  ...useUserStore(...a),
}),
  {name : 'bound-store'}
))

export default useBoundStore;