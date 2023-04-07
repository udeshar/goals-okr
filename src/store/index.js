import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { useAppStore, appStore } from './appStore'
import { useUserStore } from './userStore';
import { useOrgStore } from './organizationStore';

const useBoundStore = create((...a) => ({
  ...useAppStore(...a),
  ...useUserStore(...a),
  ...useOrgStore(...a),
}))

export default useBoundStore;