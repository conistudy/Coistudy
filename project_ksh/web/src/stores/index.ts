import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { RootObject, Children,ChinaTotal,ChinaAdd,StatisGradeCityDetail} from './type'




export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd:<any>{},
    chinaTotal:<any>{},
    cityDetail:<any>[],
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result;
      console.log(result);
      
      this.chinaAdd = this.list.chinaDayList
      this.chinaTotal = this.list.chinaTotal.total
      this.cityDetail = this.list.areaTree[2].children
    }
  }
})
