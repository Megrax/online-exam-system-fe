<template>
  <div class="login-bg-plain stain">
    <div
      class="form-basic"
      id="login"
    >
      <div class="form-content mt-18">
        <div class="login-header">
          <div class="logo"><span class="color"></span></div>
        </div>
        <form>
          <table>
            <tr>
              <td>
                <input
                  id="email"
                  type="text"
                  name="data[email]"
                  placeholder="邮箱"
                  v-model="email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  name="data[password]"
                  placeholder="密码"
                  v-model="password"
                />
              </td>
            </tr>
            <tr>
              <td class="remember-me-td">
                <label
                  class="remember-me"
                  for="remember_me"
                >
                  <input
                    type="checkbox"
                    id="remember_me"
                    name="data[remember]"
                    value="1"
                  />记住帐号
                </label>
                <span class="forgot-pass">
                  <a
                    href="/auth/password-recovery"
                    class=""
                  >忘记密码?
                  </a>
                </span>
              </td>
            </tr>
            <td style="text-align: center">
              <input
                type="submit"
                class="login-btn"
                value="登录"
                @click.prevent="handleSubmit"
              />
            </td>
            <tr>
            </tr>
          </table>
        </form>
        <div class="login-footer">
          <span>没有帐号? <a href="">点击注册</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      const url = 'http://localhost/api/login'
      let data = {
        email: this.email,
        password: this.password
      }
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
    }
  }
}
</script>

<style scoped src="../assets/css/login-style.css"></style>