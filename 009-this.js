var o = {name: 'Objeto'};
o.alertnow = function(){
	alert(this);
}
o.alertlater = function(){
	setTimeout(function(){alert(this)}, 1000);
}


function ajax_faz_de_conta(msg, url, lineNumber){
	console.log('Sending error to server: '+url+':'+lineNumber+' - '+msg);
}

function breakme(){
	var x = undefined;
	x.do_somenthing();
}

function set_onerror1(){
	function ErrorLogger(){
		this.already_logged = {};
	}

	ErrorLogger.prototype.log_error = function(msg, url, lineNumber){
		console.log('got the error');
		if(!this.already_logged[msg]){
			ajax_faz_de_conta(msg, url, lineNumber);
			this.already_logged[msg] = true;
		}
	}

	var logger = new ErrorLogger()
	window.onerror = logger.log_error;
}

function set_onerror2(){
	function ErrorLogger(){
		this.already_logged = {};
	}

	ErrorLogger.prototype.log_error_generator = function(){
		var _this = this;
		var log_error = function(msg, url, lineNumber){
			console.log('got the error');
			if(!_this.already_logged[msg]){
				ajax_faz_de_conta(msg, url, lineNumber);
				_this.already_logged[msg] = true;
			}
		}
		return log_error;
	}

	var logger = new ErrorLogger()
	window.onerror = logger.log_error_generator();
}