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
        <form
          name="loginform"
          action=""
          method="post"
        >
          <table>
            <tr>
              <td>
                <input
                  id="email"
                  type="text"
                  name="data[email]"
                  placeholder="邮箱"
                  value=""
                  tabindex="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  name="data[password]"
                  placeholder="密码"
                  value=""
                  tabindex="2"
                />
              </td>
            </tr>
            <tr>
              <td class="remember-me-td">
                <label
                  class="remember-me"
                  for="remember_me"
                ><input
                    type="checkbox"
                    id="remember_me"
                    tabindex="3"
                    name="data[remember]"
                    value="1"
                  />记住帐号</label><span class="forgot-pass"><a
                    href="/auth/password-recovery"
                    class=""
                    tabindex="5"
                  >忘记密码?</a></span>
              </td>
            </tr>
            <td style="text-align: center">
              <input
                type="submit"
                class="login-btn"
                value="登录"
                tabindex="4"
              />
            </td>
            <tr></tr>
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

}
</script>

<style scoped src="../assets/css/login-style.css"></style>