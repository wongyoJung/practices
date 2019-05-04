<!DOCTYPE HTML>
<html>
  <head>
    <title> BeQuietChallenge</title>
      <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="catchAudio.js"></script>
    <h1 id="HeadTitle"> Be quiet Challenge </h1>

  </head>

  <body>

    <!-- <iframe id="video" width="853" height="505" src="https://www.youtube.com/embed/H1ZSM5nX3kE?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&feature=oembed&autoplay=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    <iframe id="video" width="853" height="505" src=
    <?php
    $file_lines = file('videoSources\links.txt');
    $leng = sizeof($file_lines);
    $num = rand(0,$leng-1);
    $link = $file_lines[$num];
    $link=str_replace("\r\n","",$link);
    $link=$link."?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&feature=oembed&autoplay=0";
    echo $link;
    ?>
     frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </body>

</html>
