
  var $head = $("iframe").contents().find("head");

  $head.append($("<link/>", {
      rel: "stylesheet",
      href: url,
      type: "text/css"
  }));