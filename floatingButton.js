(function ($) {
    function isElementInView($element, offset = 0) {
        var elementHeight = $element.outerHeight(); 
        var scrollPos = $(window).scrollTop();

        return scrollPos < elementHeight - offset;
    }

    function initFloatingButton(options) {
        var $floatingButton = $(options.buttonSelector);
        var $triggerElement = $(options.triggerElementSelector);
        var offset = options.offset || 300;
        var activeClass = options.activeClass || 'active';

        function toggleFloatingButton() {
            if (isElementInView($triggerElement, offset)) {
                $floatingButton.removeClass(activeClass);
            } else {
                $floatingButton.addClass(activeClass);
            }
        }

        toggleFloatingButton();

        $(window).on('scroll', function () {
            toggleFloatingButton();
        });
    }

    window.FloatingButton = {
        init: initFloatingButton
    };
})(jQuery);
