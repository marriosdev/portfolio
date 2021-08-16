
function lightMode()
{
    var body = document.getElementById("body")
    body.style.color = "black"
    body.style.backgroundColor = "rgba(163, 161, 161, 0.048)"
    var buttondark = document.getElementById("dark")
    buttondark.style.display = "none"
    var buttonlight = document.getElementById("light")
    buttonlight.style.display = "block"
}
function darkMode()
{
    var body = document.getElementById("body")
    body.style.color = "white"
    body.style.backgroundColor = "#191919"
    var buttondark = document.getElementById("dark")
    buttondark.style.display = "block"
    var buttonlight = document.getElementById("light")
    buttonlight.style.display = "none"
}

function scroll_back(obj)
{
    var scroll = document.getElementById("list")
    scroll.scrollLeft = scroll.scrollLeft - 250 
}

function scroll_next(obj)
{
    var scroll = document.getElementById("list")
    scroll.scrollLeft = scroll.scrollLeft + 250 
}