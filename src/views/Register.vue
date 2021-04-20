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
              <td>
                <input
                  type="password"
                  name="data[password]"
                  placeholder="确认密码"
                  v-model="passwordConfirm"
                />
              </td>
            </tr>
            <td style="text-align: center">
              <input
                type="submit"
                class="login-btn"
                value="注册"
                @click.prevent="handleSubmit"
              />
            </td>
            <tr></tr>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { isValidEmail } from '../scripts/functions'

export default {
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    formCheck() {

    },
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