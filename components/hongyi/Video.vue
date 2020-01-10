<template>
  <div class="videoBox">
    <video
      ref="video"
      id="video"
      :src="currentVideo"
      controls
      preload
      playsinline
    ></video>
    <p>{{ currentTime }}</p>
    <div class="polaroidImg">
      <img
        src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F22740133597D8F1729"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.videoBox {
  max-width: 100%;
  margin: 0 auto;
}
video {
  width: 100%;
  height: 360px;
}
.polaroidImg {
  display: none;
}
</style>

<script>
let video;
export default {
  name: 'Video',
  data() {
    return {
      videoList: [
        'https://bmw-7series.s3.amazonaws.com/media/luxurySub_w_1_20161216.mp4',
        'https://www.w3schools.com/tags/mov_bbb.mp4',
        'https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4'
      ],
      currentVideo: null,
      count: 0,
      currentTime: null
      // video: null
    };
  },
  mounted() {
    var self = this;
    this.init();

    video = document.getElementById('video');
    video.ontimeupdate = function() {
      self.getCurrentTime();
    };
    $('#video').on('ended', function() {
      self.setNextVideo();
    });
  },
  computed: {
    video() {
      return this.$refs.video;
    }
    // currentTime() {
    //   if (process.client) {
    //     var currentTime

    //     console.log(currentTime)
    //     return currentTime
    //   }
    //   // console.log(video)
    //   // return currentTime
    // }
  },
  methods: {
    init() {
      this.currentVideo = this.videoList[0];
    },
    getCurrentTime() {
      this.currentTime = video.currentTime;
    },
    setNextVideo() {
      this.count++;
      console.log(this.count);
      this.currentVideo = this.videoList[this.count];
      setTimeout(() => {
        this.playVideo();
      }, 1000);
    },
    playVideo() {
      video.play();
    }
  }
};
</script>
