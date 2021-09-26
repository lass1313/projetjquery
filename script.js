$(function(){

	var $mainMenuItems = $("#main-menu ul").children("li"), //sélectionne que les li enfants des ul de main-menu
	totalMainMenuItems = $mainMenuItems.length,
	openedIndex = 2, //car l'ouverture se fait sur Jessica Alba, index no 2
		
	init = function(){
	bindEvents();
		
		if(validIndex(openedIndex)) //si openedIndex = 18, ce n'est pas valide, pas possible
		{
			animateItem($mainMenuItems.eq(openedIndex), true, 700);
		}
		
	},
		
	bindEvents = function(){
		
		$mainMenuItems.children(".images").click(function(){
		var newIndex = $(this).parent().index(); //index va retourner l'index (0,1,2,3 ou 4) cad renvoyer le numéro du parent sur lequel j'ai cliqué.
		checkAndAnimateItem(newIndex);
			
			
		});
		
		$(".button").hover(
			function(){
				$(this).addClass("hovered")
		},
			function (){
				$(this).removeClass("hovered")
			}	  
		);
		
		$(".button").click(function(){
			var newIndex = $(this).index();
			checkAndAnimateItem(newIndex);	
		});
		
		
	},
		
	validIndex = function(indexToCheck){
		
		return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems); //permet de savoir si notre index est valide
	},
	
	animateItem = function($item, toOpen, speed){
		
		var $colorImage = $item.find(".color"),
		itemParam = toOpen ? {width : "420px"} : {width : "140px"}, //poser la question si elle est vraie ou fausse, si oui valeur 1, si non valeur 2	
		colorImageParam = toOpen ? {left: "0px"} : {left : "140px"};	
		$colorImage.animate(colorImageParam,speed);
		$item.animate(itemParam,speed);
	},
		
	checkAndAnimateItem = function(indexToCheckAndAnimate){
		if (openedIndex === indexToCheckAndAnimate)
				{
					animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
					openedIndex = -1;
				}
			else
			{
				if (validIndex(indexToCheckAndAnimate))
				{
					animateItem($mainMenuItems.eq(openedIndex), false, 250);	 // uniquement le li sélectionné
					openedIndex = indexToCheckAndAnimate;
					animateItem($mainMenuItems.eq(openedIndex), true, 250);
				}
			}
	};
		
	
	init();
	
	
	
	
});