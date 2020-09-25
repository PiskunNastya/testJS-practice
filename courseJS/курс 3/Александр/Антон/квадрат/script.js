const dragDiv = document.getElementById('drag');
const moveObject = {}

const mouseDownFunc = (e) => {
  if (e.target.tagName === 'DIV') {
    document.addEventListener('mousemove', mouseMoveFunc)
    moveObject.x = e.offsetX
    moveObject.y = e.offsetY
  }
}

const mouseMoveFunc = (e) => {
  dragDiv.style.top = (e.clientY - moveObject.y).toString() + 'px'
  dragDiv.style.left = (e.clientX - moveObject.x).toString() + 'px'
}

const mouseUpFunc = () => {
  document.removeEventListener('mousemove', mouseMoveFunc)
}

document.addEventListener('mousedown', mouseDownFunc)
document.addEventListener('mouseup', mouseUpFunc)