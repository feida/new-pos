// import {getArticlePriceListByArticleId, getMealByArticleId, getUnitListByArticleId} from "../../api/api";
import {
    getUnitListByArticleId,
    getArticlePriceListByArticleId,
    getMealByArticleId,
} from '../../api/articleApi'

const state = {
  stockUnitList: [],
  stockArticlePriceList: [],
  stockMealAttributionList: [],
}

const getters = {
  stockUnitList:               state => state.stockUnitList,
  stockArticlePriceList:       state => state.stockArticlePriceList,
  stockMealAttributionList:    state => state.stockMealAttributionList,
}

const actions = {
  getUnitList({ commit }, currentArticle) { // 新规格
    //getUnitListByArticleId(currentArticle.id, unitList => commit('setUnit', {unitList, currentArticle}))
      getUnitListByArticleId(currentArticle.id)
          .then(res => {
              console.log('getUnitListByArticleId',res)
              if(res.ok && res.data) {
                  let unitList = res.data
                  commit('setUnit', {
                      unitList,
                      currentArticle
                  })

              }
          })
  },

  getArticlePrice({ commit }, currentArticle) { // 获取当前老规格规格列表
      getArticlePriceListByArticleId(currentArticle.id)
          .then(res => {
              console.log('getArticlePriceListByArticleId',res)
              if(res.ok && res.data) {
                  let articlePriceList = res.data
                  commit('setArticlePrice', {
                      articlePriceList,
                      currentArticle
                  })

              }
          })
  },

  getMeal({ commit }, currentArticle) {
      getMealByArticleId(currentArticle.id)
          .then(res => {
              console.log('getMealByArticleId',res)
              if(res.ok && res.data) {
                  let mealAttributionList = res.data
                  commit('setMealAttribution', {
                      currentArticle,
                      mealAttributionList
                  })

              }
          })
  }
}

const mutations = {
  setUnit(state, {unitList, currentArticle}){
    state.stockUnitList = unitList;
  },
  setArticlePrice(state, {articlePriceList, currentArticle}){
    state.stockArticlePriceList = articlePriceList;
  },
  setMealAttribution(state, {mealAttributionList, currentArticle}){
    state.stockMealAttributionList = mealAttributionList;
  },
  setArticleSoldOutStatus(state, articleInfo){ //
    this.state.article.articleList.map(item => {
      if (item.id == articleInfo.id) {
        item.is_empty = 1
        item.current_working_stock = 0;
      }
    });
  },

  setArticleUpOrDown(state, articleInfo) {
    this.state.article.articleList.map(item => {
      if (item.id == articleInfo.id) {
        item.activated = articleInfo.activated
      }
    });
  },

  setArticleEdit(state, articleInfo) {
    this.state.article.articleList.map(item => {
      if (item.id == articleInfo.id) {
          item.current_working_stock = articleInfo.current_stock;
          item.is_empty = articleInfo.current_stock > 0 ? 0 : 1;
      }
    });
  },
    setArticlesEdit(state, articleInfo) {
        let ids = articleInfo.id;
        this.state.article.articleList.map(item => {
            if (item.id && articleInfo.id) {
                item.current_working_stock = articleInfo.count;
                item.is_empty = articleInfo.count > 0 ? 0 : 1;
            }
        });

    },

  setArticlePriceEdit(state, articleInfo) {
    this.state.article.articleList.map(item => {
      if (item.id == articleInfo.articleId) {
        item.current_working_stock = articleInfo.sumCount + item.current_working_stock;
        item.is_empty = item.current_working_stock > 0 ? 0 : 1;
      }
    });
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

