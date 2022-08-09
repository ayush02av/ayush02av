const logger = $("#logger");

const cursor = $("#cursor");
const subCursor = $("#sub-cursor");

const gotoLink = $(".goto-link");

const redirectTo = (target, newWindow) => {
    if (newWindow) {
        window.open(target);
    } else {
        window.location = target;
    }
}

const updateMouseCursor = (mouseEvent) => {
    var x_pos = mouseEvent.pageX;
    var y_pos = window.pageYOffset + " + " + cursor.css("top").replace("px", "");
    var y_pos = mouseEvent.pageY;

    // logger.html(`${x_pos} : ${y_pos}`);

    setTimeout(() => {
        cursor.css("top", y_pos);
        cursor.css("left", x_pos);

        setTimeout(() => {
            subCursor.css("top", y_pos - 13);
            subCursor.css("left", x_pos - 11);
        }, 30);

    }, 10);
}

// $(document).bind('mousemove', updateMouseCursor);

const gotoLinkFunction = (e) => {
    redirectTo(e.currentTarget.id, e.currentTarget.classList.contains('new-window'))
}

gotoLink.click(gotoLinkFunction);
// gotoLink.bind('mousemove', gotoLinkFunction);