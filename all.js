const __allinit__ = (function(){
    document.title = Title()
}())


function Title(){
    var title = window.location.href.split("/")[window.location.href.split("/").length - 1].replace(".html", "") 
    return `${title[0].toUpperCase()}${title.slice(1)} ` 
}