'use strict';

/******************************************************************
 * Home
 * @type {{init: Home.init, install: Home.install}}
 * @since 1.0
 * @author Alex Cherniy
 * @date 08.09.2022
 */
var Home = {

	/**
	 * Init
	 */
	init: function ()
	{

		this.header  = this.header( this )
		this.products  = this.products( this )


	},

	/**
	 * Header
	 */
	header: function()
	{

		/**
		 * Collapse Seo Text
		 */
		if (document.querySelector('.collapseHeaderTextBtn'))
		{

			const collapseBtn = document.querySelector('.collapseHeaderTextBtn')

			collapseBtn.addEventListener('click', function(e)
			{
				e.preventDefault()

				this.parentElement.classList.toggle('active')

			});

		}

	},

	/**
	 * Header
	 */
	products: function()
	{

		/**
		 * Collapse Text Info
		 */
		if (document.querySelector('.productToggleBtn'))
		{

			document.querySelectorAll('.productToggleBtn').forEach(anchor =>
			{

				anchor.addEventListener('click', function (e)
				{
					e.preventDefault()

					this.parentElement.classList.toggle('active')

				})

			})

		}

	},

}

Home.init()
