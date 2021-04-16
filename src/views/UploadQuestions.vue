<template>
  <main>
    <div class="top">
      <a
        href="/addquestion1"
        class="top-button"
      >手动添加题目</a>
      <a
        href="/addquestion2"
        class="top-button"
      >批量添加题目</a>
    </div>
    <ul class="question-list">
      <li
        class="question"
        v-for="question in questions"
        :key="question.id"
      >
        <div class="question-topic">
          <span v-if="question.tag === 0"></span>
          <span v-if="question.tag === 1">[HTML]</span>
          <span v-if="question.tag === 2">[CSS]</span>
          <span v-if="question.tag === 3">[JavaScript]</span>
          {{ question.question }}
        </div>
        <ul class="options">
          <li>
            <span>A.</span>
            <span>{{ question.optionA }}</span>
          </li>
          <li>
            <span>B.</span>
            <span>{{ question.optionB }}</span>
          </li>
          <li>
            <span>C.</span>
            <span>{{ question.optionC }}</span>
          </li>
          <li>
            <span>D.</span>
            <span>{{ question.optionD }}</span>
          </li>
        </ul>
        <div class="question-answer">
          <div class="answer"><span>正确答案:</span>
            <span>{{ question.answer }}</span>
          </div>
          <div class="analysis"><span>答案解析:</span>
            <span>{{ question.analysis }}</span>
          </div>
        </div>
        <div class="methods">
          <div class="uploader">上传者:
            <span>{{ question.uploader }}</span>
          </div>
          <!--href="/delete?id={{$value.id}}"-->
          <a
            href=""
            class="modify"
          >删除</a>
          <!--href="/edit?id={{$value.id}}&tag={{$value.tag}}&answer={{$value.answer}}&analysis={{$value.analysis}}"-->
          <a
            href
            class="modify"
          >编辑</a>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>

export default {
  data() {
    return {
      fetchSuccess: false,
      questions: {},
    }
  },
  mounted() {
    const url = 'http://localhost/api/get-all-questions'
    fetch(url)
      .then(res => {
        if (res.ok) {
          this.fetchSuccess = true
          return res.json()
        } else {
          this.fetchSuccess = false
        }
      })
      .then(data => {
        this.questions = data
      })
  }
}
</script>

<style>
a {
  text-decoration: none;
}

.header {
  margin: 0 auto;
  height: 70px;
  width: 100%;
  background-color: black;
  line-height: 70px;
}

.nav {
  margin: auto;
  height: 70px;
  width: 80%;
  /* background-color: white; */
  line-height: 70px;
}

.logo {
  display: block;
  float: left;
  height: 70px;
  line-height: 70px;
  color: white;
  font-size: 30px;
}

ul li {
  list-style: none;
}

.top {
  width: 80%;
  height: 50px;
  margin: 40px auto;
  margin-top: 100px;
  border-bottom: 2px solid black;
}

.top-button {
  display: inline-block;
  height: 40px;
  width: auto;
  padding: 0px 10px;
  margin: 0 5px;
  /* border: 1px solid black; */
  line-height: 40px;
  color: white;
  background-color: rgb(37, 199, 37);
  border-radius: 8px;
}

.question-list {
  width: 78%;
  margin: 0px auto;
}

.question {
  display: block;
  width: 100%;
  padding: 10px auto;
  margin: 10px auto;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}

.question-topic {
  font-size: 18px;
  height: 40px;
  line-height: 40px;
}

.question-topic span {
  color: grey;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}

.options {
  display: block;
  padding: 0 10px;
}

.options li {
  margin: 5px auto;
}

.answer {
  margin-top: 10px;
}

.analysis {
  margin: 10px auto;
}

.methods {
  height: 30px;
}

.uploader {
  float: left;
  font-size: 14px;
  color: grey;
}

.methods a {
  display: block;
  float: right;
  margin: 0px 10px;
}

.modify {
  color: cornflowerblue;
}
</style>