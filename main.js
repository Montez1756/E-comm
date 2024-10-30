var js = ""
var num = 0
var temp

function iterateElements(element, parent = 0) {
    const go_back = element.className ? element.className : num
    if (element !== document.body) {
        // Process the current element
        try{
            js += parseEl(element, parent, element.className ? element.className : null)
            num++

        }catch(e){
            alert(e)
        }
    }
    for (let i = 0; i < element.children.length; i++) {
        if (element.children[i].nodeType !== 1 || element.children[i].localName === "script") {
            continue
        }
        else {
            iterateElements(element.children[i], go_back) // Recursively call for each child
        }

    }
}

// Start the iteration from the body or any other specific element
var html_js = document.createElement("div")
html_js.className = "html_js"
html_js.style.border = "2px inset dimgrey"
html_js.style.width = "100vw"
html_js.style.height = "100vh"
html_js.style.overflow = "auto"
html_js.style.position = "absolute"
html_js.style.bottom = "-100vh"
html_js.style.color = "white"
html_js.style.backgroundColor = "black"
html_js.style.whiteSpace = "pre-wrap"

iterateElements(document.body);
document.body.append(html_js)
html_js.innerHTML = js
alert("Your converted HTML is below:)")

function parseEl(el, parent, cls) {
    var text = getText(el)
    typeof(parent) === 'string' ? parent = convert_to_var(parent) : parent > 0 ? parent = `el${parent}` : parent = "document.body"
    var child = cls ? convert_to_var(cls) : `el${num}`
    var res = ""
    res += `var ${child} = document.createElement("${el.localName}")\n`
    res += allAttrs(el, child)
    if (text) {
        res += `${child}.textContent = "${text}"\n`
    }
    res+=`${parent}.append(${child})\n\n`
    return res
}

function allAttrs(el, name) {
    var attrs = ""
    for (var i = 0; i < el.attributes.length; i++) {
        attrs += `${name}.${el.attributes[i].name === "class" ? "className" : el.attributes[i].name} = "${el.attributes[i].value}"\n`
    }
    return attrs

}
function getText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeValue && el.childNodes[i].nodeValue.replace(/\s/g, "") !== "") {
            return el.childNodes[i].nodeValue
        }

    }
    return null
}
function convert_to_var(val){
   return val.replaceAll("-","_")
}