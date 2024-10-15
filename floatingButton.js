// floatingButton.js

(function ($) {
    // Function to check if a specific element is in the viewport
    function isElementInView($element, offset = 0) {
        var elementHeight = $element.outerHeight(); 
        var scrollPos = $(window).scrollTop();

        return scrollPos < elementHeight - offset;
    }

    // Function to initialize the floating button logic
    function initFloatingButton(options) {
        var $floatingButton = $(options.buttonSelector);
        var $triggerElement = $(options.triggerElementSelector);
        var offset = options.offset || 300;
        var activeClass = options.activeClass || 'active'; // Default class is 'active'

        function toggleFloatingButton() {
            if (isElementInView($triggerElement, offset)) {
                $floatingButton.removeClass(activeClass);
            } else {
                $floatingButton.addClass(activeClass);
            }
        }

        // Run on page load
        toggleFloatingButton();

        // Scroll event listener
        $(window).on('scroll', function () {
            toggleFloatingButton();
        });
    }

    // Expose the library function globally
    window.FloatingButton = {
        init: initFloatingButton
    };
})(jQuery);
