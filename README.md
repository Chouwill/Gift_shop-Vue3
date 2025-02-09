# Gift Shop 精品購物電商網站

## 項目概述
**開發時間：2023/2 ~ 2023/6**

專注於打造高品質的精品電商平台，致力於為顧客提供精緻的文具與行事曆。我們相信，優雅的文具不僅能提升工作與學習的效率，更能增添生活的美好。

---

## 技術棧
- **前端框架**：Vue 3
- **狀態管理**：Pinia
- **樣式**：SCSS
- **HTTP 請求**：Axios
- **UI 組件庫**：Element UI
- **建構工具**：Vite

---

## 核心功能

✅ **購物車功能**
- 使用 Pinia 進行狀態管理，實現購物車商品的加入、移除與即時更新總價。

✅ **單頁應用（SPA）**
- 整合 Vue Router，確保流暢的購物體驗。

✅ **訂單管理**
- 設計送出訂單功能，處理前端商品資訊與訂單資料，準備後端 API 串接。

✅ **效能優化**
- 採用 Vite 作為專案打包工具，提高開發與部署速度。

---

## 技術挑戰與解決方案

### 🎯 挑戰：金流 API 串接的適配性
**問題**：
購物流程中需要考量金流 API 串接的適配性，確保用戶支付操作安全與流暢。

**解決方案**：
- 設計訂單資料結構與狀態管理架構。
- 預留金流 API 串接擴展接口，簡化後續金流整合過程。

---

## 如何運行專案

### 📌 安裝專案依賴
```bash
npm install
```

### 🚀 啟動開發環境
```bash
npm run dev
```

### 📦 打包專案
```bash
npm run build
```

---



## 使用套件
- [Vite](https://cn.vitejs.dev)
- [Vue-router](https://router.vuejs.org/zh)
- [Pinia](https://pinia.vuejs.org/zh)
- [Pinia plugin persist](https://seb-l.github.io/pinia-plugin-persist)


