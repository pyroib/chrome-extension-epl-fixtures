console.log("content");


chrome.runtime.onMessage.addListener(gotMessage);

	
function gotMessage(messsage, sender, sendRequest){

	$('time').each(function(i){
		$(this).empty();
	   
	});

	$('.fixtures ul li').each(function(i){
	
		var season = '558A3880-C51A-4280-9D10-C0434A0A02AD'; // 2019/20

		var comp = '149F11D1-9254-423A-AB16-28E6A3842EEC';

		var teamhash = {
            'Arsenal':'356a192b7913b04c54574d18c28d46e6395428ab',
            'Aston Villa':'da4b9237bacccdf19c0760cab7aec4a8359010b0',
            'Barnsley':'7d7116e23efef7292cad5e6f033d9a962708228c',
            'Birmingham City':'77de68daecd823babbb58edb1c8e14d7106e83bb',
            'Blackburn Rovers':'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4',
            'Blackpool':'c1dfd96eea8cc2b62785275bca38ac261256e278',
            'Bolton Wanderers':'902ba3cda1883801594b6e1b452790cc53948fda',
            'Bournemouth':'c097638f92de80ba8d6c696b26e6e601a5f61eb7',
            'Bradford City':'76546f9a641ede2beab506b96df1688d889e629a',
            'Brighton & Hove Albion':'1352246e33277e9d3c9090a434fa72cfa6536ae2',
            'Burnley':'d321d6f7ccf98b51540ec9d933f20898af3bd71e',
            'Cardiff City':'b888b29826bb53dc531437e723738383d8339b56',
            'Charlton Athletic':'b74f5ee9461495ba5ca4c72a7108a23904c27a05',
            'Chelsea':'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f',
            'Coventry City':'6c1e671f9af5b46d9c1a52067bdf0e53685674f7',
            'Crystal Palace':'511a418e72591eb7e33f703f04c3fa16df6c90bd',
            'Derby County':'d54ad009d179ae346683cfc3603979bc99339ef7',
            'Everton':'0ade7c2cf97f75d009975f4d720d1fa6c19f4897',
            'Fulham':'17ba0791499db908433b80f37c5fbc89b870084b',
            'Huddersfield Town':'3c26dffc8a2e8804dfe2c8a1195cfaa5ef6d0014',
            'Hull City':'eb4ac3033e8ab3591e0fcefa8c26ce3fd36d5a0f',
            'Ipswich Town':'b4c96d80854dd27e76d8cc9e21960eebda52e962',
            'Leeds United':'a17554a0d2b15a664c0e73900184544f19e70227',
            'Leicester City':'b7103ca278a75cad8f7d065acda0c2e80da0b7dc',
            'Liverpool':'b1d5781111d84f7b3fe45a0852e59758cd7a87e5',
            'Manchester City':'c66c65175fecc3103b3b587be9b5b230889c8628',
            'Manchester United':'bd307a3ec329e10a2cff8fb87480823da114f8f4',
            'Middlesbrough':'2a459380709e2fe4ac2dae5733c73225ff6cfee1',
            'Newcastle United':'fa35e192121eabf3dabf9f5ea6abdbcbc107ac3b',
            'Norwich City':'59129aacfb6cebbe2c52f30ef3424209f7252e82',
            'Nottingham Forest':'4d89d294cd4ca9f2ca57dc24a53ffb3ef5303122',
            'Oldham Athletic':'5a5b0f9b7d3f8fc84c3cef8fd8efaaa6c70d75ab',
            'Portsmouth':'d02560dd9d7db4467627745bd6701e809ffca6e3',
            'Queens Park Rangers':'667be543b02294b7624119adc3a725473df39885',
            'Reading':'450ddec8dd206c2e2ab1aeeaa90e85e51753b8b7',
            'Sheffield United':'9109c85a45b703f87f1413a405549a2cea9ab556',
            'Sheffield Wednesday':'54ceb91256e8190e474aa752a6e0650a2df5ba37',
            'Southampton':'c5b76da3e608d34edb07244cd9b875ee86906328',
            'Stoke City':'be461a0cd1fda052a69c3fd94f8cf5f6f86afa34',
            'Sunderland':'1574bddb75c78a6fd2251d61e2993b5146201319',
            'Swansea City':'1f1362ea41d1bc65be321c0a378a20159f9a26d0',
            'Swindon Town':'35e995c107a71caeb833bb3b79f9f54781b33fa1',
            'Tottenham Hotspur':'80e28a51cbc26fa4bd34938c5e593b36146f5e0c',
            'Watford':'a72b20062ec2c47ab2ceb97ac1bee818f8b6c6cb',
            'West Bromwich Albion':'0716d9708d321ffb6a00818614779e779925365c',
            'West Ham United':'9e6a55b6b4563e652a23be9d623ca5055c356940',
            'Wigan Athletic':'b3f0c7f6bb763af1be91d9e74eabfeb199dc1f1f',
            'Wimbledon':'8effee409c625e1a2d8f5033631840e6ce1dcb64',
            'Wolverhampton Wanderers':'91032ad7bbcb6cf72875e8e8207dcfba80173f7c',



            'Sheffield Utd':'9109c85a45b703f87f1413a405549a2cea9ab556',
            'Man City':'c66c65175fecc3103b3b587be9b5b230889c8628',
            'Man Utd':'bd307a3ec329e10a2cff8fb87480823da114f8f4',
            'Leicester':'b7103ca278a75cad8f7d065acda0c2e80da0b7dc',
            'Newcastle':'fa35e192121eabf3dabf9f5ea6abdbcbc107ac3b',
            'West Ham':'9e6a55b6b4563e652a23be9d623ca5055c356940',
            'Wolves':'91032ad7bbcb6cf72875e8e8207dcfba80173f7c',
            'Spurs':'80e28a51cbc26fa4bd34938c5e593b36146f5e0c',
            'Brighton':'1352246e33277e9d3c9090a434fa72cfa6536ae2',
            'Norwich':'59129aacfb6cebbe2c52f30ef3424209f7252e82'
		};

        var matchid = $(this).attr('data-comp-match-item');
        var x = $(this).attr('data-home');
        var y = $(this).attr('data-away');
		var z = $(this).attr('data-comp-match-item-ko');
		
		var m = $(this).attr('data-venue');

		
		$(this).empty();
	   
	   $(this).append('UPDATE fixtures SET ');
	   $(this).append('`date`=\''+(z/1000)+'\', ');
	   $(this).append('`time`=\''+(z/1000)+'\', ');
	   $(this).append('`venue`=\''+m.replace(/\'/g,'\\\'')+'\', ');
	   $(this).append('`rss_unique`=\''+matchid+'\' ');
	   $(this).append(' WHERE ');
        $(this).append('`season`=\''+season+'\' ');
	   $(this).append(' AND `hometeam`=\''+teamhash[x]+'\' ');
	   $(this).append(' AND `awayteam`=\''+teamhash[y]+'\';');

	});

}

