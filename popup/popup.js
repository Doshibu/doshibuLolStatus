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

$(document).ready(function(){
	$.each(listServer, function( key, value ) {
		var isOnline = ''
		$.getJSON('https://'+ key.toLowerCase() +'.api.riotgames.com/lol/status/v3/shard-data?api_key=64b83c8e-55a1-49b2-99fd-114a7d337435', function(data) {
		    isOnline = data.services[0].status === 'online' ? 'success' : 'danger';
		    $('#container').append('<div class="form-group">'+
									'<input id="checkbox'+ key +'" type="checkbox" name="fancy-checkbox-'+ isOnline +'" id="fancy-checkbox-'+ isOnline +'" autocomplete="off" />' +
									'<div class="btn-group">' +
										'<label id="label1_'+ key +'" for="label2_'+ key +'" class="btn btn-'+ isOnline +'">' +
											'<i class="fa fa-check"></i>' +
										'</label>'+
										'<label id="label2_'+ key +'" class="btn btn-default">'+ value +'</label>' +
									'</div>' +
								'</div>');
		});
	});

	setInterval(function() {
	    checkServer();
	}, 60 * 1000);
});


function checkServer() {
	$.each(listServer, function( key, value ) {
		var isOnline = ''
		$.getJSON('https://'+ key.toLowerCase() +'.api.riotgames.com/lol/status/v3/shard-data?api_key=64b83c8e-55a1-49b2-99fd-114a7d337435', function(data) {
		    isOnline = data.services[0].status === 'online' ? 'success' : 'danger';
		     $('#label1_'+key).attr('class', 'btn btn'+isOnline)
		});
	});
}