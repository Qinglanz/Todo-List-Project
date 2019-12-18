//check off specific todos by clicking
$("ul").on("click", "li", function(){

	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(x){
   $(this).parent().fadeOut(500, function(x){
   	$(this).remove();
   });
   x.stopPropagation();
});

$("input[type='text']").keypress(function(x){
	if (x.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +  todoText + "</li>")
	};
})
