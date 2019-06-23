<template>
  <div class="index">
        <!-- 寄养 -->
       <div class="bg_pic">
         <!-- <img src="http://viptail.image.alimmdn.com/files/official_web/img/icon_logo.png" alt="" class="pic-logo">
         <p class="bg-title">成为寄养家庭</p> -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <!-- 文件上传 -->
            <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="handleSuccess"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
       </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'headContact',
  data () {
    return {
      imageUrl: '',
      fileList:[]
    }
  },
  methods: {
      success () {
         axios.post('/api/upload',{
           body:{
             imageUrl:this.imageUrl
           }
         })
        .then(res=>{
          console.log(res)
        })
      },
      textSuccess (file, fileList) {

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleSuccess(file,fileList){
           console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        console.log(files);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.success()
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>


<style scoped lang="scss">
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  // .bg_pic {
  //   height:200px;
  //   background: url(http://viptail.image.alimmdn.com/files/official_web/img/home_top.jpg);
  //   background-size: 100% 200px;
  //   background-repeat: no-repeat
  // }
  // .bg_pic .pic-logo {
  //   float: left;
  //   margin: 20px 0px 0px 20px;
  //   height: 20px;
  // }
  // .bg-title {
  //   color: $topic-color
  // }
</style>
