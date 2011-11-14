/**
 *	fires when the dom is ready
 *
 */
jQuery(document).ready(function(){	
	cpac_sortable();
	cpac_checked();
	cpac_open_box();
	//cpac_add_custom_column();
});

/**
 *	sortable
 *
 */
function cpac_sortable() 
{
	var fixHelper = function(e, ui) {
		ui.children().each(function() {
			jQuery(this).width(jQuery(this).width());
		});
		return ui;
	};
	
	jQuery('ul.cpac-option-list').sortable({
		handle: 		'div.cpac-sort-handle',
		placeholder: 	'cpac-placeholder',
		forcePlaceholderSize: true,
		helper: 		fixHelper
	});
}

/**
 *	checked
 *
 */
function cpac_checked() 
{
	jQuery('.cpac-option-list li input').click( function(){
		if( jQuery(this).is(':checked') ) {
			jQuery(this).closest('li').addClass('active');
		} 
		else {
			jQuery(this).closest('li').removeClass('active');
		}
	});
}

/**
 *	add columns through ajax
 *
 */
function cpac_open_box()
{
	jQuery('.cpac-option-list .cpac-action').click(function(e){
		e.preventDefault();
		jQuery(this).closest('li').find('.cpac-type-inside').slideToggle(300);
		
	});
} 

/**
 *	add columns through ajax
 *
 */
/* function cpac_add_custom_column() 
{
	jQuery('.cpac-add-column a').click(function(e){
		
		e.preventDefault();		
		
		var a = jQuery(this);
		
		var column_type = a.attr('class').replace('cpac-add-column-', '');
		var post_type 	= a.parents('tr').find('.cpac_post_type').text().trim();
		var label 		= a.attr('title');
		var list 		= a.parents('tr').find('.cpac-option-list');
		
		console.log(column_type);
		console.log(post_type);
		console.log(label);
		
		jQuery.ajax({
			url 	 : ajaxurl,
			type 	 : 'POST',
			dataType : 'json',
			data  	 : {
				action  	: 'cpac_add_custom_column',
				column_type	: column_type,
				post_type	: post_type,
				label		: label
			},
			success: function(data) {
				jQuery(list).append(data);
				a.hide();
			}
		});
	});
}	 */	