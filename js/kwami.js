var DELAYTIME = 500,
	PAUSETIME = 500,
	BARTIME = 300,
	PAUSETIME = 300,
	SLIDETIME = 220;

var transformScreen = document.getElementById( "transform-screen" ),
	transformBar = document.getElementById( "transform-bar" ),
	transformLogo = document.getElementById( "transform-logo" ),
	transformText = document.getElementById( "transform-text" ),
	startTime = null,
	progress = 0;

function transformAnimation( ts ) {
	if( !startTime ) startTime = ts;
	progress = ts - startTime;
	if( progress > DELAYTIME ) {
		if( progress < DELAYTIME + BARTIME ) {
			transformBar.setAttribute( "style", "width:" + Math.floor( ( progress - DELAYTIME ) / BARTIME * 100 ).toString() + "%" );
		} else if( progress < DELAYTIME + BARTIME + PAUSETIME ) {
			transformBar.setAttribute( "style", "width:100%" );
		} else if( progress < DELAYTIME + BARTIME + PAUSETIME + SLIDETIME ) {
			transformScreen.setAttribute( "style", "top:-" + Math.floor( ( progress - DELAYTIME - BARTIME - PAUSETIME ) / SLIDETIME * 100 ).toString() + "%" );
		} else {
			transformScreen.setAttribute( "style", "top:-100%" );
		}
	}
	if( progress < DELAYTIME + BARTIME + PAUSETIME + SLIDETIME ) {
		window.requestAnimationFrame( transformAnimation );
	} else {
		document.body.removeChild( transformScreen );
	}
}

window.requestAnimationFrame( transformAnimation );