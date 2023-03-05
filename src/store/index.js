import { create } from 'zustand'
import { useAppStore, appStore } from './appStore'

const useBoundStore = create((...a) => ({
  ...useAppStore(...a),
}))

export default useBoundStore;