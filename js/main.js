/* ========= JS File ==========
    Template Name: Fifty - Creative Portfolio Template
    Author: Mustafa729
    Version: 1.0
    Copyright 2019
========== JS File ==========

JS FILE INDEX
=============

1- //  Auto Type Setup
2- // Go Down Button
3- // Go To Section
4- // Portfolio Slider
5- // PARTICLES ONE TRIGGER
*/


$(document).ready(function() {
  'use strict';

  //  Auto Type Setup

  $('.hero-section .typed').typed({
    strings: ["Web Pages.", "Web applications."],
    loop: true,
    startDelay: 1000,
    backDelay: 2000
  });

  // Go Down Button
  $('.go-down').on('click', function() {
    $('.body, html').animate({
      scrollTop: $('.about').offset().top
    }, 1000)
  });

  // Go To Section
  $('.menu-item-box .menu-item').on('click', function(e) {

    $('.menu-item-box').removeClass('active');

    $(this).parent('.menu-item-box').addClass('active');

    $('html, body').animate({
      scrollTop: $($(this).data('link')).offset().top
    }, 1000);
  });

  // Portfolio Slider
  if ($('.projects-slider').length) {

    $('.projects-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [{
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });


    //// PARTICLES ONE TRIGGER
    if ($("#particles-js-one")[0]) {
      particlesJS('particles-js-one', {
        "particles": {
          "number": {
            "value": 170,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.5,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 400,
              "size": 4,
              "duration": 0.3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }


    //// PARTICLES TWO TRIGGER
    if ($("#particles-js-two")[0]) {
      particlesJS("particles-js-two", {
        "particles": {
          "number": {
            "value": 70,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#FFF"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#FFF"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FFF",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });

    }

  }



  //Coming soon projects Message
  $(".empty_work").mouseenter(function() {
    $('.empty_work_message', this).show();
    $('.empty_img_work', this).css('opacity', '.3')
  }).mouseleave(function() {
    $('.empty_work_message', this).hide();
    $('.empty_img_work', this).css('opacity', '100')
  });



  (function() {

    var canvas, ctx, circ, nodes, mouse, SENSITIVITY, SIBLINGS_LIMIT, DENSITY, NODES_QTY, ANCHOR_LENGTH, MOUSE_RADIUS;
  
    // how close next node must be to activate connection (in px)
    // shorter distance == better connection (line width)
    SENSITIVITY = 100;
    // note that siblings limit is not 'accurate' as the node can actually have more connections than this value that's because the node accepts sibling nodes with no regard to their current connections this is acceptable because potential fix would not result in significant visual difference 
    // more siblings == bigger node
    SIBLINGS_LIMIT = 10;
    // default node margin
    DENSITY = 50;
    // total number of nodes used (incremented after creation)
    NODES_QTY = 0;
    // avoid nodes spreading
    ANCHOR_LENGTH = 20;
    // highlight radius
    MOUSE_RADIUS = 200;
  
    circ = 2 * Math.PI;
    nodes = [];
  
    canvas = document.querySelector('canvas');
    resizeWindow();
    mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };
    ctx = canvas.getContext('2d');
    if (!ctx) {
      alert("Ooops! Your browser does not support canvas :'(");
    }
  
    function Node(x, y) {
      this.anchorX = x;
      this.anchorY = y;
      this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
      this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
      this.vx = Math.random() * 2 - 1;
      this.vy = Math.random() * 2 - 1;
      this.energy = Math.random() * 100;
      this.radius = Math.random();
      this.siblings = [];
      this.brightness = 0;
    }
  
    Node.prototype.drawNode = function() {
      var color = "rgba(255, 0, 0, " + this.brightness + ")";
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / SIBLINGS_LIMIT, 0, circ);
      ctx.fillStyle = color;
      ctx.fill();
    };
  
    Node.prototype.drawConnections = function() {
      for (var i = 0; i < this.siblings.length; i++) {
        var color = "rgba(255, 0, 0, " + this.brightness + ")";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
        ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
        ctx.strokeStyle = color;
        ctx.stroke();
      }
    };
  
    Node.prototype.moveNode = function() {
      this.energy -= 2;
      if (this.energy < 1) {
        this.energy = Math.random() * 100;
        if (this.x - this.anchorX < -ANCHOR_LENGTH) {
          this.vx = Math.random() * 2;
        } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
          this.vx = Math.random() * -2;
        } else {
          this.vx = Math.random() * 4 - 2;
        }
        if (this.y - this.anchorY < -ANCHOR_LENGTH) {
          this.vy = Math.random() * 2;
        } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
          this.vy = Math.random() * -2;
        } else {
          this.vy = Math.random() * 4 - 2;
        }
      }
      this.x += this.vx * this.energy / 100;
      this.y += this.vy * this.energy / 100;
    };
  
    function initNodes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes = [];
      for (var i = DENSITY; i < canvas.width; i += DENSITY) {
        for (var j = DENSITY; j < canvas.height; j += DENSITY) {
          nodes.push(new Node(i, j));
          NODES_QTY++;
        }
      }
    }
  
    function calcDistance(node1, node2) {
      return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
    }
  
    function findSiblings() {
      var node1, node2, distance;
      for (var i = 0; i < NODES_QTY; i++) {
        node1 = nodes[i];
        node1.siblings = [];
        for (var j = 0; j < NODES_QTY; j++) {
          node2 = nodes[j];
          if (node1 !== node2) {
            distance = calcDistance(node1, node2);
            if (distance < SENSITIVITY) {
              if (node1.siblings.length < SIBLINGS_LIMIT) {
                node1.siblings.push(node2);
              } else {
                var node_sibling_distance = 0;
                var max_distance = 0;
                var s;
                for (var k = 0; k < SIBLINGS_LIMIT; k++) {
                  node_sibling_distance = calcDistance(node1, node1.siblings[k]);
                  if (node_sibling_distance > max_distance) {
                    max_distance = node_sibling_distance;
                    s = k;
                  }
                }
                if (distance < max_distance) {
                  node1.siblings.splice(s, 1);
                  node1.siblings.push(node2);
                }
              }
            }
          }
        }
      }
    }
  
    // canvas
    function redrawScene() {
      resizeWindow();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      findSiblings();
      var i, node, distance;
      for (i = 0; i < NODES_QTY; i++) {
        node = nodes[i];
        distance = calcDistance({
          x: mouse.x,
          y: mouse.y
        }, node);
        if (distance < MOUSE_RADIUS) {
          node.brightness = 1 - distance / MOUSE_RADIUS;
        } else {
          node.brightness = 0;
        }
      }
      for (i = 0; i < NODES_QTY; i++) {
        node = nodes[i];
        if (node.brightness) {
          node.drawNode();
          node.drawConnections();
        }
        node.moveNode();
      }
      requestAnimationFrame(redrawScene);
    }
  
    function initHandlers() {
      document.addEventListener('resize', resizeWindow, false);
      canvas.addEventListener('mousemove', mousemoveHandler, false);
    }
  
    function resizeWindow() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    function mousemoveHandler(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
  
    initHandlers();
    initNodes();
    redrawScene();
  
  })();

});
