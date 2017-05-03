$(document).ready(function(){
	var listServer = {
		'RU' : 'Russia',
		'TR1' : 'TR1',
		'PBE1' : 'PBE1',
		'BR1' : 'Brazil',
		'KR' : 'Korea',
		'JP1' : 'Japan',
		'NA1' : 'North America',
		'EUN1' : 'North Europe',
		'EUW1' : 'West Europe',
		'OC1' : 'Oceania',
		'LA1' : 'LA1',
		'LA2' : 'LA2'
	}

	$.each(listServer, function( key, value ) {
		$('#container').append('<div class="form-group">'+
									'<input type="checkbox" name="fancy-checkbox-success" id="fancy-checkbox-success" autocomplete="off" />' +
									'<div class="btn-group">' +
										'<label for="fancy-checkbox-success" class="btn btn-success">' +
											'<i class="fa fa-check"></i>' +
										'</label>'+
										'<label for="fancy-checkbox-success" class="btn btn-default active">'+ value +'</label>' +
									'</div>' +
								'</div>');
	});
});
