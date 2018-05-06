/**
 * if no rect1 or rect2 throw error
 * find rightX and topY for each rect
 * find the intersection for the x axis and the y axis
 * if there's no x or y intersection, return null
 * return the leftX and bottomY plus the width and height calculated from the other coordinates
 */

const calculateRightX = rect => rect.leftX + rect.width
const calculateTopY = rect => rect.bottomY + rect.height

const findOverlap = (rect1, rect2) => {
  if (!rect1 || !rect2) throw new Error('Missing rectangle(s).')

  rect1.rightX = calculateRightX(rect1)
  rect2.rightX = calculateRightX(rect2)
  rect1.topY = calculateTopY(rect1)
  rect2.topY = calculateTopY(rect2)

  let smallerX = (rect1.leftX <= rect2.leftX) ? rect1 : rect2
  let largerX = (rect1.leftX > rect2.leftX) ? rect1 : rect2
  let leftX = null
  let rightX = null

  if (smallerX.rightX > largerX.leftX) {
    // there is an overlap
    leftX = largerX.leftX
    rightX = Math.min(largerX.rightX, smallerX.rightX)
  } else return null

  let smallerY = (rect1.bottomY <= rect1.bottomY) ? rect1 : rect2
  let largerY = (rect1.bottomY > rect2.bottomY) ? rect1: rect2
  let bottomY = null
  let topY = null

  if (smallerY.topY > largerY.bottomY) {
    // there is an overlap on the y axis
    bottomY = largerY.bottomY
    topY = Math.min(smallerY.topY, largerY.topY)
  } else return null

  let overlap = {
    leftX,
    bottomY,
    width: rightX-leftX,
    height: topY-bottomY,
    rightX,
    topY
  }

  console.log(overlap)
  return overlap
}

const rect1 = {
  leftX: 1,
  bottomY: 1,
  width: 6,
  height: 3,
};

const rect2 = {
  leftX: 5,
  bottomY: 2,
  width: 3,
  height: 6,
};

const rect3 = {
  leftX: 1,
  bottomY: 1,
  width: 20,
  height: 20
}

findOverlap(rect1, rect2)
findOverlap(rect3, rect2)