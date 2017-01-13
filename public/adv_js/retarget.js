
var container = document.querySelector('.container');
var rocketSVG = document.querySelector('.rocket-svg');
var rocketHole = document.querySelector('#rocketHole');
var rocketMask = document.querySelector('#rocketMask');
var mainRocket = document.querySelector('#mainRocket');
var starGroup = document.querySelector('.starGroup');
var astronautGroup = document.querySelector('#astronaut');
var motionLineTimeline = new TimelineMax();
motionLineTimeline.timeScale(5);
var numMotionLines = 6;
var numStars = 200;
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})

Draggable.create(rocketHole, {

  onDrag: onThrowUpdate,
  throwProps: true,
  onThrowUpdate: onThrowUpdate,
  throwResistance: 8000

})

//star size and colour
TweenMax.set('g circle', {
    scale: 0.12,
    fill: '#C3B0C5'

  })
  //make the dragger pulse
TweenMax.from([rocketMask, rocketHole], 0.61, {
  attr: {
    r: 90
  },
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut

})

//rocket shake
TweenMax.from([mainRocket, astronaut], 0.01, {
  y: 3,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut

})
TweenMax.from(mainRocket, 0.07, {
  x: 3,
  repeat: -1,
  yoyo: true,
  ease: Power4.easeInOut

})

//clone stars
for (var i = 0; i < numStars; i++) {

  var newStar = document.querySelector('.star').cloneNode(true);
  starGroup.appendChild(newStar);
  TweenMax.set(newStar, {
    attr: {
      x: Math.random() * 1000,
      y: Math.random() * 600
    }
  })
}
//animate the motion lines
for (var i = 0; i < numMotionLines; i++) {
  var line = document.querySelector(".motionLine" + i);
  //console.log(line)

  var tl = new TimelineMax({
    repeat: -1,
    repeatDelay: Math.random() * 2
  });
  tl.fromTo(line, 0.1, {
      drawSVG: '0% 0%'
    }, {
      drawSVG: '0% 20%',
      ease: Linear.easeNone
    })
    .to(line, (Math.random() * 2) + 2, {
      drawSVG: '80% 100%',
      ease: Linear.easeNone
    })
    .to(line, 0.2, {
      drawSVG: '100% 100%',
      ease: Linear.easeNone
    })

  motionLineTimeline.add(tl, i);

}
//move the mask with the drag
function onThrowUpdate() {

  var posX = parseInt(rocketHole.getAttribute('cx')) + this.target._gsTransform.x;
  var posY = parseInt(rocketHole.getAttribute('cy')) + this.target._gsTransform.y;
  //console.log(posX);
  TweenMax.set(rocketMask, {
    attr: {

      cx: posX,
      cy: posY
    }

  })

}

