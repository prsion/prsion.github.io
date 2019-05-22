/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Search


******************************/

$(document).ready(function()
{
	"use strict";

	/*

	1. Vars and Inits

	*/


	var header = $('.header');
	var menu = $('.menu');
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initSearch();


	/*

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/*

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/*

	4. Init Search

	*/

	function initSearch()
	{
		if($('.search_dropdown').length)
		{
			var dds = $('.search_dropdown');
			dds.each(function()
			{
				var dd = $(this);
				if(dd.find('ul > li').length)
				{
					var ddItems = dd.find('ul > li');
					dd.on('click', function()
					{
						dd.toggleClass('active');
					});
					ddItems.each(function()
					{
						var ddItem = $(this);
						ddItem.on('click', function()
						{
							dd.find('span').text(ddItem.text());
						});
					});
				}
			});
		}
	}


});