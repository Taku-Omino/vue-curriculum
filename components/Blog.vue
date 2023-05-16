<template>
  <section class="p-blog">
    <h2 class="p-blogMainTitle">BLOG</h2>
    <div class="p-blogConceptWrap">
      <p class="p-blogConcept">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veit est
        facilis majores,perspiciatis.
      </p>
    </div>
    <div class="p-blogArticle">
      <div class="p-blogItemTop">
        <img class="p-blogDummy" src="@/assets/images/common/blog_01.jpg" />
        <div class="p-blogItemTopWrapper">
          <h3 class="p-column">45 Mininal Worksspace Rooms for Web Savvys</h3>
          <p class="p-text">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <button class="c-moreInfo">MORE</button>
        </div>
      </div>
      <div class="p-blogItemMiddle">
        <img class="p-blogDummy" src="@/assets/images/common/blog_02.jpg" />
        <div class="p-blogItemMiddleWrapper">
          <h3 class="p-column">45 Mininal Worksspace Rooms for Web Savvys</h3>
          <p class="p-text">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <button class="c-moreInfo">MORE</button>
        </div>
      </div>
      <div class="p-blogItemBottom">
        <img class="p-blogDummy" src="@/assets/images/common/blog_03.jpg" />
        <div class="p-blogItemBottomWrapper">
          <h3 class="p-column">45 Mininal Worksspace Rooms for Web Savvys</h3>
          <p class="p-text">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
          <button class="c-moreInfo">MORE</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style scoped>
@media screen and (min-width: 796px) {
  /* pc用スタイル */
  .p-blog {
    padding-top: 80px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 60px;
  }
  .p-blogMainTitle {
    font-size: 3vw;
    text-align: center;
    color: #595959;
  }
  .p-blogConceptWrap {
    text-align: center;
  }
  .p-blogConcept {
    text-align: center;
    margin: 30px 0;
    position: relative;
    display: inline-block;
    color: grey;
    font-size: 2vw;
  }
  .p-blogConceptWrap .p-blogConcept::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -50px;
    border-bottom: 3px solid #ffd743;
    width: 15%;
    margin: 0 auto;
  }
  .p-blogTitle {
    font-size: 2vw;
    margin: 35px 0;
    text-align: center;
    color: #595959;
    font-weight: normal;
  }
  .p-blogConcept {
    text-align: center;
  }
  .p-blogItemTop,
  .p-blogItemBottom {
    text-align: left;
    display: flex;
    width: 100%;
    margin-bottom: 2%;
  }
  .p-blogItemTopWrapper,
  .p-blogItemBottomWrapper {
    margin-left: 2%;
    width: 100%;
  }
  .p-blogItemMiddle {
    margin: 5% auto;
    display: flex;
    flex-direction: row-reverse;
  }
  .p-blogItemMiddleWrapper {
    margin-right: 2%;
    width: 100%;
    text-align: right;
  }
  .p-blogItemTopWrapper,
  .p-blogItemMiddleWrapper,
  .p-blogItemBottomWrapper {
    width: calc(3 * 50vw - 850px);
  }
  .p-blogDummy {
    flex: 1;
    min-width: 300px;
    object-fit: contain;
  }
  .p-blogArticle {
    margin-top: 80px;
  }
  .c-moreInfo {
    background-color: #ffc700;
    width: 10%;
    min-width: 60px;
    height: 20%;
    color: #ffffff;
    font-size: 12px;
    border: none;
    border-radius: 3px;
  }
}
@media screen and (max-width: 795px) {
  /* sp用スタイル */
  .p-blog {
    margin: 80px 20px 0 20px;
  }
  .p-blogMainTitle {
    font-size: 5vw;
    text-align: center;
    color: #595959;
  }
  .p-blogConceptWrap {
    text-align: center;
  }
  .p-blogConcept {
    margin-bottom: 2%;
    text-align: center;
    margin: 30px 0;
    position: relative;
    display: inline-block;
    color: grey;
    font-size: 2.2vw;
  }
  .p-blogConceptWrap .p-blogConcept::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -50px;
    border-bottom: 3px solid #ffd743;
    width: 17%;
    margin: 0 auto;
  }
  .p-blogTitle {
    font-size: 20px;
    margin: 4% 0;
    text-align: center;
    color: #595959;
    font-weight: normal;
  }
  .p-blogConcept {
    text-align: center;
  }
  .p-blogItemTop,
  .p-blogItemMiddle,
  .p-blogItemBottom {
    display: block;
  }
  .p-blogItemBottom {
    margin-bottom: 12%;
  }
  .p-blogDummy {
    width: 100%;
    min-width: 200px; /*_index.css:221のmin-width: 200px;を打ち消して画像を中央に寄せるため*/
  }
  .p-blogItemMiddleWrapper {
    margin-top: 20px;
    margin-right: 30px;
    width: 100%;
    text-align: left;
  }
  .p-blogItemTopWrapper,
  .p-blogItemTopMiddle,
  .p-blogItemBottomWrapper {
    margin: 0;
    width: 100%;
  }
  .p-blogDummy {
    width: 100%;
    min-width: 200px; /*_index.css:221のmin-width: 200px;を打ち消して画像を中央に寄せるため*/
  }
  .p-blogArticle {
    width: 100%;
    margin-top: 90px;
  }
  .c-moreInfo {
    background-color: #ffc700;
    width: 100%;
    height: 30%;
    padding: 2%;
    color: #ffffff;
    font-size: 2vw;
    border: none;
    border-radius: 3px;
    margin-bottom: 8%; /*ボタンと画像のスペースを追加*/
  }
}
@media screen and (max-width: 375px) {
  .p-blogMainTitle {
    font-size: 8vw;
    text-align: center;
    color: #595959;
  }
  .p-blogConcept {
    text-align: center;
    font-size: 5vw;
  }
  .p-blogConceptWrap .p-blogConcept::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -50px;
    border-bottom: 2px solid #ffd743;
    width: 30%;
    margin: 0 auto;
  }
  .c-moreInfo {
    background-color: #ffc700;
    width: 100%;
    height: 30%;
    padding: 4%;
    color: #ffffff;
    font-size: 2vw;
    border: none;
    border-radius: 3px;
    margin-bottom: 8%; /*ボタンと画像のスペースを追加*/
  }
}
@media screen and (max-width: 320px) {
  .p-blogMainTitle {
    font-size: 10vw;
    text-align: center;
    color: #595959;
  }
  .p-blogConcept {
    line-height: 1.8;
    text-align: center;
    font-size: 5.5vw;
  }
  .p-blogTitle {
    font-size: 20px;
    margin: 9% 0;
    text-align: center;
    color: #595959;
  }
}
</style>
