var del = require('del');

module.exports = function(gulp) {

  gulp.task('clean', function() {
    return del(['./dist/*']);
  });

  //Copy azure deployment scripts and node version if required
  gulp.task('azure-deploy-scripts', function(){
    return gulp.src(
            ['./azure/.deployment',
            './azure/deploy.sh',
            './azure/IISNode.yml',
            './azure/web.config'])
          .pipe(gulp.dest('./dist'));
  });

  gulp.task('azure-deploy-bin', function(){
    return gulp.src(['./azure/bin/*'])
            .pipe(gulp.dest('./dist/bin'));
  });

  gulp.task('azure', ['azure-deploy-scripts', 'azure-deploy-bin']);
}
