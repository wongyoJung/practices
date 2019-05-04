<!DOCTYPE HTML>
<html>
<head>
  <title> Test page </title>
</head>
<body>


  <?php
  $file_lines = file('videoSources\links.txt');
  $leng = sizeof($file_lines);
  $num = rand(0,$leng-1);
  $link = $file_lines[$num];
  $link=str_replace("\r\n","",$link);
  $link=$link."?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&feature=oembed&autoplay=0";
  echo $link;
  ?>
 asdfsdfff
 </body>
</html>
