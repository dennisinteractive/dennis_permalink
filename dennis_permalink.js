(function ($) {

Drupal.behaviors.dennisPermalinkFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.dennis-permalink-form', context).drupalSetSummary(function (context) {
      var permalink = $('.form-item-dennis-permalink-permalink input').val();

      if (permalink) {
        return Drupal.t(permalink);
      }
      else {
        return Drupal.t('Default');
      }
    });
  }
};

})(jQuery);
