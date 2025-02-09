<template>
  <div class="checkout-form">
    <h1 class="text-3xl font-bold mb-8 text-center">結帳表單</h1>
    <form @submit.prevent="handleSubmit" class="space-y-8">
      <!-- 姓名 -->
      <div class="form-group">
        <label for="name" class="form-label">姓名</label>
        <input v-model="form.name" type="text" id="name" class="form-input" placeholder="請輸入姓名" required />
        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
      </div>

      <!-- 電話 -->
      <div class="form-group">
        <label for="phone" class="form-label">電話</label>
        <input v-model="form.phone" type="tel" id="phone" class="form-input" placeholder="請輸入電話" required />
        <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input v-model="form.email" type="email" id="email" class="form-input" placeholder="請輸入 Email" required />
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      </div>

      <!-- 配送方式 -->
      <div class="form-group">
        <label for="delivery" class="form-label">付款方式</label>
        <select v-model="form.deliveryMethod" id="delivery" class="form-input">
          <option value="貨到付款">貨到付款</option>
        </select>
      </div>

      <!-- 訂單編號 -->
      <div class="form-group">
        <label class="form-label">訂單編號</label>
        <p class="order-id">{{ form.orderId }}</p>
      </div>

      <!-- 提交按鈕 -->
      <div class="text-center">
        <button type="submit" class="submit-button">提交訂單</button>
      </div>
    </form>

    <!-- 彈窗 -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p class="popup-title">感謝您的購買！</p>
        <p class="popup-order-id">您的訂單編號為：</p>
        <p class="popup-order-number">
          <strong>{{ form.orderId }}</strong>
        </p>
        <button @click="closePopup" class="close-button">關閉</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 彈窗相關
const showPopup = ref(false);
const closePopup = () => {
  showPopup.value = false;
};

// 訂單編號生成函式
function ShopcartNum() {
  const DayNum = new Date();
  const year = DayNum.getFullYear();
  const month = String(DayNum.getMonth() + 1).padStart(2, "0");
  const day = String(DayNum.getDate()).padStart(2, "0");
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${year}${month}${day}O${randomNum}`;
}

// 表單資料
const form = ref({
  name: "",
  phone: "",
  email: "",
  deliveryMethod: "貨到付款",
  orderId: "",
});

// 錯誤訊息
const errors = ref({
  name: "",
  phone: "",
  email: "",
});

// 在元件掛載時生成訂單編號
onMounted(() => {
  form.value.orderId = ShopcartNum();
});

// 驗證表單
const validateForm = () => {
  let isValid = true;

  if (!form.value.name.trim()) {
    errors.value.name = "姓名不得為空";
    isValid = false;
  } else {
    errors.value.name = "";
  }

  if (!form.value.phone.trim()) {
    errors.value.phone = "電話不得為空";
    isValid = false;
  } else {
    errors.value.phone = "";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.value.email.trim()) {
    errors.value.email = "Email 不得為空";
    isValid = false;
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = "請輸入有效的 Email";
    isValid = false;
  } else {
    errors.value.email = "";
  }

  return isValid;
};

// 提交表單處理
const handleSubmit = () => {
  if (validateForm()) {
    showPopup.value = true;
  } else {
    alert("請檢查表單資料是否正確！");
  }
};
</script>

<style lang="scss">
.checkout-form {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  background-color: #f2f2f2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 30px;
    text-align: center;
    padding: 10px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .form-group {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: #e6e6e6;
  }

  .form-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333333;
  }

  .form-input {
    padding: 1rem;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: #007bff;
    }
  }

  .order-id {
    padding: 1rem;
    background-color: #e9ecef;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 1rem;
    color: #555555;
  }

  .submit-button {
    padding: 1rem 2rem;
    background-color: #007bff;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    line-height: 1;

    p {
      margin-bottom: 1rem;
    }
  }

  .popup-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
  }

  .popup-order-id {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .popup-order-number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
    margin: 1.5rem 0;
  }

  .close-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
}
</style>
