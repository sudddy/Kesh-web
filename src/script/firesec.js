$(document).scroll(function() {
  var windowHeight = $(window).height();

  var link = $("#fourthContainer");
  var top = link.offset().top;
  var bottom = top + link.outerHeight();
  console.log("top", top);

  if (windowHeight < top) {
    console.log("comming");
    $(".compliance").attr("id", "fixedDiv");
  }

  var $self = $("#fixedDiv");
  $self.css("margin-top", 0);
  var fixedDivOffset = $self.offset().top + $self.outerHeight(true);
  console.log("fixedDiv offset", fixedDivOffset);
  // if reaches bottom
  if (fixedDivOffset > $("#fifthContainer").offset().top) {
    $self.css(
      "margin-top",
      -(fixedDivOffset - $("#fifthContainer").offset().top)
    );
  } else {
    $self.css("margin-top", "30px");
  }

  var third = $("#thirdContainer");
  var thirdTop = third.offset().top;
  var thirdbottom = thirdTop + third.outerHeight();
  console.log("thirdTop", thirdTop);
  console.log("thirdbottom", thirdbottom);

  if (fixedDivOffset < $("#fourthContainer").offset().top + 400) {
    console.log("crossed the boder");
    $(".compliance").removeAttr("id");
  }
  //   if (fixedDivOffset < bottom + 30) {
  //     $self.css("margin-top", $("#fourthContainer").offset().top);
  //   } else {
  //     $self.css("margin-top", "30px");
  //   }

  //   if (fixedDivOffset > link + 30) {
  //     $self.css("margin-top", fixedDivOffset + bottom);
  //   } else {
  //     $self.css("margin-top", "30px");
  //   }

  //   var objectTop = $("#fixedDiv").position().top;
  //   var objectHeight = $("#fixedDiv").outerHeight();
  //   var windowScrollTop = $(window).scrollTop();
  //   var windowHeight = $(window).height();

  //   if (windowScrollTop > objectTop) $("#fixedDiv").css("top", objectTop);
  //   else if (windowScrollTop + windowHeight < objectTop + objectHeight)
  //     $("#fixedDiv").css("top", windowScrollTop + windowHeight - objectHeight);
  console.log("");
  console.log("");
  console.log("");
});
