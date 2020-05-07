// https://3dtransforms.desandro.com/card-flip
$(document).on("click",".recipe-card", function () {
    $(this)[0].classList.toggle('is-flipped');
});


$(document).on("click",".keyword-toolbar", function () {
    alert("Coming Soon!");
});


$(document).on("click","#load-more-container", function () {
    let hiddenCounts = $('.recipe-card:hidden').length;
    let maxCounts = hiddenCounts > 3 ? 3 : hiddenCounts;
    for (let i = 0; i < maxCounts; i++) {
        $($('.recipe-card:hidden')[0]).parent().show();
    }

    if (hiddenCounts-maxCounts === 0) {
        $("#load-more-container").hide();
    }
});



function hideUnnecessaryRecipes() {
        let visibleCards = $('.recipe-card:visible');
        let recipeCount = visibleCards.length;
        if (recipeCount > 3) {
            for (let i = 3; i < recipeCount; i++) {
                $(visibleCards[i]).parent().hide();
            }
        }
}