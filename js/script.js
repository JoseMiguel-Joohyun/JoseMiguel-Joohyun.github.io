'use strict';

$(document).ready(function () {
	// 01. BROWSER AGENT FUNCTION
	//==================================================================================

	// 01.1 Check Chrome (Mobile / Tablet)
	//----------------------------------------------------------------------------------
	var isChromeMobile = function isChromeMobile() {
		if (device.tablet() || device.mobile()) {
			if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0) {
				return 1;
			}
		}
	}

	// 01.2 Check IOS
	//----------------------------------------------------------------------------------
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0) {
			return 1;
		}
	}

	// 01.3 Check FIREFOX
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
			return 1;
		}
	}

	// 01.4 Check IE (< IE10)
	//----------------------------------------------------------------------------------
	var isIE = function isIE() {
		if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
			return 1;
		}
	}

	// 01.5 Check IE11
	//----------------------------------------------------------------------------------
	var isIE11 = function isIE11() {
		if (!!navigator.userAgent.match(/Trident\/7\./)) {
			return 1;
		}
	}

	// 01.6 Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {
		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
			return 1;
		}
	}

	// 01.7 Check IE10
	//----------------------------------------------------------------------------------
	var isIE10 = function isIE10() {
		if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
			return 1;
		}
	}

	// 01.8 Check IE9
	//----------------------------------------------------------------------------------
	var isIE9 = function isIE9() {
		if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
			return 1;
		}
	}

	// 01.9 Check Safari/Chrome Mac
	//----------------------------------------------------------------------------------
	var isSafari = function isSafari() {
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
			return 1;
		}
	}


	// 02. FULLSCREEN CLASS
	//==================================================================================
	var fullscreen = function () {
		var fheight = $(window).height();
		$('.fullscreen').css("height", fheight);
	}

	//Execute on load
	fullscreen();

	//Execute on window resize
	$(window).resize(function () {
		fullscreen();
	});

	// 03. HIDDEN ALL ANIMATION CLASS
	//==================================================================================
	// Waypoint will animate it later (04.5 Waypoint Animate CSS)
	if (!device.tablet() && !device.mobile() && !isIE9()) {
		$('.animation').css({
			visibility: 'hidden'
		});
	}

	// 04. PACE PRELOADER
	//==================================================================================
	Pace.on('done', function () {
		$('#preloader').hide();
	});

	Pace.on('hide', function () {

		// 04.1 Gallery - Masonry
		//------------------------------------------------------------------------------
		var $gallery = $('#masonry-gallery');

		if (device.tablet() || device.mobile()) {
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: 0,
			});
		}
		else {
			$gallery.masonry({
				columnWidth: ".grid-sizer",
				itemSelector: ".masonry-col",
				gutter: ".gutter-sizer",
				transitionDuration: "1s",
			});
		}

		// 04.5 Waypoint Animate CSS
		//------------------------------------------------------------------------------
		if (!device.tablet() && !device.mobile() && !isIE9()) {
			$('.animation').each(function () {
				var _this = this;
				var animation_waypoint = new Waypoint({
					element: _this,
					handler: function (direction) {
						$(this.element).css({ visibility: 'visible' });
						$(this.element).addClass('animated');
					},
					offset: '90%'
				});
			});

		}

	}); // END of Pace on Hide


	// 05. PRELOADER HEART ANIMATION (IE10 / 11)
	//==================================================================================
	if (isIE10() || isIE11()) {
		$(".heart-animation").css("letter-spacing", "normal");
	}

	function appendMessage(list, item) {
		list.append(`<div><h3 class="title-color">${item.name}</h3><p class="fs-16 text-color">${item.message}</p></div>`)
	}

	$("#message-button").click(function (event) {
		event.preventDefault();
		const [name, message] = [$("#inputName"), $("#inputMessage")]
		const item = {
			name: name.val(),
			message: message.val()
		}
		if (!item.name || !item.message) {
			return;
		}
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: `https://wedding-invitation-7cade-default-rtdb.asia-southeast1.firebasedatabase.app/new_messages/${Date.now()}.json`,
			data: JSON.stringify(item)
		})
			.done((result) => {
				name.val('')
				message.val('')
				const list = $('#messages-list')
				appendMessage(list, item);
			})
			.catch((err) => {
				console.err(err)
				alert('Intentalo otra vez');
			})
		$("#message-button").blur()
	})

	const loadMessages = () => {
		$.ajax({
			method: 'GET',
			url: `https://wedding-invitation-7cade-default-rtdb.asia-southeast1.firebasedatabase.app/new_messages.json?print=pretty`,
		})
			.done((data) => {
				if (!data) return;
				const list = $('#messages-list')
				// list.empty();
				Object.values(data).forEach((item) => {
					appendMessage(list, item);
				})
			})
	}
	const displaySavedMessages = () => {
		$.getJSON('data/messages.json')
			.done(({ messages }) => {
				const list = $('#messages-list')
				list.empty();
				Object.values(messages).forEach((item) => {
					appendMessage(list, item);
				})
				return loadMessages();
			})
	}
	displaySavedMessages()
});
