function handleClick(e) {
    let divClassList = e.target.classList

    divClassList.toggle('box2')

    console.log(e.target.classList);

    // console.log("Div is clicked..");
}
function handleDiv2Click(e){
    console.log("Clicked div 2")
}
function handleInnerDivClick(e){
    e.stopPropagation()
    console.log("Clicked inner div ")
}
const handleMouseEnter = () => {
    // console.log("Mouse enter inside div");
};
const handleMouseLeave = () => {
    // console.log("Mouse leave from div");
};

const handleMouseWheel = () => {
    //  console.log("Mouse wheel is active")
}
const handleScroll = () => {
    // console.log("You are scrolling...")
}

const handleInput = (e) => { // e = Event object
    // console.log(e.target.value)
    // console.log("Input is triggred..")
}
const handleFocus = (e) => {
    // console.log(e)
}
const handleBlur = (e) => {
    // console.log(e)
}
const handleChange = (e) => {
    // console.log(e);
}