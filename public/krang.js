window.krang = {
  init: function(name) {
    var editor = document.getElementById("editor");
    var preview = document.getElementById("preview");

    var render = function() {
      preview.innerHTML = marked(editor.value);
    };

    sharejs.open(name, "text", function(error, doc) {
      if (error) {
        alert(error);

      } else {
        doc.attach_textarea(editor);

        // When the document is updated (either locally or remotely)
        // schedule a re-render as soon as possible. We can't just call
        // render here, because the change hasn't been applied yet.
        doc.on("change", function() {
          setTimeout(render, 1);
        });

        // Initial render
        render();
      }
    });

    // Toggle between editor and preview when hitting Escape.
    document.addEventListener("keyup", function(event) {
      if(event.keyCode == 27) {
        document.body.classList.toggle("edit");
      }
    });
  }
}
