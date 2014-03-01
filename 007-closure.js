function closure_101(){
	function incrementer(){
		var i = 0;
		function f(){
			while(i < 10){
				console.log(i);
				i++;
			}
		}
		return f;
	}
	var zero_a_nove = incrementer();
	console.log('letsgo...');
	zero_a_nove();
	console.log('letsgo again...');
	zero_a_nove();
}

function cc(){
	function Conta(nome){
		var saldo = 0;
		var extrato = [];
		var conta = {
			'depositar': function(valor){
				saldo += valor;
				extrato.push('+'+valor);
			},
			'sacar': function(valor){
				saldo -= valor;
				extrato.push('-'+valor);
			},
			'transferir': function(valor, conta2){
				conta.sacar(valor);
				conta2.depositar(valor);
			},
			'print_all':function(){
				console.log('----------'+nome+'-----------')
				console.log('Balance: '+saldo);
				console.log('History:');
				for (i in extrato){
					console.log('\t'+extrato[i]);
				}
			}
		}
		return conta;
	}

	var conta1 = Conta('John');
	var conta2 = Conta('Mary');

	conta1.depositar(50);
	conta2.depositar(100);
	conta1.transferir(25, conta2);
	conta1.print_all();
	conta2.print_all();
}

//Another example
//An error logger that only sends the same error once:

window.onerror = function(){

	function fake_ajax(msg, url, lineNumber){
		console.log('Sending error to server: '+url+':'+lineNumber+' - '+msg);
	}

	var ja_loguei = {};
	return function(msg, url, lineNumber){
		console.log('got the error');
		if(!ja_loguei[msg]){
			fake_ajax(msg, url, lineNumber);
			ja_loguei[msg] = true;
		}
	}
}();

function breakme(){
	var x = undefined;
	x.do_somenthing();
}
